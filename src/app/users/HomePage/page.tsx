// src/app/users/Page.tsx
import React from "react";

const Page = () => {
  return (
    <div className="w-full">
      {/* BANNER */}
      <div>
        {/* BANNER-TOP */}
        <div className="flex">
          {/* BANNER-TOP-LEFT */}
          <div className="w-2/3 bg-black h-[450px]"></div>
          {/* BANNER-TOP-RIGHT */}
          <div className="w-1/3 bg-purple-300 h-[450px]"></div>
        </div>
        {/* BANNER-BOTTOM */}
        <div className="flex"></div>
      </div>
      <div>
        {/* BANNER-TOP */}
        <div className="flex">
          {/* BANNER-TOP-LEFT */}
          <div className="w-2/3 bg-black h-[450px]"></div>
          {/* BANNER-TOP-RIGHT */}
          <div className="w-1/3 bg-purple-300 h-[450px]"></div>
        </div>
        {/* BANNER-BOTTOM */}
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default Page;
