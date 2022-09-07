const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    require("stylelint"),
    require("autoprefixer"),
    postcssPresetEnv({
      stage: 0,
    }),
    require("postcss-pxtorem"),
  ],
};
