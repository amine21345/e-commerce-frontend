// components/ProductList.js
"use client";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { fetchProducts } from "@/utils";
import CustomCard from "@/components/custom/CustomCard";
import CustomGrid from "@/components/custom/CustomGrid";
import CustomPagination from "@/components/custom/CustomPagination";
import Image from "next/image";
import Link from "next/link";
import shirt from "@/public/shirt.png";
import CustomStarIcon from "@/components/custom/CustomStarIcon";

const ProductList = () => {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const filters = {
        types: searchParams.get("types") || "",
        sizes: searchParams.get("sizes") || "",
        colors: searchParams.get("colors") || "",
        styles: searchParams.get("styles") || "",
        price: searchParams.get("price") || "",
      };

      const fetchedProducts = await fetchProducts(filters);
      setTotalProducts(fetchedProducts.length); // Set total products for pagination
      setProducts(
        fetchedProducts.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      );
    };

    fetchAndSetProducts();
  }, [searchParams, currentPage]);

  return (
    <div className="w-[60vw]">
      <CustomGrid custom={"grid-cols-3"}>
        {products.map((product) => (
          <Link
            key={product.id}
            href={{
              pathname: `/product/${product.id}`,
              query: {
                title: product.title,
                price: product.price,
                rating: product.rating,
                color: product.color,
                size: product.size,
                type: product.type,
                style: product.style,
                discount: product.discount,
              },
            }}
            passHref
          >
            <CustomCard
              cardTitle={
                <Image alt={product.name} src={shirt} className="rounded-xl" />
              }
              cardDescription={
                <span className="font-bold text-lg text-black">
                  {product.title}
                </span>
              }
              cardContent={
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <CustomStarIcon
                      key={i}
                      custom={
                        i < product.rating ? "text-yellow-500" : "text-gray-300"
                      }
                    />
                  ))}
                  <p>{product.rating}/5.0</p>
                </div>
              }
              cardFooter={
                <p className="font-bold text-lg py-4">
                  ${product.price}
                  {product.discount !== 0 && (
                    <span>
                      <span className="font-bold text-lg mx-2 text-black opacity-40 line-through">
                        ${product.price + 40}
                      </span>
                      <span className="text-sm text-red-500 bg-red-100 p-2 rounded-full mb-10">
                        {product.discount}%
                      </span>
                    </span>
                  )}
                </p>
              }
            />
          </Link>
        ))}
      </CustomGrid>
      <CustomPagination
        className={"py-5"}
        currentPage={currentPage}
        totalPages={Math.ceil(totalProducts / itemsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default ProductList;
