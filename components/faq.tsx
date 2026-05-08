'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "How is ParhoMate different from ChatGPT?",
    answer: "Standard AI models give you generalized, global answers. ParhoMate uses a custom Retrieval-Augmented Generation (RAG) pipeline to read your exact national textbooks. When you ask a question, it only answers using the vocabulary and depth required by your specific board, completely eliminating hallucinations."
  },
  {
    question: "Which educational boards are currently supported?",
    answer: "Currently, ParhoMate is optimized for the Sindh Board, Federal Board, and Aga Khan Board for matriculation (9th/10th) and intermediate (11th/12th) levels. We are actively working on adding support for the Punjab Board."
  },
  {
    question: "How does the Mock Viva feature work?",
    answer: "Instead of typing, you can use your device's microphone to speak your answers. The AI will transcribe your voice, grade your answer against the official textbook definition, and provide immediate feedback on both accuracy and pronunciation—perfect for science practicals."
  },
  {
    question: "Can I upload my own handwritten notes?",
    answer: "Yes. ParhoMate supports multi-modal uploads. You can attach official PDF textbooks, past papers, or snap a photo of your handwritten physics equations for the AI to analyze and explain."
  },
  {
    question: "Is ParhoMate free to use?",
    answer: "We offer a generous free tier supported by non-intrusive, academically relevant advertisements. This ensures that every student in Pakistan can access premium AI tutoring regardless of their financial situation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight mb-4 text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Everything you need to know about the ParhoMate AI Tutor.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border border-white/10 rounded-2xl overflow-hidden transition-colors ${isOpen ? 'bg-zinc-900/50' : 'bg-transparent hover:bg-zinc-900/30'}`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <span className="text-white font-medium pr-8">{item.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-zinc-400" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
