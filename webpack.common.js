const path = require('path');
const webpack = require('webpack');
const MINICssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const { env, port, host_name_local } = require('./config');



module.exports = {
    entry: './src/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/app.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new MINICssExtractPlugin({
            filename: 'assets/app.css'
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
        })
    ]

};