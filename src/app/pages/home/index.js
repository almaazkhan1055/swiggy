"use client";
import Header from "@/app/components/header";
import Restaurants from "@/app/components/restaurants";
import TopDishCarousel from "@/app/components/topDishCarousel";
import TopRestaurantCarousel from "@/app/components/topRestauratntCarousel";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  let topDishCarouselData = data?.data?.cards[0]?.card?.card;
  let RestaurantCarouselCardData = data?.data?.cards[1]?.card?.card;
  let RestrauntsData = data;

  console.log("RestrauntsData", RestrauntsData);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <TopDishCarousel topDishCarouselData={topDishCarouselData} />
      <TopRestaurantCarousel
        RestaurantCarouselCardData={RestaurantCarouselCardData}
      />
      <Restaurants RestrauntsData={RestrauntsData} />
    </>
  );
}
