"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config"

// import sanityConfig from "@/backend_sanity/sanity.config";

export default function Studio() {
  return <NextStudio config={config} />;
}
