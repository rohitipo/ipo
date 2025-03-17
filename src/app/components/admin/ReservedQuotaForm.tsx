"use client";

import React from "react";

interface QuotaEntry {
  category: string;
  allocation: string;
}

interface ReservedQuotasFormProps {
  quotas: QuotaEntry[];
  setQuotas: React.Dispatch<React.SetStateAction<QuotaEntry[]>>;
}

const ReservedQuotasForm: React.FC<ReservedQuotasFormProps> = ({ quotas, setQuotas }) => {
  // Handle Change in Quota Data
  const handleQuotaChange = (index: number, field: "category" | "allocation", value: string) => {
    const updatedQuotas = [...quotas];
    updatedQuotas[index] = { ...updatedQuotas[index], [field]: value };
    setQuotas(updatedQuotas);
  };

  // Add New Quota Entry
  const addQuotaEntry = () => {
    setQuotas([...quotas, { category: "", allocation: "" }]);
  };

  // Remove Quota Entry
  const removeQuotaEntry = (index: number) => {
    const updatedQuotas = [...quotas];
    updatedQuotas.splice(index, 1);
    setQuotas(updatedQuotas);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Reserved Quotas</h3>
      {quotas.map((entry, index) => (
        <div key={index} className="flex space-x-2 items-center">
          <input
            type="text"
            placeholder="Category"
            value={entry.category}
            onChange={(e) => handleQuotaChange(index, "category", e.target.value)}
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Allocation"
            value={entry.allocation}
            onChange={(e) => handleQuotaChange(index, "allocation", e.target.value)}
            className="w-1/2 p-2 border rounded"
          />
          <button onClick={() => removeQuotaEntry(index)} className="text-red-500">✕</button>
        </div>
      ))}
      <button onClick={addQuotaEntry} className="bg-blue-500 text-white p-2 rounded w-full">+ Add Quota Entry</button>
    </div>
  );
};

export default ReservedQuotasForm;
