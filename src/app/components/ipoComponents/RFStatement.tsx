"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface FinancialDataItem {
  id: string;
  metric: string;
  fy2022: string;
  fy2023: string;
  fy2024: string;
}

interface RFStatementProps {
  financialData: FinancialDataItem[];
}

const RFStatement: React.FC<RFStatementProps> = ({ financialData }) => {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">RESTATED FINANCIAL STATEMENT</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="overflow-x-auto">
          <Table  className="min-w-[600px]">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-1/3">PARTICULARS</TableHead>
                <TableHead>FY 2022</TableHead>
                <TableHead>FY 2023</TableHead>
                <TableHead>FY 2024</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {financialData.map(({ id, metric, fy2022, fy2023, fy2024 }) => (
                <TableRow key={id} className="even:bg-gray-50">
                  <TableCell className="font-semibold">{metric}</TableCell>
                  <TableCell>{fy2022}</TableCell>
                  <TableCell>{fy2023}</TableCell>
                  <TableCell>{fy2024}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RFStatement;
