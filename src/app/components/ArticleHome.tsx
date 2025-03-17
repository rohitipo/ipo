'use client';

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ArticleHome = () => {
    return (
        <div className="w-full flex flex-col items-center text-center px-6 py-10">
            {/* Title & Subtitle */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Latest IPO Insights</h1>
            <p className="text-lg md:text-xl text-gray-600 mt-2">
                Stay informed with our latest articles on IPOs, investment strategies, and market trends.
            </p>

            {/* Cards Section */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {/* Card 1 */}
                <Link href={'/articles'}>
                <div className="bg-white shadow-lg rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl">
                <Image src='/images/article-1.jpg'  alt="Market Trends 2025" width={500} height={300} className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">1. What is an IPO?</h3>
                        <p className="text-gray-600 mt-2">Explore the latest IPO market trends and predictions.</p>
                    </div>
                </div>
                </Link>

                {/* Card 2 */}
                <Link href={'/articles'}>
                <div className="bg-white shadow-lg rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl">
                <Image src='/images/article-2.jpg'  alt="Investing Basics" width={500} height={300} className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">2.WHAT IS A GMP OF AN IPO?</h3>
                        <p className="text-gray-600 mt-2">Learn the fundamental strategies for IPO investments.</p>
                    </div>
                </div>
                </Link>

                {/* Card 3 */}
                <Link href={'/articles'}>
                <div className="bg-white shadow-lg rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl">
                <Image src='/images/article-3.jpg'  alt="Top IPOs to Watch" width={500} height={300} className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">3. What is Kostak Rate?</h3>
                        <p className="text-gray-600 mt-2">A list of upcoming IPOs with high growth potential.</p>
                    </div>
                </div>
                </Link>

                {/* Card 4 */}
                <Link href={'/articles'}>
                <div className="bg-white shadow-lg rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl">
                <Image src='/images/article-4.jpg' alt="GMP Analysis" width={500} height={300} className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">4.How to Apply for an IPO?</h3>
                        <p className="text-gray-600 mt-2">Understand how Grey Market Premium affects IPO pricing.</p>
                    </div>
                </div>
                </Link>

                {/* Card 5 */}
                <Link href={'/articles'}>
                <div className="bg-white shadow-lg rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl">
                <Image src='/images/article-5.jpg'  alt="Regulatory Insights" width={500} height={300} className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">5. How to Check IPO Allotment Status?</h3>
                        <p className="text-gray-600 mt-2">Stay updated with the latest SEBI regulations on IPOs.</p>
                    </div>
                </div>
                </Link>

                {/* Card 6 */}
                <Link href={'/articles'}>
                <div className="bg-white shadow-lg rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl">
                    <Image src='/images/article-6.jpg' alt="Success Stories" width={500} height={300} className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">6. Key Tips for Applying for an IPO</h3>
                        <p className="text-gray-600 mt-2">Read about investors who made it big with IPOs.</p>
                    </div>
                </div>
                </Link>
            </div>
            <div className="w-full mt-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 py-10">
                <Button>More Articles</Button>
            </div>
        </div>
    );
};

export default ArticleHome;
