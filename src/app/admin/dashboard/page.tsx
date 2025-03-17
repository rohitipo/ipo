'use client';

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTachometerAlt, FaFileAlt, FaCog, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { toast } from "react-hot-toast";
import IpoMultiStepForm from "@/app/admin/AddIpo/AddIpo";
import UpdateIpo from "@/app/components/admin/updateComponent/UpdateIpo";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const router = useRouter();

  const handleLogout = (e: any) => {
    router.push('/admin/login');
    e.preventDefault();
    toast.success("Logout Successful!");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed md:static w-64 bg-gray-800 text-white p-5 flex flex-col h-full transition-all duration-300 
          ${isSidebarOpen ? "left-0" : "-left-64"} md:left-0`}
      >
        {/* Close button for mobile */}
        <button
          className="absolute top-4 right-4 text-white md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaTimes size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Admin Panel</h2>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <button
                className={`flex items-center w-full px-4 py-2 rounded-lg transition ${
                  activePage === "Dashboard" ? "bg-blue-500" : "hover:bg-gray-700"
                }`}
                onClick={() => setActivePage("Dashboard")}
              >
                <FaTachometerAlt className="mr-2" />
                Dashboard
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full px-4 py-2 rounded-lg transition ${
                  activePage === "Add IPO" ? "bg-blue-500" : "hover:bg-gray-700"
                }`}
                onClick={() => setActivePage("Add IPO")}
              >
                <FaFileAlt className="mr-2" />
                Add IPO
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full px-4 py-2 rounded-lg transition ${
                  activePage === "Update IPO" ? "bg-blue-500" : "hover:bg-gray-700"
                }`}
                onClick={() => setActivePage("Update IPO")}
              >
                <FaFileAlt className="mr-2" />
                Update IPO
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full px-4 py-2 rounded-lg transition ${
                  activePage === "Settings" ? "bg-blue-500" : "hover:bg-gray-700"
                }`}
                onClick={() => setActivePage("Settings")}
              >
                <FaCog className="mr-2" />
                Settings
              </button>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <button className="mt-auto flex items-center bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition" onClick={handleLogout}>
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 mb-4"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaBars size={24} />
        </button>

        <h1 className="text-3xl font-bold mb-4">{activePage}</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          {activePage === "Dashboard" && <p>Welcome to the Dashboard!</p>}
          {activePage === "Add IPO" && <IpoMultiStepForm/>} {/* Show Add IPO Form */}
          {activePage === "Update IPO" && <UpdateIpo/>}
          {activePage === "Settings" && <p>Adjust your settings here.</p>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
