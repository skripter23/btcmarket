const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@Components": resolvePath("./src/Components"),
      "@Assets": resolvePath("./src/Assets"),
      "@Pages": resolvePath("./src/Pages"),
      "@Icons": resolvePath("./src/Icons"),
      "@Styles": resolvePath("./src/Styles"),
      "@Types": resolvePath("./src/Types"),
    },
  },
};
