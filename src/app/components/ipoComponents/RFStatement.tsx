"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface FinancialDataItem {
  id: string;
  metric: string;
  values: string[];
}

interface RFStatementProps {
  financialData: FinancialDataItem[];
  financialYears: string[];
}

const RFStatement: React.FC<RFStatementProps> = ({
  financialData = [],
  financialYears = [],
}) => {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">RESTATED FINANCIAL STATEMENT</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table className="min-w-[600px]">
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="w-1/3">PARTICULARS</TableHead>
                  {Array.isArray(financialYears) &&
                    financialYears.map((year, index) => (
                      <TableHead key={index}>{year}</TableHead>
                    ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {financialData.map(({ id, metric, values }) => (
                  <TableRow key={id} className="even:bg-gray-50">
                    <TableCell className="font-semibold">{metric}</TableCell>
                    {Array.isArray(financialYears) &&
                      financialYears.map((_, index) => (
                        <TableCell key={index}>
                          {values[index] || "-"}
                        </TableCell>
                      ))}
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
