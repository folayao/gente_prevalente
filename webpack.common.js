const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const {port, host} = require('./config');


module.exports = {
    entry: ['./src/index.js', `webpack-hot-middleware/client?path=${host}${port}/__webpack_hmr&reload=true'`],
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/app.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
       
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
        })
    ]

};