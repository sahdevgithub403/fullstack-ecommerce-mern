import { NavLink } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiMenuAlt1,
} from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Badge from "@mui/material/Badge";
import { SearchBar } from "./SearchBar";
import { SlideBar } from "../Layout/CartDrawer";
import { useState } from "react";

export const Navbar = () => {
  const [IsOpenPanel, setIsOpenPanel] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawerOpen = () => {
    setNavDrawerOpen((prev) => !prev);
  };

  const openSliderPanel = () => {
    setIsOpenPanel(true);
  };

  const closeSliderPanel = () => {
    setIsOpenPanel(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <NavLink to="/" className="text-2xl font-medium">
            Rabbit
          </NavLink>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/men"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </NavLink>
          <NavLink
            to="/women"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </NavLink>
          <NavLink
            to="/topwear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </NavLink>
          <NavLink
            to="/bottomwear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </NavLink>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <NavLink to="/profile" className="text-gray-700 hover:text-black">
            <HiOutlineUser className="h-6 w-6" />
          </NavLink>

          <button
            onClick={openSliderPanel}
            className="relative hover:text-black"
          >
            <Badge badgeContent={4} color="primary">
              <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            </Badge>
          </button>

          <div className="overflow-hidden hidden sm:block">
            <SearchBar />
          </div>

          {/* Hamburger for mobile */}
          <button onClick={toggleNavDrawerOpen} className="md:hidden">
            <HiMenuAlt1 className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Cart Drawer */}
      <SlideBar IsOpenPanel={IsOpenPanel} closeSliderPanel={closeSliderPanel} />

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4 border-b">
          <h2 className="absolute left-3 font-semibold">Menu</h2>
          <button onClick={toggleNavDrawerOpen}>
            <IoMdClose className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Navigation Links */}
        
        <div className="flex flex-col p-6 space-y-4">
          <NavLink to="/" className="text-gray-700 font-medium" onClick={toggleNavDrawerOpen}>
            Home
          </NavLink>
          <NavLink to="/men" className="text-gray-700 font-medium" onClick={toggleNavDrawerOpen}>
            Men
          </NavLink>
          <NavLink to="/women" className="text-gray-700 font-medium" onClick={toggleNavDrawerOpen}>
            Women
          </NavLink>
          <NavLink to="/topwear" className="text-gray-700 font-medium" onClick={toggleNavDrawerOpen}>
            Top Wear
          </NavLink>
          <NavLink to="/bottomwear" className="text-gray-700 font-medium" onClick={toggleNavDrawerOpen}>
            Bottom Wear
          </NavLink>
        </div>
      </div>
    </>
  );
};
