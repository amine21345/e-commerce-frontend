"use client";
import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { LuShoppingCart } from "react-icons/lu";

const CartIcon = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  // Fetch cart items from localStorage and update the cart item count
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemCount = cart.length; // Calculate total quantity of items
    setCartItemCount(itemCount);
  }, [cartItemCount]);
  return (
    <div className="relative">
      <NavItem href={"/cart"} children={<LuShoppingCart />} />
      {cartItemCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
          {cartItemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
