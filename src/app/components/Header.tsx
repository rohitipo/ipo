'use client';

import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  // Close dropdown if user clicks outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile dropdown if user clicks outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
        setMobileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <header className="w-full flex text-[#183B56] font-semibold justify-between lg:justify-start items-center px-10 lg:px-[100px] py-2 h-24">
      {/* Desktop Logo */}
      <div className="hidden text-5xl lg:block">
        <Link href="/">
          <Image src='/images/ipologo.png' alt="Logo" className="h-[80px] w-auto" width={104} height={80} />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-8 ml-10">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <Link href="/articles" className="hover:text-blue-500">Articles</Link>
        <Link href="/aboutUs" className="hover:text-blue-500">About Us</Link>

        {/* Desktop Dropdown */}
        <div className="relative" ref={dropdownRef}>
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
              <Link href="/ipoCalendar" className="block px-4 py-2 hover:bg-gray-100">IPO Calendar</Link>
              <Link href="/faq" className="block px-4 py-2 hover:bg-gray-100">FAQ (IPOs and GMP)</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">News (Coming Soon)</Link>
              <Link href="/buyBack" className="block px-4 py-2 hover:bg-gray-100">Buyback</Link>
              <Link href="/rightIssue" className="block px-4 py-2 hover:bg-gray-100">Right Issue</Link>
            </div>
          )}
        </div>
        <Link href="/policy" className="hover:text-blue-500">Policy</Link>
      </div>

    {/* Mobile Header */}
    
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>
      </div>
      <div className="lg:hidden">
        <Link href={'/'}>
        <Image src='/images/ipologo.png' alt="Logo" className="h-[48px] w-auto" width={63} height={48} /></Link>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center p-6 transition-transform duration-300 ease-in-out">
          <button onClick={() => setIsOpen(false)} className="self-end p-4 text-white">
            <X size={24} />
          </button>
          <nav className="flex flex-col items-center space-y-6 text-lg text-white">
            <Link href="/" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/articles" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Articles</Link>
            <Link href="/aboutUs" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About Us</Link>

            {/* Mobile Dropdown */}
            <div ref={mobileDropdownRef} className="relative">
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="flex items-center gap-1 hover:text-blue-500"
                >
                  IPOs <ChevronDown size={16} />
                </button>
                {mobileDropdownOpen && (
                  <div  className="absolute w-44 bg-white text-black shadow-md rounded-md p-2 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-800">
                    <Link href="/upcomingIpo" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                      Upcoming IPOs
                    </Link>
                    <Link href="/recentIpo" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                      Recently Closed IPOs
                    </Link>
                    <Link href="/allotmentStat" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                      Check Allotment
                    </Link>
                    <Link href="/ipoCalendar" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                      IPO Calendar
                    </Link>
                    <Link href="/faq" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                      FAQ (IPOs and GMP)
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      News (Coming Soon)
                    </Link>
                    <Link href="/buyBack" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                      Buyback
                    </Link>
                    <Link href="/rightIssue" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                      Right Issue
                    </Link>
                  </div>
                )}
              </div>


            <Link href="/policy" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Policy</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;