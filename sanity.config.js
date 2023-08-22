import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
// import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "my-portfolio",

  projectId: "3fimf6j8",
  dataset: "production",

  plugins: [deskTool(), vercelDeployTool()],
  basePath: "/studio",
  schema: {
    types: schemaTypes,
  },
});
