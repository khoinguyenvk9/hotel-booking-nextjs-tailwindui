"use client";
import { Inter } from "@next/font/google";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Filter } from "@/components/Filter";
import React, { useMemo } from "react";
import { HotelTab } from "@/components/hotel/HotelTab";
import { FlightTab } from "@/components/flight/FlightTab";
const inter = Inter({ subsets: ["latin"] });

const data = [
  {
    name: "Las Vegas",
    location: "America",
    price: 5000,
    start: "4.5 (6634)",
    image:
      "https://www.thm.vn/media/k2/items/cache/0bfc0ce99892772fc285e10ee3943d9a_XL.jpg",
  },
  {
    name: "Amanoi",
    location: "Viet Nam",
    price: 9000,
    start: "4.9 (99)",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtyUDoIPPSG9GF0RD2ryI564rdol9tp-m2dQ&usqp=CAU",
  },
  {
    name: "Vinh Ha Long Bay",
    location: "Viet Nam",
    price: 1000,
    start: "4.1 (989)",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9PHqNNLvqLw7Ray8sY8_SZU4Wc9-2ODoSQ&usqp=CAU",
  },
];
const Home = () => {
  const [currentTab, setCurrentTab] = React.useState("flight");

  const TabComponent = useMemo(() => {
    switch (currentTab) {
      case "hotel": {
        return <HotelTab data={data} />;
      }
      default:
        return <FlightTab data={data} />;
    }
  }, [currentTab]);

  return (
    <main className="flex flex-col justify-between items-center p-3 container bg-white min-h-screen text-black overflow-hidden max-h-screen">
      <Filter currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="text-black flex-1 self-start w-full overflow-auto">
        <h1 className="font-medium text-3xl py-4">
          Where would <br /> you want to go?
        </h1>
        {TabComponent}
        {/* <div className="my-4 w-full"> */}
        {/*   <input */}
        {/*     className="bg-gray-100 p-4 rounded-2xl w-full" */}
        {/*     placeholder="New york city" */}
        {/*   /> */}
        {/* </div> */}
        {/* <div> */}
        {/*   <h6 className="text-sm">Recently Checked</h6> */}
        {/*   <div> */}
        {/*     {data.map((prod: any, index: number) => ( */}
        {/*     <ProductItem key={index} product={prod}/> */}
        {/*     ))} */}
        {/*   </div> */}
        {/* </div> */}
      </div>
      <BottomNavigation />
    </main>
  );
};

export default Home;
