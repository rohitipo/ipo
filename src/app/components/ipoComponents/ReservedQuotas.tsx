"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell,  TableRow } from "@/components/ui/table";

interface ReservedQuota {
  category: string;
  allocation: string;
}

interface ReservedQuotasProps {
  reservedQuotas: ReservedQuota[];
}

const ReservedQuotas: React.FC<ReservedQuotasProps> = ({ reservedQuotas }) => {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">RESERVED QUOTAS</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="border-0">
            <TableBody className="text-base">
              {reservedQuotas.map((quota, index) => (
                <TableRow key={index}>
                  <TableCell className="font-semibold text-black  p-6">{quota.category}</TableCell>
                  <TableCell className="border-r">{quota.allocation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReservedQuotas;
