/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// src/components/NavbarComp.jsx
import React, { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

const NavbarComp = ({
  toggleSidebar,
  setActiveTable,
  isNavbarDropdownOpen,
  setIsNavbarDropdownOpen,
  setIsSidebarOpen, // Receive setter to close Sidebar from Navbar
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLabel, setActiveLabel] = useState("Nutrition"); // New state for active label
  const location = useLocation();
  const navigate = useNavigate();

  const routes = [
    { path: "proximatedfiber", label: "Proximate Fiber" },
    { path: "watersoluble", label: "Water Soluble" },
    { path: "fatsoluble", label: "Fat Soluble" },
    { path: "carotenoids", label: "Carotenoids" },
    { path: "mineralselements", label: "Mineral Elements" },
    { path: "starch", label: "Starch and Sugars" },
    { path: "fattyacid", label: "Fatty Acid" },
    { path: "aminoacid", label: "Amino Acid" },
    { path: "organicacid", label: "Organic Acid" },
    { path: "polyphenols", label: "Polyphenols" },
    { path: "oligophysap", label: "Oligosaccharides Phytosterols" },
    { path: "fattyacidoilsfats", label: "Fatty Acid Oils Fats" },
  ];

  useEffect(() => {
    const currentPath = location.pathname.replace("/", "");
    const foundRoute = routes.find((route) => route.path === currentPath);
    setActiveTable(foundRoute ? foundRoute.path : "proximatedfiber");
    setActiveLabel(foundRoute ? foundRoute.label : "Nutrition"); // Update active label
  }, [location.pathname, setActiveTable]);

  const handleLinkClick = (path, label) => {
    setActiveTable(path);
    setActiveLabel(label); // Update active label on link click
    navigate(`/${path}`);
    setIsNavbarDropdownOpen(false); // Close Navbar dropdown when a link is clicked
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
    setIsNavbarDropdownOpen(!isNavbarDropdownOpen);
    if (!isNavbarDropdownOpen) {
      setIsSidebarOpen(false); // Close Sidebar when Navbar dropdown opens
    }
  };

  return (
    <nav className="bg-blue-200 shadow-md p-4 flex justify-between items-center h-[7vh]">
      <div className="flex items-center">
        <button
          className="text-black p-2 md:hidden lg:hidden"
          onClick={toggleSidebar}
        >
          <HiMenu className="w-6 h-6" />
        </button>
        <span className="self-center whitespace-normal text-sm md:text[16px] font-semibold ml-4 max-w-[150px] overflow-hidden text-ellipsis">
          {activeLabel} {/* Display the active label here */}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-black px-4 py-2 rounded">
          <a href="/" onClick={() => setActiveTable("home")}>
            Home
          </a>
        </span>
      </div>

      <div className="relative flex">
        <button
          onClick={handleDropdownToggle} // Toggle dropdown and close Sidebar
          className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-300 hover:bg-gray-700 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {isNavbarDropdownOpen && (
          <div className="absolute right-0 mt-14 w-48 bg-slate-200 rounded-md shadow-lg cursor-pointer overflow-y-auto max-h-80 z-50">
            {routes.map(({ path, label }) => (
              <a
                key={path}
                onClick={() => handleLinkClick(path, label)} // Pass label to handleLinkClick
                className={`text-slate-600 hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium whitespace-normal ${
                  location.pathname === `/${path}`
                    ? "underline text-blue-300"
                    : ""
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarComp;
