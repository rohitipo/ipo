'use client';
import { useState } from 'react';
import buyBackData from '../buyBack';
import RightsIssueTables from '../components/rightsIssue';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import Footer from '../components/Footer';
import Header from '../components/Header';

// Define data structure
type BuyBackEntry = {
  name: string;
  price: string;
  openDate: string;
  closeDate: string;
  recordDate: string;
};

type BuyBackDataType = Record<string, BuyBackEntry[]>; // Object with years as keys

const BuyBackTables: React.FC = () => {
  const allYears = Object.keys(buyBackData as BuyBackDataType).sort((a, b) => Number(b) - Number(a)); // Sort years in reverse order
  const [expandedYears, setExpandedYears] = useState<string[]>(allYears); // Initially expanded

  const toggleYear = (year: string) => {
    setExpandedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  return (
    <div>
        <Header/>
    <div className="p-4 space-y-6">
        <h1 className='text-2xl font-bold'>BUYBACK 2025</h1>
      {allYears.map((year) => {
        const buybacks = (buyBackData as BuyBackDataType)[year] || []; // Type assertion

        return (
          <div key={year} className="border rounded-lg shadow-sm">
            <button
              onClick={() => toggleYear(year)}
              className="w-full text-left text-xl font-bold bg-gray-200 p-3 rounded-t-lg flex justify-between items-center"
            >
              <span>{year}</span>
              <span>{expandedYears.includes(year) ? '▲' : '▼'}</span>
            </button>

            {expandedYears.includes(year) && (
              <>
                {buybacks.length > 0 ? (
                  <div className="p-4">
                    <Table>
                      <TableHeader>
                        <TableRow className="lg:text-xl">
                          <TableHead className="text-center font-bold">Company Name</TableHead>
                          <TableHead className="text-center font-bold">Buyback Price</TableHead>
                          <TableHead className="text-center font-bold">Open Date</TableHead>
                          <TableHead className="text-center font-bold">Close Date</TableHead>
                          <TableHead className="text-center font-bold">Record Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {buybacks.map((entry, index) => (
                          <TableRow key={index}>
                            <TableCell className="text-center">{entry.name}</TableCell>
                            <TableCell className="text-center">{entry.price}</TableCell>
                            <TableCell className="text-center">{entry.openDate}</TableCell>
                            <TableCell className="text-center">{entry.closeDate}</TableCell>
                            <TableCell className="text-center">{entry.recordDate}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <p className="p-4 text-center text-gray-500">No Buyback Data Available.</p>
                )}
              </>
            )}
          </div>
        );
      })}
      <div className=''>
        <RightsIssueTables/>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default BuyBackTables;
