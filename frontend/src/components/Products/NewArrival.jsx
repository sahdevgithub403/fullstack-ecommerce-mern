import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "../../index.css";
import { NavLink } from "react-router-dom";

export const NewArrival = () => {
  const newArrival = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      image: [
        {
          url: "https://picsum.photos/500/500/?random-1",
          altText: "Stylish jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      price: 120,
      image: [
        {
          url: "https://picsum.photos/500/500/?random-3",
          altText: "Stylish jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      price: 120,
      image: [
        {
          url: "https://picsum.photos/500/500/?random-4",
          altText: "Stylish jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: 120,
      image: [
        {
          url: "https://picsum.photos/500/500/?random-6",
          altText: "Stylish jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      price: 120,
      image: [
        {
          url: "https://picsum.photos/500/500/?random-2",
          altText: "Stylish jacket",
        },
      ],
    },
  ];
  return (
    <div className="container">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivels</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrode on the cutting edge of fashion.
        </p>
        <Swiper
          slidesPerView={4}
          loop={true}
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="SliderHome"
        >
          {newArrival.map((product) => (
            <SwiperSlide key={product._id}>
              <NavLink to={`/product/${product._id}`}>
                <div className="items overflow-hidden rounded-sm tracking-tighter relative">
                  <img
                    src={product.image[0].url}
                    alt={product.image[0].altText}
                    className="w-full transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md text-white p-4 rounded-b-lg">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm">${product.price}</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

// import { useRef, useState } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { NavLink } from "react-router-dom";

// export const NewArrival = () => {
//   const scrollRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);
// const newArrival = [
//   {
//     _id: "1",
//     name: "Stylish Jacket",
//     price: 120,
//     image: [
//       {
//         url: "https://picsum.photos/500/500/?random-1",
//         altText: "Stylish jacket",
//       },
//     ],
//   },
//   {
//     _id: "2",
//     name: "Stylish Jacket",
//     price: 120,
//     image: [
//       {
//         url: "https://picsum.photos/500/500/?random-1",
//         altText: "Stylish jacket",
//       },
//     ],
//   },
//   {
//     _id: "3",
//     name: "Stylish Jacket",
//     price: 120,
//     image: [
//       {
//         url: "https://picsum.photos/500/500/?random-1",
//         altText: "Stylish jacket",
//       },
//     ],
//   },
//   {
//     _id: "4",
//     name: "Stylish Jacket",
//     price: 120,
//     image: [
//       {
//         url: "https://picsum.photos/500/500/?random-1",
//         altText: "Stylish jacket",
//       },
//     ],
//   },
//   {
//     _id: "5",
//     name: "Stylish Jacket",
//     price: 120,
//     image: [
//       {
//         url: "https://picsum.photos/500/500/?random-1",
//         altText: "Stylish jacket",
//       },
//     ],
//   },
// ];
//   return (
//     <section className="m-10">
// <div className="container mx-auto text-center mb-10 relative">
//   <h2 className="text-3xl font-bold mb-4">Explore New Arrivels</h2>
//   <p className="text-lg text-gray-600 mb-8">
//     Discover the latest styles straight off the runway, freshly added to
//     keep your wardrode on the cutting edge of fashion.
//   </p>

//   <div className="absolute right-0 bottom-[-30px] flex space-x-2">
//     <button className="p-2 rounded border bg-white text-black">
//       <FiChevronLeft className="text-2xl" />
//     </button>
//     <button className="p-2 rounded border bg-white text-black">
//       <FiChevronRight className="text-2xl" />
//     </button>
//   </div>
// </div>

//       <div ref={scrollRef} className="container mx-auto overflow-x-scroll flex space-x-6 relative">
//         {newArrival.map((product) => (
//           <div
//             key={product._id}
//             className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
//           >
//             <img
//               src={product.image[0]?.url}
//               alt={product.image[0]?.altText || product.name}
//               className="w-full h-[500px] object-cover rounded-lg "
//             />

//             <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md text-white p-4 rounded-b-lg">
//               <NavLink to={`/product/${product._id}`} className="block">
//                 <h4 className="font-medium">{product.name}</h4>
//                 <p className="mt-1">{product.price}</p>
//               </NavLink>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
