/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Table } from "flowbite-react";
import mineralselements from "../assets/mineralselements.json";

const MineralsElements = ({ setClickedMineralsElem }) => {
  const [sortField, setSortField] = useState(null); // Track the field to sort by
  const [sortOrder, setSortOrder] = useState("desc"); // Track sorting order (asc or desc)

  // Function to sort the data
  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "desc" ? "asc" : "desc"; // Toggle between asc and desc
    setSortField(field);
    setSortOrder(order);
  };

  const sortedData = [...mineralselements].sort((a, b) => {
    if (!sortField) return 0; // If no sort field is selected, return original order
    const valA = parseFloat(a[sortField]) || 0; // Convert the value to float if it's numeric
    const valB = parseFloat(b[sortField]) || 0; // Convert the value to float if it's numeric

    if (sortOrder === "asc") {
      return valA - valB; // Ascending order for numbers
    } else {
      return valB - valA; // Descending order for numbers
    }
  });
  return (
    <div className="overflow-x-auto h-[78vh]">
      <div className="min-w-full border border-gray-200 sm:rounded-lg">
        <Table className="table-auto w-full text-sm text-left text-gray-500 border-collapse">
          <Table.Head className="bg-gray-50 border border-slate-500 text-xs sm:text-sm sticky top-0 z-20 md:z-30">
            {/* Fixed SI No */}
            <Table.HeadCell className="border border-slate-400  bg-blue-400 text-black w-[70px] ">
              SI No
            </Table.HeadCell>

            {/* Fixed Food Code */}
            <Table.HeadCell
              className="border border-slate-400 sticky left-0  top-0 bg-blue-400 text-black cursor-pointer w-[80px]"
              onClick={() => handleSort("Food_Code")} // Enable sorting on Food Code
            >
              Food Code{" "}
            </Table.HeadCell>

            {/* Fixed Food Name */}
            <Table.HeadCell
              className="border border-slate-400 sticky left-[55px] md:left-[70px] top-0 bg-blue-400 text-black cursor-pointer w-[150px] "
              onClick={() => handleSort("Food_Name")} // Enable sorting on Food Name
            >
              Food Name{" "}
            </Table.HeadCell>

            {/* Scrollable columns */}
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("No_of_Regions")}
            >
              No of Regions{" "}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Aluminium")} // Sort by Thiamine (B1)
            >
              Aluminium
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Arsenic")} // Sort by Riboflavin (B2)
            >
              Arsenic
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Cadmium")} // Sort by Niacin (B3)
            >
              Cadmium
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Calcium")} // Sort by Pantothenic Acid (B5)
            >
              Calcium
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Chromium")} // Sort by Total (B6)
            >
              Chromium
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Cobalt")} // Sort by Biotin (B7)
            >
              Cobalt
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Copper")} // Sort by Total Folates (B9)
            >
              Copper
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Iron")} // Sort by Total Ascorbic Acid
            >
              Iron
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Lead")} // Sort by Total Ascorbic Acid
            >
              Lead
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Lithium")} // Sort by Total Ascorbic Acid
            >
              Lithium
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Magnesium")} // Sort by Total Ascorbic Acid
            >
              Magnesium
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Manganese")} // Sort by Total Ascorbic Acid
            >
              Manganese
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Mercury")} // Sort by Total Ascorbic Acid
            >
              Mercury
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Molebdenum")} // Sort by Total Ascorbic Acid
            >
              Molebdenum
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Nickel")} // Sort by Total Ascorbic Acid
            >
              Nickel
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Phosphorus")} // Sort by Total Ascorbic Acid
            >
              Phosphorus
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Potassium")} // Sort by Total Ascorbic Acid
            >
              Potassium
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Selenium")} // Sort by Total Ascorbic Acid
            >
              Selenium
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Sodium")} // Sort by Total Ascorbic Acid
            >
              Sodium
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Zinc")} // Sort by Total Ascorbic Acid
            >
              Zinc
            </Table.HeadCell>
          </Table.Head>

          <Table.Body className="h-full">
            {sortedData.map((me, id) => (
              <Table.Row key={id} className="border border-slate-400">
                {/* Fixed SI No */}
                <Table.Cell className="border border-slate-400  bg-white w-[70px]">
                  {id + 1}
                </Table.Cell>

                {/* Fixed Food Code */}
                <Table.Cell className="border border-slate-400 sticky left-0 bg-white text-green-800 w-[80px]">
                  {me.Food_Code}
                </Table.Cell>

                {/* Fixed Food Name */}
                <Table.Cell
                  className="border border-slate-400 sticky left-[55px] md:left-[70px] bg-white cursor-pointer w-[150px]"
                  onClick={() => setClickedMineralsElem(me)}
                >
                  {me.Food_Name}
                </Table.Cell>

                {/* Scrollable columns */}
                <Table.Cell className="border border-slate-400">
                  {me.No_of_Regions}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Aluminium}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Arsenic}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Cadmium}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Calcium}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Chromium}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Cobalt}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Copper}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Iron}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Lead}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Lithium}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Magnesium}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Manganese}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Mercury}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Molebdenum}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Nickel}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Phosphorus}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Potassium}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Selenium}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Sodium}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {me.Zinc}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default MineralsElements;
