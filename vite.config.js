import { resolve } from "path";

export default {
  base: "/online-zoo/",
  root: "src",
  build: {
    target: "chrome87",
    outDir: "../dist",
    rollupOptions: {
      input: {
        landing: resolve(__dirname, "src/pages/landing/index.html"),
        contact: resolve(__dirname, "src/pages/contact/index.html"),
        map: resolve(__dirname, "src/pages/map/index.html"),
        zoos: resolve(__dirname, "src/pages/zoos/index.html"),
      },
    },
  },
};
