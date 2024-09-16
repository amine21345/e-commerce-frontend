"use client";
import React, { useEffect, useState } from "react";
import CustomGrid from "./CustomGrid";
import CheckboxFilterItem from "./CheckboxFilterItem";
import { Slider } from "@/components/ui/slider";
import ColorFilterItem from "./ColorFilterItem";
import { Button } from "../ui/button";
import { GiSettingsKnobs } from "react-icons/gi";
import { useRouter, useSearchParams } from "next/navigation";
const FilterMenu = () => {
  const [values, setValues] = useState([0, 200]); // default values
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    types: [],
    sizes: [],
    colors: [],
    styles: [],
    price: [],
  });
  const colors = [
    "green",
    "red",
    "yellow",
    "orange",
    "cyan",
    "blue",
    "purple",
    "pink",
    "white",
    "black",
  ];
  const types = ["shorts", "shirts", "hoodie", "jeans"];
  const sizes = [
    { abbreviation: "XS", value: "Extra Small" },
    { abbreviation: "S", value: "Small" },
    { abbreviation: "M", value: "Medium" },
    { abbreviation: "L", value: "Large" },
    { abbreviation: "XL", value: "Extra Large" },
  ];

  const styles = ["casual", "formal", "party", "gym"];
  // Get access to search params and router
  const searchParams = useSearchParams();
  const router = useRouter();

  // Update selected filters
  const updateFilter = (filterType, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((v) => v !== value)
        : [...prev[filterType], value],
    }));
  };

  // Update the search params and trigger the filter
  const applyFilters = () => {
    const params = new URLSearchParams();

    Object.keys(selectedFilters).forEach((key) => {
      if (selectedFilters[key].length > 0) {
        params.set(key, selectedFilters[key].join(","));
      }
    });

    router.push(`?${params.toString()}`);
  };

  return (
    <CustomGrid
      custom={
        "grid-cols-1 w-[15vw] px-5 py-3 border border-gray-200 rounded-xl"
      }
    >
      <div className="flex items-center justify-between py-2">
        <h1 className="font-bold text-lg">Filters</h1>
        <GiSettingsKnobs className="text-xl text-gray-400" />
      </div>
      {/* Filter by Types */}
      <div className="border-y border-gray-200 py-4">
        {types.map((type, index) => (
          <CheckboxFilterItem
            key={index}
            name={type}
            onCheckedChange={() => updateFilter("types", type)}
          />
        ))}
      </div>
      {/* Filter by Price */}
      <div className="border-y border-gray-200 py-4 flex flex-col justify-center items-start gap-4">
        <h1 className="font-bold text-lg">Price</h1>
        <Slider
          defaultValue={[25, 75]}
          max={200}
          onValueChange={(newValues) => {
            setValues(newValues),
              setSelectedFilters((prev) => ({ ...prev, price: newValues }));
          }}
          step={1}
          values={values}
        />
        <div className="flex w-full justify-between">
          <span className="text-sm font-bold">${values[0]}</span>
          <span className="text-sm font-bold">${values[1]}</span>
        </div>
      </div>
      {/* Filter by Colors */}
      <div className="border-y border-gray-200 py-4 flex flex-col gap-2 justify-center items-start">
        <h1 className="font-bold text-lg">Colors</h1>
        <div className="grid grid-cols-5 gap-4 justify-center items-center">
          {colors.map((color, index) => (
            <ColorFilterItem
              key={index}
              color={color}
              onClick={() => updateFilter("colors", color)} // Handle color click
              selected={selectedFilters.colors.includes(color)} // Check if this color is selected
            />
          ))}
        </div>
      </div>
      {/* Filter by Sizes */}
      <div className="border-y border-gray-200 py-4 flex flex-col gap-2 justify-center">
        <h1 className="font-bold text-lg">Sizes</h1>
        {sizes.map((size, index) => (
          <CheckboxFilterItem
            key={index}
            name={size.value}
            onCheckedChange={() => updateFilter("sizes", size.abbreviation)}
          />
        ))}
      </div>
      {/* Filter by Styles */}
      <div className="border-y border-gray-200 py-4 flex flex-col gap-2 justify-center">
        <h1 className="font-bold text-lg">Styles</h1>
        {styles.map((style, index) => (
          <CheckboxFilterItem
            key={index}
            name={style}
            onCheckedChange={() => updateFilter("styles", style)}
          />
        ))}
      </div>
      <Button className={"bg-black rounded-full "} onClick={applyFilters}>
        Apply Filter
      </Button>
    </CustomGrid>
  );
};

export default FilterMenu;
