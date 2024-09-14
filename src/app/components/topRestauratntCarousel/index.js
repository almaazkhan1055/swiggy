import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const TopRestaurantCarousel = ({ RestaurantCarouselCardData }) => {
  let data =
    RestaurantCarouselCardData?.gridElements?.infoWithStyle?.restaurants;

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 4;
  const itemWidth = 273;
  const totalItems = data?.length;

  const handleLeftScroll = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleRightScroll = () => {
    if (currentIndex < totalItems - visibleItems) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="px-[190px] my-5">
      <div className="flex items-center justify-between">
        <h2 className="sliderData font-[800] text-2xl">
          {RestaurantCarouselCardData?.header?.title}
        </h2>
        <div className="flex items-center gap-3">
          <div
            className={`rounded-full cursor-pointer p-2 ${
              currentIndex === 0 ? "bg-gray-100 text-gray-400" : "bg-gray-200"
            }`}
            onClick={handleLeftScroll}
          >
            <FaArrowLeft />
          </div>

          <div
            className={`rounded-full cursor-pointer p-2 ${
              currentIndex >= totalItems - visibleItems
                ? "bg-gray-100 text-gray-400"
                : "bg-gray-200"
            }`}
            onClick={handleRightScroll}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex items-center overflow-hidden border-b-2 border-gray-100 pb-[150px] my-5">
        <div
          className="flex transition-transform duration-500 ease-in-out transform"
          style={{
            transform: `translateX(-${currentIndex * (itemWidth + 54)}px)`,
          }}
        >
          {data &&
            data.map((obj, index) => (
              <div
                key={obj.id}
                className={`relative min-w-[273px] h-[182px] object-contain mx-4 ${
                  index === 0 ? "ml-0" : ""
                } cursor-pointer hover:scale-95 duration-300`}
              >
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${obj?.info?.cloudinaryImageId}`}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-[linear-gradient(rgba(27,30,36,0)_0%,rgb(27,30,36)_84.21%)]">
                  <span className="text-lg text-white font-extrabold absolute bottom-2 left-2">
                    {obj?.info?.aggregatedDiscountInfoV3?.header}{" "}
                    {obj?.info?.aggregatedDiscountInfoV3?.subHeader}
                  </span>
                </div>

                <div className="mt-2 relative z-10">
                  <h2 className="font-bold text-lg truncate text-ellipsis line-clamp-1">
                    {obj?.info?.name}
                  </h2>
                  <div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        role="img"
                        aria-hidden="true"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="9"
                          fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                        ></circle>
                        <path
                          d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                          fill="white"
                        ></path>
                        <defs>
                          <linearGradient
                            id="StoreRating20_svg__paint0_linear_32982_71567"
                            x1="10"
                            y1="1"
                            x2="10"
                            y2="19"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#21973B"></stop>
                            <stop offset="1" stopColor="#128540"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="font-medium">
                        {obj?.info?.avgRating} .{" "}
                      </span>
                      <span className="font-semibold">
                        {obj?.info?.sla?.slaString}
                      </span>
                    </div>

                    <p className="line-clamp-1 text-[#02060c99]">
                      {obj?.info?.cuisines.map((cuisine, index) => (
                        <span key={index}>
                          {cuisine}
                          {index !== obj?.info?.cuisines.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                    <p className="text-[#02060c99]">{obj?.info?.areaName}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopRestaurantCarousel;
