import { NavLink } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <section className="relative w-full">
        <img
          src="/rabbit-hero.webp"
          alt="Rabbit hero banner"
          className="w-full h-[400px] lg:h-[750px] object-cover"
        />
        <div className="absolute inset-0 w-full h-full bg-black/50 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
              Vacation <br /> Ready
            </h1>
            <p className="text-sm tracking-tighter md:text-lg mb-6">
              Explore our vaction-ready outfits with fast worldwide shipping.
            </p>
            <NavLink
              to="#"
              className="bg-white text-gray-900 px-6 py-2 rounded-sm text-lg"
            >
              Shop Now
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
