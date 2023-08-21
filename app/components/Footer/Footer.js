"use client";

import { useState } from "react";
import { images } from "@/app/constants";
import Image from "next/image";
import { AppWrap, MotionWrap } from "../wrapper";
import { client } from "@/sanity/sanity.client";
import { groq } from "next-sanity";
import Link from "next/link";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name || "",
      email: email || "",
      message: message || "",
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <div className="flex-1 w-full flex-col app-flex">
      <h2 className="head-text">Take a Coffe & Chat With Me</h2>
      <div className="footer-cards w-[60%] max-md:w-full flex justify-evenly items-center flex-wrap-reverse mt-16 mb-8 mx-8">
        <div className="footer-card hover:shadow-email">
          <Image src={images.email} priority quality={100} alt="email" />
          <Link href="mailto:youssef7amdi@gmail.com" className="p-text">
          youssef7amdi@gmail.com
          </Link>
        </div>
        <div className="footer-card hover:shadow-tel" style={{backgroundColor: "#f2f7fb"}}>
          <Image src={images.mobile} priority quality={100} alt="mobile" />
          <Link href="tel: +20 (111) 1630-525" className="p-text">
            +20 (111) 1630-525
          </Link>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="footer-form app-flex w-[60%] max-md:w-full flex-col my-4 mx-8 max-md:mx-0">
          <div className="app-flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app-flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="text-[0.8rem] 3xl:text-[1.75rem] leading-normal py-4 px-8 bg-secondary cursor-pointer rounded-[10px] text-white font-[500] mt-8" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank You For Getting In Touch!</h3>
        </div>
      )}
    </div>
  );
};

export default AppWrap(MotionWrap(Footer), "contact", "bg-white");
