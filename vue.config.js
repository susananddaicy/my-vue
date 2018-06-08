const serviceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')
const path = require('path');


module.exports = {
    configureWebpack: {
        plugins: [
            new serviceWorkerWebpackPlugin({
                // 自定义的 sw.js 文件所在路径
                // ServiceWorkerWebpackPlugin 会把文件列表注入到生成的 sw.js 中
                entry: path.join(__dirname, './src/sw.js'),
            }),
        ]
    },
}