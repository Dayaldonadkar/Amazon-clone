import React from "react";

const Product = ({ title, price, image, stars }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white lg:w-5/12 px-10 py-5 space-y-10 rounded-xl">
      <div className="space-y-2">
        <p className="">{title}</p>
        <p>
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <p>{stars}</p>
      </div>
      <img className="h-52 w-40" src={image} alt="" />
      <button className="flex items-center justify-center bg-[#f0c14b] px-10 py-1 rounded-lg">
        Add to basket
      </button>
    </div>
  );
};

export default Product;
