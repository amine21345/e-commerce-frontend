import FilterMenu from "@/components/custom/FilterMenu";
import { fetchProducts } from "@/utils";
import React from "react";
import ProductList from "@/components/sections/productList";

const page = async () => {
  return (
    <div className="flex  items-center justify-center">
      <div className="w-[80vw] flex  items-start justify-between">
        <FilterMenu />
        <ProductList />
      </div>
    </div>
  );
};

export default page;
