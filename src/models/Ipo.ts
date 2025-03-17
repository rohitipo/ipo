// ipoService.ts (Firebase CRUD Operations)
import { ref, set, push, get, update, remove } from "firebase/database";
import { database } from "../lib/firebaseConfig";

// IPO Interface
interface Subscription {
  day?: string;
  multiplier?: number;
}

interface GMP {
  date?: string;
  gmp?: number;
}

interface ReservedQuota {
  category?: string;
  allocation?: string;
}

interface MarketLot {
  category?: string;
  minimum?: string;
  maximum?: string;
  sharesMin?: string;
  sharesMax?: string;
  amountMin?: string;
  amountMax?: string;
}

interface Timeline {
  title?: string;
  date?: string;
}

interface CompanyFundamental {
  label?: string;
  value?: string;
}

interface FinancialData {
  metric?: string;
  fy2022?: string;
  fy2023?: string;
  fy2024?: string;
}

interface PromoterHolding {
  label?: string;
  value?: string;
}

interface ProsCons {
  type?: "pro" | "con";
  description?: string;
}

interface Votes {
  bearish: number;
  bullish: number;
  superBullish: number;
}

interface Ipo {
  id?: string;
  name?: string;
  status?: string;
  openDate?: string;
  closingDate?: string;
  listingDate?: string;
  estimatedMonth?: string; // New field for estimated month
  estimatedYear?: string;
  ipoType?: string;
  priceBand?: string;
  faceValue?: string;
  lotSize?: string;
  offerSize?: string;
  issueType?: string;
  listingOn?: string;
  drhpLink?: string;
  rhpLink?: string;
  listingPrice?: string;
  gain?:number;
  anchorInvestors?: string;
  companyDescription?: string;
  subscriptionData?: Subscription[];
  ipoObjectives?: string[];
  gmpData?: GMP[];
  reservedQuotas?: ReservedQuota[];
  marketLotData?: MarketLot[];
  timelineData?: Timeline[];
  companyFundamentals?: CompanyFundamental[];
  financialData?: FinancialData[];
  promoterHoldings?: PromoterHolding[];
  prosCons?: ProsCons[];
  votes?: Votes;
}

// Function to Create a New IPO Entry
export const addIpo = async (ipo: Ipo) => {
  const ipoRef = ref(database, "ipos");
  const newIpoRef = push(ipoRef);
  await set(newIpoRef, { 
    id: newIpoRef.key, 
    ...ipo, 
    votes: ipo.votes || { bearish: 0, bullish: 0, superBullish: 0 } // ✅ Ensure votes always exist
  });
  return newIpoRef.key;
};

// Function to Get All IPOs
export const getIpos = async () => {
  const ipoRef = ref(database, "ipos");
  const snapshot = await get(ipoRef);
  return snapshot.exists() ? snapshot.val() : {};
};

// Function to Get a Single IPO by ID
export const getIpoById = async (id: string) => {
  const ipoRef = ref(database, `ipos/${id}`);
  const snapshot = await get(ipoRef);
  return snapshot.exists() ? snapshot.val() : null;
};

// Function to Update an IPO
export const updateIpo = async (id: string, updatedData: Partial<Ipo>) => {
  const ipoRef = ref(database, `ipos/${id}`);
  await update(ipoRef, updatedData);
};

// Function to Delete an IPO
export const deleteIpo = async (id: string) => {
  const ipoRef = ref(database, `ipos/${id}`);
  await remove(ipoRef);
};
