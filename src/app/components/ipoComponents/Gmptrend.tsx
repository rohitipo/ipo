"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

interface GmpTrendChartProps {
  gmpTrend: { date: string; gmp: number }[];
}

const GmpTrendChart: React.FC<GmpTrendChartProps> = ({ gmpTrend }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Set mobile view if width is < 640px
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-2 sm:p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-sm sm:text-lg font-bold">GMP TREND</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] sm:h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={gmpTrend} margin={{ top: 10, right: 10, left: 5, bottom: isMobile ? 10 : 30 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: isMobile ? 10 : 12 }} 
                padding={{ left: 10, right: 10 }} 
              />
              <YAxis 
                domain={[Math.min(...gmpTrend.map(d => d.gmp)) - 5, Math.max(...gmpTrend.map(d => d.gmp)) + 5]} 
                tick={{ fontSize: isMobile ? 10 : 12 }} 
              />
              <Tooltip wrapperStyle={{ fontSize: isMobile ? "10px" : "12px" }} />
              <Line 
                type="monotone" 
                dataKey="gmp" 
                stroke="#4682B4" 
                strokeWidth={2} 
                dot={{ fill: "#4682B4", r: isMobile ? 3 : 5 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default GmpTrendChart;
