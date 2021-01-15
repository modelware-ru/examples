const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
            {
                // test: /\.(png|jpe?g|gif|ttf|eot|otf|woff|woff2|xml|ico|pdf|doc|docx|txt|webmanifest)$/,
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
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
        new MiniCssExtractPlugin(),
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
    stats: {
        all: false,
        builtAt: true,
        errors: true,
        errorDetails: true,
    },
};

module.exports = config;