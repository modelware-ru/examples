const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/,
                include: [
                    /css.*\.css$/
                ],
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }]
            },
            {
                test: /\.css$/,
                exclude: [
                    /css.*\.css$/
                ],
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                            importLoaders: 1,
                        }
                    }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                    },
                },]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[ext]?[hash]',
                        limit: 500
                    }
                }]
            },
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.json']
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['!index.html'],
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // filename: 'index.html',
            // inject: 'body',
        }),
    ],
    stats: {
        all: false,
        builtAt: true,
        errors: true,
        errorDetails: true,
    },

    optimization: {
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'initial'
                },
                // shared:{
                //     test: /EventManager.js$/,
                //     name: 'shared',
                //     chunks: 'initial'
                // }
            }
        }
    }
};
