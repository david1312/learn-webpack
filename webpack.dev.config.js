const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //plugin for cleaning the output folder (in this project dist folder) before build the webpack output
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js", // for dynamic name file every changes / update occur in the file so browser will download the new one useful for case caching
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },
  mode: "development",
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3 kilobytes
          },
        },
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"], //First it will invoke sass-loader, which will convert our sass to css.
        //Then it will invoke css-loader, which will take that converted css and convert it to the
        //And only then Webpack will invoke style-loader, which will create style tags inside our html page and put css into it
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // this rule will not implement on node modules folder
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*", //default value if u not modified it
        path.join(process.cwd(), "build/**/*"),
      ],
    }), //can clean multiple folder
    new HtmlWebpackPlugin({
      title: "Hello hahaha",
      filename: "index.html", //kalo mau ubah name filenya bisa disini kalo beda folder tinggal di kasih "/"
      description: "Some description",
      template: "src/index.hbs",
    }),
  ],
};
