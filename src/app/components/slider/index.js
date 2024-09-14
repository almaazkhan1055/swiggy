import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ sliderData }) => {
  const [scrollAmount, setScrollAmount] = useState(0);

  let images = sliderData?.imageGridCards?.info;

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
        <h2 className="sliderData font-[800] text-2xl">
          {sliderData?.header?.title}
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
              scrollAmount === -2210 ? "text-gray-100" : "text-gray-400"
            } cursor-pointer`}
            onClick={handleRightScroll}
          />
        </div>
      </div>

      <div className="flex items-center overflow-hidden border-b-2 border-gray-100 pb-12">
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

export default Slider;
