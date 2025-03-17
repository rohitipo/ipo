"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FinancialEntry {
  metric: string;
  fy2022: string;
  fy2023: string;
  fy2024: string;
}

interface RFStatementFormProps {
  financialData: FinancialEntry[];
  setFinancialData: (newData: FinancialEntry[]) => void;
}

const RFStatementForm: React.FC<RFStatementFormProps> = ({ financialData, setFinancialData }) => {
  const handleChange = (index: number, field: keyof FinancialEntry, value: string) => {
    const updatedFinancialData = [...financialData];
    updatedFinancialData[index] = { ...updatedFinancialData[index], [field]: value };
    setFinancialData(updatedFinancialData);
  };

  const addRow = () => {
    const newRow: FinancialEntry = { metric: "", fy2022: "", fy2023: "", fy2024: "" };
    setFinancialData([...financialData, newRow]);
  };

  const removeRow = (index: number) => {
    if (financialData.length > 1) {
      const updatedFinancialData = financialData.filter((_, i) => i !== index);
      setFinancialData(updatedFinancialData);
    }
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
                <TableHead>FY 2022</TableHead>
                <TableHead>FY 2023</TableHead>
                <TableHead>FY 2024</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {financialData.map((item, index) => (
                <TableRow key={index} className="even:bg-gray-50">
                  <TableCell>
                    <Input
                      type="text"
                      value={item.metric}
                      onChange={(e) => handleChange(index, "metric", e.target.value)}
                      placeholder="Metric"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      value={item.fy2022}
                      onChange={(e) => handleChange(index, "fy2022", e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      value={item.fy2023}
                      onChange={(e) => handleChange(index, "fy2023", e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      value={item.fy2024}
                      onChange={(e) => handleChange(index, "fy2024", e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => removeRow(index)} variant="destructive" size="sm">
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 flex justify-end">
            <Button onClick={addRow} variant="default">+ Add Row</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RFStatementForm;
