const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:'./src/index.tsx',
        vendor: ['react', 'react-router-dom', 'react-dom', 'mobx', 'mobx-react', 'mobx-react-lite', 'lodash']
    },
    mode:"development",
    devtool: 'cheap-module-eval-source-map',
    output:{
        path:path.join(__dirname, '../dist'),
        filename:'[name].js',
        chunkFilename:'[name].js'
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, '../src'),
            "@pages": path.resolve(__dirname, '../src/pages'),
            "@components": path.join(__dirname, '../src/components'),
            "@router": path.join(__dirname, '../src/router'),
            "@images": path.join(__dirname, '../src/images'),
            "@apis": path.join(__dirname, '../src/apis'),
            "@models": path.join(__dirname, '../src/models'),
            "@utils": path.join(__dirname, '../src/utils'),
            "@stores": path.join(__dirname, '../src/stores'),
        },
        extensions: [".ts", ".tsx", ".js", 'config.js', ".json"]
    },
    devServer:{
        host: '0.0.0.0',
        port:'8080',
        hot:true,
        publicPath:'/',
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
        })
    ],
    optimization: {
        splitChunks: {
          chunks: "all",
        },
    },
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
                use: [
                    'file-loader'
                ], 
                include: path.resolve(__dirname, "../src"),
                exclude: /node_modules/
            }
        ]
    }
}