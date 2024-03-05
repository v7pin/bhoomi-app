import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faTimes } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar.jsx";
import TopBar from "./TopBar";
import SmartGarden from "./Smartgarden.jsx";
import Chatbot2 from "./Chatbot2.jsx";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative flex flex-col h-screen bg-gray-100">

      {/* Top Bar */}
      <TopBar toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">

        {/* Sidebar (Hidden by default on small screens) */}
        <div className={`md:flex ${isSidebarOpen ? 'flex' : 'hidden'}`}>
          <SideBar />
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <SmartGarden />
        </div>
      </div>

      {/* Hamburger Icon (Visible only on small screens) */}
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed bottom-4 left-4 p-2 bg-gray-300 rounded-full z-10"
        >
          <FontAwesomeIcon icon={faLeaf} className="text-green-500" />
        </button>
      )}

      {/* Close Icon (Visible only when sidebar is open) */}
      {isSidebarOpen && (
        <button
          onClick={closeSidebar}
          className="lg:hidden fixed bottom-4 left-4 p-2 bg-gray-300 rounded-full z-10"
        >
          <FontAwesomeIcon icon={faTimes} className="text-red-500" />
        </button>
      )}

      {/* Chatbot */}
      <Chatbot2 className="fixed bottom-4 right-4" />
    </div>
  );
};

export default Dashboard;
