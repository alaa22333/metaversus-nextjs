"use client";
import { textContainer, textVariant2 } from "@/utils/motions";
import { motion } from "framer-motion";
export const TypingText = ({ title, textStyles }) => {
  return (
    <motion.p
      variants={textContainer}
      className={`${textStyles} font-normal text-[14px] text-secondary-white `}
    >
      {Array.from(title).map((letter, i) => (
        <motion.span key={i} variants={textVariant2}>
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};
export const TitleText = ({ title, textStyles }) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >{title}</motion.h2>
  );
};
