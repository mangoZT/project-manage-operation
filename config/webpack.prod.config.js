const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    devtool: 'none',
    /*入口*/
    entry: {
        app:path.join(__dirname, '../src/index.js'),
        vendor: ['react', 'react-router-dom', 'react-dom', 'mobx', 'mobx-react', 'mobx-react-lite', 'lodash']
    },
    mode:'production',
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath:'/dist/'
    },
    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'ts-loader',
                    {
                        loader: 'ui-component-loader',
                        options: {
                            'lib': 'antd',
                            'camel2': '-',
                            'style': 'style/css.js',
                        }
                  },
                ],
                include: path.resolve(__dirname, "../src"),
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                include: path.join(__dirname, '../src'),
                use: [
                    'style-loader', {
                        loader:'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]--[hash:base64:5]'
                        }
                    }, 
                    'postcss-loader',
                    { loader: 'less-loader', options: { javascriptEnabled: true } }
                ]
             },
             {
                test: /\.(css|less)$/,
                include: path.join(__dirname, '../node_modules'),
                use: [
                    'style-loader', 
                    'css-loader',
                    { loader: 'less-loader', options: { javascriptEnabled: true } }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }}
                ],
                include: path.resolve(__dirname, "../src"),
                exclude: /node_modules/
            }
        ]
    },
    // 别名配置
    resolve: {
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            components: path.join(__dirname, '../src/components'),
            router: path.join(__dirname, '../src/router'),
            images: path.join(__dirname, '../src/images'),
            apis: path.join(__dirname, '../src/apis'),
            models: path.join(__dirname, '../src/models')
        }
    },
    // 插件配置
    plugins: [
        new CleanWebpackPlugin(), // 每次打包前清空
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../public/index.html')
        }),
        new MiniCssExtractPlugin({ // 压缩css
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css'
        }),
        new OptimizeCssAssetsPlugin()
    ],
    optimization: {
        splitChunks: {
          chunks: 'all'
        }
    }
};