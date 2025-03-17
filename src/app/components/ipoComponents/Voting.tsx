"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";

const Voting = ({ ipoId }: { ipoId: string }) => {
  const [responses, setResponses] = useState({
    bearish: 0,
    bullish: 0,
    superBullish: 0,
  });
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const res = await fetch(`/api/ipo/getVotes?ipoId=${ipoId}`);
        const data = await res.json();
        setResponses({
          bearish: data.bearish || 0,
          bullish: data.bullish || 0,
          superBullish: data.superBullish || 0,
        });

        // Check localStorage for user's previous vote
        const storedVote = localStorage.getItem(`vote_${ipoId}`);
        if (storedVote) {
          setSelected(storedVote); // Disable voting if user has already voted
        }
      } catch (error) {
        console.error("Error fetching votes", error);
      }
    };

    fetchVotes();
  }, [ipoId]);

  const handleVote = async (type: "bearish" | "bullish" | "superBullish") => {
    if (selected) return; // Prevent multiple votes

    try {
      await fetch("/api/ipo/votes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ipoId, voteType: type }),
      });

      setResponses((prev) => ({
        ...prev,
        [type]: prev[type] + 1,
      }));

      setSelected(type);
      localStorage.setItem(`vote_${ipoId}`, type); // Store user's vote
    } catch (error) {
      console.error("Error storing vote", error);
    }
  };

  // Calculate total responses
  const totalResponses = responses.bearish + responses.bullish + responses.superBullish;
  const getPercentage = (count: number) => (totalResponses > 0 ? ((count / totalResponses) * 100).toFixed(1) : "0");

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">LEAVE YOUR RESPONSE FOR THE IPO</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {["bearish", "bullish", "superBullish"].map((key) => {
              const label = key === "bearish" ? "BEARISH" : key === "bullish" ? "BULLISH" : "SUPER BULLISH";
              const percentage = getPercentage(responses[key as "bearish" | "bullish" | "superBullish"]);

              return (
                <div
                  key={key}
                  className={`flex items-center justify-between p-3 rounded-md border cursor-pointer transition ${
                    selected === key ? "bg-blue-500 text-white cursor-not-allowed" : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleVote(key as "bearish" | "bullish" | "superBullish")}
                  style={{ pointerEvents: selected ? "none" : "auto" }} // Disable further voting
                >
                  <span className="font-semibold">{label}</span>
                  <div className="w-2/3 h-3 bg-gray-200 rounded-md overflow-hidden">
                    <div
                      className={`h-full ${
                        key === "bearish" ? "bg-red-500" : key === "bullish" ? "bg-green-500" : "bg-blue-500"
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{percentage}%</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Voting;
