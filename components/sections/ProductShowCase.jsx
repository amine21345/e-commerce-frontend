"use client";
import Image from "next/image";
import React, { useState } from "react";
import shirt from "@/public/shirt.svg";
import { TiTick } from "react-icons/ti";
import { useSearchParams } from "next/navigation";
import CustomStarIcon from "@/components/custom/CustomStarIcon";
import { Button } from "@/components/ui/button";
import { TiMinus, TiPlus } from "react-icons/ti";
const ProductShowCase = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const rating = searchParams.get("rating");
  const price = searchParams.get("price");
  const discount = searchParams.get("discount");
  const color = searchParams.get("color");
  const selectedSize = searchParams.get("size");
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // Increment quantity
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Decrement quantity, with a minimum value of 1
  };
  const handleAddToCart = () => {
    const product = {
      title,
      rating,
      price,
      discount,
      color,
      size: selectedSize,
      quantity,
    };

    // Get existing cart data from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    // Add the new product to the cart
    const updatedCart = [...existingCart, product];
    // Store updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <div className="flex items-center justify-center p-2">
      <div className="grid grid-cols-8 items-center w-[40vw] ">
        <div className="flex col-span-3 flex-col items-center gap-2">
          <Image
            src={shirt}
            alt=""
            className="w-6/12 border border-gray-600 rounded-lg"
          />
          <Image src={shirt} alt="" className="w-6/12  " />
          <Image src={shirt} alt="" className="w-6/12 " />
        </div>
        <div className="col-span-5 ">
          <Image src={shirt} alt="" className="" />
        </div>
      </div>
      <div className="flex flex-col w-[40vw] ">
        <h1 className="font-bold text-5xl">{title}</h1>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <CustomStarIcon
              key={i}
              custom={i < rating ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
          <p>{rating}/5.0</p>
        </div>
        <p className="font-bold text-lg py-4">
          ${price}{" "}
          {discount !== "0" ? (
            <span>
              <span className="font-bold text-lg mx-2 text-black opacity-40 line-through">
                ${parseInt(price) + 40}
              </span>
              <span className="text-sm text-red-500 bg-red-100 p-2 rounded-full mb-10">
                {discount}%
              </span>
            </span>
          ) : (
            ""
          )}
        </p>
        <p className="pb-5">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        <div className="py-5 border-y border-gray-200">
          <p className="text-sm text-gray-400">Select Colors</p>
          <div className="flex gap-3 pt-3">
            <div
              className={`flex items-center justify-center text-white w-10 h-10 rounded-full  ${
                color === "black"
                  ? "bg-black"
                  : color === "orange"
                  ? "bg-orange-500"
                  : color === "red"
                  ? "bg-red-500"
                  : color === "blue"
                  ? "bg-blue-500"
                  : color === "green"
                  ? "bg-green-500"
                  : color === "yellow"
                  ? "bg-yellow-500"
                  : color === "purple"
                  ? "bg-purple-500"
                  : color === "pink"
                  ? "bg-pink-500"
                  : color === "gray"
                  ? "bg-gray-500"
                  : ""
              }`}
            >
              <TiTick />
            </div>
            <div className={`w-10 h-10 rounded-full bg-amber-500`} />
            <div className={`w-10 h-10 rounded-full bg-indigo-500`} />
            <div className={`w-10 h-10 rounded-full bg-lime-500`} />
          </div>
        </div>
        <div className="py-5 border-y border-gray-200">
          <p className="text-sm text-gray-400">Select size</p>
          <div className="flex gap-3 pt-3">
            {sizes.map((size, index) => (
              <div
                key={index}
                className={`flex items-center justify-center w-20 h-10 rounded-full ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="flex py-2 ">
          <div className="bg-[#F0F0F0] rounded-full flex items-center justify-around w-1/3">
            <button
              className="bg-transparent text-black hover:bg-transparent hover:text-black"
              onClick={handleDecrement}
            >
              <TiMinus />
            </button>
            <p>{quantity}</p>
            <button
              className="bg-transparent text-black hover:bg-transparent hover:text-black"
              onClick={handleIncrement}
            >
              <TiPlus />
            </button>
          </div>
          <Button
            className="bg-black w-2/3 rounded-full"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductShowCase;
