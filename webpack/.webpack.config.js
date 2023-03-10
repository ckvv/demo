const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {NamedModulesPlugin,HotModuleReplacementPlugin} = require('webpack');

const outPutPath = 'public';
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, outPutPath)
    },
    // 也可以通过 "mode" 配置选项轻松切换到压缩输出
    mode: "production",
    // 此选项控制是否生成，以及如何生成 source map。
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 9000,
        // hot: true
    },
    plugins: [
        //清理dist文件夹
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            title: 'Output Management'
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