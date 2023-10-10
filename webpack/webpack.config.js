const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { glob } = require("glob");

module.exports = {
  mode: "production",
  entry: () => {
    const entries = {};
    const files = glob.sync(path.resolve(__dirname, '../src/**/*.ts'));

    files.forEach((file) => {
      const entryName = path.basename(file, '.ts');
      entries[entryName] = './' + path.relative(path.resolve(__dirname, '..'), file);
    });

    return entries;
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: ".", to: ".", context: "public" }],
    }),
  ],
};
