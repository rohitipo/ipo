'use client';


import { useState,   useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import IpoDetails from "../../components/ipoComponents/IpoDetails";
import SubscriptionStat from "../../components/ipoComponents/SubscriptionStat";
import ObjectiveIpo from "../../components/ipoComponents/ObjectiveIpo";
import CompanyDesc from "../../components/ipoComponents/CompanyDescription";
import MarketLot from "../../components/ipoComponents/MarketLot";
import Fundamentals from "../../components/ipoComponents/Fundamentals";
import ReservedQuotas from "../../components/ipoComponents/ReservedQuotas";
import Timeline from "../../components/ipoComponents/Timeline";
import RFStatement from "../../components/ipoComponents/RFStatement";
import Promotor from "../../components/ipoComponents/Promotor";
import GmpTrendChart from "../../components/ipoComponents/Gmptrend";
import { useParams } from "next/navigation";
import ProsCons from "@/app/components/ipoComponents/ProsCons";
import Loader from "@/app/components/Loader/Loader";
import Voting from "@/app/components/ipoComponents/Voting";
import NewsLetter from "@/app/components/NewsLetter";

export interface IPO {
    _id: string;
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
    subscriptionData:[];
    ipoObjectives:[];
    gmpData:[];
    companyDescription: string;
    reservedQuotas:[];
    marketLotData: {
        category: string;
        minimum: string;
        maximum: string;
        sharesMin: string;
        sharesMax: string;
        amountMin: string;
        amountMax: string;
    }[];
    timelineData: { title: string; date: string }[];
    companyFundamentals:  { label: string; value: string }[];
    financialData: [];
    promoterHoldings:{ label: string; value: string }[];
    prosCons: { pros: string[]; cons: string[] };
    votes: {
        bearish:number,
        bullish:number,
        superBullish:number,
      };
  }



  const mainSections = [
    { name: "IPO DETAILS", id: "ipo-details" },
    { name: "SUBSCRIPTION STATUS", id: "subscription-status" },
    { name: "COMPANY DESCRIPTION", id: "company-description" },
    { name: "COMPANY FUNDAMENTALS (in crores)", id: "fundamentals" },
];

// Hidden sections under "More"
const moreSections = [
    { name: "OBJECTIVES OF THE IPO", id: "objective-ipo" },
    { name: "GMP Trend", id: "gmp" },
    { name: "RESERVED QUOTAS", id: "reserved-quotas" },
    { name: "MARKET LOT DETAILS", id: "market-lot" },
    { name: "Timeline", id: "timeline" },
    { name: "RESTATED FINANCIAL STATEMENT", id: "financial-statement" },
    { name: "PROMOTOR HOLDINGS", id: "promoter-holdings" },
];




export default function IPOCard() {
  const [shrink, setShrink] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(mainSections[0].id);
  const [showMore, setShowMore] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { id } = useParams(); // Get the IPO ID from the URL
  const [ipoDetails, setIpoDetails] = useState<IPO | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!id) return;
    
    fetch(`/api/ipo/getIpobyId?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setIpoDetails(data.data);
          
        } else {
          console.error("IPO not found");
        }
      })
      .catch((err) => console.error("Error fetching IPO data:", err))
      .finally(() => setLoading(false));
  }, [id]);


 

  useEffect(() => {
    const handleScroll = () => {
        setShrink(window.scrollY > 50);

        const currentSection = [...mainSections, ...moreSections].find((section) => {
            const element = document.getElementById(section.id);
            if (!element) return false;
            const rect = element.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        });

        if (currentSection) {
            setActiveTab(currentSection.id);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    const offset = 150; // Adjust this value based on your sticky header height

    if (section) {
        window.scrollTo({ 
            top: section.getBoundingClientRect().top + window.scrollY - offset, 
            behavior: "smooth" 
        });
        setShowMore(false); // Close "More" dropdown after selection
    }
};


useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowMore(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
// Simulating a loading delay
const timeout = setTimeout(() => {
  setIsLoading(false);
}, 1500); // Adjust the duration as needed

return () => clearTimeout(timeout);
}, []);



  

    return (
        <>
        {isLoading ? (
        <Loader />
      ) : (
        
        <div className="flex flex-col">
            <Header />
            <div className={`sticky top-0 left-0 right-0 bg-white z-10 transition-all duration-300`}>
                
                <div className={`text-left font-mono font-bold transition-all duration-300 ${shrink ? "text-xl md:text-3xl p-1" : "text-2xl md:text-4xl p-2"}`}>
                    {ipoDetails?.name}
                </div>
                {/* Tabs Navigation */}
                <div className="flex flex-wrap gap-2 bg-white p-2 rounded-lg">
                    {mainSections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`px-3 py-2 text-xs md:text-sm font-medium rounded-md transition-all duration-300 
                                ${activeTab === section.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                        >
                            {section.name}
                        </button>
                    ))}
                    {/* More Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="px-3 py-2 text-xs md:text-sm font-medium rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
                        >
                            More ▼
                        </button>
                        {showMore && (
                            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                                {moreSections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                                    >
                                        {section.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <hr />
            </div>

            <div className="flex-1 overflow-y-auto p-4">
                {/* Scrollable Content */}
                <div id="ipo-details">{ipoDetails ? <IpoDetails ipo={ipoDetails} /> : <p></p>}</div>

                <div id="subscription-status"><SubscriptionStat ipo={ipoDetails} /></div>

                <div id="objective-ipo">{ipoDetails?.ipoObjectives ? (
                                    <ObjectiveIpo objectives={ipoDetails.ipoObjectives} />
                                ) : (
                                    <p></p>
                                )}</div>


                <div id="gmp">
                    {ipoDetails?.gmpData && ipoDetails.gmpData.length > 0 ? (
                        <GmpTrendChart gmpTrend={ipoDetails.gmpData} />
                    ) : (
                        <p></p>
                    )}</div>
                    

                <div id="company-description">{ipoDetails?.companyDescription ? (
                            <CompanyDesc companyDescription={ipoDetails.companyDescription} />
                        ) : (
                            <p></p>
                        )}</div>


                <div id="reserved-quotas">{ipoDetails?.reservedQuotas ? (
                        <ReservedQuotas reservedQuotas={ipoDetails.reservedQuotas} />
                    ) : (
                        <p></p>
                    )}</div>


                <div id="market-lot">{ipoDetails?.marketLotData ? (
                            <MarketLot marketLot={ipoDetails.marketLotData} />
                        ) : (
                            <p></p>
                        )}</div>




                <div id="timeline">{ipoDetails?.timelineData ? (
                        <Timeline timelineData={ipoDetails.timelineData} />
                    ) : (
                        <p></p>
                    )}</div>

                    
                <div id="fundamentals">{ipoDetails?.companyFundamentals ? (
                            <Fundamentals companyFundamentals={ipoDetails.companyFundamentals} />
                        ) : (
                            <p></p>
                        )}</div>


                <div id="financial-statement">{ipoDetails?.financialData ? (
                            <RFStatement financialData={ipoDetails.financialData} />
                        ) : (
                            <p></p>
                        )}</div>


                <div id="promoter-holdings">{ipoDetails?.promoterHoldings ? (
                            <Promotor promoterHoldings={ipoDetails.promoterHoldings} />
                        ) : (
                            <p></p>
                        )}</div>


                    <div id="pros-cons">
                        {ipoDetails?.prosCons ? (
                            <ProsCons prosCons={ipoDetails.prosCons} />
                        ) : (
                            <p></p>
                        )}
                    </div>
            </div>
            
           

                <div className="p-4">
                <Voting ipoId={id as string}/>
                </div>

            <NewsLetter/>
            <Footer />
       
        </div>
        )}
        </>
    );
}