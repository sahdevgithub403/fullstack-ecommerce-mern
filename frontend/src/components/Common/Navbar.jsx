import { NavLink } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiMenuAlt1,
} from "react-icons/hi";

import Badge from "@mui/material/Badge";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div>
          <NavLink to="#" className="text-2xl font-medium">
            Rabbit
          </NavLink>
        </div>

        <div className="hidden md:flex space-x-6">
          <NavLink
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </NavLink>
          <NavLink
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </NavLink>
          <NavLink
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </NavLink>
          <NavLink
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <NavLink
            to="/profile"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </NavLink>
          <button className="relative hover:text-black">
            <Badge badgeContent={4} color="primary">
              <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            </Badge>
          </button>
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <button className="md:hidden">
            <HiMenuAlt1 className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
    </>
  );
};
