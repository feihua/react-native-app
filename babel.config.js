module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json", ".png", ".jpg"],
        alias: {
          "@": "./src/",
          "@views": "./src/views/",
          "@images": "./src/assets/images/",
        },
      },
    ],
  ],
};
