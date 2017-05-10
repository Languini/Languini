'use strict';

import path from 'path';
import webpack from 'webpack';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

module.exports = {
    context: __dirname,
    devtool: 'hidden-source-map',
    entry: {
        app: './app/src/client/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'app/static/dist'),
        filename: 'bundle.min.js',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|)$/i,
                use: [
                    'file-loader?name=images/[name].[ext]',
                    'image-webpack-loader'
                ]
            },
            // url-loader uses DataUrls
            {
                test: /\.(woff2?|svg)$/,
                // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
                // loader: "url?limit=10000"
                use: "url-loader?name=fonts/[name].[ext]"
            },
            {
                test: /\.(eot|ttf)$/,
                use: 'file-loader?name=fonts/[name].[ext]'
            },
            // Babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new UglifyJSPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        })
    ]
};
