import { NavLink } from "react-router-dom";

export const ProductLike = ({ products = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <NavLink
          key={index}
          to={`/product/${product._id}`}
          className="block hover:shadow-md  rounded-lg"
          aria-label={`View details for ${product.name}`}
        >
          <div className="bg-white p-4 rounded-lg">
            <div className="aspect-[3/4] w-full mb-4 overflow-hidden rounded-lg">
              <img
                src={product.image?.[0]?.url || "/fallback.jpg"}
                alt={product.image?.[0]?.altText || product.name}
                className="w-full h-full object-cover "
                loading="lazy"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-base font-semibold text-gray-800 truncate">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">${product.price}</p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};
