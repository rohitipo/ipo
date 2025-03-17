"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CompanyDescProps {
  companyDescription: string; // This will now contain rich text (HTML)
}

const CompanyDesc: React.FC<CompanyDescProps> = ({ companyDescription }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Company Description</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Render the formatted text safely */}
          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{
              __html: expanded
                ? companyDescription
                : `${companyDescription.slice(0, 150)}...`,
            }}
          />

          {/* Show "Read More" button only if text is longer than 150 characters */}
          {companyDescription.length > 150 && (
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyDesc;
