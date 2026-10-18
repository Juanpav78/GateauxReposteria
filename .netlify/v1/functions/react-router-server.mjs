
    import { createRequestHandler } from "@netlify/vite-plugin-react-router/serverless";
    import * as build from "../../../build/server/index.js";
    export default createRequestHandler({ build });

    export const config = {
      name: "React Router server handler",
      generator: "@netlify/vite-plugin-react-router@4.0.0",
      path: "/*",
      excludedPath: ["/.netlify/*"],
      preferStatic: true,
    };
    