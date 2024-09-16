import React from "react";
import casual from "@/public/casual.svg";
import formal from "@/public/formal.svg";
import gym from "@/public/gym.svg";
import party from "@/public/party.svg";
import CustomGrid from "../custom/CustomGrid";
import Image from "next/image";
import Link from "next/link";

const BrowseSection = () => {
  return (
    <div className="flex items-center justify-center my-10">
      <div className="bg-[#F0F0F0] w-[90vw] h-[100vh] flex flex-col gap-20 justify-center items-center rounded-2xl">
        <h1 className="font-black text-5xl">BROWSE BY DRESS STYLE</h1>
        <div className={"grid grid-cols-12 gap-8  w-[80%]"}>
          <Link
            href={"/product?styles=casual"}
            className="col-span-4 h-full w-full"
          >
            <Image alt="" src={casual} />
          </Link>
          <Link
            href={"/product?styles=formal"}
            className="col-span-7 w-full flex items-end justify-end"
          >
            <Image alt="" src={formal} />
          </Link>
          <Link href={"/product?styles=party"} className="col-span-7 w-full">
            <Image alt="" src={party} />
          </Link>
          <Link
            href={"/product?styles=gym"}
            className="col-span-4 w-full h-full flex items-end justify-end"
          >
            <Image alt="" src={gym} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrowseSection;
