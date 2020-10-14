const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        './src/index.tsx',
    ],
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        port: 10000,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.tsx',
            '.ts',
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['!index.html'],
            verbose: true,
        }),
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/OneSignalSDKWorker.js',
                    to: '',
                },
                {
                    from: 'src/OneSignalSDKUpdaterWorker.js',
                    to: '',
                },
            ]
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'inline-source-map',
};

module.exports = config;