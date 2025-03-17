"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface FundamentalsProps {
  companyFundamentals: { label: string; value: string }[]; // Dynamic key-value pairs
}

const Fundamentals: React.FC<FundamentalsProps> = ({ companyFundamentals }) => {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">COMPANY FUNDAMENTALS</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-1/2">Metric</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companyFundamentals.map(({ label, value }, index) => (
                <TableRow key={index} className="even:bg-gray-50">
                  <TableCell className="font-semibold">{label}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Fundamentals;
