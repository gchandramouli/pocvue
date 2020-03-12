const baseUrl =
  process.env.NODE_ENV === "production"
    ? "/vuejs_poc/"
    : "/";

module.exports = {
  outputDir: "docs",
  baseUrl: baseUrl
};
