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
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin(definePlugin),
    new HtmlWebpackPlugin({ 
        template: "./index.html",
        inject: false
    })
]

if (env === "prod") {
    definePlugin.process = {
        env: {
            NODE_ENV: JSON.stringify("production") // This has effect on the react lib size
        }
    };
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
}

if (env === "dev") {
    devtool = "source-map";
    plugins.push(
        new webpack.HotModuleReplacementPlugin()
    )
}

// loaders eg - https://webpack.js.org/loaders/babel-loader/

var config = {
     context: path.resolve(__dirname, "src"),
     entry: "./index.js",
     output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
     },
     plugins: plugins,
     module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.join(__dirname, "src")],
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: path.resolve(__dirname, "src") + "/images",
                            outputPath: path.resolve(__dirname, "dist") + "/images"
                        }
                    }
                ]
            }
        ]
    },
     devServer: {
         contentBase: path.resolve(__dirname, "dist"),
         hot: true
     },
     devtool: devtool
}

module.exports = config;
