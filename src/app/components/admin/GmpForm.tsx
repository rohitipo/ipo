"use client";

import React from "react";

interface GMPFormProps {
  gmpData: { date: string; gmp: number }[];
  setGmpData: React.Dispatch<React.SetStateAction<{ date: string; gmp: number }[]>>;
}

const GMPForm: React.FC<GMPFormProps> = ({ gmpData, setGmpData }) => {
  // Handle Change in GMP Data
  const handleGmpChange = (index: number, field: "date" | "gmp", value: string | number) => {
    const updatedGmpData = [...gmpData];
    updatedGmpData[index] = { ...updatedGmpData[index], [field]: value };
    setGmpData(updatedGmpData);
  };

  // Add New GMP Entry
  const addGmpEntry = () => {
    setGmpData([...gmpData, { date: "", gmp: 0 }]);
  };

  // Remove GMP Entry
  const removeGmpEntry = (index: number) => {
    const updatedGmpData = [...gmpData];
    updatedGmpData.splice(index, 1);
    setGmpData(updatedGmpData);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">GMP Data</h3>
      {gmpData.map((entry, index) => (
        <div key={index} className="flex space-x-2 items-center">
          <input
            type="Date"
            placeholder="Date"
            value={entry.date}
            onChange={(e) => handleGmpChange(index, "date", e.target.value)}
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="number"
            placeholder="GMP Value"
            value={entry.gmp}
            onChange={(e) => handleGmpChange(index, "gmp", parseFloat(e.target.value))}
            className="w-1/2 p-2 border rounded"
          />
          <button onClick={() => removeGmpEntry(index)} className="text-red-500">✕</button>
        </div>
      ))}
      <button onClick={addGmpEntry} className="bg-blue-500 text-white p-2 rounded w-full">+ Add GMP Entry</button>
    </div>
  );
};

export default GMPForm;
