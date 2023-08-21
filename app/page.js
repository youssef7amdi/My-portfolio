import Header from "./components/Header/Header";
import About from "./components/About/About";
import Navbar from "./components/Header/Navbar/Navbar";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

import { client } from "@/sanity/sanity.client";
import { groq } from "next-sanity";

export async function getTestimonials() {
  const res = await client.fetch(
    groq`*[_type == "testimonials"]{
  _id,
  name,
  company,
  imgUrl {"image": asset->url},
  feedback,
}`
  );

  return res;
}

export default async function Home() {
  const testimonials = await getTestimonials();

  return (
    <main className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {testimonials > 0 && <Testimonials />}
      <Footer />
    </main>
  );
}
