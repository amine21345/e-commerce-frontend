import React from "react";
import Reviews from "@/components/sections/reviews";
import NewArrivals from "@/components/sections/NewArrivals";
import ProductShowCase from "@/components/sections/ProductShowCase";
import { fetchProducts, fetchRatings } from "@/utils";
const page = async () => {
  const products = await fetchProducts();
  const reviews = await fetchRatings();
  return (
    <div>
      <ProductShowCase />
      <Reviews reviews={reviews} />
      <NewArrivals products={products} title={"NEW ARRIVALS"} />
    </div>
  );
};

export default page;
