"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface PromotorProps {
  promoterHoldings: { label: string; value: string }[];
}

const Promotor: React.FC<PromotorProps> = ({ promoterHoldings }) => {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">PROMOTOR HOLDINGS</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-2/3">Particulars</TableHead>
                <TableHead>Holding (%)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {promoterHoldings.map((item, index) => (
                <TableRow key={index} className="even:bg-gray-50">
                  <TableCell className="font-semibold">{item.label}</TableCell>
                  <TableCell>{item.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Promotor;
