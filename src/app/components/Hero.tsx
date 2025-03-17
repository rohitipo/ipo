'use client';

import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

interface IPO {
  _id: string;
  name: string;
}

const Hero: FC = () => {
  const [search, setSearch] = useState('');
  const [ipoData, setIpoData] = useState<IPO[]>([]);
  const [filteredIpos, setFilteredIpos] = useState<IPO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchIpoData = async () => {
      try {
        const response = await fetch("/api/ipo/getAllIpo");
        const data = await response.json();
        if (data.success) {
          setIpoData(data.data);
        }
      } catch (error) {
        console.error("Error fetching IPO data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchIpoData();
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      setFilteredIpos([]);
    } else {
      setFilteredIpos(
        ipoData.filter((ipo) =>
          ipo.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, ipoData]);

  return (
    <div className="relative w-full flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-6 md:py-12 space-y-6 md:space-y-0">
      {/* Text Section */}
      <div className="lg:ml-8 mt-4 text-center items-center">
        <div className="text-3xl lg:text-5xl font-bold text-[#183B56]">
          Stay Ahead with the <br /> Latest IPO Insights!
        </div>
        <div className="text-lg lg:text-xl text-[#183B56] mt-6">
          Track all ongoing IPOs, stay updated with GMPs, <br />
          and never miss an investment opportunity.
        </div>
        <div className="mt-8 relative">
          <div className="flex items-center shadow-lg rounded-md overflow-hidden">
            <Search className='ml-2' color='#959EAD'/>
            <input 
              type="text" 
              placeholder="Search IPO..." 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
              className="w-full px-4 py-2 outline-none" 
            />
            <button 
              className="bg-[#1565D8] text-white px-4 py-2" 
              onClick={() => router.push(``)}
            >
              Search
            </button>
          </div>
          {/* Dropdown for matching IPOs */}
          <div className="absolute w-full bg-white shadow-lg rounded-md mt-1 max-h-60 overflow-y-auto  border-gray-300 z-10">
            {filteredIpos.length > 0 ? (
              filteredIpos.map((ipo) => (
                <div 
                  key={ipo._id} 
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer" 
                  onClick={() => router.push(`/ipo/${ipo._id}`)}
                >
                  {ipo.name}
                </div>
              ))
            ) : (
              search.trim() && (
                <div className="px-4 py-2 text-gray-500">IPO not found</div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <Image 
          src='/images/Hero.jpg'
          alt="Hero" 
          className="w-[800px] h-auto flex justify-center transform transition-transform duration-1000 ease-in-out hover:scale-105"
          width={800} height={533}
        />
      </div>
    </div>
  );
};

export default Hero;