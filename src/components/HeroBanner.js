import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="">
      <img
        src="/banner_hero.jpg"
        alt="headphones"
        height="auto"
        className="hero-banner-image"
      />
    </div>
  );
};

export default HeroBanner;
