"use client";
import React, { useEffect, useState } from "react";

interface TimelineEntry {
  title: string;
  date: string;
}

interface TimelineFormProps {
  timelineData: TimelineEntry[];
  setTimelineData: (data: TimelineEntry[]) => void;
}

// Default Timeline Events
const defaultTimeline: TimelineEntry[] = [
  { title: "OFFER OPEN DATE", date: "" },
  { title: "OFFER END DATE", date: "" },
  { title: "ALLOTMENT", date: "" },
  { title: "REFUND INITIATION", date: "" },
  { title: "DEMAT TRANSFER", date: "" },
  { title: "LISTING", date: "" },
  { title: "MANDATE END", date: "" },
];

const TimelineForm: React.FC<TimelineFormProps> = ({ timelineData, setTimelineData }) => {
  const [initialized, setInitialized] = useState(false);

  // Initialize state only once with default timeline data
  useEffect(() => {
    if (!initialized && timelineData.length === 0) {
      setTimelineData(defaultTimeline);
      setInitialized(true);
    }
  }, [timelineData, initialized, setTimelineData]);

  // Handle input changes
  const handleChange = (index: number, field: keyof TimelineEntry, value: string) => {
    const updatedData = [...timelineData];
    updatedData[index][field] = value;
    setTimelineData(updatedData);
  };

  // Add new entry
  const addEntry = () => {
    setTimelineData([...timelineData, { title: "", date: "" }]);
  };

  // Remove entry
  const removeEntry = (index: number) => {
    const updatedData = timelineData.filter((_, i) => i !== index);
    setTimelineData(updatedData);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">IPO Timeline</h2>

      {timelineData.map((entry, index) => (
        <div key={index} className="flex items-center gap-4 mb-2">
          <input
            type="text"
            value={entry.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
            placeholder="Event Title"
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="date"
            value={entry.date}
            onChange={(e) => handleChange(index, "date", e.target.value)}
            className="w-1/3 p-2 border rounded"
          />
          <button
            type="button"
            onClick={() => removeEntry(index)}
            className="p-2 text-white bg-red-500 rounded"
          >
            ✕
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addEntry}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        + Add Timeline Entry
      </button>
    </div>
  );
};

export default TimelineForm;
