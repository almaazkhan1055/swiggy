import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const RestrauntCard = ({ RestrauntCardData }) => {
  let images = RestrauntCardData?.gridElements?.infoWithStyle?.restaurants;
  console.log("images", images);

  const [scrollAmount, setScrollAmount] = useState(0);

  const handleLeftScroll = () => {
    if (scrollAmount === 0) {
      return;
    } else if (scrollAmount === -190) {
      return;
    } else if (scrollAmount === -2210) {
      setScrollAmount((prev) => prev + 300);
    } else {
      setScrollAmount((prev) => prev + 300);
    }
  };

  const handleRightScroll = () => {
    if (scrollAmount === -4200) {
      setScrollAmount((prev) => prev - 350);
    } else if (scrollAmount === -3300) {
      return;
    } else {
      setScrollAmount((prev) => prev - 300);
    }
  };

  return (
    <div className="px-[190px] my-5 ">
      <div className="flex items-center justify-between">
        <h2 className="sliderData font-[800] text-2xl">
          {RestrauntCardData?.header?.title}
        </h2>
        <div className="flex items-center gap-3">
          <FaArrowCircleLeft
            className={`h-[34px] w-[32px] ${
              scrollAmount === 0 ? "text-gray-100" : "text-gray-400"
            } cursor-pointer`}
            onClick={handleLeftScroll}
          />
          <FaArrowCircleRight
            className={`h-[34px] w-[32px] ${
              scrollAmount === -3300 ? "text-gray-100" : "text-gray-400"
            } cursor-pointer`}
            onClick={handleRightScroll}
          />
        </div>
      </div>

      <div className="flex items-center overflow-hidden border-b-2 border-gray-100 pb-12 my-5">
        <div
          className={`flex transition-transform duration-500 ease-in-out transform`}
          style={{
            transform: `translateX(${scrollAmount}px)`,
          }}
        >
          {images &&
            images.map((obj) => {
              return (
                <div
                  key={obj.id}
                  className="min-w-[273px] h-[182px] object-contain mx-4 cursor-pointer"
                >
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${obj?.info?.cloudinaryImageId}`}
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="mt-2">
                    <h2 className="font-bold text-md truncate text-ellipsis">
                      {obj?.info?.name}
                    </h2>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RestrauntCard;
