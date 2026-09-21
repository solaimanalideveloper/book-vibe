import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto mt-20">
      <div className=" bg-slate-200 p-20 flex justify-between gap-4 items-center rounded-2xl">
        <div>
          <h2 className="font-bold text-4xl">
            Books to freshen up <br /> your bookshelf
          </h2>
          <button className="btn btn-success text-[#FFFFFF] font-bold mt-10">
            View The List
          </button>
        </div>
        <div>
          <Image src={bannerImg} alt="banner image"></Image>
        </div>
      </div>
    </section>
  );
};

export default Banner;
