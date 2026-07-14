import { useState } from "react";
import { DEFAULT_FAQS } from "../data";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title Block */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
            Got Questions? We Have Answers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Find prompt answers regarding clinic protocols, diagnostics timelines, emergency cases, and telehealth consultations.
          </p>
          <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full" />
        </div>

        {/* FAQs Accordion Container */}
        <div className="space-y-4">
          {DEFAULT_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-sky-200 bg-sky-50/20 shadow-xs"
                    : "border-slate-100 bg-slate-50/30 hover:bg-slate-50/70 hover:border-slate-200"
                }`}
              >
                {/* Header Toggle bar */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-5 py-4.5 sm:px-6 sm:py-5 flex items-center justify-between gap-4 select-none focus:outline-none"
                >
                  <div className="flex gap-3 items-center">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-sky-600" : "text-slate-400"}`} />
                    <span className="font-bold text-slate-800 text-sm sm:text-base tracking-tight leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-sky-600" : ""
                    }`}
                  />
                </button>

                {/* Animated Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 border-t border-slate-100/50 pt-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 bg-gradient-to-r from-sky-50/50 to-teal-50/50 rounded-2xl p-6 text-center border border-slate-100/60">
          <p className="text-xs sm:text-sm text-slate-700">
            Have a different clinical or scheduling inquiry?
          </p>
          <a
            href="#contact"
            className="mt-2 text-sky-600 font-bold text-xs sm:text-sm hover:underline inline-flex items-center gap-1"
          >
            Ask our medical desk directly on WhatsApp or Call
          </a>
        </div>

      </div>
    </section>
  );
}
