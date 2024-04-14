import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

const base = "/landing-2p-marte";
const buildUrl = "https://adrianv99.github.io";
const localhostUrl = "http://localhost:4321";

const script = process.env.npm_lifecycle_script;
const isBuild = script.includes("astro build");

let site = localhostUrl;
if (isBuild) {
  site = buildUrl;
}

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [tailwind(), react()],
});
