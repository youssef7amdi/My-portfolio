"use client";

import { motion } from "framer-motion";
import React from "react";
import { images } from "@/app/constants";
import Image from "next/image";
import { AppWrap } from "../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <header
      className="app-flex flex-1 w-full h-full flex-col pt-[4.5rem] px-8 max-xsm:px-4 max-xsm:pb-8 3xl:pt-32 xl:flex-row"
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="header-info h-[calc(100dvh)] pt-6 flex-[0.65] shrink flex flex-col justify-start items-start w-full max-3xl:w-full max-3xl:mr-0"
      >
        <div className="badge w-full flex justify-end items-end max-xl:justify-start max-xl:items-start flex-col">
          <div className="app-flex badge-cmp py-4 px-8 rounded-[15px] flex-row w-auto shadow-nav shadow-black/[0.1] border-white ">
            <span className="text-[2.5rem] 3xl:text-[5rem]">👋</span>
            <div className="ml-[20px]">
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Youssef</h1>
            </div>
          </div>
          <div className="tag-cmp app-flex py-4 px-8 rounded-[15px] w-auto shadow-nav shadow-black/[0.1] border-white flex-col mt-12">
            <p className="p-text w-full uppercase text-right">Web Developer</p>
            <p className="p-text w-full uppercase text-right">Front-End</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="header-img max-xl:my-8 w-full flex-1 shrink h-[calc(100dvh)] flex justify-center items-end relative"
      >
        <Image
          src={images.profile}
          alt="Profile_bg"
          className="object-contain z-[1]"
          priority
          quality={100}
          objectFit="contain"
        />
        <motion.div

          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut"}}
          className="absolute h-[90%] app-flex left-0 right-0 bottom-0 z-0 overflow-hidden"
        >
          <Image
            className="overlay object-contain absolute"
            src={images.circle}
            alt="profile_circle"
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView="whileInView"
        className="header-circles flex-[0.75] shrink flex justify-evenly items-start flex-col h-[calc(100dvh)] ml-4 max-xl:w-full max-xl:flex-row max-xl:flex-wrap max-xl:ml-0"
      >
        {[images.next, images.tailwind, images.react].map((circle, index) => (
          <div
            className="circle-cmp app-flex w-full h-full rounded-full bg-white shadow-nav shadow-black/[0.1] max-xl:m-4"
            key={`circle-${index}`}
          >
            <Image
              src={circle}
              alt="circle"
              className="w-[60%] h-[60%]"
              priority
            />
          </div>
        ))}
      </motion.div>
    </header>
  );
};

export default AppWrap(Header, 'home');
