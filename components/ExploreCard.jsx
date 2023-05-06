"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motions";
import Image from "next/legacy/image";
const ExploreCard = ({ id, index,active, imgUrl, title, handleClick }) => {

  return (
    <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt="planet-04"
      layout="fill"
      className="absolute  object-cover rounded-[24px]"
    />
    {active!==id?<h3 className="font-semibold sm:text-[26px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg]" >{title}</h3>:(<div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-black/50 rounded-b-[24px]">
      <div className={`${styles.flexCenter} w-[60px] h-[60px] relative rounded-[24px] glassmorphism mb-[16px]`}>
        <Image layout="fill" src='/headset.svg' alt='headset' className="w-1/2 h-1/2 object-contain" />
      </div>
      <p className="font-normal text-[16xp] text-white uppercase leading-[20px]">Enter The Metaverse</p>
<h2 className="mt-[24px] font-semibold text-white sm:text-[32px] text-[24px] " >{title}</h2>
    </div>)}
   
   </motion.div>)}

export default ExploreCard;
