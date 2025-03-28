'use client';
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";

interface IPO {
  id: string;
  name: string;
  openDate: string | null;
  priceBand: string;
}

export default function IPOCalendar() {
  const [date, setDate] = useState<Date | null>(new Date());
  const [ipos, setIpos] = useState<IPO[]>([]);
  const [ipoDates, setIpoDates] = useState<string[]>([]);
  const [allIpos, setAllIpos] = useState<IPO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchIPOs = async () => {
      try {
        const response = await fetch("/api/ipo/getAllIpo");
        const result = await response.json();

        if (result.success && Array.isArray(result.data)) {
          const ipoList: IPO[] = result.data;

          // Filter out IPOs with null or empty openDate
          const validIpos = ipoList.filter(ipo => ipo.openDate && ipo.openDate.trim() !== "");

          setAllIpos(validIpos);
          setIpoDates([...new Set(validIpos.map(ipo => ipo.openDate!))]);
        } else {
          console.error("Unexpected API response:", result);
        }
      } catch (error) {
        console.error("Error fetching IPOs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIPOs();
  }, []);

  useEffect(() => {
    if (!date) return;
    const formattedDate = date.toLocaleDateString("en-CA");

    // Filter IPOs based on selected date
    const iposForDate = allIpos.filter(ipo => ipo.openDate === formattedDate);
    setIpos(iposForDate);
  }, [date, allIpos]);

  return (
    <div>
      <Header/>
    <div className="p-6 max-w-4xl lg:my-[100px] mx-auto bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-extrabold text-center mb-6">IPO Calendar</h1>

      {loading ? (
        <Loader/>
      ) : (
        <>
          <div className="flex justify-center">
            <Calendar
              onChange={(value) => setDate(value as Date)}
              value={date}
              className="p-4 rounded-lg shadow-md border border-gray-300"
              tileContent={({ date }) => {
                const formattedDate = date.toLocaleDateString("en-CA");
                return ipoDates.includes(formattedDate) ? (
                  <div className="flex justify-center mt-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                ) : null;
              }}
            />
          </div>

          <h2 className="text-xl font-semibold text-center mt-6">
            IPOs on {date?.toDateString()}
          </h2>

          <div className="space-y-4 mt-4">
            {ipos.length > 0 ? (
              ipos.map((ipo) => (
                <motion.div
                  key={ipo.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                        <Link href={`ipo/${ipo.id}`}><h3 className="text-lg underline font-bold text-gray-800">{ipo.name}</h3></Link>
                      <p className="text-gray-600">Price: {ipo.priceBand}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500">No IPOs on this date.</p>
            )}
          </div>
        </>
      )}
    </div>
    <NewsLetter/>
    <Footer/>
    </div>
  );
}
