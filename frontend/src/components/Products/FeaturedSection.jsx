import { FaShoppingBag } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { IoShieldCheckmark } from "react-icons/io5";
export const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4 bg-gray-100">
            <FaShoppingBag className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2 font-medium">
            FREE INTERNATIONAL SHIPPING
          </h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            On all orders over $100.00
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4 bg-gray-100">
            <FiRefreshCw className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2 font-medium">30 DAYS RETURN</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Simply return it within 30 days
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4 bg-gray-100">
            <IoShieldCheckmark className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2 font-medium">SECURE PAYMENT</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            100% secure payment
          </p>
        </div>
      </div>
    </section>
  );
};
