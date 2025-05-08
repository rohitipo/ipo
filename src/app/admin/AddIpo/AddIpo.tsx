"use client";

import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { toast } from "react-hot-toast";
import SubscriptionForm from "../../components/admin/SubscriptionFrom";
import ObjectiveForm from "../../components/admin/ObjectiveForm";
import GMPForm from "../../components/admin/GmpForm";
import ReservedQuotasForm from "../../components/admin/ReservedQuotaForm";
import MarketLotForm from "../../components/admin/MarketLotForm";
import TimelineForm from "../../components/admin/TimelineForm";
import FundamentalsForm from "../../components/admin/FundamentalsForm";
import RFStatementForm from "../../components/admin/RFStatementForm";
import PromoterHoldingsForm from "../../components/admin/PromoterHoldingsForm";
import ProsConsForm from "../../components/admin/ProsConsForm";

interface Subscription {
    day: string;
    multiplier: number;
  }

  interface PromoterHolding {
    label: string;
    value: string;
  }
  
  

  interface FundamentalEntry {
    label: string;
    value: string;
  }

  interface FinancialEntry {
    metric: string;
    fy2022: string;
    fy2023: string;
    fy2024: string;
  }
  


  interface MarketLotEntry {
    category: string;
    minimum: string;
    maximum: string;
    sharesMin: string;
    sharesMax: string;
    amountMin: string;
    amountMax: string;
  }

  interface TimelineEntry {
    title: string;
    date: string;
  }
  
interface IpoFormData {
  name?: string;
  status?: string;
  openDate?: string;
  closingDate?: string;
  listingDate?: string;
  estimatedMonth?: string; // New field for estimated month
  estimatedYear?: string;
  ipoType?:string;
  priceBand?: string;
  exactPrice?:number;
  faceValue?: string;
  lotSize?: string;
  offerSize?: string;
  issueType?: string;
  listingOn?: string;
  drhpLink?: string;
  rhpLink?: string;
  anchorInvestors?: string;
  listingPrice?: string;
  gain?:number;
  companyDescription?: string;
  subscriptionData?: Subscription[];
  ipoObjectives?: string[]; 
  gmpData?: { date: string; gmp: number }[];
  reservedQuotas?: { category: string; allocation: string }[];
  marketLotData?: MarketLotEntry[]; 
  timelineData?: TimelineEntry[];
  companyFundamentals?: FundamentalEntry[];
  financialData?: FinancialEntry[];
  promoterHoldings?: PromoterHolding[];
  prosCons?: { type: "pro" | "con"; description: string }[];
}

export default function IpoMultiStepForm() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<IpoFormData>({
    name: "",
    status: "",
    openDate: "",
    closingDate: "",
    listingDate: "",
    estimatedMonth: "",// New field for estimated month
    estimatedYear: "",
    ipoType:"",
    priceBand: "",
    exactPrice:0,
    faceValue: "",
    lotSize: "",
    offerSize: "",
    issueType: "",
    listingOn: "",
    drhpLink: "",
    rhpLink: "",
    anchorInvestors: "",
    listingPrice: "",
    gain:0,
    companyDescription: "",
    subscriptionData: [{ day: "", multiplier: 0 }],
    ipoObjectives: [],
    gmpData: [],
    reservedQuotas: [],
    marketLotData: [],
    timelineData: [],
    companyFundamentals: [],
    financialData: [
      { metric: "TOTAL REVENUE", fy2022: "", fy2023: "", fy2024: "" },
      { metric: "TOTAL EXPENSES", fy2022: "", fy2023: "", fy2024: "" },
      { metric: "PROFIT BEFORE TAX", fy2022: "", fy2023: "", fy2024: "" },
      { metric: "TOTAL TAXES", fy2022: "", fy2023: "", fy2024: "" },
      { metric: "NET PROFIT", fy2022: "", fy2023: "", fy2024: "" },
      { metric: "EPS", fy2022: "", fy2023: "", fy2024: "" },
      { metric: "DEBT TO EQUITY", fy2022: "", fy2023: "", fy2024: "" },
      { metric: "EBITDA MARGIN", fy2022: "", fy2023: "", fy2024: "" }
    ],
    promoterHoldings: [{ label: "", value: "" }],
    prosCons: [],
  });


   const editor = useEditor({
      extensions: [StarterKit],
      content: formData.companyDescription,
      onUpdate: ({ editor }) => {
        setFormData((prev) => ({ ...prev, companyDescription: editor.getHTML() }));
      },
    });

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Submission
  const handleSubmit = async () => {
    setIsSubmitting(true); 
    try {
      console.log("Submitting IPO Data:", formData); // Debugging
      
      const response = await fetch("/api/ipo/store", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      
      if (response.ok) {
        toast.success("IPO added successfully!");
        setStep(1);
  
        // Reset form with initial structure
        setFormData({
          name: "",
          status: "",
          openDate: "",
          closingDate: "",
          listingDate: "",
          estimatedMonth: "",// New field for estimated month
          estimatedYear: "",
          ipoType: "",
          priceBand: "",
          exactPrice:0,
          faceValue: "",
          lotSize: "",
          offerSize: "",
          issueType: "",
          listingOn: "",
          drhpLink: "",
          rhpLink: "",
          anchorInvestors: "",
          listingPrice: "",
          gain:0,
          companyDescription: "",
          subscriptionData: [{ day: "", multiplier: 0 }],
          ipoObjectives: [],
          gmpData: [],
          reservedQuotas: [],
          marketLotData: [],
          timelineData: [],
          companyFundamentals: [],
          financialData: [
            { metric: "TOTAL REVENUE", fy2022: "", fy2023: "", fy2024: "" },
            { metric: "TOTAL EXPENSES", fy2022: "", fy2023: "", fy2024: "" },
            { metric: "PROFIT BEFORE TAX", fy2022: "", fy2023: "", fy2024: "" },
            { metric: "TOTAL TAXES", fy2022: "", fy2023: "", fy2024: "" },
            { metric: "NET PROFIT", fy2022: "", fy2023: "", fy2024: "" },
            { metric: "EPS", fy2022: "", fy2023: "", fy2024: "" },
            { metric: "DEBT TO EQUITY", fy2022: "", fy2023: "", fy2024: "" },
            { metric: "EBITDA MARGIN", fy2022: "", fy2023: "", fy2024: "" }
          ],
          promoterHoldings: [{ label: "", value: "" }],
          prosCons: [],
        });
      } else {
        toast.error(result.message || "Failed to add IPO");
      }
    } catch (error: any) {
      console.error("Submission Error:", error);
      toast.error("Error submitting IPO");
    } finally {
      setIsSubmitting(false); // Ensure submitting state is reset
    }
  };
  

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add IPO (Step {step}/3)</h2>

      {/* Step 1: Basic IPO Details */}
      {step === 1 && (
        <div className="space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="IPO Name" className="w-full p-2 border rounded" required/>
          <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="Upcoming">Upcoming</option>
            <option value="LIVE">Live</option>
            <option value="Closed">Closed</option>
          </select>
          
          <label className="block">
                  Open Date:
                  <input
                    type="date"
                    name="openDate"
                    value={formData.openDate}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mt-1"
                  />
                </label>

                <label className="block mt-2">
                  Closing Date:
                  <input
                    type="date"
                    name="closingDate"
                    value={formData.closingDate}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mt-1"
                  />
                </label>

                <label className="block mt-2">
                  Listing Date:
                  <input
                    type="date"
                    name="listingDate"
                    value={formData.listingDate}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mt-1"
                  />
                </label>
                <label className="block mt-2">
                  OR Estimated Month & Year:
                  <div className="flex gap-2">
                    <select
                      name="estimatedMonth"
                      value={formData.estimatedMonth}
                      onChange={handleChange}
                      className="p-2 border rounded w-1/2"
                    >
                      <option value="">Select Month</option>
                      {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(
                        (month) => (
                          <option key={month} value={month}>
                            {month}
                          </option>
                        )
                      )}
                    </select>

                    <input
                      type="number"
                      name="estimatedYear"
                      value={formData.estimatedYear}
                      onChange={handleChange}
                      placeholder="YYYY"
                      className="p-2 border rounded w-1/2"
                    />
                  </div>
                </label>
                <label className="block mt-2">
                  Ipo Type:
          <select name="ipoType" value={formData.ipoType} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="Mainboard">Mainboard</option>
            <option value="NSE SME">NSE SME</option>
            <option value="BSE SME">BSE SME</option>
            <option value="NSE & BSE">NSE & BSE</option>
          </select>
          </label>

          <input type="text" name="priceBand" value={formData.priceBand} onChange={handleChange} placeholder="Price Band" className="w-full p-2 border rounded" />
          <input type="number" name="exactPrice" value={formData.exactPrice} onChange={handleChange} placeholder="Exact Price" className="w-full p-2 border rounded" />
          <input type="text" name="faceValue" value={formData.faceValue} onChange={handleChange} placeholder="Face Value" className="w-full p-2 border rounded" />
          <input type="text" name="lotSize" value={formData.lotSize} onChange={handleChange} placeholder="Lot Size" className="w-full p-2 border rounded" />
          <input type="text" name="offerSize" value={formData.offerSize} onChange={handleChange} placeholder="Offer Size" className="w-full p-2 border rounded" />
          <select name="issueType" value={formData.issueType} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="Fresh">Fresh</option>
            <option value="Offer for Sale">Offer for Sale</option>
            <option value="Fresh/Offer for Sale">Fresh/Offer for Sale</option>
            </select>
          <input type="text" name="listingOn" value={formData.listingOn} onChange={handleChange} placeholder="Listing On" className="w-full p-2 border rounded" />
          <input type="text" name="drhpLink" value={formData.drhpLink} onChange={handleChange} placeholder="DRHP Link" className="w-full p-2 border rounded" />
          <input type="text" name="rhpLink" value={formData.rhpLink} onChange={handleChange} placeholder="RHP Link" className="w-full p-2 border rounded" />
          <input type="text" name="anchorInvestors" value={formData.anchorInvestors} onChange={handleChange} placeholder="Anchor Investors" className="w-full p-2 border rounded" />
          <input type="text" name="listingPrice" value={formData.listingPrice} onChange={handleChange} placeholder="Listing Price" className="w-full p-2 border rounded" />
          <label className="block mt-2">
            Ipo Gain:
          <input type="number" name="gain" value={formData.gain} onChange={handleChange} placeholder="Gain" className="w-full p-2 border rounded" />
          </label>
          <button onClick={() => setStep(2)} className="w-full bg-blue-500 text-white p-2 rounded">Next</button>
          
        </div>
      )}

      {/* Step 2: Financial Data & Fundamentals */}
      {step === 2 && (
        <div className="space-y-4">
          <SubscriptionForm
  subscriptionData={formData.subscriptionData || []} // Ensure it is always an array
  setSubscriptionData={(newData) =>
    setFormData((prev) => ({
      ...prev,
      subscriptionData: Array.isArray(newData) ? newData : [], // Ensure it's an array
    }))
  }
/>
<label className="block mt-2">
Company Description:
<div className="border rounded p-2">
        <EditorContent editor={editor} className="bg-white min-h-[150px] p-2 rounded" />
      </div></label>
            <ObjectiveForm
            ipoObjectives={formData.ipoObjectives || []} // Ensure it is always an array
            setIpoObjectives={(newData) =>
                setFormData((prev) => ({
                ...prev,
                ipoObjectives: Array.isArray(newData) ? newData : [], // Ensure it's an array
                }))
            }
            />
            <GMPForm
                gmpData={formData.gmpData || []}
                setGmpData={(newData) =>
                    setFormData((prev) => ({
                    ...prev,
                    gmpData: Array.isArray(newData) ? newData : [],
                    }))
                }
                />
                <ReservedQuotasForm
                    quotas={formData.reservedQuotas || []}
                    setQuotas={(newData) =>
                        setFormData((prev) => ({
                        ...prev,
                        reservedQuotas: Array.isArray(newData) ? newData : [],
                        }))
                    }
                    />

          <button onClick={() => setStep(1)} className="w-full bg-gray-500 text-white p-2 rounded">Back</button>
          <button onClick={() => setStep(3)} className="w-full bg-blue-500 text-white p-2 rounded">Next</button>
        </div>
      )}

      {/* Step 3: Promoter Holdings, Market Lot, IPO Objectives */}
      {step === 3 && (
        <div className="space-y-4">
            <MarketLotForm
                marketLotData={formData.marketLotData || []}
                setMarketLotData={(newData) =>
                    setFormData((prev) => ({
                    ...prev,
                    marketLotData: Array.isArray(newData) ? newData : [],
                    }))
                }
                />
                <TimelineForm
                    timelineData={formData.timelineData || []}
                    setTimelineData={(data) => setFormData((prev) => ({ ...prev, timelineData: data }))}
                    />

                <FundamentalsForm
                fundamentals={formData.companyFundamentals || []}
                setFundamentals={(newData) =>
                    setFormData((prev) => ({
                    ...prev,
                    companyFundamentals: Array.isArray(newData) ? newData : [],
                    }))
                }
                />
             <RFStatementForm
                financialData={formData.financialData || []}
                setFinancialData={(newData) =>
                  setFormData((prev) => ({
                    ...prev,
                    financialData: Array.isArray(newData) ? newData : [],
                  }))
                }
              />


                  
                <PromoterHoldingsForm
                  promoterHoldings={formData.promoterHoldings || [{ label: "", value: "" }]}
                  setPromoterHoldings={(newData) =>
                    setFormData((prev) => ({
                      ...prev,
                      promoterHoldings: Array.isArray(newData) ? newData : [],
                    }))
                  }
                />

            <ProsConsForm
                  prosCons={formData.prosCons || []}
                  setProsCons={(newData) =>
                    setFormData((prev) => ({
                      ...prev,
                      prosCons: Array.isArray(newData) ? newData : [],
                    }))
                  }
                />

          
          <button onClick={() => setStep(2)} className="w-full bg-gray-500 text-white p-2 rounded">Back</button>
          <button onClick={handleSubmit} className={`w-full p-2 rounded ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"} text-white`}
          >{isSubmitting ? "Submitting..." : "Submit"}</button>
        </div>
      )}
    </div>
  );
}
