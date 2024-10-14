/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Table } from "flowbite-react";
import proximatefiber from "../assets/proximate.json";

const ProximateFiber = ({ setClickedProximateFiber }) => {
  const [sortField, setSortField] = useState(null); // Track the field to sort by
  const [sortOrder, setSortOrder] = useState("desc"); // Track sorting order (asc or desc)

  // Function to sort the data
  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "desc" ? "asc" : "desc"; // Toggle between asc and desc
    setSortField(field);
    setSortOrder(order);
  };

  const sortedData = [...proximatefiber].sort((a, b) => {
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
              onClick={() => handleSort("Moisture")} // Sort by Thiamine (B1)
            >
              Moisture
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Protein")} // Sort by Riboflavin (B2)
            >
              Protein
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("ASH")} // Sort by Niacin (B3)
            >
              ASH{" "}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Total_Fat")} // Sort by Pantothenic Acid (B5)
            >
              Total Fat
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Total")} // Sort by Total (B6)
            >
              Total
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Dietary_Fibre_Insoluble")} // Sort by Biotin (B7)
            >
              Dietary Fibre Insoluble
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Dietary_Fibre_Soluble")} // Sort by Total Folates (B9)
            >
              Dietary Fibre Soluble
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Carbohydrate")} // Sort by Total Ascorbic Acid
            >
              Carbohydrate
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Energy")} // Sort by Total Ascorbic Acid
            >
              Energy
            </Table.HeadCell>
          </Table.Head>

          <Table.Body className="h-full">
            {sortedData.map((pxf, id) => (
              <Table.Row key={id} className="border border-slate-400">
                {/* Fixed SI No */}
                <Table.Cell className="border border-slate-400  bg-white w-[70px]">
                  {id + 1}
                </Table.Cell>

                {/* Fixed Food Code */}
                <Table.Cell className="border border-slate-400 sticky left-0 bg-white text-green-800 w-[80px]">
                  {pxf.Food_Code}
                </Table.Cell>

                {/* Fixed Food Name */}
                <Table.Cell
                  className="border border-slate-400 sticky left-[55px] md:left-[70px] bg-white cursor-pointer w-[150px]"
                  onClick={() => setClickedProximateFiber(pxf)}
                >
                  {pxf.Food_Name}
                </Table.Cell>

                {/* Scrollable columns */}
                <Table.Cell className="border border-slate-400">
                  {pxf.No_of_Regions}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {pxf.Moisture}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {pxf.Protein}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {pxf.ASH}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {pxf.Total_Fat}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {pxf.Total}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {pxf.Dietary_Fibre_Insoluble}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {pxf.Dietary_Fibre_Soluble}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {pxf.Carbohydrate}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {pxf.Energy}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ProximateFiber;
