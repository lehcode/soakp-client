// Example: snowpack.config.mjs
// The added "@type" comment will enable TypeScript type information via VSCode, etc.
// import fs from "fs";
//

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  // root: "./demo",
  mount: {
    "./public": { url: "/", resolve: true, static: true, dot: true },
    // "./": { url: "/", resolve: true, static: true },
    "./src": { url: "/" }
  },
  exclude: [
    "**/node_modules/**/*",
    "**/.eslintrc.json",
    "**/.git/**/*",
    "**/.github/**/*",
    "**/.gitignore",
    "**/.npmignore",
    "**/.snowpack",
    "**/.openapi-generator-ignore",
    "**/.openapi-generator/**/*",
    "**/Dockerfile",
    "**/LICENSE",
    "**/README.md",
    "**/default.conf",
    "**/.idea/**/*",
    "**/snowpack.config.js",
    "**/demo/**/*",
    "**/docs/**/*",
    "**/src/**/*",
    "**/tsconfig.json"
  ],
  plugins: ["@snowpack/plugin-typescript"],
  packageOptions: {
    knownEntrypoints: ["form-data", "axios"]
  },
  devOptions: {
    secure: {
      cert: process.env.SNOWPACK_PUBLIC_CERT,
      key: process.env.SNOWPACK_PUBLIC_KEY
    }
  },
  buildOptions: {
    out: "./demo",
    sourcemap: true
  },
  alias: {
    "soakp-client": "./src/soakp-client.ts",
  }
};
