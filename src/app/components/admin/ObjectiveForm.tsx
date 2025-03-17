"use client";
import React from "react";

interface ObjectiveFormProps {
  ipoObjectives: string[];
  setIpoObjectives: React.Dispatch<React.SetStateAction<string[]>>;
}

const ObjectiveForm: React.FC<ObjectiveFormProps> = ({ ipoObjectives, setIpoObjectives }) => {
  // Handle Change in IPO Objectives
  const handleObjectiveChange = (index: number, value: string) => {
    const updatedObjectives = [...ipoObjectives];
    updatedObjectives[index] = value;
    setIpoObjectives(updatedObjectives);
  };

  // Add New Objective
  const addObjective = () => {
    setIpoObjectives([...ipoObjectives, ""]);
  };

  // Remove Objective
  const removeObjective = (index: number) => {
    const updatedObjectives = [...ipoObjectives];
    updatedObjectives.splice(index, 1);
    setIpoObjectives(updatedObjectives);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">IPO Objectives</h3>

      {ipoObjectives.map((objective, index) => (
        <div key={index} className="flex space-x-2 items-center">
          <input
            type="text"
            value={objective}
            onChange={(e) => handleObjectiveChange(index, e.target.value)}
            placeholder={`Objective ${index + 1}`}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={() => removeObjective(index)}
            className="text-red-500 hover:text-red-700 transition"
          >
            ✕
          </button>
        </div>
      ))}

      <button
        onClick={addObjective}
        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition"
      >
        + Add Objective
      </button>
    </div>
  );
};

export default ObjectiveForm;
