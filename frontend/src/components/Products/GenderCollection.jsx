import { NavLink } from "react-router-dom";

export const GenderCollection = () => {
  return (
    <section className="flex px-16 py-4 lg:px-0 m-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="relative flex-1">
          <img
            src="womens-collection.webp"
            alt="women's collection"
            className="w-full h-[700px] object-cover rounded-3xl"
          />
          <div className="absolute bottom-8 left-8 bg-white p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <NavLink
              to="/collection/all?gender=women"
              className="text-gray-900 underline"
            >
              Shop Now
            </NavLink>
          </div>
        </div>
        <div className="relative flex-1">
          <img
            src="mens-collection.webp"
            alt="men's collection"
            className="w-full h-[700px] object-cover rounded-3xl"
          />
          <div className="absolute bottom-8 left-8 bg-white p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men's Collection
            </h2>
            <NavLink
              to="/collection/all?gender=women"
              className="text-gray-900 underline"
            >
              Shop Now
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
