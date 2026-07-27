import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/data/content";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
/** Stop the map growing without bound if a lot of distinct IPs hit the form. */
const RATE_LIMIT_MAX_KEYS = 5000;

/**
 * In-memory sliding window, keyed by client IP. Note this is per server
 * instance and resets on cold start, so it throttles casual abuse rather than
 * a distributed attack. Move to a shared store (Vercel KV / Upstash) if this
 * ever needs to be a real guarantee.
 */
const requestLog = new Map<string, number[]>();

function getClientIp(request: Request) {
  // Next removed `request.ip` in v15, so read the proxy headers directly.
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function pruneStaleEntries(now: number) {
  for (const [key, timestamps] of requestLog) {
    if (timestamps.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
      requestLog.delete(key);
    }
  }
}

function checkRateLimit(ip: string) {
  const now = Date.now();

  if (requestLog.size > RATE_LIMIT_MAX_KEYS) pruneStaleEntries(now);

  const recent = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    const oldest = recent[0]!;
    const retryAfter = Math.max(
      1,
      Math.ceil((RATE_LIMIT_WINDOW_MS - (now - oldest)) / 1000),
    );
    requestLog.set(ip, recent);
    return { allowed: false as const, retryAfter };
  }

  recent.push(now);
  requestLog.set(ip, recent);
  return { allowed: true as const };
}

export async function POST(request: Request) {
  const limit = checkRateLimit(getClientIp(request));
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many messages sent. Please try again later." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Please fill in every field." }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Something went wrong on our end. Please try again later." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Portfolio Contact Form <onboarding@resend.dev>",
    to: site.email,
    replyTo: email.trim(),
    subject: `Project inquiry from ${name.trim()}`,
    text: `${message.trim()}\n\n— ${name.trim()} (${email.trim()})`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
