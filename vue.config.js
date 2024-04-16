const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack");
//const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = defineConfig({

    outputDir: 'docs',
    assetsDir: './',
    publicPath: './',
    transpileDependencies: true,
    //chainWebpack: (config) => {
    //    config.plugin("polyfills").use(NodePolyfillPlugin);
    //    config.target("node");
    //    //config.externals(nodeExternals({ allowlist: /\.(css|vue)$/ }));
    //},
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                Buffer: ["buffer", "Buffer"],
            }),
            new webpack.ProvidePlugin({
                process: "process/browser",
            }),
        ],
        resolve: {
            fallback: {
                path: require.resolve("path-browserify"),
                os: require.resolve("os-browserify/browser"),
                crypto: require.resolve("crypto-browserify"),
                stream: require.resolve("stream-browserify"),
                vm: require.resolve("vm-browserify")
            },
        },
    },
    
})
