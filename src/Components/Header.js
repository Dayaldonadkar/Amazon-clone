import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Header = () => {
  return (
    <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col sm:justify-around  sm:items-center bg-[#131921] text-white py-4 gap-y-5 px-5">
      <img
        className="sm:w-28 w-20 items-center mt-3 object-contain mr-5"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="flex align-center rounded-3xl h-8">
        <input className="border-none sm:px-56 md:20  w-full" type="text" />
        <div className="bg-[#cd9042]">
          <SearchIcon fontSize="large" className="px-1" />
        </div>
      </div>

      <div className="flex justify-between sm:space-x-20">
        <div className="flex flex-col">
          <span className="text-xs text-gray-100">Hello</span>
          <span className="text-lg">Sign In</span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs text-gray-100">Returns</span>
          <span className="text-lg">Orders</span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs text-gray-100">Your</span>
          <span className="text-lg">Prime</span>
        </div>

        <div className="flex lg:space-x-2  items-center">
          <ShoppingBasketIcon />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
