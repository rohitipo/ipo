"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface VerticalTimelineProps {
  timelineData: { title: string; date: string }[];
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ timelineData }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const today = new Date().setHours(0, 0, 0, 0); // Normalize today’s date
    const index = timelineData.findIndex(
      (step) => new Date(step.date).setHours(0, 0, 0, 0) >= today
    );
    setCurrentStep(index === -1 ? timelineData.length : index);
  }, [timelineData]);

  return (
    <div className="p-4 md:hidden">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">IPO Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="relative pl-6 space-y-6">
            {timelineData.map((step, index) => (
              <li key={index} className="relative flex gap-4 items-center">
                {/* Step Icon */}
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold transition-all duration-500
                    ${
                      index < currentStep
                        ? "bg-green-500"
                        : index === currentStep
                        ? "bg-blue-500 animate-pulse"
                        : "bg-gray-300 text-black"
                    }`}
                >
                  {index + 1}
                </div>

                {/* Vertical Line */}
                {index !== timelineData.length - 1 && (
                  <div
                    className={`absolute left-[14px] top-8 w-1 h-full ${
                      index < currentStep - 1 ? "bg-green-500" : "bg-gray-300"
                    }`}
                  ></div>
                )}

                {/* Step Content */}
                <div className="flex flex-col">
                  <p className="font-medium">{step.title}</p>
                  <p className="text-sm text-gray-500">{step.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerticalTimeline;
