"use client";

import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import IpoPerformanceTables from "../components/closedIpoTable";
import Loader from "../components/Loader/Loader";


interface IPO {
  id: string;
  name?: string;
  priceBand?: string;
  openDate?: string;
  listingDate?: string;
  gmpData?: { gmp?: number }[];
  listingPrice?: string;
  gain?: number;
}

const RecentlyClosedIPOs = () => {
  const [search, setSearch] = useState("");
  const [ipoData, setIpoData] = useState<IPO[]>([]);
  const [filteredData, setFilteredData] = useState<IPO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchIpoData = async () => {
      try {
        const response = await fetch("/api/ipo/getAllIpo");
        const data = await response.json();
        if (data.success) {
          const today = new Date().toISOString().split("T")[0];
  
          // Filter IPOs whose listingDate is today or before today
          const filteredIpos = data.data
            .filter((ipo: IPO) => ipo.listingDate && ipo.listingDate <= today)
            .sort((a: IPO, b: IPO) => new Date(b.openDate!).getTime() - new Date(a.openDate!).getTime());
  
          setIpoData(filteredIpos);
          setFilteredData(filteredIpos);
        }
      } catch (error) {
        console.error("Error fetching IPO data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchIpoData();
  }, []);

  // Update filteredData when search input changes
  useEffect(() => {
    if (!search.trim()) {
      setFilteredData(ipoData); // Reset to all IPOs if search is empty
    } else {
      setFilteredData(
        ipoData.filter((ipo) =>
          ipo.name?.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, ipoData]);

  return (
    <div>
      {/* Back to Home */}
      <Header/>
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
        Recently Closed IPOs: Performance & Insights
        </h1>

        {/* Search Bar */}
        <div className="flex items-center justify-center m-4">
          <div className="mt-2 flex w-[300px] items-center shadow-lg rounded-md overflow-hidden border-blue-500 border-2">
            <Search className="ml-2" color="#959EAD" />
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
        <div className=" p-6 mt-10 overflow-x-auto">
          <div className="min-w-full">
            {/* Table Header */}
            <Table className="text-gray-700 font-medium lg:text-xl">
                <TableHeader>
               <TableRow className="bg-gray-200 text-gray-700 font-semibold p-3 rounded-t-lg">
              <TableHead className="font-semibold text-center text-gray-700">IPO</TableHead>
              <TableHead className="font-semibold text-center text-gray-700">IPO PRICE</TableHead>
              <TableHead className="font-semibold text-center text-gray-700">Open Date</TableHead>
              <TableHead className="font-semibold text-center text-gray-700">IPO GMP</TableHead>
              <TableHead className="font-semibold text-center text-gray-700">LISTING PRICE</TableHead>
              <TableHead className="font-semibold text-center text-gray-700">GAIN (%)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {/* Table Data */}
            {filteredData.length > 0 ? (
              filteredData.map((ipo) => (
                <TableRow key={ipo.id}>
                   <TableCell className="text-center">{ipo.name}</TableCell>
                  <TableCell className="text-center">{ipo.priceBand}</TableCell>
                  <TableCell className="text-center">{ipo.openDate}</TableCell>
                  <TableCell className="text-center">{ipo.gmpData?.[ipo.gmpData.length - 1]?.gmp || "N/A"}</TableCell>
                  <TableCell className="text-center">{ipo.listingPrice}</TableCell>
                  {/* Gain Column with Triangle Indicators */}
                  <TableCell className="font-bold flex text-center justify-center items-center gap-1">
                      {ipo?.gain !== undefined ? (
                        <>
                          {ipo.gain}
                          {ipo.gain > 0 ? (
                            <span className="text-green-500 text-center">▲</span>
                          ) : ipo.gain < 0 ? (
                            <span className="text-red-500 text-center">▼</span>
                          ) : (
                            <span className="text-gray-500 text-center">•</span> // Neutral dot for 0 gain
                          )}
                        </>
                      ) : (
                        <span className="text-gray-400 text-center">N/A</span> // Show "N/A" if gain is undefined
                      )}
                    </TableCell>
                </TableRow>
              ))
            ) : (
              <div className="p-3 text-center text-gray-500">
                No IPOs found.
              </div>
            )}
          </TableBody>
          </Table>
          </div>
        </div>
        <div>
        <IpoPerformanceTables searchQuery={search} />
        </div>
        </>
      )}
      <Footer/>
    </div>
  );
};

export default RecentlyClosedIPOs;
