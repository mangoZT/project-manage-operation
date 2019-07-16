const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
    entry:{
        app:['ts-polyfill', './src/index.tsx'],
        vendor: ['react', 'react-router-dom', 'react-dom', 'mobx', 'mobx-react', 'mobx-react-lite', 'lodash']
    },
    mode:"development",
    devtool: 'cheap-module-eval-source-map',
    output:{
        filename:'[name].[hash:8].js',
        publicPath:'/',// 访问内容的前缀
        chunkFilename:'[name].[hash:8].js'
    },
    devServer:{
        // publicPath:"/",// 存放的路径
        host: '0.0.0.0',
        port:'8080',
        hot:true,
        historyApiFallback:true, // 解决启动后刷新404
        // proxy: { // 配置服务代理
        //     '/api': {
        //          target: 'http://localhost:8000',
        //          pathRewrite: {'^/api' : ''},  //可转换
        //          changeOrigin:true
        //     }
        // },
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../public/index.html')
        }),
        new LodashModuleReplacementPlugin
    ],
    optimization: {
        splitChunks: {
          chunks: "all",
        },
    },
    resolve: {
        alias: {
            "@pages": path.resolve(__dirname, '../src/pages'),
            "@components": path.join(__dirname, '../src/components'),
            "@router": path.join(__dirname, '../src/router'),
            "@images": path.join(__dirname, '../src/images'),
            "@apis": path.join(__dirname, '../src/apis'),
            "@models": path.join(__dirname, '../src/models'),
            "@utils": path.join(__dirname, '../src/utils'),
            "@stores": path.join(__dirname, '../src/stores'),
            "@typing": path.join(__dirname, '../src/typing'),
        },
        extensions: [".ts", ".tsx", ".js", 'config.js', ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: [
                    'awesome-typescript-loader',
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
                    'style-loader', 
                    {
                        loader:'css-loader',
                        options: {
                            sourceMap: true,
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
                use: [
                    'file-loader'
                ], 
                include: path.resolve(__dirname, "../src"),
                exclude: /node_modules/
            }
        ]
    }
}