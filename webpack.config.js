const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve( __dirname, './src/index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new CopyPlugin({
            patterns: [
              { 
                from: path.resolve(__dirname, 'src/assets'), 
                to: path.resolve(__dirname, 'dist'),
              },

            ],
        }),
    ]
}