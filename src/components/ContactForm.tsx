"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/content";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in every field.");
      setSent(false);
      return;
    }

    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Please enter a valid email address.");
      setSent(false);
      return;
    }

    setError("");

    const subject = encodeURIComponent(`Project inquiry from ${name.trim()}`);
    const body = encodeURIComponent(`${message.trim()}\n\n— ${name.trim()} (${email.trim()})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none border-b border-border bg-transparent py-2 text-lg outline-none transition-colors focus:border-accent"
          placeholder="Tell me about your project..."
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
      {sent && !error && (
        <p className="text-sm text-accent">
          Opening your email client to send this along…
        </p>
      )}

      <button
        type="submit"
        className="group mt-2 inline-flex w-fit items-center gap-3 rounded-full border border-border px-6 py-3 font-mono text-xs tracking-widest transition-colors hover:border-accent hover:text-accent"
      >
        SEND MESSAGE
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
