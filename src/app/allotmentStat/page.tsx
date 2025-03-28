"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";

const officialWebsites = [
  { name: "BSE", url: "https://www.bseindia.com/investors/appli_check.aspx" },
  { name: "NSE", url: "https://www.nseindia.com/invest/check-trades-bids-verify-ipo-bids" },
  { name: "KFIN TECH", url: "https://ris.kfintech.com/ipostatus/" },
];

const steps = [
  {
    title: "Visit the Registrar’s Website",
    details: [
      "IPO allotment is usually managed by a registrar (e.g., Link Intime, KFin Technologies in India).",
      "Visit the registrar’s official website (e.g., https://www.linkintime.co.in or https://ris.kfintech.com).",
    ],
  },
  {
    title: "Select the IPO",
    details: ["On the registrar’s IPO status page, select the IPO for which you applied from the dropdown list."],
  },
  {
    title: "Enter Required Details",
    details: [
      "Enter your PAN (Permanent Account Number).",
      "Enter your Application Number / DP Client ID / Bank Account Number (as applicable).",
      "Solve the CAPTCHA and click on Submit.",
    ],
  },
  {
    title: "Check Stock Exchange Websites",
    details: [
      "Some stock exchanges also provide IPO allotment status.",
      "Visit the respective exchange website:",
      "BSE: https://www.bseindia.com/investors/appli_check.aspx",
      "NSE: https://www.nseindia.com (NSE may not always provide allotment details)",
      "Enter your application details to check the status.",
    ],
  },
  {
    title: "Check Your Bank Account",
    details: [
      "If allotted, the IPO amount will be debited, and shares will be credited to your Demat account.",
      "If not allotted, the blocked amount will be refunded to your bank account.",
    ],
  },
  {
    title: "Check Your Demat Account",
    details: [
      "If you are allotted shares, they will reflect in your Demat account on the listing day.",
      "Log in to your broker’s app (e.g., Zerodha, Upstox, Groww) to verify.",
    ],
  },
];

const allotmentStatuses = [
  { status: "✅ Allotted", description: "Shares are allotted; you will see them in your Demat account on the listing date." },
  { status: "❌ Not Allotted", description: "No shares were allotted, and your money will be refunded." },
  { status: "🟡 Partially Allotted", description: "You received fewer shares than applied." },
  { status: "🔄 Pending", description: "Allotment is under process; check later." },
];

const AllotmentStatus = () => {
  return (
    <div>
    <Header/>
    <div className="min-h-screen p-6">
      {/* Back to Home */}
      

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">📜 IPO Allotment Status</h1>
        <p className="text-gray-600 text-center mb-6">Check your IPO allotment status using the steps below.</p>

        {/* Official Websites */}
        <h2 className="text-xl font-semibold mb-2">📌 Official Websites <span className="font-medium text-lg">(Click on the links below to check allotment)</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {officialWebsites.map((site, index) => (
            <a
              key={index}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border rounded-lg bg-gray-100 hover:bg-gray-200 transition text-center text-blue-700 font-medium"
            >
              {site.name}
            </a>
          ))}
        </div>

        {/* Steps to Check Allotment */}
        <h2 className="text-xl font-semibold mb-2">📍 Steps to Check IPO Allotment</h2>
        <div className="space-y-4 mb-6">
          {steps.map((step, index) => (
            <div key={index} className="p-4 border-l-4 border-blue-600 bg-gray-100 rounded-md">
              <h3 className="text-lg font-semibold text-blue-700">{index + 1}. {step.title}</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="overflow-hidden break-words">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Allotment Status Messages */}
        <h2 className="text-xl font-semibold mb-2">📊 Common Allotment Status Messages</h2>
        <div className="space-y-3">
          {allotmentStatuses.map((item, index) => (
            <div key={index} className="p-3 bg-gray-100 rounded-lg border flex justify-between items-center">
              <span className="font-semibold">{item.status}</span>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    <NewsLetter/>
    <Footer/>
    </div>
  );
};

export default AllotmentStatus;
