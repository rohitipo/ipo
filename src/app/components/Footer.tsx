'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#0D2436]">
            {/* Desktop Footer */}
            <div className="hidden md:flex pt-28 p-5 justify-between">
                {/* Logo Section */}
                <div className="p-4">
                    <Image 
                        src='/images/ipologofooter.png'
                        alt="Logo" 
                        className="h-[80px] w-auto"
                        width={100} height={28}
                    />
                </div>

                {/* Quick Links */}
                <div className="text-center text-white">
                    <h2 className="text-[#959EAD] text-xl lg:text-2xl">Quick Links</h2>
                    <Link href={'/articles'}><h2 className="text-base lg:text-xl m-4">Ipo Allotment Tips</h2></Link>
                    <Link href={'/recentIpo'}><h2 className="text-base lg:text-xl m-4">Ipo Performance Tracker</h2></Link>
                    <div className="text-center text-white text-xl mb-4">
                    <h2 className="text-[#959EAD] text-xl lg:text-2xl">Social Links</h2>
                    <div className="flex gap-4 justify-center m-2">
                    <Link href={'https://www.instagram.com/ipoanalyser.in?igsh=bTlseW4xYjM0dmpq'}><FaInstagram size={28}/></Link>
                    <Link href={'https://www.facebook.com/share/1CEPieuB9E/'}><FaFacebookF size={28}/></Link>
                    <Link href={'https://x.com/ipoanalyser_in?s=08'}><FaTwitter size={28}/></Link>
                    <Link href={'https://t.me/+pjgIVheOUT42Mzc1'}><FaTelegram size={28}/></Link>
                    </div>
                </div>
                </div>

                {/* All IPOs */}
                <div className="text-center text-white">
                    <h2 className="text-[#959EAD] text-xl lg:text-2xl">All IPOs</h2>
                    <Link href={'/'}><h2 className="text-base lg:text-xl m-4">Ongoing IPOs</h2></Link>
                    <Link href={'/recentIpo'}><h2 className="text-base lg:text-xl m-4">Recently Closed IPOs</h2></Link>
                    <Link href={'/upcomingIpo'}><h2 className="text-base lg:text-xl m-4">Upcoming IPOs</h2></Link>
                    <Link href={'/allotmentStat'}><h2 className="text-base lg:text-xl m-4">Check Allotment</h2></Link>
                    <Link href={'/faq'}><h2 className="text-base lg:text-xl m-4">FAQ (GMP)</h2></Link>
                </div>

                {/* About */}
                <div className="text-center text-white">
                    <h2 className="text-[#959EAD] text-xl lg:text-2xl">About</h2>
                    <Link href={'/aboutUs'}><h2 className="text-base lg:text-xl m-4">Our Story</h2></Link>
                    <Link href={'/policy'}><h2 className="text-base lg:text-xl m-4">Policy</h2></Link>
                    <Link href={'/policy'}><h2 className="text-base lg:text-xl m-4">Terms and Conditions</h2></Link>
                </div>

                {/* Contact Info */}
                <div className="text-center text-white">
                    <h2 className="text-[#959EAD] text-lg lg:text-xl m-2">For Advertisement Contact:</h2>
                    <h2 className="text-base lg:text-xl m-4">Mail: ipoanalyser.in@gmail.com</h2>
                    <h2 className="text-base lg:text-xl m-4">Address: Nashik, Maharashtra, India</h2>
                </div>
            </div>

            {/* Mobile Footer */}
            <div className="md:hidden flex flex-col items-center text-white p-6">
                {/* Social Icons */}
                <div className="flex justify-between p-4">
                    <div className="text-left text-white">
                        <h2 className="text-[#959EAD] text-lg">All IPOs</h2>
                        <Link href={'/'}><h2 className="text-sm m-2">Ongoing IPOs</h2></Link>
                        <Link href={'/recentIpo'}><h2 className="text-sm m-2">Recently Closed IPOs</h2></Link>
                        <Link href={'/upcomingIpo'}><h2 className="text-sm m-2">Upcoming IPOs</h2></Link>
                        <Link href={'/allotmentStat'}><h2 className="text-sm m-2">Check Allotment</h2></Link>
                        <Link href={'/faq'}><h2 className="text-sm m-2">FAQ (GMP)</h2></Link>
                    </div>
                    <div className="text-right text-white">
                        <h2 className="text-[#959EAD] text-lg">About</h2>
                        <Link href={'/aboutUs'}><h2 className="text-sm m-2">Our Story</h2></Link>
                        <Link href={'/policy'}><h2 className="text-sm m-2">Policy</h2></Link>
                        <Link href={'/policy'}><h2 className="text-sm m-2">Terms and Conditions</h2></Link>
                    </div>
                </div>
               
                <div className="text-center text-white text-lg mb-4">
                    <h2 className="text-[#959EAD] text-lg">Quick Links</h2>
                    <Link href={'/articles'}><h2 className="text-sm m-2">Ipo Allotment Tips</h2></Link>
                    <Link href={'/recentIpo'}><h2 className="text-sm m-2">Ipo Performance Tracker</h2></Link>
                </div>

                <div className="text-center text-white text-lg mb-4">
                    <h2 className="text-[#959EAD] text-lg">Social Links</h2>
                    <div className="flex justify-between m-2 gap-2">
                    <Link href={'https://www.instagram.com/ipoanalyser.in?igsh=bTlseW4xYjM0dmpq'}><FaInstagram size={28}/></Link>
                    <Link href={'https://www.facebook.com/share/1CEPieuB9E/'}><FaFacebookF size={28}/></Link>
                    <Link href={'https://x.com/ipoanalyser_in?s=08'}><FaTwitter size={28}/></Link>
                    <Link href={'https://t.me/+pjgIVheOUT42Mzc1'}><FaTelegram size={28}/></Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="text-center mb-4">
                    <h2 className="text-[#959EAD] text-lg">For Advertisement Contact:</h2>
                    <p className="text-sm">Mail: ipoanalyser.in@gmail.com</p>
                    <p className="text-sm">Address: Nashik, Maharashtra, India</p>
                </div>

                {/* Logo */}
                <div className="p-4">
                    <Image 
                        src='/images/ipologofooter.png'
                        alt="Logo" 
                        className="h-[48px] w-auto"
                        width={100} height={48}
                    />
                </div>
            </div>

            {/* Copyright */}
            <div className="text-white text-center text-sm py-2">
                © 2025 ipoanalyser.in, All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
