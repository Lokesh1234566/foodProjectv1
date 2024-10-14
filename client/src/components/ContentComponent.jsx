/* eslint-disable react/prop-types */
// src/components/ContentComponent.jsx
import React from "react";

const ContentComponent = ({ selectedItem }) => {
  if (!selectedItem || !selectedItem[0]) {
    return <div>No content available</div>;
  }

  // Extracting paragraph from the selected item data
  const { paragraph } = selectedItem[0];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">
        {selectedItem[0].title || "Details"}
      </h2>
      <div
        dangerouslySetInnerHTML={{ __html: paragraph }} // Rendering HTML content
        className="mt-1 text-gray-700"
      />
    </div>
  );
};

export default ContentComponent;
