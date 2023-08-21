"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { groq } from "next-sanity";
import { AppWrap, MotionWrap } from "../wrapper";
import { client } from "@/sanity/sanity.client";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    client
      .fetch(
        groq`*[_type == "testimonials"]{
      _id,
      name,
      company,
      imgUrl {"image": asset->url},
      feedback,
    }`, {
      cache: 'no-store'
    }
      )
      .then((data) => setTestimonials(data));
    client
      .fetch(
        groq`*[_type == "brands"]{
      _id,
      name,
      imgUrl {"image": asset->url},
    }`, {
      cache: 'no-store'
    }
      )
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="flex-1 w-full flex-col app-flex">
      {testimonials.length > 0 && (
        <>
          <div className="testimonial-item app-flex flex-row max-[600px]:flex-col w-3/5 m-auto max-[850px]:w-full min-h-[320px] 3xl:min-h-[450px] bg-white p-8 rounded-[15px] shadow-testimonial transition-all duration-300 ease-in-out">
            <Image
              src={testimonials[currentIndex].imgUrl.image}
              alt="testimonial"
              priority
              quality={100}
              width={400}
              height={400}
              className="w-[100px] 3xl:w-[150px] h-[100px] 3xl:[150px] rounded-full object-cover"
            />
            <div className="testimonial-content flex-1 h-full py-0 px-8 text-left flex flex-col justify-around items-start ">
              <p className="text-[1.25rem] 3xl:text-[1.75rem] text-black leading-[2rem]">
                {testimonials[currentIndex].feedback}
              </p>
              <div>
                <h4>{testimonials[currentIndex].name}</h4>
                <h5>{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="testimonial-btns app-flex flex-row mt-4 ">
            <div
              className="app-flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app-flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      {brands.length > 0 && (
        <>
          <div className="testimonials-brands app-flex w-4/5 max-[800px]:w-full flex-wrap mt-8">
            {brands.map((brand) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: "tween" }}
                key={brand._id}
                className={`w-[150px] m-6 group 3xl:w-[210px] 3xl:m-8 max-xsm:w-[120px] max-xsm:m-4`}
              >
                <Image
                  src={brand.imgUrl.image}
                  alt={brand.name}
                  priority
                  quality={100}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AppWrap(MotionWrap(Testimonials), "testimonials");
