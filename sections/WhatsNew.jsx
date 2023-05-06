"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motions";
import { NewFeatures, TitleText, TypingText } from "@/components";
import { newFeatures } from "@/constants";

const WhatsNew = () => {
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
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[.75] flex justify-center flex-col"
        >
          <TypingText title="| What's New?" />
          <TitleText title={<>What's new about MetaVersus?</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature, index) => {
              return <NewFeatures key={index} {...feature} />;
            })}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/whats-new.png"
            alt="new"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;