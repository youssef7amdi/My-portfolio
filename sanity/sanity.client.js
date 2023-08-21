import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-08-15",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_TOKEN,
});

// const builder = imageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);
