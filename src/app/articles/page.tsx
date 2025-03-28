'use client'

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import NewsLetter from "../components/NewsLetter";

const Page = () => {
    const [expandedArticles, setExpandedArticles] = useState<{ [key: number]: boolean }>({});

    const toggleArticle = (id: number) => {
        setExpandedArticles((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const articles = [
        {
            id: 1,
            title: "What is an IPO?",
            category: "Stock Market Basics",
            image: "/images/article-1.jpg",
            content: "An IPO (Initial Public Offering) is the process by which a private company offers its shares to the public...",
            moreContent: (
                <>
                    <p>Once the IPO is completed, the company&apos;s shares become publicly traded...</p>
                    <strong>Key Aspects of an IPO:</strong>
                    <ul className="list-disc pl-5">
                        <li>Going Public : The company transitions from private to public.</li>
                        <li>Raising Capital : IPOs help fund expansion and projects.</li>
                        <li>Shares Trading : Stocks get listed on NSE/BSE.</li>
                        <li>Valuation & Pricing : Determined by investment banks.</li>
                        <li>Regulatory Compliance : Approval from SEBI is required.</li>
                    </ul>
                </>
            ),
        },
        {
            id: 2,
            title: "What is GMP in an IPO?",
            category: "IPO Market Insights",
            image: "/images/article-2.jpg",
            content: "GMP (Grey Market Premium) refers to the premium at which an IPO's shares trade in the grey market before their official listing.",
            moreContent: (
                <>
                    <strong>How Does GMP Work?</strong>
                    <ul className="list-disc pl-5">
                        <li>High GMP suggests strong demand and potential price increase.</li>
                        <li>Low or negative GMP indicates weak demand and possible poor listing.</li>
                    </ul>
                    <strong>Example:</strong>
                    <p>If an IPO is priced at ₹100 per share and the GMP is ₹50, the expected listing price could be ₹150.</p>
                    <strong>Important Considerations:</strong>
                    <ul className="list-disc pl-5">
                        <li>GMP is speculative and not always accurate.</li>
                        <li>Market conditions affect GMP trends.</li>
                    </ul>
                </>
            ),
        },
        {
            id: 3,
            title: "What is Kostak Rate?",
            category: "Grey Market Trading",
            image: "/images/article-3.jpg",
            content: "Kostak Rate is the premium price at which an investor can sell their IPO application in the grey market before share allotment.",
            moreContent: (
                <>
                    <strong>Example:</strong>
                    <p>If you apply for an IPO with one lot (₹50,000 total), and the Kostak Rate is ₹2,500, you can sell your application for ₹2,500 before allotment.</p>
                    <strong>How It Works:</strong>
                    <ul className="list-disc pl-5">
                        <li>Investors sell applications before allotment for fixed profits.</li>
                        <li>Buyers take the risk of whether shares will be allotted or not.</li>
                    </ul>
                </>
            ),
        },
        {
            id: 4,
            title: "How to Apply for an IPO?",
            category: "Investment Guide",
            image: "/images/article-4.jpg",
            content: "Applying for an IPO is easy using your stockbroker’s platform or UPI.",
            moreContent: (
                <>
                    <strong>Steps to Apply:</strong>
                    <ol className="list-decimal pl-5">
                        <li>Log in to your stockbroker’s app or website.</li>
                        <li>Go to the IPO Section.</li>
                        <li>Select the IPO and enter the number of lots.</li>
                        <li>Choose &quot;Cut-Off Price&quot; for retail investors.</li>
                        <li>Enter your UPI ID and submit the application.</li>
                        <li>Approve the UPI payment request.</li>
                        <li>Funds will be blocked until allotment.</li>
                    </ol>
                    <strong>Requirements:</strong>
                    <ul className="list-disc pl-5">
                        <li>✅ Demat Account</li>
                        <li>✅ Trading Account</li>
                        <li>✅ Bank Account (UPI/ASBA for payment)</li>
                        <li>✅ PAN Card</li>
                    </ul>
                </>
            ),
        },
        {
            id: 5,
            title: "How to Check IPO Allotment Status?",
            category: "Investor Tools",
            image: "/images/article-5.jpg",
            content: "You can check IPO allotment status on the registrar’s website.",
            moreContent: (
                <>
                    <strong>Steps:</strong>
                    <ol className="list-decimal pl-5">
                        <li>Visit the IPO registrar’s website (Link Intime, KFintech, NSE/BSE).</li>
                        <li>Select the IPO name.</li>
                        <li>Enter PAN, application number, or Demat details.</li>
                        <li>Click &quot;Submit&quot; to check status.</li>
                    </ol>
                    <strong>Refunds:</strong>
                    <p>If you don&apos;t get an allotment, your blocked funds will be refunded.</p>
                </>
            ),
        },
        {
            id: 6,
            title: "Key Tips for Applying for an IPO",
            category: "Investment Strategies",
            image: "/images/article-6.jpg",
            content: "Use these key strategies to improve your chances of IPO allotment.",
            moreContent: (
                <>
                    <ul className="list-disc pl-5">
                        <li>✅ Apply at Cut-Off Price – Increases allotment chances.</li>
                        <li>✅ Use Multiple Demat Accounts – Family accounts can help.</li>
                        <li>✅ Monitor GMP (Grey Market Premium) – Indicates listing gains.</li>
                        <li>✅ Avoid Fraudulent Calls/Agents – Always apply through official sources.</li>
                        <li>✅ Check IPO Subscription Status – High demand increases listing price potential.</li>
                    </ul>
                </>
            ),
        },
    ];
    

    return (
        <div>
            <Header />
            <div className="p-6 max-w-7xl mx-auto bg-white">
                <h1 className="text-3xl font-bold mb-6 text-center text-black">Latest Articles</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {articles.map((article) => (
                        <div key={article.id} className="relative bg-white text-black border rounded-lg overflow-hidden shadow-lg">
                            <Image src={article.image} alt={article.title} width={600} height={300} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <span className="text-blue-600 uppercase text-sm">{article.category}</span>
                                <h2 className="text-2xl font-bold mt-2">{article.title}</h2>
                                <p className="text-sm mt-2">{article.content}</p>
                                
                                {expandedArticles[article.id] && (
                                    <div className="text-sm mt-2">{article.moreContent}</div>
                                )}

                                <button
                                    onClick={() => toggleArticle(article.id)}
                                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    {expandedArticles[article.id] ? "Read Less" : "Read More"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <NewsLetter/>
            <Footer />
        </div>
    );
};

export default Page;
