import React from "react";

const CustomGrid = ({ children, custom }) => {
  return <div className={` grid ${custom}`}>{children}</div>;
};

export default CustomGrid;
