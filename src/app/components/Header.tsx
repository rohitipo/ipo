'use client';

import { useState } from "react";
import { Menu,  X,  ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    return (
        <header className="w-full flex text-[#183B56] font-semibold justify-between items-center px-10 lg:px-[180px] py-2 h-24">
             <div className="hidden text-5xl lg:block">
                <Image src='/images/ipologo.png' alt="Logo" className="h-[80px] w-auto" width={104} height={80}></Image>
            </div>
            <div className="hidden lg:flex gap-8 ">
                <Link href="/" className=" hover:text-blue-500">Home</Link>
                <Link href="/articles" className=" hover:text-blue-500">Articles</Link>
                <Link href="/aboutUs" className="hover:text-blue-500">About Us</Link>
                <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-blue-500"
            >
              IPOs <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="absolute z-10 left-0 mt-2 w-40 bg-white shadow-md rounded-md p-2">
                <Link href="/upcomingIpo" className="block px-4 py-2 hover:bg-gray-100">Upcoming IPOs</Link>
                <Link href="/recentIpo" className="block px-4 py-2 hover:bg-gray-100">Recently Closed IPOs</Link>
                <Link href="/allotmentStat" className="block px-4 py-2 hover:bg-gray-100">Check Allotment</Link>
                <Link href="/ipoCalendar" className="block px-4 py-2 hover:bg-gray-100">IPO Calender</Link>
                <Link href="/faq" className="block px-4 py-2 hover:bg-gray-100">FAQ (IPOs and GMP)</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">News(coming soon)</Link>
                <Link href='/buyBack' className="block px-4 py-2 hover:bg-gray-100">More</Link>
              </div>
            )}
          </div>
          <Link href="/policy" className="hover:text-blue-500">Policy</Link>
            </div>


            {/* Mobile Header */}
            <div className="lg:hidden">
            <Image src='/images/ipologo.png' alt="Logo" className="h-[48px] w-auto" width={63} height={48}></Image>
            </div>
            <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
                <Menu size={24} />
            </button>
            </div>
            
            {/* Mobile Sidebar */}
            <div 
                className={`fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button onClick={() => setIsOpen(false)} className="self-end p-4 text-white">
                    <X size={24} />
                </button>
                <nav className="flex flex-col items-center space-y-6 text-lg text-white">
                    <Link href="/" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/articles" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Articles</Link>
                    <Link href="/aboutUs" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About Us</Link>
                    <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-blue-500"
            >
              IPOs <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-md rounded-md p-2">
                 <Link href="/upcomingIpo" className="block px-4 py-2 hover:bg-gray-100">Upcoming IPOs</Link>
                <Link href="/recentIpo" className="block px-4 py-2 hover:bg-gray-100">Recently Closed IPOs</Link>
                <Link href="/allotmentStat" className="block px-4 py-2 hover:bg-gray-100">Check Allotment</Link>
                <Link href="/ipoCalendar" className="block px-4 py-2 hover:bg-gray-100">IPO Calender</Link>
                <Link href="/faq" className="block px-4 py-2 hover:bg-gray-100">FAQ (IPOs and GMP)</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">News(coming soon)</Link>
                <Link href="/buyBack" className="block px-4 py-2 hover:bg-gray-100">More</Link>
              </div>
            )}
                    <Link href="/policy" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Policy</Link>
                </nav>
            </div>

        </header>   
    );
};

export default Header;