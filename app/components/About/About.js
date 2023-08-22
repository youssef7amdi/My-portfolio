"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { groq } from "next-sanity";
import { AppWrap, MotionWrap } from "../wrapper";
import { client } from "@/sanity/sanity.client";
import { images } from "@/app/constants";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        groq`*[_type == "abouts"]{
      _id,
      title,
      description,
      imgUrl {"image": asset->url},
    }`
        // {
        //   next: {
        //     revalidate: 60 * 60 * 24,
        //   },
        // }
      )
      .then((data) => setAbouts(data));
  }, []);

  return (
    <div className="flex-1 w-full flex-col">
      <h2 className="head-text">
        I Know That
        <span> Good Websites</span>
        <br />
        means
        <span> Good Business</span>
      </h2>
      <div className="profiles flex justify-center items-start flex-wrap mt-8">
        {abouts &&
          abouts.map((about) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="profile-item w-[190px] flex justify-start items-start flex-col m-8 3xl:w-[370px] 3xl:my-8 3xl:mx-16"
              key={`${about.title}`}
            >
              <Image
                src={about.imgUrl.image}
                alt={about.title}
                priority={true}
                quality={100}
                width={400}
                height={400}
                className="w-full h-[170px] 3xl:h-[320px] rounded-[15px] object-cover"
              />
              <h2 className="bold-text mt-5">{about.title}</h2>
              <p className="p-text mt-[10px]">{about.description}</p>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About), "about", "bg-white");
