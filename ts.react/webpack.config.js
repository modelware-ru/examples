const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const config = {
    mode: 'development',
    entry: './src/index.tsx',
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
            {
                test: /\.s[ac]ss$/,
                exclude: [/node_modules/, /\.module.(s(a|c)ss)$/],
                loader: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/,
                include: [/\.module.(s(a|c)ss)$/],
                loader: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                            importLoaders: 2,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.tsx',
            '.ts',
            '.scss'
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
                    from: 'src/asset/img',
                    to: 'asset/img',
                },
            ]
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
    }
};

module.exports = config;