'use client'
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Loader from "../components/Loader/Loader";

interface IPO {
  id: string;
  name?: string;
  openDate?: string;
  estimatedMonth?: string; // New field for estimated month
  estimatedYear?: string;
  priceBand?: string;
  status?: string;
  offerSize?: string;
  ipoType?: string;
}

const UpcomingIPOs = () => {
  const [search, setSearch] = useState('');

  const [ipoData, setIpoData] = useState<IPO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  // Filter IPOs by status === "Upcoming"
  const upcomingIPOs = ipoData.filter(ipo => ipo.status === "Upcoming");

  // Apply search filter
  const filteredIPOs = upcomingIPOs.filter(ipo => 
    ipo.name?.toLowerCase().includes(search.toLowerCase())
  );
  
  const formatDate = (date?: string) => {
    if (!date || isNaN(new Date(date).getTime())) return "N/A";
    return new Date(date).toLocaleDateString("en-GB"); // DD/MM/YYYY format
  };

  // Filter Mainboard and SME IPOs from upcoming IPOs
  const mainboardIPOs = filteredIPOs.filter(ipo => ipo.ipoType === "Mainboard");
  const smeIPOs = filteredIPOs.filter(ipo => ipo.ipoType === "NSE SME" || ipo.ipoType === "BSE SME" || ipo.ipoType === "SME" || ipo.ipoType === "NSE & BSE");

  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
        Discover the Next Big Opportunity: Search Upcoming IPOs!
      </h1>

      {/* Search Bar */}
      <div className="flex items-center justify-center">
        <div className="mt-2 flex w-[300px] items-center shadow-lg rounded-md overflow-hidden border-blue-500 border-2">
          <Search className='ml-2' color='#959EAD' />
          <input 
            type="text" 
            placeholder="Search IPO..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            className="w-full px-4 py-2 outline-none" 
          />
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-[300px]">
          <Loader /> {/* Show loader while fetching data */}
        </div>
      ) : (
        <>

      {/* Upcoming IPOs */}
      <div className="p-6 mt-10 bg-white">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">UPCOMING IPOs</h2>
        <Table className="text-gray-700 font-medium lg:text-xl">
          <TableHeader>
            <TableRow className="bg-gray-200 text-gray-700 font-semibold p-3 rounded-t-lg">
            <TableHead className="font-semibold text-gray-700">IPO</TableHead>
              <TableHead className="font-semibold text-gray-700">Open Date</TableHead>
              <TableHead className="font-semibold text-gray-700">Price Band</TableHead>
              <TableHead className="font-semibold text-gray-700">IPO Type</TableHead>
              <TableHead className="font-semibold text-gray-700">IPO Size</TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
          {filteredIPOs.length > 0 ? (
              filteredIPOs.map((ipo) => (
                <TableRow key={ipo.id}>
                  <TableCell>
                    <Link href={`/ipo/${ipo.id}`} className="underline font-medium">{ipo.name}</Link>
                  </TableCell>
                  <TableCell>{ipo.estimatedMonth && ipo.estimatedYear 
                                                        ? `${ipo.estimatedMonth} ${ipo.estimatedYear}` 
                                                        : formatDate(ipo.openDate)}</TableCell>
                  <TableCell>{ipo.priceBand}</TableCell>
                  <TableCell>{ipo.ipoType}</TableCell>
                  <TableCell>{ipo.offerSize}</TableCell>
                </TableRow>
              ))
            ) : (
              <div className="p-3 text-center text-gray-500">No IPOs found.</div>
            )}
          </TableBody>
          </Table>
      </div>

      {/* Upcoming Mainboard IPOs */}
      <div className="p-6 mt-10 bg-white ">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">UPCOMING MAINBOARD IPOs</h2>
        <Table className="text-gray-700 font-medium lg:text-xl">
          <TableHeader>
            <TableRow className="bg-gray-200 text-gray-700 font-semibold p-3 rounded-t-lg">
            <TableHead className="font-semibold text-gray-700">IPO</TableHead>
            <TableHead className="font-semibold text-gray-700">Open Date</TableHead>
            <TableHead className="font-semibold text-gray-700">Price Band</TableHead>
            <TableHead className="font-semibold text-gray-700">Status</TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
            {mainboardIPOs.length > 0 ? (
              mainboardIPOs.map((ipo) => (
                <TableRow key={ipo.id}>
                  <TableCell>
                    <Link href={`/ipo/${ipo.id}`} className="underline font-medium">{ipo.name}</Link>
                  </TableCell>
                  <TableCell>{ipo.openDate}</TableCell>
                  <TableCell>{ipo.priceBand}</TableCell>
                  <TableCell>{ipo.status}</TableCell>
                  </TableRow>
              ))
            ) : (
              <div className="p-3 text-center text-gray-500">No Mainboard IPOs found.</div>
            )}
           </TableBody>
           </Table>

        {/* Upcoming SME IPOs */}
        <h2 className="text-2xl mt-10 font-bold mb-4 text-gray-800">UPCOMING SME IPOs</h2>
        <Table className="text-gray-700 font-medium lg:text-xl">
          <TableHeader>
            <TableRow className="bg-gray-200 text-gray-700 font-semibold p-3 rounded-t-lg">
            <TableHead className="font-semibold text-gray-700">IPO</TableHead>
            <TableHead className="font-semibold text-gray-700">Open Date</TableHead>
            <TableHead className="font-semibold text-gray-700">Price Band</TableHead>
            <TableHead className="font-semibold text-gray-700">Status</TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
            {smeIPOs.length > 0 ? (
              smeIPOs.map((ipo) => (
                <TableRow key={ipo.id}>
                  <TableCell>
                    <Link href={`/ipo/${ipo.id}`} className="underline font-medium">{ipo.name}</Link>
                  </TableCell>
                  <TableCell>{ipo.openDate}</TableCell>
                  <TableCell>{ipo.priceBand}</TableCell>
                  <TableCell>{ipo.status}</TableCell>
                  </TableRow>
              ))
            ) : (
              <div className="p-3 text-center text-gray-500">No SME IPOs found.</div>
            )}
          </TableBody>
          </Table>
      </div>
      </>
      )}
      <div className="w-full mt-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 py-10">
        <Link href={`/recentIpo`}><Button>Recently Closed IPOs</Button></Link>
        <Link href={`/upcomingIpo`}><Button>Ongoing IPOs</Button></Link>
      </div>

      <Footer />
    </div>
  );
};

export default UpcomingIPOs;
