(function () {
    "use strict";

    var webpack = require("webpack");    
    var helpers = require("./helpers");

    module.exports = {
        entry: {
            "vendor": "./src/vendor.ts",
            "app": "./src/app.ts"
        },
        resolve: {
            extensions: [".ts", ".js"]
        },
        module: {
            rules: [{
                test: /\.ts$/,
                use: [{
                    loader: "awesome-typescript-loader",
                    options: { configFileName: helpers.root("tsconfig.json") }
                }]
            }]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: ["app", "vendor"]
            })
        ]
    };
})();