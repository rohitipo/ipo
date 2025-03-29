'use client';

import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Loader from "./Loader/Loader";

interface IPO {
    id: string;
    name?: string;
    openDate?: string;
    closingDate?: string;
    priceBand?: string;
    estimatedMonth?: string; // New field for estimated month
    estimatedYear?: string;
    gmpData?: { gmp?: number }[];
    status?: string;
    offerSize?: string;
    ipoType?: string;
    subscriptionData?: { multiplier?: number }[];
}


const statusOrder: Record<string, number> = {
    "Live": 1,
    "Upcoming": 2,
    "Closed": 3
};


const OngoingIPO = () => {
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

    const today = new Date();
    const pastLimit = new Date();
    pastLimit.setDate(today.getDate() - 15);
    const futureLimit = new Date();
    futureLimit.setDate(today.getDate() + 15);

    const ongoingIPOs = ipoData
    .filter((ipo) => {
        const today = new Date();
        const currentMonth = today.toLocaleString("en-US", { month: "long" });
        const currentYear = today.getFullYear();

        if (ipo.estimatedMonth && ipo.estimatedYear) {
            return (
                ipo.estimatedMonth === currentMonth &&
                Number(ipo.estimatedYear) === currentYear
            );
        }

        if (!ipo.openDate) return false;
        const openDate = new Date(ipo.openDate);
        return openDate >= pastLimit && openDate <= futureLimit;
    })
    .sort((a, b) => {
        // Prioritize by status order
        const aStatus = statusOrder[a.status || "Closed"] || 4;
        const bStatus = statusOrder[b.status || "Closed"] || 4;

        if (aStatus !== bStatus) return aStatus - bStatus;

        const today = new Date();
        const currentMonth = today.toLocaleString("en-US", { month: "long" });
        const currentYear = today.getFullYear();

        const aIsCurrentMonth =
            a.estimatedMonth === currentMonth && Number(a.estimatedYear) === currentYear;
        const bIsCurrentMonth =
            b.estimatedMonth === currentMonth && Number(b.estimatedYear) === currentYear;

        if (aIsCurrentMonth && !bIsCurrentMonth) return -1;
        if (!aIsCurrentMonth && bIsCurrentMonth) return 1;

        if (a.estimatedMonth && !b.estimatedMonth) return -1;
        if (!a.estimatedMonth && b.estimatedMonth) return 1;

        return new Date(b.openDate || 0).getTime() - new Date(a.openDate || 0).getTime();
    });

    const formatDate = (date?: string) => {
        if (!date || isNaN(new Date(date).getTime())) return "N/A";
        return new Date(date).toLocaleDateString("en-GB"); // DD/MM/YYYY format
      };

    const formatIpoDate = (ipo: { openDate?: string; estimatedMonth?: string; estimatedYear?: string }) => {
        if (ipo.openDate) {
          return new Date(ipo.openDate).toLocaleDateString("en-GB"); // Format exact date
        } else if (ipo.estimatedMonth && ipo.estimatedYear) {
          return `${ipo.estimatedMonth} ${ipo.estimatedYear}`; // Display estimated date
        } else {
          return "TBA"; // If no date information is available
        }
      };
      

    return (
        <div className="flex flex-col items-center text-center text-[#183B56] mt-8">
            <div className="text-2xl lg:text-4xl font-semibold">
                All Ongoing IPOs at a Glance
            </div>
            <div className="text-lg lg:text-xl mt-4">
                Analyze the latest IPOs with complete information on GMP, price band, dates, and issue size.
            </div>

            {/* Scrollable Table */}
            <div className="w-full flex justify-center mt-10 p-4">
                <div className="w-[90%] overflow-x-auto shadow-xl">
                    <h1 className="lg:hidden">Scroll the table to see all details</h1>
                    <div className="min-w-[1000px]">
                       
                            <Table className="w-full text-center text-lg">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-center text-black font-bold">IPO Name</TableHead>
                                        <TableHead className="text-center text-black font-bold">Open Date</TableHead>
                                        <TableHead className="text-center text-black font-bold">Close Date</TableHead>
                                        <TableHead className="text-center text-black font-bold">Price</TableHead>
                                        <TableHead className="text-center text-black font-bold">GMP</TableHead>
                                        <TableHead className="text-center text-black font-bold">Status</TableHead>
                                        <TableHead className="text-center text-black font-bold">Issue Size</TableHead>
                                        <TableHead className="text-center text-black font-bold">Type</TableHead>
                                        <TableHead className="text-center text-black font-bold">Subscribed</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {ongoingIPOs.length > 0 ? (
                                        ongoingIPOs.map((ipo, index) => (
                                            <TableRow key={index}>
                                                <TableCell className="font-bold text-blue-800 underline text-left">
                                                    <Link href={`/ipo/${ipo.id}`}>
                                                        {ipo.name}
                                                    </Link>
                                                </TableCell>
                                                
                                                <TableCell>
                                                    <Link href={`/ipo/${ipo.id}`}>
                                                    {ipo.estimatedMonth && ipo.estimatedYear 
                                                        ? `${ipo.estimatedMonth} ${ipo.estimatedYear}` 
                                                        : formatDate(ipo.openDate)}
                                                        </Link>
                                                    </TableCell>
                                                    
                                                <TableCell><Link href={`/ipo/${ipo.id}`}> {formatDate(ipo.closingDate || "-")} </Link></TableCell>
                                                <TableCell><Link href={`/ipo/${ipo.id}`}> {ipo.priceBand || "N/A"} </Link></TableCell>
                                                <TableCell><Link href={`/ipo/${ipo.id}`}> {ipo.gmpData?.[ipo.gmpData.length - 1]?.gmp || "N/A"} </Link></TableCell>
                                                 {/* Conditional Status Styling */}
                                                    <TableCell
                                                    className={`font-semibold ${
                                                        ipo.status === "Live"
                                                            ? "text-green-500 animate-blink"
                                                            : ipo.status === "Closed"
                                                            ? "text-red-500"
                                                            : "text-blue-600"
                                                    }`}
                                                    >
                                                        <Link href={`/ipo/${ipo.id}`}>
                                                    {ipo.status || "N/A"}
                                                    </Link>
                                                    </TableCell>
                                                <TableCell><Link href={`/ipo/${ipo.id}`}>{ipo.offerSize || "N/A"} </Link></TableCell>
                                                <TableCell><Link href={`/ipo/${ipo.id}`}>{ipo.ipoType || "N/A"} </Link></TableCell>
                                                <TableCell><Link href={`/ipo/${ipo.id}`}>{ipo.subscriptionData?.[ipo.subscriptionData.length - 1]?.multiplier}X</Link></TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={7} className="text-center font-semibold text-gray-600">
                                              <Loader/>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
        
                    </div>
                </div>
            </div>

            <div className="w-full mt-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 py-10">
                <Link href={`/recentIpo`}>
                    <Button>Recently Closed IPOs</Button>
                </Link>
                <Link href={`/upcomingIpo`}>
                    <Button>Upcoming IPOs</Button>
                </Link>
            </div>
        </div>
    );
};

export default OngoingIPO;