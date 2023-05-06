"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motions";
import Image from "next/legacy/image";
const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={` ${styles.innerWidth} w-full mx-auto flex gap-9 justify-between`}
      >
        <Image alt="search" src="/search.svg" width={30} height={20} />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white capitalize">
          Metaversus
        </h2>
        <Image src="/menu.svg" alt="menu" width={30} height={20} />
      </div>
    </motion.nav>
  );
};

export default Navbar;
