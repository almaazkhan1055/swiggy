import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const TopDishCarousel = ({ topDishCarouselData }) => {
  const [scrollAmount, setScrollAmount] = useState(0);

  let data = topDishCarouselData?.imageGridCards?.info;

  const handleLeftScroll = () => {
    if (scrollAmount === 0) {
      return;
    } else if (scrollAmount === -190) {
      return;
    } else if (scrollAmount === -2210) {
      setScrollAmount((prev) => prev + 290);
    } else {
      setScrollAmount((prev) => prev + 480);
    }
  };

  const handleRightScroll = () => {
    if (scrollAmount === -1920) {
      setScrollAmount((prev) => prev - 290);
    } else if (scrollAmount === -2210) {
      return;
    } else {
      setScrollAmount((prev) => prev - 480);
    }
  };

  return (
    <div className="px-[190px] my-5 ">
      <div className="flex items-center justify-between">
        <h2 className="topDishCarouselData font-[800] text-2xl">
          {topDishCarouselData?.header?.title}
        </h2>
        <div className="flex items-center gap-3">
          <div
            className={`rounded-full cursor-pointer p-2 ${
              scrollAmount === 0 ? "bg-gray-100 text-gray-400" : "bg-gray-200"
            } : "text-gray-400"`}
            onClick={handleLeftScroll}
          >
            <FaArrowLeft />
          </div>

          <div
            className={`rounded-full cursor-pointer bg-gray-300 p-2 ${
              scrollAmount === -2210
                ? "bg-gray-100 text-gray-400"
                : "bg-gray-200"
            } : "text-gray-400"`}
            onClick={handleRightScroll}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex items-center overflow-hidden border-b-2 border-gray-100 pb-12">
        <div
          className={`flex transition-transform duration-500 ease-in-out transform`}
          style={{
            transform: `translateX(${scrollAmount}px)`,
          }}
        >
          {data &&
            data.map((obj) => {
              return (
                <div
                  key={obj.id}
                  className="min-w-[144px] h-[180px] mx-2 object-contain cursor-pointer"
                >
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${obj?.imageId}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TopDishCarousel;
