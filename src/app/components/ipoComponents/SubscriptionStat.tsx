"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SubscriptionData {
  day: string;
  multiplier: number;
}

interface SubscriptionStatProps {
  ipo: {
    subscriptionData?: SubscriptionData[];
  } | null;
}

const SubscriptionStat: React.FC<SubscriptionStatProps> = ({ ipo }) => {
  if (!ipo || !ipo.subscriptionData || ipo.subscriptionData.length === 0) {
    return <div className="text-center text-gray-600">No subscription data available</div>;
  }

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Subscription Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {ipo.subscriptionData.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="w-20 font-medium text-gray-700">{item.day}</span>
                <div className="flex-1 h-4 bg-gray-200 rounded-lg overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      item.multiplier > 50
                        ? "bg-red-500"
                        : item.multiplier > 20
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                    style={{ width: `${Math.min(Math.max(Math.sqrt(item.multiplier) * 10, 5), 100)}%` }}
                  ></div>
                </div>
                <span className="ml-4 font-semibold text-gray-800">{item.multiplier}x</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionStat;
