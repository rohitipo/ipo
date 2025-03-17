"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface MarketLotProps {
  marketLot: {
    category: string;
    minimum: string;
    maximum: string;
    sharesMin: string;
    sharesMax: string;
    amountMin: string;
    amountMax: string;
  }[];
}

const MarketLot: React.FC<MarketLotProps> = ({ marketLot }) => {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">MARKET LOT DETAILS</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-1/4">INVESTORS CATEGORY</TableHead>
                <TableHead>MINIMUM (Lot)</TableHead>
                <TableHead>MAXIMUM (Lot)</TableHead>
                <TableHead>NO. OF SHARES (Min)</TableHead>
                <TableHead>NO. OF SHARES (Max)</TableHead>
                <TableHead>TOTAL AMOUNT (Min)</TableHead>
                <TableHead>TOTAL AMOUNT (Max)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {marketLot.map((lot, index) => (
                <TableRow key={index} className="even:bg-gray-50">
                  <TableCell className="font-semibold">{lot.category}</TableCell>
                  <TableCell>{lot.minimum}</TableCell>
                  <TableCell>{lot.maximum}</TableCell>
                  <TableCell>{lot.sharesMin}</TableCell>
                  <TableCell>{lot.sharesMax}</TableCell>
                  <TableCell>{lot.amountMin}</TableCell>
                  <TableCell>{lot.amountMax}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketLot;
