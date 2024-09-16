import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchRatings } from "@/utils";
import CustomCard from "../custom/CustomCard";
import CustomStarIcon from "../custom/CustomStarIcon";

const Reviews = async ({ reviews }) => {
  const firstEightReviews = reviews.slice(0, 8);
  return (
    <div className="w-[100vw] flex items-center justify-center">
      <Tabs defaultValue="Rating" className="w-[90vw]">
        <TabsList className={"w-full flex items-center justify-around"}>
          <TabsTrigger value="Product">Product Details</TabsTrigger>
          <TabsTrigger value="Rating">Rating & Reviews</TabsTrigger>
          <TabsTrigger value="FAQs">FAQs</TabsTrigger>
        </TabsList>
        <TabsContent value="Product" className="grid grid-cols-2 p-5 gap-5">
          {firstEightReviews?.map((review, index) => (
            <CustomCard
              key={index}
              className="border-gray-300 border p-5"
              cardTitle={
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <CustomStarIcon
                      key={i}
                      custom={
                        i < review.rating ? "text-yellow-500" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              }
              cardDescription={
                <span className="font-bold text-lg text-black">
                  {review.title}
                </span>
              }
              cardContent={
                <span className="text-sm text-gray-400">
                  {review.description}
                </span>
              }
              cardFooter={
                <span className="text-gray-500">
                  Posted on{" "}
                  {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              }
            />
          ))}
        </TabsContent>
        <TabsContent value="Rating" className="grid grid-cols-2 p-5 gap-5">
          {firstEightReviews?.map((review, index) => (
            <CustomCard
              key={index}
              className="border-gray-300 border p-5"
              cardTitle={
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <CustomStarIcon
                      key={i}
                      custom={
                        i < review.rating ? "text-yellow-500" : "text-gray-300"
                      } // Example rating of 4 stars
                    />
                  ))}
                </div>
              }
              cardDescription={
                <span className="font-bold text-lg text-black">
                  {review.title}
                </span>
              }
              cardContent={
                <span className="text-sm text-gray-400">
                  {review.description}
                </span>
              }
              cardFooter={
                <span className="text-gray-500">
                  Posted on{" "}
                  {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              }
            />
          ))}
        </TabsContent>
        <TabsContent value="FAQs" className="grid grid-cols-2 p-5 gap-5">
          {firstEightReviews?.map((review, index) => (
            <CustomCard
              key={index}
              className="border-gray-300 border p-5"
              cardTitle={
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <CustomStarIcon
                      key={i}
                      custom={
                        i < review.rating ? "text-yellow-500" : "text-gray-300"
                      } // Example rating of 4 stars
                    />
                  ))}
                </div>
              }
              cardDescription={
                <span className="font-bold text-lg text-black">
                  {review.title}
                </span>
              }
              cardContent={
                <span className="text-sm text-gray-400">
                  {review.description}
                </span>
              }
              cardFooter={
                <span className="text-gray-500">
                  Posted on{" "}
                  {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              }
            />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reviews;
