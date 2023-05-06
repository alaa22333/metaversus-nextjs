"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motions";
import Image from "next/legacy/image";
import Link from "next/link";
const Hero = () => {
  return (
    <section className={`{styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        className={`${styles.innerWidth} mx-auto flex flex-col`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="items-center flex-col relative z-10 flex justify-center ">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Metaverse
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}>Ma</h1>
            <div className={styles.heroDText}></div>
            <h1 className={styles.heroHeading}>Ness</h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[12px]"
        >
          <div className="absolute rounded-tl-[140px] w-full h-[300px] hero-gradient z-[0] -top-[30px]"/>
          <div className=" relative sm:h-[500px] h-[350px] w-full">
            <Image
              src="/cover.png"
              layout="fill"
              className=" object-cover  rounded-tl-[140px]"
            />

          </div>
          <Link href='#explore' className='w-full flex justify-end sm:-mt-[70px] -mt-[60px] pr-[40px] relative z-10'>
        
            <img src='/stamp.png' layout='fill' className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain' />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
