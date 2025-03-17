"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";

interface IpoDetailsProps {
  ipo: {
    name: string;
    status: string;
    openDate: string;
    closingDate: string;
    listingDate: string;
    priceBand: string;
    faceValue: string;
    lotSize: string;
    offerSize: string;
    issueType: string;
    listingOn: string;
    drhpLink: string;
    rhpLink: string;
    anchorInvestors: string;
    
  };
}




const IpoDetails: React.FC<IpoDetailsProps> = ({ ipo }) => {
  if (!ipo) return <div className="text-center">No IPO data available</div>;

  const formattedIpoDetails = {
    "Company Name": ipo.name,
    "IPO Status": ipo.status,
    "Open Date": ipo.openDate,
    "Close Date": ipo.closingDate,
    "Listing Date": ipo.listingDate,
    "Price Band": ipo.priceBand,
    "Face Value": ipo.faceValue,
    "Lot Size": ipo.lotSize,
    "Offer Size": ipo.offerSize,
    "Issue Type": ipo.issueType,
    "Listing": ipo.listingOn,
    DRHP: ipo.drhpLink,
    RHP: ipo.rhpLink,
    AnchorInvestors: ipo.anchorInvestors,
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">IPO Details</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Desktop View (Table) */}
          <div className="hidden md:block">
            <Table className="border-0">
              <TableBody className="text-base">
                {Object.entries(formattedIpoDetails).map(([key, value], index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-black font-semibold p-4">{key}</TableCell>
                    <TableCell className="border-r">
                      {typeof value === "string" && value.startsWith("http") ? (
                        <Link href={value} className="text-blue-600 underline">
                          Click Here
                        </Link>
                      ) : (
                        value
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile View (Vertical Table) */}
          <div className="md:hidden flex flex-col">
            {Object.entries(formattedIpoDetails).map(([key, value], index) => (
              <div key={index} className="grid grid-cols-2 border-b p-3">
                <span className="font-semibold text-black">{key}</span>
                {typeof value === "string" && value.startsWith("http") ? (
                  <Link href={value} className="text-blue-600 underline">
                    Click Here
                  </Link>
                ) : (
                  <span>{value}</span>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IpoDetails;
