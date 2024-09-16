"use client";
import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import shirt from "@/public/shirt.png";

const SearchBar = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  // Debounce the search term to avoid running search on every keystroke
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // 300ms delay

    return () => {
      clearTimeout(timerId); // Clear timeout if input changes within the delay
    };
  }, [searchTerm]);

  // Update filtered products based on debounced search term
  useEffect(() => {
    if (debouncedSearchTerm) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [debouncedSearchTerm]);

  const handleProductClick = (product) => {
    setSearchTerm(""); // Clear the input field
    // Navigate to the product page
    window.location.href = `/product/${product.id}?title=${product.title}&price=${product.price}&rating=${product.rating}&color=${product.color}&size=${product.size}&type=${product.type}&style=${product.style}&discount=${product.discount}`;
  };

  return (
    <div className="relative">
      {/* Search Input */}
      <Input
        placeholder="Search for products..."
        className="w-[50vw] rounded-full bg-[#F0F0F0]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Display search suggestions */}
      {filteredProducts.length > 0 && (
        <ul className="absolute bg-white w-[50vw] mt-2 rounded-lg shadow-lg z-10 max-h-60 overflow-y-scroll">
          {filteredProducts.map((product, index) => (
            <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
              <div
                className="flex gap-2"
                onClick={() => handleProductClick(product)}
              >
                <Image src={shirt} width={50} />
                <div>
                  <h2 className="font-bold">{product.title}</h2>
                  <p>${product.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
