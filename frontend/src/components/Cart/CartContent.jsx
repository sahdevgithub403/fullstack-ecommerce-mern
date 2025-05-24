import { RiDeleteBin6Line } from "react-icons/ri";
export const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => {
        return (
          <div
            key={index}
            className="flex items-start justify-between py-4 border-b"
          >
            <div className="flex items-start">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-24 object-cover mr-4 rounded"
              />
              <div>
                <h3>{product.name}</h3>
                <p className="text-sm text-gray-500">
                  size: {product.size} | color: {product.color}
                </p>
                <div className="flex items-center mt-2">
                  <button className="border rounded px-2 py-1 text-xl font-medium">
                    -
                  </button>
                  <span className="mx-4">{product.quantity}</span>
                  <button className="border rounded px-2 py-1 text-xl font-medium">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p>$ {product.price.toLocaleString()}</p>
              <button>
                <RiDeleteBin6Line className="h-6 w-6 text-red-700"/>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
