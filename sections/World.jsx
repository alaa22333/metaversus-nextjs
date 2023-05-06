"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motions";
import { NewFeatures, TitleText, TypingText } from "@/components";
import { newFeatures } from "@/constants";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10 `}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex  flex-col `}
      >
        <TypingText title="| People on The World " textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
        <img src="/map.png" className="w-full h-full object-cover" alt="map" />
      <div className="absolute bottom-20 right-10 w-[70px] h-[70px]  p-[6px] rounded-full bg-[#5d6680]  ">
        <img src="people-01.png" alt="peolpe-01" className="w-full h-full"/>

      </div>
      <div className="absolute top-10 left-10 w-[70px] h-[70px]  p-[6px] rounded-full bg-[#5d6680]  ">
        <img src="people-02.png" alt="peolpe-02" className="w-full h-full"/>

      </div>
      <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px]  p-[6px] rounded-full bg-[#5d6680]  ">
        <img src="people-03.png" alt="peolpe-01" className="w-full h-full"/>

      </div>
      <div className="absolute top-20 right-32 w-[100px] lg:w-[180px]  h-[100px] lg:h-[150px] p-[6px] rounded-full bg-[#5d6680]  ">
        <img src="people-04.png" alt="peolpe-03" className="w-full h-full"/>

      </div>
      <div className="absolute bottom-20 left-20 w-[100px] lg:w-[180px] h-[100px] lg:h-[150px]  p-[6px] rounded-full bg-[#5d6680]  ">
        <img src="people-05.png" alt="peolpe-05" className="w-full h-full"/>

      </div>
      </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
