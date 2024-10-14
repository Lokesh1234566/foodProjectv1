// src/App.jsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import tablemenudetails from "./assets/tablemenudetails.json";
import ContentComponent from "./components/ContentComponent";
import SidebarComp from "./components/SidebarComp";
import Home from "./pages/Home";
import Starch from "./pages/Starch";
import Carotenoids from "./pages/Carotenoids";
import OrganicAcid from "./pages/OrganicAcid";
import WaterSoluble from "./pages/WaterSoluble";
import FooterComp from "./components/FooterComp";
import ProximateFiber from "./pages/ProximateFiber";
import FatSoluble from "./pages/FatSoluble";
import MineralsElements from "./pages/MineralsElements";
import FattyAcid from "./pages/FattyAcid";
import AminoAcid from "./pages/AminoAcid";
import Polyphenols from "./pages/Polyphenols";
import OligophySap from "./pages/OligophySap";
import FattyAcidOilsFats from "./pages/FattyAcidOilsFats";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarDropdownOpen, setIsNavbarDropdownOpen] = useState(false); // New state for Navbar dropdown
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const [activeTable, setActiveTable] = useState("home");
  const [clickedWaterSoluble, setClickedWaterSoluble] = useState(null);
  const [clickedProximateFiber, setClickedProximateFiber] = useState(null);
  const [clickedCarotenoids, setClickedCarotenoids] = useState(null);
  const [clickedMineralsElem, setClickedMineralsElem] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      setIsNavbarDropdownOpen(false); // Close Navbar dropdown when Sidebar opens
    }
  };

  const handleSidebarItemClick = (itemData) => {
    setSelectedItem(itemData);
    navigate("/content");
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (activeTable === "home") {
      navigate("/");
    }
  }, [activeTable, navigate]);

  return (
    <div className="h-screen flex flex-col">
      <NavbarComp
        toggleSidebar={toggleSidebar}
        setActiveTable={setActiveTable}
        isNavbarDropdownOpen={isNavbarDropdownOpen}
        setIsNavbarDropdownOpen={setIsNavbarDropdownOpen}
        setIsSidebarOpen={setIsSidebarOpen} // Pass setter to close Sidebar from Navbar
      />
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-30 md:z-0 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            md:translate-x-0 md:static md:inset-0
          `}
        >
          <SidebarComp
            setSelectedSidebarItem={handleSidebarItemClick}
            closeSidebar={() => setIsSidebarOpen(false)}
            tablemenudetails={tablemenudetails}
            setIsNavbarDropdownOpen={setIsNavbarDropdownOpen} // Pass setter to close Navbar dropdown from Sidebar
          />
        </div>

        {/* Background overlay on mobile when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black opacity-50 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Main content */}
        <div className="flex-1 bg-gray-100 p-4 overflow-y-auto h-[78vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/content"
              element={<ContentComponent selectedItem={selectedItem} />}
            />
            <Route
              path="/proximatedfiber"
              element={
                <ProximateFiber
                  setClickedProximateFiber={setClickedProximateFiber}
                />
              }
            />
            <Route
              path="/watersoluble"
              element={
                <WaterSoluble setClickedWaterSoluble={setClickedWaterSoluble} />
              }
            />
            <Route path="/fatsoluble" element={<FatSoluble />} />
            <Route
              path="/carotenoids"
              element={
                <Carotenoids setClickedCarotenoids={setClickedCarotenoids} />
              }
            />
            <Route
              path="/mineralselements"
              element={
                <MineralsElements
                  setClickedMineralsElem={setClickedMineralsElem}
                />
              }
            />
            <Route path="/starch" element={<Starch />} />
            <Route path="/fattyacid" element={<FattyAcid />} />
            <Route path="/aminoacid" element={<AminoAcid />} />
            <Route path="/organicacid" element={<OrganicAcid />} />
            <Route path="/polyphenols" element={<Polyphenols />} />
            <Route path="/oligophysap" element={<OligophySap />} />
            <Route path="/fattyacidoilsfats" element={<FattyAcidOilsFats />} />
          </Routes>
        </div>
      </div>
      <FooterComp
        clickedWaterSoluble={clickedWaterSoluble}
        clickedProximateFiber={clickedProximateFiber}
        clickedCarotenoids={clickedCarotenoids}
        clickedMineralsElem={clickedMineralsElem}
      />
    </div>
  );
};

// Wrap App component with Router
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
