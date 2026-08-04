"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
};

export default function FAQSection({
  items,
  title = "Întrebări frecvente",
  subtitle = "Răspunsuri la cele mai comune întrebări",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-cream/80">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-green-dark mb-4">
            {title}
          </h2>
          <p className="text-foreground/60 text-lg">{subtitle}</p>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-soft overflow-hidden border-2 border-green-light/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
              >
                <span className="font-display text-lg font-bold text-green-dark pr-4">
                  {item.question}
                </span>
                <span
                  className={`text-2xl text-green-light flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-foreground/70 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
