"use client";
import React from "react";

interface FooterColumnProps {
  title: string;
  items: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => {
  return (
    <div className="h-[150px] mx-2 flex flex-col  ">
      {" "}
      {/* Thay đổi ở đây */}
      <h3 className="text-[10px] font-semibold text-black mb-2">{title}</h3>
      <ul className=" text-[8px] ">
        {" "}
        {/* Thêm text-center để căn giữa nội dung trong ul */}
        {items.map((item, index) => (
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
