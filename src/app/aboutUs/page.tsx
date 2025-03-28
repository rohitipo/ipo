import { FC } from "react";
import { Briefcase, LineChart, TrendingUp } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";

const AboutUs: FC = () => {
  return (
    <div>
        <Header/>
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-200 text-gray-800 py-16 px-6 md:px-12 flex items-center justify-center">
      <div className="w-full max-w-6xl text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-8">About Us</h1>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold text-blue-600">IPO Analyser</span>, we bring you the most comprehensive and
          up-to-date information on Initial Public Offerings (IPOs). Our platform is designed to help investors make
          informed decisions by providing detailed insights into every aspect of an IPO.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-600 bg-opacity-10 rounded-lg backdrop-blur-md">
            <Briefcase className="h-12 w-12 text-blue-800 mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">Comprehensive Details</h3>
            <p className="text-gray-900 mt-2 text-sm">
              Covering offer details, company background, financials, and shareholding patterns.
            </p>
          </div>
          <div className="p-8 bg-white bg-opacity-10 rounded-lg backdrop-blur-md">
            <LineChart className="h-12 w-12 text-green-800 mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">Live Market Data</h3>
            <p className="text-gray-900 mt-2 text-sm">
              Real-time IPO allotment updates, Grey Market Premium tracking, and estimated profits.
            </p>
          </div>
          <div className="p-8 bg-gray-600 bg-opacity-10 rounded-lg backdrop-blur-md">
            <TrendingUp className="h-12 w-12 text-yellow-800 mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">Investment Insights</h3>
            <p className="text-gray-900 mt-2 text-sm">
              Expert analysis to help investors maximize returns before listing day.
            </p>
          </div>
        </div>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-12">
          Our mission is to simplify the IPO investment process by delivering accurate, real-time data and expert insights.
          Whether you are a seasoned investor or new to the IPO market, <span className="font-semibold text-blue-600">IPO Analyser </span>
          ensures you have the right information at your fingertips to maximize your investment potential.
        </p>
        <p className="text-2xl font-bold text-blue-600 mt-8">
          Stay ahead with IPO Analyser — your trusted partner in IPO analysis and investment strategy.
        </p>
      </div>
    </div>
    <NewsLetter/>
    <Footer/>
    </div>
  );
};

export default AboutUs;
