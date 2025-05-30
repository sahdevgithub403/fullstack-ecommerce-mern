import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ProductLike } from "./ProductLike";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish jacket perfect for any occasion",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  image: [
    {
      url: "https://picsum.photos/500/500/?random-2",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500/?random-3",
      altText: "Stylish Jacket 2",
    },
  ],
};

const similarProducts = [
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
];

export const ProductDetail = () => {
  const [mainImage, setMainImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(selectedProduct.colors[0]);
  const [selectedSize, setSelectedSize] = useState(selectedProduct.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct?.image?.length > 0) {
      setMainImage(selectedProduct.image[0].url);
    }
  }, []);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddcart = () => {
    if (!mainImage) {
      toast.error("Please wait for the product to load.");
      return;
    }

    const cartItem = {
      name: selectedProduct.name,
      price: selectedProduct.price,
      color: selectedColor,
      size: selectedSize,
      quantity,
      image: mainImage,
    };

    console.log("Added to cart:", cartItem);

    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart!", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Thumbnails (Desktop) */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.image.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              {mainImage && (
                <img
                  src={mainImage}
                  alt="Main Product"
                  className="w-full h-auto object-cover rounded-lg"
                />
              )}
            </div>
          </div>

          {/* Thumbnails (Mobile) */}
          <div className="md:hidden flex overflow-x-auto space-x-4 mb-4">
            {selectedProduct.image.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Info Section */}
          <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold mb-2">{selectedProduct.name}</h2>

            <p className="line-through text-gray-400">
              {selectedProduct.originalPrice &&
                `$${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              ${selectedProduct.price}
            </p>
            <p className="text-gray-500 mb-4">{selectedProduct.description}</p>

            {/* Colors */}
            <div className="mb-4">
              <h4 className="text-gray-700 mb-1">Color:</h4>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  ></button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-4">
              <h4 className="text-gray-700">Size:</h4>
              <div className="flex mt-2 gap-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={handleDecrease}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={handleIncrease}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddcart}
              disabled={isButtonDisabled}
              className={`bg-black text-white px-6 py-2 rounded w-full mb-4 ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-900"
              }`}
            >
              {isButtonDisabled ? "Adding.." : "ADD TO CART"};
            </button>

            {/* Characteristics */}
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1 font-medium w-1/4">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-medium">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2>
          <ProductLike products={similarProducts} />
        </div>
      </div>
    </div>
  );
};
