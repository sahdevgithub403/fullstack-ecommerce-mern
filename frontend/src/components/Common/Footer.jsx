import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Rabbit</h3>
          <p className="text-sm">
            Elevating your wardrobe with the latest in fashion trends. Quality guaranteed.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-white font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Help & FAQs</a></li>
            <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white">Order Status</a></li>
            <li><a href="#" className="hover:text-white">Payment Options</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Men</a></li>
            <li><a href="#" className="hover:text-white">Women</a></li>
            <li><a href="#" className="hover:text-white">Topwear</a></li>
            <li><a href="#" className="hover:text-white">Bottomwear</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Stay in Touch</h4>
          <p className="text-sm mb-2">Subscribe to get updates on new arrivals & offers.</p>
          <form className="flex space-x-2 mt-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded bg-gray-800 text-sm text-white outline-none"
            />
            <button className="bg-white text-black font-semibold px-4 rounded hover:bg-gray-200">
              Subscribe
            </button>
          </form>

          {/* Social Links */}
          <div className="flex space-x-4 mt-6 text-lg text-white">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Rabbit. All rights reserved.
      </div>
    </footer>
  );
};
