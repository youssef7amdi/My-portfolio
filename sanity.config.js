import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
// import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "my-portfolio",

  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: "production",

  plugins: [deskTool()],
  basePath: "/studio",
  schema: {
    types: schemaTypes,
  },
});
