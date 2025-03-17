"use client";

import React from "react";

interface MarketLotEntry {
  category: string;
  customCategory?: string;
  minimum: string;
  maximum: string;
  sharesMin: string;
  sharesMax: string;
  amountMin: string;
  amountMax: string;
}

interface MarketLotFormProps {
  marketLotData: MarketLotEntry[];
  setMarketLotData: React.Dispatch<React.SetStateAction<MarketLotEntry[]>>;
}

const categoryOptions = ["RETAIL CATEGORY", "HNI CATEGORY", "QIB & NII",  "OTHER"];

const MarketLotForm: React.FC<MarketLotFormProps> = ({ marketLotData, setMarketLotData }) => {
  // Handle Change in Market Lot Data
  const handleMarketLotChange = (index: number, field: keyof MarketLotEntry, value: string) => {
    const updatedMarketLotData = [...marketLotData];

    if (field === "category" && value !== "OTHER") {
      // Reset custom category if a predefined option is selected
      updatedMarketLotData[index] = { ...updatedMarketLotData[index], category: value, customCategory: "" };
    } else {
      updatedMarketLotData[index] = { ...updatedMarketLotData[index], [field]: value };
    }

    setMarketLotData(updatedMarketLotData);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Market Lot Details</h3>
      {marketLotData.map((entry, index) => (
        <div key={index} className="grid grid-cols-8 gap-2 items-center">
          {/* Category Dropdown */}
          <select
            value={entry.category === "OTHER" ? entry.customCategory || "OTHER" : entry.category}
            onChange={(e) => handleMarketLotChange(index, "category", e.target.value)}
            className="p-2 border rounded"
          >
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Custom Category Input (only if "OTHER" is selected) */}
          {entry.category === "OTHER" && (
            <input
              type="text"
              placeholder="Enter category"
              value={entry.customCategory || ""}
              onChange={(e) => handleMarketLotChange(index, "customCategory", e.target.value)}
              className="p-2 border rounded"
              onBlur={() => {
                // Update the main category field when the user finishes typing
                if (entry.customCategory) {
                  handleMarketLotChange(index, "category", entry.customCategory);
                }
              }}
            />
          )}

          <input
            type="text"
            placeholder="Min Lots"
            value={entry.minimum}
            onChange={(e) => handleMarketLotChange(index, "minimum", e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Max Lots"
            value={entry.maximum}
            onChange={(e) => handleMarketLotChange(index, "maximum", e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Min Shares"
            value={entry.sharesMin}
            onChange={(e) => handleMarketLotChange(index, "sharesMin", e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Max Shares"
            value={entry.sharesMax}
            onChange={(e) => handleMarketLotChange(index, "sharesMax", e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Min Amount"
            value={entry.amountMin}
            onChange={(e) => handleMarketLotChange(index, "amountMin", e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Max Amount"
            value={entry.amountMax}
            onChange={(e) => handleMarketLotChange(index, "amountMax", e.target.value)}
            className="p-2 border rounded"
          />
          <button onClick={() => setMarketLotData(marketLotData.filter((_, i) => i !== index))} className="text-red-500">✕</button>
        </div>
      ))}
      <button
        onClick={() =>
          setMarketLotData([
            ...marketLotData,
            {
              category: "RETAIL CATEGORY", // Default category
              customCategory: "",
              minimum: "",
              maximum: "",
              sharesMin: "",
              sharesMax: "",
              amountMin: "",
              amountMax: "",
            },
          ])
        }
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        + Add Market Lot Entry
      </button>
    </div>
  );
};

export default MarketLotForm;
