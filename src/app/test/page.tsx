import ProductItem from "@/components/(User)/ProductItem";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-4 md:flex-wrap">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default page;
