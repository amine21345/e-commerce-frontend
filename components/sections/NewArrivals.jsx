import React from "react";
import CustomCard from "@/components/custom/CustomCard";
import CustomGrid from "@/components/custom/CustomGrid";
import CustomStarIcon from "@/components/custom/CustomStarIcon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import shirt from "@/public/shirt.png";
import Link from "next/link";

const NewArrivals = async ({ products, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-8 items-center justify-center h-[80vh]">
        <h1 className="font-black text-5xl">{title}</h1>
        <CustomGrid custom={"grid-cols-4 w-[80vw] "}>
          {products?.slice(0, 4).map((product, index) => (
            <Link
              key={index}
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
                key={index}
                cardTitle={
                  <Image
                    alt={product.name}
                    src={shirt}
                    className="rounded-xl"
                  />
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
                          i < product.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <p>{product.rating}/5.0</p>
                  </div>
                }
                cardFooter={
                  <p className="font-bold text-lg py-4">
                    ${product.price}{" "}
                    {product.discount !== 0 ? (
                      <span>
                        <span className="font-bold text-lg mx-2 text-black opacity-40 line-through">
                          ${product.price + 40}
                        </span>
                        <span className="text-sm text-red-500 bg-red-100 p-2 rounded-full mb-10">
                          {product.discount}%
                        </span>
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                }
              />
            </Link>
          ))}
        </CustomGrid>
        <Link href={"/product"}>
          <Button
            className={
              "bg-white text-black border font-semibold border-gray-300 px-8 rounded-full hover:bg-black"
            }
          >
            View All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NewArrivals;
