"use client";

import { FormEvent, useState } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Kept in step with the caps enforced in app/api/contact/route.ts.
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

type Status = "idle" | "submitting" | "sent" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot. Real users never see this, so a filled value means a bot.
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in every field.");
      setStatus("error");
      return;
    }

    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setError("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          website,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setWebsite("");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-12 flex max-w-xl flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="font-mono text-xs tracking-widest text-muted"
        >
          NAME
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          maxLength={MAX_NAME_LENGTH}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-b border-border bg-transparent py-2 text-lg outline-none transition-colors focus:border-accent"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="font-mono text-xs tracking-widest text-muted"
        >
          EMAIL
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={MAX_EMAIL_LENGTH}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-b border-border bg-transparent py-2 text-lg outline-none transition-colors focus:border-accent"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-mono text-xs tracking-widest text-muted"
        >
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={MAX_MESSAGE_LENGTH}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none border-b border-border bg-transparent py-2 text-lg outline-none transition-colors focus:border-accent"
          placeholder="Tell me about your project..."
        />
      </div>

      {/* Honeypot. Positioned off-screen and hidden from assistive tech, so
          only an automated submitter will ever fill it in. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {status === "error" && <p className="text-sm text-red-500">{error}</p>}
      {status === "sent" && (
        <p className="text-sm text-accent">
          Message sent — I&apos;ll get back to you soon.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-2 inline-flex w-fit items-center gap-3 rounded-full border border-border px-6 py-3 font-mono text-xs tracking-widest transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "submitting" ? "SENDING…" : "SEND MESSAGE"}
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
