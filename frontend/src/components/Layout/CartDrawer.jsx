import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoMdClose } from "react-icons/io";
import { CartContent } from "../Cart/CartContent";

export const SlideBar = ({ IsOpenPanel, closeSliderPanel }) => {
  const DrawerList = (
    <Box
      sx={{ width: 350, xs: "100vw", sm: 300, md: 350 }}
      role="presentation"
      onClick={closeSliderPanel}
      onKeyDown={closeSliderPanel}
      className="md:"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={closeSliderPanel}>
            <IoMdClose className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4">
          <CartContent />
        </div>
      </div>

      <div className="fixed bottom-0 p-4 bg-white shadow-md z-50">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          CheckOut
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2">
          Shipping, taxes, and discount codes calculated at checkout
        </p>
      </div>
    </Box>
  );

  return (
    <Drawer anchor="right" open={IsOpenPanel} onClose={closeSliderPanel}>
      {DrawerList}
    </Drawer>
  );
};
