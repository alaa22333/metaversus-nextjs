"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motions";
import { TitleText, StartSteps, TypingText } from "@/components";
import { exploreWorlds, startingFeatures } from "../constants";
import Image from "next/image";

const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10 `}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row  flex-col gap-8`}
      >
        <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
       
       
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[.75] flex justify-center flex-col"
        >
          <TypingText title="| How Metaversus Works" />
          <TitleText title={<>Get Started With just afew Clicks</>} />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => {
            return   <StartSteps key={index} number={index + 1} text={feature} />;
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
