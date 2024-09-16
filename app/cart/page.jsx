"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaRegTrashAlt } from "react-icons/fa";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch data from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (index) => {
    // Remove item by index from cart
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncrementQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecrementQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="flex flex-col gap-6 py-6 w-[80vw] ">
        <h1 className="font-black text-3xl">YOUR CART</h1>
        <div className="flex flex-col md:flex-row gap-6  w-[80vw] ">
          <div className="flex-1 border border-gray-200 p-6 rounded-lg">
            {/* Display Cart Items Dynamically */}
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-300 pb-4 mb-4"
                >
                  <Image
                    src={"/shirt.png"}
                    alt="Product Image"
                    width={150}
                    height={150}
                  />
                  <div className="flex flex-col justify-between w-full ml-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-lg font-bold">{item.title}</h2>
                        <p className="text-sm">
                          Size:{" "}
                          <span className="text-gray-500">{item.size}</span>
                        </p>
                        <p className="text-sm">
                          Color:{" "}
                          <span className="text-gray-500">{item.color}</span>
                        </p>
                        <p className="text-2xl font-extrabold">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                      <Button
                        className="text-red-500 ml-4 bg-transparent hover:bg-transparent hover:text-red-700"
                        onClick={() => handleRemoveItem(index)}
                      >
                        <FaRegTrashAlt />
                      </Button>
                    </div>
                    <div className="flex justify-end items-center mt-4">
                      <div className="flex items-center border border-gray-300 rounded-full px-4 py-1">
                        <button
                          className="text-lg"
                          onClick={() => handleDecrementQuantity(index)}
                        >
                          -
                        </button>
                        <span className="mx-4">{item.quantity}</span>
                        <button
                          className="text-lg"
                          onClick={() => handleIncrementQuantity(index)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty!</p>
            )}
          </div>

          {/* Order Summary */}
          <div className="w-full md:w-1/3 border border-gray-200 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="flex justify-between mb-4">
              <p>Subtotal</p>
              <p>${calculateTotal()}</p>
            </div>
            <div className="flex justify-between mb-4 text-red-500">
              <p>Discount (-20%)</p>
              <p>-${(calculateTotal() * 0.2).toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Delivery Fee</p>
              <p>$15</p>
            </div>
            <div className="flex justify-between mb-6 text-xl font-bold">
              <p>Total</p>
              <p>
                ${(calculateTotal() - calculateTotal() * 0.2 + 15).toFixed(2)}
              </p>
            </div>
            <div className="mb-4 gap-2 flex items-center justify-center">
              <Input
                type="text"
                className="w-full p-2 border bg-[#F0F0F0] px-6 border-gray-300 rounded-full"
                placeholder={"Add promo code"}
              />
              <Button className="w-1/3 p-2 bg-black text-white rounded-full">
                Apply
              </Button>
            </div>
            <Button className="w-full p-4 bg-black text-white rounded-full font-bold">
              Go to Checkout →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
