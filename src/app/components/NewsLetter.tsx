'use client'

import React, { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";


const NewsLetter: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubscribe = async () => {
        if (!email.includes("@")) {
            setMessage("Please enter a valid email address.");
            return;
        }

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();
            if (response.ok) {
                toast.success("Subscribed successfully!");
                setEmail("") 
            } else {
                toast.error(data.message);
            }// Clear input after submission
        } catch (error) {
            toast.error("Error subscribing. Please try again.");
        }
    };

    return(
        <div>
            <div>
            <Image src='/images/Wave.png' alt="wave" className="w-full h-auto" width={900} height={400}></Image>
            </div>
            <div className=" bg-[#0D2436] text-white">
                <div className="hidden lg:flex items-center justify-between px-[100px]">
                    <div className=" items-center justify-center  p-5">
                        <h2 className="text-3xl font-bold p-2">Never Miss an IPO Update!</h2>
                        <h3 className="text-xl p-2">Unveiling IPO Opportunities to Help You Invest Confidently,<br /> Get Key Insights on Price Bands, GMP, and Issue Sizes</h3>
                        <div className="flex items-center gap-4 p-2 rounded-lg">
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="px-4 py-2 bg-[#1565D8] text-white rounded-lg hover:bg-blue-600 transition" 
                            onClick={handleSubscribe}>
                                Get Started
                            </button>
                        </div>
                        <div className="p-2 text-[#5A7184]">Join the Community of Smart Investors</div>
                    </div>
                    <div className="relative flex justify-center items-center p-10 pr-24">
                        {/* Background divs */}
                        <div className="absolute w-48 h-48 bg-[#E5EAF4] rounded-lg shadow-lg translate-x-28 mix-blend-soft-light top-6"></div>
                        <div className="absolute w-48 h-48 bg-white rounded-lg shadow-lg -translate-x-28 mix-blend-soft-light bottom-3"></div>

                        {/* Main Card */}
                        <div className="relative bg-white w-80 rounded-lg shadow-xl overflow-hidden">
                            {/* Image Section */}
                            <Image
                            src='/images/Hero.jpg'
                            alt="Social Icons"
                            className="w-full h-40 object-cover"
                            width={320} height={160}
                            />

                            {/* Text Content */}
                            <div className="p-4 text-center">
                            <h2 className="font-bold text-lg text-[#183B56]">The best articles every week</h2>
                            <p className="text-gray-500 text-sm">
                            Stay Ahead with the Latest IPO Insights!
                            </p>
                            </div>
                        </div>
                        </div>

                </div>
                {/*Mobile newsletter*/}
                <div>
                <div className="lg:hidden text-center items-center justify-center  p-5">
                        <h2 className="text-2xl font-bold p-2">Never Miss an IPO Update!</h2>
                        <h3 className="text-lg p-2">Unveiling IPO Opportunities to Help You Invest Confidently,<br /> Get Key Insights on Price Bands, GMP, and Issue Sizes</h3>
                        <div className="flex justify-center items-center gap-4 p-2 rounded-lg">
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="px-4 py-2 bg-[#1565D8] text-white rounded-lg hover:bg-blue-600 transition" onClick={handleSubscribe}>
                                Get Started
                            </button>
                        </div>
                        <div className="p-2 text-[#5A7184]">Join the Community of Smart Investors</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;