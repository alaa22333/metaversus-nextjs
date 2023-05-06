"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motions";

const InsightCard = ({ imgUrl, title, subtitle, index }) => {
  return (
    <motion.div
      className="flex md:flex-row flex-col gap-4 "
      variants={fadeIn("up", "spring", index * 0.5, 1)}
    >
      <img
        src={imgUrl}
        alt="planet"
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover "
      />
      <div className="w-full flex justify-between items-center ">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
            {title}
          </h4>
          <h4 className="mt-[16px] font-normal text-[14px] lg:text-[20px] text-secondary-white">
            {subtitle}
          </h4>

        </div>
        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white " >
          <img src="arrow.svg" className="w-[40%] h-[40%] object-contain"/>
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;
