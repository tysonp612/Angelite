module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: "./front_end/.env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
        "nativewind/babel",
      ],
    ],
  };
};
