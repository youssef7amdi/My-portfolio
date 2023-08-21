"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { groq } from "next-sanity";
import { AppWrap, MotionWrap } from "../wrapper";
import { client } from "@/sanity/sanity.client";
import { Tooltip } from "react-tooltip";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    client
      .fetch(
        groq`*[_type == "experiences"]{
      _id,
      year,
      works,
    }`,
        {
          next: {
            revalidate: 60 * 60 * 24,
          },
        }
      )
      .then((data) => setExperiences(data));
    client
      .fetch(
        groq`*[_type == "skills"]{
      _id,
      name,
      bgColor,
      icon {"image": asset->url},
    }`,
        {
          next: {
            revalidate: 60 * 60 * 24,
          },
        }
      )
      .then((data) => setSkills(data));
  }, []);
  return (
    <div className="flex-1 w-full flex-col">
      <h2 className="head-text" title="skills">
        Skills & Experience
      </h2>
      <div className="skills-container w-[80%] mt-12 mx-auto flex justify-center flex-row max-xl:w-full max-xl:flex-col">
        <motion.div className="skills-list mr-20 max-xl:mr-0 flex-1 flex flex-wrap  justify-center max-xl:justify-center items-start max-Lmd:items-center">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-item app-flex flex-col text-center m-4 3xl:my-4 3xl:mx-8 transition-all duration-300 ease-in-out"
              key={skill.name}
            >
              <div
                className={`app-flex bg-primary w-[90px] h-[90px] rounded-full hover:shadow-skill 3xl:w-[150px] 3xl:h-[150px]`}
              >
                <Image
                  src={skill.icon.image}
                  alt={skill.name}
                  priority
                  quality={100}
                  width={400}
                  height={400}
                  className="w-1/2 h-1/2"
                />
              </div>
              <p className="p-text font-[500] mt-2 3xl:mt-4">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        {experiences.length > 0 && (
          <motion.div className="skills-exp flex-1 shrink flex justify-start items-start flex-col max-xl:mt-8">
            {experiences.map((experience) => (
              <motion.div
                className="skills-exp-item w-full flex flex-row justify-start items-start my-4"
                key={experience.year}
              >
                <div className="skills-exp-year mr-12 max-xsm:mr-4">
                  <p className="text-left text-secondary text-[0.9rem] xsm:text-[1rem] 3xl:text-[2rem] font-extrabold">
                    {experience.year}
                  </p>
                </div>
                <motion.div className="skills-exp-works flex-1">
                  {experience.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="skills-exp-work flex flex-col justify-start items-start mb-4 cursor-pointer"
                        data-tooltip-id={work.name}
                        data-tooltip-content={work.desc}
                        data-tooltip-place="top"
                        key={work.name}
                      >
                        <h4 className="bold-text font-[500]">{work.name}</h4>
                        <p className="p-text font-[400] mt-[5px]">
                          {work.company}
                        </p>
                      </motion.div>
                      <Tooltip
                        id={work.name}
                        effect="solid"
                        arrowColor="#fff"
                        className={`skills-tooltip max-w-[300px] bg-white shadow-tip rounded-[5px] p-4 text-gray text-center leading-normal opacity-100 3xl:text-[1.75rem] 3xl:max-w-[500px] 3xl:leading-[2]`}
                      />
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Skills),
  "skills",
  "bg-white border-b-2 border-primary"
);
