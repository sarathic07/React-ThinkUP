var webpack = require("webpack");
var path = require("path");

var config = {
     context: path.resolve(__dirname, "src"),
     entry: path.resolve(__dirname, "src") + "/index.js",
     output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
     },
     devServer: {
         contentBase: __dirname
     }
}

module.exports = config;
