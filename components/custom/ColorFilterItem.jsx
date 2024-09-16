import React from "react";

const ColorFilterItem = ({ color, onClick, selected }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        width: 30,
        height: 30,
        borderRadius: "50%",
        border: selected ? "2px solid blue" : "1px solid rgba(0, 0, 0, 0.2)", // Highlight selected color
      }}
      onClick={onClick}
      aria-label={`Select ${color}`}
    />
  );
};

export default ColorFilterItem;
