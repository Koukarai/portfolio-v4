"use client";

import { FormEvent, useState } from "react";
import { timelineOptions } from "@/data/content";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Kept in step with the caps enforced in app/api/contact/route.ts.
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

type Status = "idle" | "submitting" | "sent" | "error";
/** Which field the current error belongs to, if any. Server errors have none. */
type ErrorField = "name" | "email" | "message" | null;

const ERROR_ID = "contact-form-error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [timeline, setTimeline] = useState("");
  // Honeypot. Real users never see this, so a filled value means a bot.
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  const [errorField, setErrorField] = useState<ErrorField>(null);
  const [status, setStatus] = useState<Status>("idle");

  /** Marks the offending input so screen readers hear which one to fix. */
  function fieldProps(field: Exclude<ErrorField, null>) {
    const invalid = status === "error" && errorField === field;
    return {
      "aria-invalid": invalid || undefined,
      "aria-describedby": invalid ? ERROR_ID : undefined,
    };
  }

  function fail(messageText: string, field: ErrorField = null) {
    setError(messageText);
    setErrorField(field);
    setStatus("error");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      const firstEmpty: ErrorField = !name.trim()
        ? "name"
        : !email.trim()
          ? "email"
          : "message";
      fail("Please fill in every field.", firstEmpty);
      return;
    }

    if (!EMAIL_PATTERN.test(email.trim())) {
      fail("Please enter a valid email address.", "email");
      return;
    }

    setError("");
    setErrorField(null);
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          timeline,
          website,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        fail(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setTimeline("");
      setWebsite("");
    } catch {
      fail("Something went wrong. Please try again.");
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
          {...fieldProps("name")}
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
          {...fieldProps("email")}
          maxLength={MAX_EMAIL_LENGTH}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-b border-border bg-transparent py-2 text-lg outline-none transition-colors focus:border-accent"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="timeline"
          className="font-mono text-xs tracking-widest text-muted"
        >
          TIMELINE <span className="opacity-60">(OPTIONAL)</span>
        </label>
        <select
          id="timeline"
          name="timeline"
          value={timeline}
          onChange={(e) => setTimeline(e.target.value)}
          className="border-b border-border bg-transparent py-2 text-lg outline-none transition-colors focus:border-accent"
        >
          {/* Options carry an explicit background because a transparent select
              renders them unreadable against the dark theme on some browsers. */}
          <option value="" className="bg-background text-foreground">
            No preference
          </option>
          {timelineOptions.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-background text-foreground"
            >
              {option}
            </option>
          ))}
        </select>
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
          {...fieldProps("message")}
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

      {/* Always in the DOM so a screen reader announces the change. An element
          that only appears on submit is easily missed. */}
      <div aria-live="polite" aria-atomic="true" className="min-h-5">
        {status === "error" && (
          <p id={ERROR_ID} className="text-sm text-danger">
            {error}
          </p>
        )}
        {status === "sent" && (
          <p className="text-sm text-accent">
            Message sent. I&apos;ll get back to you soon.
          </p>
        )}
      </div>

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
