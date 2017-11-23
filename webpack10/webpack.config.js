var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var env = process.env.NODE_ENV || 'prod';

var devtool;

var definePlugin = {
    __ENV__: (env === "prod") ? "production" : "development",
    __DEV__: env === "dev",
    __PROD__: env === "prod"
};

var plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(definePlugin),
    new HtmlWebpackPlugin({ template: "./src/index.html" })
]
if (env === "prod") {
    definePlugin.process = {
        env: {
            NODE_ENV: JSON.stringify("production") // This has effect on the react lib size
        }
    };
    plugins.push(
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
}

if (env === "prod") {
    devtool = "source-map";
}

var config = {
    entry: {
        app: "./src/index"
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    },
    plugins: plugins,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ["babel"],
                include: path.join(__dirname, "src")
            },
            {
                test: /\.css$/,
                loaders: ["style", "css"]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=/images/[name].[ext]"
            },
            {
                test: /\.(zip|pdf)$/i,
                loader: "file-loader?name=/media/[name].[ext]"
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true
    },
    devtool: devtool
}

module.exports = config;