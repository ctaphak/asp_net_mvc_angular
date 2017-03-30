﻿(function () {
    "use strict";

    var webpackMerge = require("webpack-merge");    
    var commonConfig = require("./webpack.common");
    var helpers = require("./helpers");

    module.exports = webpackMerge(commonConfig, {
        devtool: "cheap-module-eval-source-map",
        output: {
            path: helpers.root("dist"),
            publicPath: "/dist/",
            filename: "[name].js"
        },
        plugins: [            
        ]
    });
})();