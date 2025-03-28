"use client";

import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";

const faqs = [
  {
    category: "IPO FAQs",
    questions: [
      {
        question: "What is an IPO?",
        answer: "An Initial Public Offering (IPO) is when a private company offers its shares to the public for the first time to raise capital by listing on a stock exchange.",
      },
      {
        question: "How can I apply for an IPO?",
        answer: "You can apply for an IPO online via ASBA (through banking apps), broker platforms (e.g., Zerodha, Groww), or offline by submitting a physical application at your bank.",
      },
      {
        question: "What is the minimum investment required in an IPO?",
        answer: "The minimum investment depends on the lot size and price band. Typically, retail investors need to invest ₹10,000 to ₹15,000 per lot.",
      },
      {
        question: "How is IPO allotment decided?",
        answer: "Retail investors are allotted shares via a lottery system if the IPO is oversubscribed. NII & QIB investors receive proportional allotments.",
      },
      {
        question: "How can I check my IPO allotment status?",
        answer: "You can check allotment status through the registrar’s website, stock exchanges (BSE/NSE), broker platforms, or your bank account.",
      },
      {
        question: "When do IPO shares get listed on the stock exchange?",
        answer: "IPO shares typically get listed within 6 to 10 days after allotment on NSE/BSE.",
      },
      {
        question: "Are IPO investments risky?",
        answer: "Yes, IPOs can be risky as there is no prior trading history. Some IPOs yield high returns, while others may list at a lower price (listing loss).",
      },
    ],
  },
  {
    category: "GMP FAQs",
    questions: [
      {
        question: "What is GMP (Grey Market Premium) in IPOs?",
        answer: "GMP is the unofficial price at which IPO shares are traded before official listing, indicating expected listing price.",
      },
      {
        question: "How is GMP calculated?",
        answer: "Expected Listing Price = Issue Price + GMP. If an IPO’s issue price is ₹200 and GMP is ₹50, the expected listing price is ₹250.",
      },
      {
        question: "Is GMP a reliable indicator of IPO listing gains?",
        answer: "No, GMP is an unofficial estimate that fluctuates based on demand, speculation, and market conditions.",
      },
      {
        question: "Where can I check GMP for an IPO?",
        answer: "You can check GMP on financial websites like Chittorgarh, IPO Central, or stock market forums.",
      },
      {
        question: "What is Kostak Price in IPO Grey Market?",
        answer: "Kostak Price is the premium amount a seller gets for selling their entire IPO application before allotment.",
      },
      {
        question: "Why does GMP fluctuate?",
        answer: "GMP changes based on market sentiment, IPO subscription levels, and economic conditions.",
      },
      {
        question: "Can I sell my IPO application in the grey market?",
        answer: "Yes, but grey market transactions are unofficial and unregulated, done purely on a trust basis.",
      },
    ],
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
        <Header/>
    <div className="min-h-screen p-6">
      {/* Back to Home */}

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">📌 FAQs About IPO & GMP</h1>
        <p className="text-gray-600 text-center mb-6">Find answers to commonly asked questions about IPOs and Grey Market Premium (GMP).</p>

        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h2 className="text-xl font-semibold mb-3">{section.category}</h2>
            {section.questions.map((faq, index) => (
              <div key={index} className="mb-2">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-3 bg-gray-100 rounded-lg border flex justify-between items-center hover:bg-gray-200 transition"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                {openIndex === index && (
                  <div className="p-3 border-l-4 border-blue-600 bg-gray-50 rounded-md mt-2 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    <NewsLetter/>
    <Footer/>
    </div>
  );
};

export default FAQPage;
