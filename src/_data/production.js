module.exports = (function () {
  return process.env.ELEVENTY_RUN_MODE === "build";
})();