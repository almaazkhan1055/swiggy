import React from "react";

const Restaurants = ({ RestrauntsData }) => {
  return (
    <div className="px-[190px] my-5">
      <h2 className="sliderData font-[800] text-2xl">
        {RestrauntsData?.title}
      </h2>
    </div>
  );
};

export default Restaurants;
