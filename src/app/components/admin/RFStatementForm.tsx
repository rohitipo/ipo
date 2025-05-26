"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid"; // for unique IDs

interface FinancialEntry {
  id: string;
  metric: string;
  values: string[];
}

interface RFStatementFormProps {
  financialData: FinancialEntry[];
  setFinancialData: (data: FinancialEntry[]) => void;
  financialYears: string[];
  setFinancialYears: (years: string[]) => void;
}

const RFStatementForm: React.FC<RFStatementFormProps> = ({
  financialData,
  setFinancialData,
  financialYears,
  setFinancialYears,
}) => {
  const handleChange = (index: number, field: keyof FinancialEntry, value: string) => {
    const updated = [...financialData];
    updated[index] = { ...updated[index], [field]: value };
    setFinancialData(updated);
  };

  const handleValueChange = (rowIndex: number, colIndex: number, value: string) => {
    const updated = [...financialData];
    updated[rowIndex].values[colIndex] = value;
    setFinancialData(updated);
  };

  const addRow = () => {
    const newRow: FinancialEntry = {
      id: uuidv4(),
      metric: "",
      values: Array(financialYears.length).fill(""),
    };
    setFinancialData([...financialData, newRow]);
  };

  const removeRow = (index: number) => {
    if (financialData.length > 1) {
      const updated = financialData.filter((_, i) => i !== index);
      setFinancialData(updated);
    }
  };

  const handleYearChange = (index: number, value: string) => {
    const updatedYears = [...financialYears];
    updatedYears[index] = value;
    setFinancialYears(updatedYears);
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">RESTATED FINANCIAL STATEMENT</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-1/4">PARTICULARS</TableHead>
                {financialYears.map((year, index) => (
                  <TableHead key={index}>
                    <Input
                      type="text"
                      value={year}
                      onChange={(e) => handleYearChange(index, e.target.value)}
                      className="w-24"
                    />
                  </TableHead>
                ))}
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {financialData.map((entry, rowIndex) => (
                <TableRow key={entry.id}>
                  <TableCell>
                    <Input
                      value={entry.metric}
                      onChange={(e) => handleChange(rowIndex, "metric", e.target.value)}
                    />
                  </TableCell>
                  {financialYears.map((_, colIndex) => (
                    <TableCell key={colIndex}>
                      <Input
                        value={entry.values[colIndex] || ""}
                        onChange={(e) =>
                          handleValueChange(rowIndex, colIndex, e.target.value)
                        }
                      />
                    </TableCell>
                  ))}
                  <TableCell>
                    <Button
                      onClick={() => removeRow(rowIndex)}
                      variant="destructive"
                      size="sm"
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-4 flex justify-end">
            <Button onClick={addRow} variant="default">
              + Add Row
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RFStatementForm;
