"use client";

import React from "react";

interface PromoterHolding {
  label: string;
  value: string;
}

interface Props {
  promoterHoldings: PromoterHolding[];
  setPromoterHoldings: React.Dispatch<React.SetStateAction<PromoterHolding[]>>;
}

const PromoterHoldingsForm: React.FC<Props> = ({ promoterHoldings, setPromoterHoldings }) => {
  const handleInputChange = (index: number, field: keyof PromoterHolding, value: string) => {
    const updatedHoldings = [...promoterHoldings];
    updatedHoldings[index] = { ...updatedHoldings[index], [field]: value };
    setPromoterHoldings(updatedHoldings);
  };

  const addRow = () => {
    setPromoterHoldings([...promoterHoldings, { label: "", value: "" }]);
  };

  const removeRow = (index: number) => {
    const updatedHoldings = promoterHoldings.filter((_, i) => i !== index);
    setPromoterHoldings(updatedHoldings);
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Promoter Holdings</h3>
      {promoterHoldings.map((holding, index) => (
        <div key={index} className="flex space-x-2 mb-2 items-center">
          <input
            type="text"
            value={holding.label}
            onChange={(e) => handleInputChange(index, "label", e.target.value)}
            placeholder="Label"
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="text"
            value={holding.value}
            onChange={(e) => handleInputChange(index, "value", e.target.value)}
            placeholder="Value"
            className="w-1/2 p-2 border rounded"
          />
          <button
            onClick={() => removeRow(index)}
            className="bg-red-500 text-white p-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addRow}
        className="bg-blue-500 text-white p-2 rounded mt-2"
      >
        Add Row
      </button>
    </div>
  );
};

export default PromoterHoldingsForm;