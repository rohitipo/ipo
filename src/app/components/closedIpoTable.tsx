'use client'
import closedipoData from "../closedIpo";
import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

interface IpoPerformanceTablesProps {
  searchQuery: string;
}

const IpoPerformanceTables: React.FC<IpoPerformanceTablesProps> = ({ searchQuery }) => {
  const allYears = Object.keys(closedipoData).sort((a, b) => Number(b) - Number(a)); // Sort years in reverse order
  const [expandedYears, setExpandedYears] = useState<string[]>(allYears); // Keep all years expanded initially

  const toggleYear = (year: string) => {
    setExpandedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  return (
    <div className="p-4 space-y-6">
      {allYears.map((year) => {
        // Filtering IPOs based on search query
        const filteredIpos = closedipoData[year].filter((ipo) =>
          ipo.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
          <div key={year} className="border rounded-lg shadow-sm">
            <button
              onClick={() => toggleYear(year)}
              className="w-full text-left text-xl font-bold bg-gray-200 p-3 rounded-t-lg flex justify-between items-center"
            >
              <span>{year}</span>
              <span>{expandedYears.includes(year) ? "▲" : "▼"}</span>
            </button>
            {expandedYears.includes(year) && (
              <>
                {filteredIpos.length > 0 ? (
                  <div className="p-4">
                    <Table>
                      <TableHeader>
                        <TableRow className="lg:text-xl">
                          <TableHead className="text-center font-bold">IPO Name</TableHead>
                          <TableHead className="text-center font-bold">IPO Price</TableHead>
                          <TableHead className="text-center font-bold">Listing Price</TableHead>
                          <TableHead className="text-center font-bold">Gain (%)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredIpos.map((ipo, index) => (
                          <TableRow key={index}>
                            <TableCell className="text-center">{ipo.name}</TableCell>
                            <TableCell className="text-center">₹{ipo.ipoPrice}</TableCell>
                            <TableCell className="text-center">₹{ipo.listingPrice}</TableCell>
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
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <p className="p-4 text-center text-gray-500">No IPOs found.</p>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default IpoPerformanceTables;
