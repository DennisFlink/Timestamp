const path = require("path");

module.exports = {
  entry: {
    easytimer: "./node_modules/easytimer.js/dist/easytimer.js",
    script: "./dist/script.js", // Anpassa sökvägen om nödvändigt
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
