"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FundamentalEntry {
  label: string;
  value: string;
}

interface FundamentalsFormProps {
  fundamentals: FundamentalEntry[];
  setFundamentals: (data: FundamentalEntry[]) => void;
}

const defaultFundamentals: FundamentalEntry[] = [
  { label: "MARKET CAP", value: "" },
  { label: "PAT Margin", value: "" },
  { label: "Stock P/E vs Sector P/E", value: "" },
  { label: "Earning Per Share (EPS)", value: "" },
  { label: "Return On Networth (RONWI)", value: "" },
  { label: "ROCE", value: "" },
  { label: "ROE", value: "" },
  { label: "Face Value", value: "" },
  { label: "EBITDA Margin", value: "" },
  { label: "Debt to Equity", value: "" },
  { label: "Net Asset Value (NAV)", value: "" },
];

const FundamentalsForm: React.FC<FundamentalsFormProps> = ({ fundamentals, setFundamentals }) => {
  const [initialized, setInitialized] = useState(false);

  // Initialize state only once
  useEffect(() => {
    if (!initialized && fundamentals.length === 0) {
      setFundamentals(defaultFundamentals);
      setInitialized(true);
    }
  }, [fundamentals, initialized, setFundamentals]);

  const handleChange = (index: number, field: keyof FundamentalEntry, value: string) => {
    const updatedFundamentals = [...fundamentals];
    updatedFundamentals[index] = { ...updatedFundamentals[index], [field]: value };
    setFundamentals(updatedFundamentals);
  };

  const addRow = () => {
    setFundamentals([...fundamentals, { label: "", value: "" }]);
  };

  const removeRow = (index: number) => {
    const updatedFundamentals = fundamentals.filter((_, i) => i !== index);
    setFundamentals(updatedFundamentals);
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Company Fundamentals</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-1/2">Metric</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fundamentals.map((entry, index) => (
                <TableRow key={index} className="even:bg-gray-50">
                  <TableCell>
                    <Input
                      type="text"
                      placeholder="Enter Metric"
                      value={entry.label}
                      onChange={(e) => handleChange(index, "label", e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      placeholder="Enter Value"
                      value={entry.value}
                      onChange={(e) => handleChange(index, "value", e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="destructive" size="sm" onClick={() => removeRow(index)}>
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4">
            <Button onClick={addRow}>+ Add Row</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FundamentalsForm;
