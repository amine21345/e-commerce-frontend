import React from "react";
import { Checkbox } from "../ui/checkbox";

const CheckboxFilterItem = ({ name, onCheckedChange }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-500">{name}</p>
      <Checkbox onCheckedChange={onCheckedChange} />
    </div>
  );
};

export default CheckboxFilterItem;
