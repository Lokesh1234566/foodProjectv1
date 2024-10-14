/* eslint-disable react/prop-types */
import React from "react";

const FooterComp = ({
  clickedProximateFiber,
  clickedWaterSoluble,
  clickedOrganicAcid,
  clickedCarotenoids,
  clickedStarch,
  activeTable,
}) => {
  const renderDetails = (entity, entityType) => {
    if (entity) {
      return (
        <div className="flex flex-wrap text-xs sm:text-sm mt-2 gap-1 flex-col sm:flex-row sm:gap-3 md:gap-2 md:flex-col h-[15]">
          <p className="text-blue-500">
            <span className="font-bold text-green-900">LangAll:</span>{" "}
            {entity.Langall}
          </p>
        </div>
      );
    } else {
      return <p>No {entityType} selected yet</p>;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-300 md:p-1 h-[20vh]">
      <div className="mb-1 ml-2 h-[15vh] sm:h-[13vh] md:h-[13vh]">
        {clickedProximateFiber ? (
          renderDetails(clickedProximateFiber, "pxf")
        ) : clickedWaterSoluble ? (
          renderDetails(clickedWaterSoluble, "wsv")
        ) : clickedOrganicAcid ? (
          renderDetails(clickedOrganicAcid, "oa")
        ) : clickedCarotenoids ? (
          renderDetails(clickedCarotenoids, "carot")
        ) : clickedStarch ? (
          renderDetails(clickedStarch, "sv")
        ) : (
          <p>No entity selected yet</p>
        )}
      </div>

      <div className="font-bold text-slate-700 text-sm md:text-lg">
        <marquee>Welcome to {activeTable} website @ 2024</marquee>
      </div>
    </div>
  );
};

export default FooterComp;
