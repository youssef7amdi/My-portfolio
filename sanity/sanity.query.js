import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getAbout() {
  return client.fetch(
    groq`*[_type == "abouts"]`
  );
}

