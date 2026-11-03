"use client";

import { SyntheticEvent } from "react";

const FAQS = [
  {
    question: "Do my files go through a server?",
    answer:
      "Direct local network connections and direct peer-to-peer internet connections move files straight between your devices without passing through any intermediate server. When firewalls block a direct internet path, traffic routes through an encrypted relay (TURN server) that forwards encrypted packets without being able to decrypt your files. There is no cloud storage bucket where files are ever saved or uploaded.",
  },
  {
    question: "What information does the connection service handle?",
    answer:
      "Internet pairing uses a signaling server to exchange session IDs, peer IDs, and network address candidates (ICE candidates) so devices can find each other. The relay service handles forwarded encrypted packets and may maintain standard operational logs (such as connection timestamps and IP addresses). No user accounts, file contents, or personal profiles are collected.",
  },
  {
    question: "Does encryption mean the service requires no trust?",
    answer:
      "Encryption ensures that intermediate network operators and relay servers cannot read your file contents. However, internet signaling services still coordinate connection setup. Plenum is fully open source so you can inspect how connections are established or self-host your own infrastructure.",
  },
  {
    question: "What does Require PIN protect?",
    answer:
      "The optional PIN feature adds an extra layer of verification for local network connections, requiring confirmation before accepting incoming transfer requests. It is designed to prevent unintended local pairing on shared networks.",
  },
  {
    question: "How do QR codes, links, and room codes differ?",
    answer:
      "QR codes and Plenum links can embed local network endpoint hints, allowing devices on the same Wi-Fi to attempt a direct local connection immediately. Plain 9-character room codes do not contain local IP addresses and initiate internet signaling negotiation via WebRTC.",
  },
  {
    question: "Are there size limits on transfers?",
    answer:
      "Plenum has no arbitrary cloud upload-size cap because files are never uploaded to a cloud storage service. Transfer capacity depends on available storage on the receiving device, local filesystem limits, and network stability.",
  },
];

export default function PrivacyFaq() {
  const handleToggle = (e: SyntheticEvent<HTMLDetailsElement>) => {
    const current = e.currentTarget;
    if (current.open) {
      const container = current.closest(".faq__list");
      if (container) {
        container.querySelectorAll<HTMLDetailsElement>("details.faq__item").forEach((el) => {
          if (el !== current && el.open) {
            el.open = false;
          }
        });
      }
    }
  };

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="faq__head" data-reveal>
          <h2>Frequently asked questions</h2>
        </div>

        <div className="faq__list" data-reveal>
          {FAQS.map((faq, i) => (
            <details
              className="faq__item"
              key={i}
              name="privacy-faq"
              onToggle={handleToggle}
            >
              <summary className="faq__summary">
                <span className="faq__question">{faq.question}</span>
                <span className="faq__toggle" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="faq__answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
