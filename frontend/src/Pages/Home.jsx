import { Hero } from "../components/Layout/Hero";
import { FeaturedCollection } from "../components/Products/FeaturedCollection";
import { FeaturesSection } from "../components/Products/FeaturedSection";
import { GenderCollection } from "../components/Products/GenderCollection";
import { NewArrival } from "../components/Products/NewArrival";
import { ProductDetail } from "../components/Products/ProductDetail";
import { ProductLike } from "../components/Products/ProductLike";

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 150,
    image: [
      { url: "https://picsum.photos/500/500/?random-2", altText: "image" },
    ],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 100,
    image: [
      { url: "https://picsum.photos/500/500/?random-3", altText: "image" },
    ],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 200,
    image: [
      { url: "https://picsum.photos/500/500/?random-4", altText: "image" },
    ],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 400,
    image: [
      { url: "https://picsum.photos/500/500/?random-5", altText: "image" },
    ],
  },
  {
    _id: 5,
    name: "Product 1",
    price: 150,
    image: [
      { url: "https://picsum.photos/500/500/?random-2", altText: "image" },
    ],
  },
  {
    _id: 6,
    name: "Product 2",
    price: 100,
    image: [
      { url: "https://picsum.photos/500/500/?random-3", altText: "image" },
    ],
  },
  {
    _id: 7,
    name: "Product 3",
    price: 200,
    image: [
      { url: "https://picsum.photos/500/500/?random-4", altText: "image" },
    ],
  },
  {
    _id: 8,
    name: "Product 4",
    price: 400,
    image: [
      { url: "https://picsum.photos/500/500/?random-5", altText: "image" },
    ],
  },
];

export const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArrival />

      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetail />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wear for Women
        </h2>
        <ProductLike products={placeholderProducts} />
      </div>

      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};
