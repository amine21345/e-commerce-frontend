import React from "react";
import background from "@/public/background.svg";
import versage from "@/public/versage.svg";
import zara from "@/public/zara.svg";
import gucci from "@/public/gucci.svg";
import prada from "@/public/prada.svg";
import calvin from "@/public/calvin.svg";
import { Button } from "../ui/button";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="h-[95vh]">
      <div
        className={`h-[80vh]`}
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col  w-1/2 items-start gap-4  p-32">
          <h1 className="text-7xl font-black ">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-gray-500">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button className={"rounded-full px-10 "}>Shop Now</Button>
          <div className="flex items-center justify-between">
            <div className="border-r border-gray-500 p-5">
              <h1 className="text-5xl font-bold">220+</h1>
              <p>Internatinal Brands</p>
            </div>
            <div className="border-r border-gray-500 p-5">
              <h1 className="text-5xl font-bold">2,000+</h1>
              <p>High-Quality Products</p>
            </div>
            <div className=" p-5">
              <h1 className="text-5xl font-bold">30,000+</h1>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[15vh] bg-black flex items-center justify-around">
        <Image alt="" src={versage} />
        <Image alt="" src={zara} />
        <Image alt="" src={gucci} />
        <Image alt="" src={prada} />
        <Image alt="" src={calvin} />
      </div>
    </div>
  );
};

export default HeroSection;
