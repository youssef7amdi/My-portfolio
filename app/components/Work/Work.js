"use client";

import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../wrapper";
import { client } from "@/sanity/sanity.client";
import Image from "next/image";
import { groq } from "next-sanity";
import Link from "next/link";

const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [activeFilter, setActiveFilter] = useState("All");
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState();

  useEffect(() => {
    client
      .fetch(
        groq`*[_type == "works"]{
      _id,
      title,
      description,
      projectLink,
      codeLink,
      imgUrl {"image": asset->url},
      tags,
    }`
      )
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <div className="flex-1 w-full flex-col ">
      <h2 className="head-text">
        My Creative
        <span> Portfolio </span>
        Section
      </h2>
      <div className="work-filter flex flex-row justify-center items-center flex-wrap mt-16 mb-8">
        {["HTML & CSS", "JavaScript", "React & Next", "All"].map((item) => (
          <div
            key={item}
            onClick={() => handleWorkFilter(item)}
            className={`work-filter-item app-flex text-[0.8rem] 3xl:text-[1.75rem] leading-normal py-2 px-4 m-2 rounded-[0.5rem]  font-extrabold cursor-pointer transition-all duration-300 hover:bg-secondary hover:text-white 3xl:py-4 3xl:px-8 3xl:rounded-[0.85rem] ${
              activeFilter === item
                ? "item-active bg-secondary text-white"
                : "bg-white text-black"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="work-portfolio flex flex-wrap justify-center items-center"
      >
        {filterWork &&
          filterWork.map((work, index) => (
            <div
              className="work-item cursor-pointer app-flex w-[270px] flex-col m-8 p-4 rounded-[0.5rem] bg-white text-black transition-all duration-300 hover:shadow-work 3xl:w-[470px] 3xl:p-5 3xl:rounded-[0.75rem] max-[300px]:w-full max-[300px]:m-4"
              key={index}
            >
              <div className="work-img w-full h-[180px] 3xl:h-[350px] relative app-flex">
                <Image
                  src={work.imgUrl.image}
                  alt={work.title}
                  priority
                  quality={100}
                  width={400}
                  height={400}
                  className="w-full h-full rounded-[0.5rem] object-contain"
                />
                <motion.div
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: [0.5, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="work-hover app-flex absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-black/50 rounded-[0.5rem]  transition-all duration-300"
                >
                  <Link
                    href={work.projectLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.div
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <AiFillEye />
                    </motion.div>
                  </Link>
                  <Link href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <AiFillGithub />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
              <div className="work-content app-flex p-2 w-full relative flex-col">
                <h4 className="bold-text mt-4 leading-normal ">{work.title}</h4>
                <p className="p-text text-center mt-[10px]">{work.description}</p>
                <div className="work-tag app-flex absolute py-2 px-4 rounded-[10px] bg-white top-[-25px]">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(MotionWrap(Work), "work");
