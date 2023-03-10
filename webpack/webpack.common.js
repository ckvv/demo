const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    NamedModulesPlugin,
    HotModuleReplacementPlugin,
    ProvidePlugin
} = require('webpack');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');



module.exports = {
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
        another: './src/indexj.js',
      },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new ProvidePlugin({
            $: 'jquery'
        }),
        //清理dist文件夹
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            title: 'Production'
        }),
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            }, {
                test: /\.worker\.js$/,
                use: [{
                    loader: 'worker-loader',
                    options: {
                        name: '[path][name].[hash].worker.js',
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    }
                }]
            }
        ]
    }
};