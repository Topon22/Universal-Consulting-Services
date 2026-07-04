"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Phone,
  Mail,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

type ChatMsg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "How can I study in the USA affordably?",
  "What is CPT and OPT?",
  "Can you help with F1 visa?",
  "How do scholarships work?",
];

const GREETING =
  "Hi! I'm the UCSG Assistant 👋\n\nAsk me anything about studying in the USA — affordable colleges, CPT/OPT, scholarships, visas, transfers, and more. How can I help you today?";

/**
 * Floating AI chat widget powered by the free z-ai LLM API
 * (POST /api/chat). Positioned bottom-LEFT so it doesn't clash with the
 * contact dock (bottom-right).
 */
export function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMsg[]>([
    { role: "assistant", content: GREETING },
  ]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [unread, setUnread] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const isMobile = useIsMobile();

  /* Auto-scroll to bottom on new message */
  React.useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [messages, loading]);

  /* Focus input when opening */
  React.useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [open]);

  /* Pulse the launcher once after a few seconds to invite interaction */
  React.useEffect(() => {
    const t = setTimeout(() => {
      if (!open) setUnread(true);
    }, 6000);
    return () => clearTimeout(t);
  }, [open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const next: ChatMsg[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // send only user/assistant turns (excluding the visual greeting)
          messages: next
            .filter((m) => !(m.role === "assistant" && m.content === GREETING))
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();
      const reply: string =
        data.reply ||
        data.error ||
        "Sorry, I couldn't respond right now. Please try again.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting. Please try again, or call us at +1 (302) 893-5594.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  function reset() {
    setMessages([{ role: "assistant", content: GREETING }]);
    setInput("");
  }

  return (
    <>
      {/* ---------- Launcher button ---------- */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="launcher"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => {
              setOpen(true);
              setUnread(false);
            }}
            aria-label="Open UCSG Assistant chat"
            className={cn(
              "fixed bottom-5 left-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-premium transition-transform hover:scale-105 lg:bottom-7 lg:left-7",
              unread && "animate-floaty"
            )}
          >
            <MessageCircle className="h-6 w-6" />
            {unread && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-accent" />
              </span>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* ---------- Chat panel ---------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className={cn(
              "fixed z-[75] flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-premium",
              isMobile
                ? "inset-2 bottom-2"
                : "bottom-5 left-5 top-auto h-[560px] w-[380px] lg:bottom-7 lg:left-7"
            )}
            role="dialog"
            aria-label="UCSG Assistant chat"
          >
            {/* Header */}
            <div className="relative flex items-center justify-between gap-3 bg-gradient-to-br from-primary to-primary/80 px-5 py-4 text-primary-foreground">
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 animate-aurora" />
              <div className="relative flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/15 ring-1 ring-primary-foreground/25 backdrop-blur">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="font-serif text-base font-bold">
                    UCSG Assistant
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-primary-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Online · typically replies instantly
                  </div>
                </div>
              </div>
              <div className="relative flex items-center gap-1">
                <button
                  onClick={reset}
                  aria-label="Reset conversation"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-primary-foreground/80 transition-colors hover:bg-primary-foreground/15 hover:text-primary-foreground"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-primary-foreground/80 transition-colors hover:bg-primary-foreground/15 hover:text-primary-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-4 overflow-y-auto bg-background/40 p-4"
              style={{ maxHeight: "100%" }}
            >
              {messages.map((m, i) => (
                <MessageBubble key={i} msg={m} />
              ))}

              {loading && (
                <div className="flex items-end gap-2">
                  <Avatar />
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-border/60 bg-card px-4 py-3">
                    <span className="chat-typing-dot h-2 w-2 rounded-full bg-muted-foreground" />
                    <span
                      className="chat-typing-dot h-2 w-2 rounded-full bg-muted-foreground"
                      style={{ animationDelay: "0.15s" }}
                    />
                    <span
                      className="chat-typing-dot h-2 w-2 rounded-full bg-muted-foreground"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                </div>
              )}

              {/* Quick suggestions (only before first user message) */}
              {messages.length === 1 && !loading && (
                <div className="space-y-2 pt-2">
                  <p className="px-1 text-xs font-medium text-muted-foreground">
                    Try asking:
                  </p>
                  <div className="flex flex-col gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="rounded-xl border border-border/60 bg-card px-3.5 py-2.5 text-left text-sm text-foreground/85 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer quick-contact */}
            <div className="flex items-center gap-2 border-t border-border/60 bg-card px-3 py-2">
              <Link
                href="/?view=contact"
                onClick={() => setOpen(false)}
                className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
              >
                <Mail className="h-3.5 w-3.5" />
                Contact form
              </Link>
              <a
                href="tel:+13028935594"
                className="flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent-foreground transition-colors hover:bg-accent/20"
              >
                <Phone className="h-3.5 w-3.5" />
                +1 (302) 893-5594
              </a>
            </div>

            {/* Input */}
            <div className="flex items-end gap-2 border-t border-border/60 bg-card p-3">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Type your message…"
                disabled={loading}
                className="max-h-28 flex-1 resize-none rounded-2xl border border-border/60 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-all hover:scale-105 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
              >
                {loading ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <RotateCcw className="h-4 w-4" />
                  </motion.span>
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------------- Sub-components ---------------- */

function Avatar() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-sm">
      <Sparkles className="h-4 w-4" />
    </div>
  );
}

function MessageBubble({ msg }: { msg: ChatMsg }) {
  const isUser = msg.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "flex items-end gap-2",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && <Avatar />}
      <div
        className={cn(
          "max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm",
          isUser
            ? "rounded-br-sm bg-primary text-primary-foreground"
            : "rounded-bl-sm border border-border/60 bg-card text-foreground/90"
        )}
      >
        {msg.content}
      </div>
    </motion.div>
  );
}
