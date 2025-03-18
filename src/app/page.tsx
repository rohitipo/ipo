import Header from "./components/Header";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";
import OngoingIPO from "./components/OngoingIpo";
import ArticleHome from "./components/ArticleHome";
import Footer from "./components/Footer";



export const metadata = {
  title: "IpoAnalyser - Your Guide to IPOs (NSE, SME, BSE, Mainboard)",
  description: "Stay ahead in the IPO market with IpoAnalyser. Get real-time insights on NSE, SME, BSE, and Mainboard IPOs. Check allotment status, subscription details, GMP, listing trends, and expert tips.",
  keywords: "Indian IPOs, NSE IPO, BSE IPO, SME IPO, Mainboard IPO, IPO Analysis, IPO Subscription, Grey Market Premium, IPO Allotment Status, IPO Investment, IPO Calendar, IPO Reviews, IPO Listings, Apply for IPOs, IPO Grey Market, IPO GMP, Upcoming IPOs, Latest IPO News, IPO Performance, IPO Price Band, IPO Issue Size, IPO Subscription Status, IPO Application Process, IPO Listing Date, IPO Valuation, IPO Funding, IPO Prospectus, IPO Market Trends, IPO Advice, IPO Oversubscription, IPO Roadmap, IPO Investment Strategy, IPO Rating, Best IPOs to Apply, IPO Demand, IPO Shareholding, IPO Market Watch, IPO Registrar, IPO Broker, IPO Application Tips, Stock Market IPOs, IPO Opening Date, IPO Closing Date, IPO Refund Process, IPO Allotment Link, IPO FAQs, IPO for Beginners, How to Apply for IPO, IPO Analysis Reports, IPO News Updates, IPO Market Sentiment, IPO Listing Gains, IPO Lock-in Period, IPO Share Price, IPO Fundamentals, IPO Subscription Data, IPO Success Rate, IPO Subscription Multiplier, IPO Regulations in India, SEBI IPO Guidelines, IPO Listing Strategy",
  openGraph: {
    title: "IpoAnalyser - Complete Analysis of IPOs (NSE, SME, BSE, Mainboard)",
    description: "Track all Indian IPOs including NSE, SME, BSE, and Mainboard. Get expert analysis, IPO subscription status, Grey Market Premium (GMP), allotment tips, and the latest IPO news.",
    url: "https://ipoanalyser.in",
    siteName: "IpoAnalyser",
    images: [
      {
        url: "https://ipoanalyser.in/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IpoAnalyser - IPO Analysis",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ipoanalyser",
    title: "IpoAnalyser - IPO Analysis & Insights",
    description: "Stay updated with NSE, SME, BSE, and Mainboard IPOs. Get subscription details, allotment status, GMP, expert analysis, and tips for investing in IPOs.",
    images: ["https://ipoanalyser.in/images/og-image.jpg"],
  },
};




export default function Home() {

  return (
    <div>
      
      <Header/>
      <Hero/>
      <OngoingIPO/>
      <ArticleHome/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}
