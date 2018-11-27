const path = require("path");
// 导入 在内存中自动生成 index 页面的插件
const HtmlWebPackPlugin = require("html-webpack-plugin");

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'), // 源文件
    filename: 'index.html' // 生成的内存中首页的名称
});

// 向外暴露一个打包的配置对象；  因为webpack是基于Node构建的，所以webpack支持所有nodeAPI和语法;
// webpack 默认只能打包处理 .js 后缀名的文件；像 .png .vue 无法主动处理，所以要配置第三方的loader;
module.exports = {
    mode: 'development',     // development production
    // 在 webpack 4.x 中，有一个很大的特性，就是 约定大于配置 ，约定默认的打包入口路径是 src -> index.js
    plugins: [
        htmlPlugin
    ],
    // 所有第三方 模块的配置规则
    module:{
        // 第三方匹配规则
        rules:[
            // 千万不能忘记添加 exclude 排除项
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            // 打包处理 CSS 样式表的第三方 loader，从后往前处理，css-loader => style-loader
            // 可以在 css-loader 之后，通过 ? 追加参数
            // 其中，有个固定的参数，叫做 modules,表示为 普通的 CSS 样式表，启用模块化
            { test:/\.css$/, use: ['style-loader', 'css-loader?modules'] },
            // { test:/\.jpg|png|gif|bmp$/, use: 'url-loader' }
        ]
    },
    resolve:{
        // 表示，这几个后缀名可以不写
        extensions: ['.js', '.jsx', '.json'],
        alias:{
            // 这样，@ 就表示 项目根目录中 src 的这一层路径
            '@':path.join(__dirname, './src')
        }
    }
};