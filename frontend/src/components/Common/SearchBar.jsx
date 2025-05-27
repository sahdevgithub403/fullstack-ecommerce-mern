import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";

export const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSearch = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search bar:", searchItem);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className={`fixed left-0 w-full z-50 bg-white overflow-hidden shadow-md transition-all duration-500 ease-in-out ${
          isOpen ? "top-0 h-27 opacity-100" : "-top-24 h-0 opacity-0"
        }`}
      >
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center h-full px-4"
        >
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              className="w-full bg-gray-100 px-4 py-2 pr-12 rounded-lg focus:outline-none placeholder:text-gray-700"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleToggleSearch}
              className="absolute -right-10 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <IoCloseSharp className="h-6 w-6" />
            </button>
          </div>
        </form>
      </div>

      <button
        onClick={handleToggleSearch}
        className={`text-gray-700 hover:text-black transition-opacity duration-300 ${
          isOpen
            ? "opacity-50 cursor-default pointer-events-none"
            : "opacity-100"
        }`}
        aria-label="Toggle Search"
      >
        <HiMagnifyingGlass className="h-6 w-6" />
      </button>
    </div>
  );
};
