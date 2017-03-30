﻿(function () {
    "use strict";

    var webpack = require("webpack");
    var webpackMerge = require("webpack-merge");    
    var commonConfig = require("./webpack.common");
    var helpers = require("./helpers");

    const ENV = process.env.NODE_ENV = process.env.ENV = "production";

    module.exports = webpackMerge(commonConfig,
    {
        devtool: false,
        output: {
            path: helpers.root("dist"),
            publicPath: "/",
            filename: "[name].js",
            chunkFilename: "[id].[hash].chunk.js"
        },
        plugins: [
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.optimize.UglifyJsPlugin(),                        
            new webpack.DefinePlugin({
                'process.env': {
                    'ENV': JSON.stringify(ENV)
                }
            })
        ]
    });

})();