/* eslint-disable react/prop-types */
// src/components/SidebarComp.jsx
import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import itemdata from "../assets/tableheading.json";

const SidebarComp = ({
  setSelectedSidebarItem,
  closeSidebar,
  tablemenudetails,
  setIsNavbarDropdownOpen,
}) => {
  const [openCollapse, setOpenCollapse] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (collapseTitle, submenuKey, itemLabel, itemData) => {
    setOpenCollapse(openCollapse === collapseTitle ? null : collapseTitle);
    setSelectedItem(submenuKey);
    setSelectedSidebarItem(itemData); // Update the selected item

    closeSidebar(); // Close sidebar after selecting an item for mobile view
    setIsNavbarDropdownOpen(false); // Close Navbar dropdown when Sidebar is used
  };

  return (
    <div className="md:mt-0 h-[75vh] flex flex-col overflow-y-auto relative">
      {/* absolute inset-0 z-10 bg-white bg-opacity-80 p-4 */}
      <Sidebar className="w-full absolute">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {itemdata.heading_details.map((heading, id) => (
              <Sidebar.Collapse
                key={id}
                label={
                  <span className="whitespace-normal break-words">
                    {heading.Title}
                  </span>
                }
                open={openCollapse === heading.Title}
                onClick={() =>
                  setOpenCollapse(
                    openCollapse === heading.Title ? null : heading.Title
                  )
                }
              >
                {Object.keys(heading)
                  .filter(
                    (key) =>
                      key.startsWith("submenu") && heading[key].trim() !== ""
                  )
                  .map((submenuKey, idx) => (
                    <Sidebar.Item
                      key={idx}
                      className="cursor-pointer"
                      onClick={() =>
                        handleItemClick(
                          heading.Title,
                          submenuKey,
                          heading[submenuKey],
                          tablemenudetails[heading.Title][heading[submenuKey]]
                        )
                      }
                      style={{
                        backgroundColor:
                          selectedItem === submenuKey
                            ? "#0000ff"
                            : "transparent",
                        color:
                          selectedItem === submenuKey ? "white" : "inherit",
                        fontWeight:
                          selectedItem === submenuKey ? "bold" : "normal",
                      }}
                    >
                      {heading[submenuKey]}
                    </Sidebar.Item>
                  ))}
              </Sidebar.Collapse>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};
export default SidebarComp;
