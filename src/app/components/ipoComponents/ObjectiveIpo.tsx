'use client'
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ObjectiveIpoProps {
    objectives: string[];
}

const ObjectiveIpo: React.FC<ObjectiveIpoProps> = ({ objectives }) => {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Objectives of the IPO</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {objectives.map((objective, index) => (
                            <li key={index} className="font-medium">{objective}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
};

export default ObjectiveIpo;
