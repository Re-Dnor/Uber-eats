const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        assetModuleFilename: "image/[hash][ext][query]",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'pushkin.html',
            template: './pushkin.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:[MiniCssExtractPlugin.loader, {
                        loader: 'css-loader',
                        options: {
                        importLoaders: 1
                    }
                    },
                    'postcss-loader'
                ]   
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
};