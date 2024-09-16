import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import logo from "@/public/SHOP.CO.svg";
import NavItem from "../custom/NavItem";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import SearchBar from "../custom/SearchBar";
import { fetchProducts } from "@/utils";
import CartIcon from "../custom/CartIcon";

const Navbar = async () => {
  const products = await fetchProducts();
  return (
    <NavigationMenu className="p-3 flex items-center justify-center">
      <NavigationMenuList>
        <NavItem href={"/"} children={<Image alt="" src={logo} />} />
        <NavItem href={"/product"} children={"Shop"} />
        <NavItem href={"/product"} children={"On sale"} />
        <NavItem href={"/product"} children={"New arrivals"} />
        <NavItem href={"/product"} children={"Brands"} />
        <SearchBar products={products} />
        <CartIcon />
        <NavItem href={"/"} children={<CgProfile />} />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
