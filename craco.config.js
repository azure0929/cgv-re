// craco.config.js

const path = require("path");

module.exports = {
  style: {
    singleQuote: true,
    semi: true,
  },
  webpack: {
    alias: {
      // 절대경로(alias) 설정
      "@": path.resolve(__dirname, "src"),
    },
  },
};
