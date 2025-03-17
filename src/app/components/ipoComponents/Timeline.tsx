'use client'
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import VerticalTimeline from "./VerticalTimeline";

interface TimelineProps {
  timelineData: { title: string; date: string }[];
}

const Timeline: React.FC<TimelineProps> = ({ timelineData }) => {

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const today = new Date().setHours(0, 0, 0, 0); // Get today's date without time
    const index = timelineData.findIndex((step) => {
      const stepDate = new Date(step.date).setHours(0, 0, 0, 0); // Convert each date
      return stepDate >= today; // Compare timestamps
    });
  
    setCurrentStep(index === -1 ? timelineData.length : index);
  }, [timelineData]);

  return (
    <>
    <div className="hidden md:block p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">IPO Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative flex flex-col space-y-6">
            {/* Timeline Steps */}
            <div className="relative flex  w-full space-x-6">
              {timelineData.map((step, index) => (
                <div key={index} className="flex flex-col items-center w-24">
                  {/* Step Circle */}
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold 
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
                  {/* Step Title */}
                  <p className="mt-2 text-sm font-medium text-center">{step.title}</p>
                  {/* Step Date */}
                  <p className="text-xs text-gray-500">{step.date}</p>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="relative  h-2 bg-gray-300 rounded-full"
            style={{ width: `${(timelineData.length + 0.5) * 6}rem`, maxWidth: "100%" }}>
              <div
                className="absolute top-0 left-0 h-2 bg-green-500 rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min((currentStep / Math.max(timelineData.length - 1, 1)) * 100, 100)}%`,
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    <VerticalTimeline timelineData={timelineData}/>
    </>
  );
};

export default Timeline;
