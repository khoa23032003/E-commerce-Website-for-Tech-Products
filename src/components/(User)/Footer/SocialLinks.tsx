"use client";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="container mx-auto mt-8 flex justify-center space-x-4 text-black">
      <a href="#">
        <i className="fab fa-facebook text-2xl"></i>
      </a>
      <a href="#">
        <i className="fab fa-instagram text-2xl"></i>
      </a>
      <a href="#">
        <i className="fab fa-twitter text-2xl"></i>
      </a>
      <a href="#">
        <i className="fab fa-pinterest text-2xl"></i>
      </a>
      <a href="#">
        <i className="fab fa-tiktok text-2xl"></i>
      </a>
    </div>
  );
};

export default SocialLinks;
