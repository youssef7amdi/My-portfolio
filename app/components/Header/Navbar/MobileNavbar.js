"use client";
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const MobileNavbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-[35px] h-[35px] Lmd:hidden rounded-full relative flex items-center justify-center bg-secondary">
      <HiMenuAlt4
        onClick={() => setToggle(true)}
        className="w-[70%] h-[70%] text-white cursor-pointer"
      />
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            exit={{x: 600}}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="fixed Lmd:hidden top-0 bottom-0 right-0 z-50 p-4 w-[60%] h-[calc(100dvh)] flex justify-end items-end flex-col bg-[url('/assets/bgWhite.png')] bg-white bg-cover bg-repeat shadow-nav"
          >
            <HiX
              onClick={() => setToggle(false)}
              className="cursor-pointer w-[35px] h-[35px] text-secondary my-2 mx-4"
            />
            <ul className="flex justify-start m-0 p-0 h-full w-full flex-col ">
              {[
                "home",
                "about",
                "work",
                "skills",
                "contact",
              ].map((item) => (
                <li key={item} className="cursor-pointer mx-2">
                  <Link
                    href={`#${item}`}
                    className="text-gray block w-full h-full p-4 rounded-md text-[1rem] uppercase font-[500] transition-all duration-300 ease-in-out hover:text-secondary hover:bg-lightGray"
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
