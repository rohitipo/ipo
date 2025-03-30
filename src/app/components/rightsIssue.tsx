'use client';
import { useState } from 'react';
import rightsIssueData from '../rightIssue';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';

// Define data structure
type RightsEntry = {
  name: string;
  price: string;
  openDate: string;
  closeDate: string;
  recordDate: string;
};

type RightsIssueType = Record<string, RightsEntry[]>; // Object with years as keys

const RightsIssueTables: React.FC = () => {
  const allYears = Object.keys(rightsIssueData as RightsIssueType).sort((a, b) => Number(b) - Number(a)); // Sort years in reverse order
  const [expandedYears, setExpandedYears] = useState<string[]>(allYears); // Initially expanded

  const toggleYear = (year: string) => {
    setExpandedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  return (
    <div className='space-y-6 p-4'>
        <h1 className='text-2xl font-bold'>RIGHTS ISSUE 2025</h1>
      {allYears.map((year) => {
        const rightsIssues = (rightsIssueData as RightsIssueType)[year] || []; // Type assertion

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
                {rightsIssues.length > 0 ? (
                  <div className="p-4">
                    <Table>
                      <TableHeader>
                        <TableRow className="lg:text-xl">
                          <TableHead className="text-center font-bold">Company Name</TableHead>
                          <TableHead className="text-center font-bold">Issue Price</TableHead>
                          <TableHead className="text-center font-bold">Open Date</TableHead>
                          <TableHead className="text-center font-bold">Close Date</TableHead>
                          <TableHead className="text-center font-bold">Record Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {rightsIssues.map((entry, index) => (
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
                  <p className="p-4 text-center text-gray-500">No Rights Issue Data Available.</p>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RightsIssueTables;
