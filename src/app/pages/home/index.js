"use client";
import Header from "@/app/components/header";
import RestrauntCard from "@/app/components/restauratntCard";
import Slider from "@/app/components/slider";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  let sliderData = data?.data?.cards[0]?.card?.card;
  let RestrauntCardData = data?.data?.cards[1]?.card?.card;
  // console.log("RestrauntCardData", RestrauntCardData);

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
      <Slider sliderData={sliderData} />
      <RestrauntCard RestrauntCardData={RestrauntCardData} />
    </>
  );
}
