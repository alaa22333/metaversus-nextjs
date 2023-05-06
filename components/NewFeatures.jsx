"use client";
import React from "react";
import styles from "../styles";
import Image from "next/image";

const NewFeatures = ({ imgUrl, title, subtitle }) => {
  return (
    <div className="flex-1 flex-col flex sm:max-w-[250px] min-w-[210px]">
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
      >
        <img
          alt="whatsNew"
          src={imgUrl}
          className="w-1/2 h-1/2 object-contain"
        /> </div>
        <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">title {title}</h1>
        <p className="flex- mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">{subtitle}</p>
     
    </div>
  );
};

export default NewFeatures;
