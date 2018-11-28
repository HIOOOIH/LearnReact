> 使用 `localIdentName` 自定义生成的类名格式，可选的参数有：
- [path] 表示样式表`相对于项目根目录`所在路径
- [name] 表示样式表名称
- [local] 表示样式的类名定义名称（）
- [hash:length] 表示32位的hash值
- 例子：`{ test:\/.css$/, use: ['style-loader, 'css-loader?modules?localIdentName=[path][name]-[local]-[hash:$]'] }`
- src-css-css文件名-类名-防止类名重复

> 使用`:local()`和`:global()`
- `:local()`包裹的类名，是被模块化的类名，只能通过`className={cssObj.类名}`来使用
同时，`:local()`默认可以不写，这样，默认在样式表中定义的类名，都是被模块化的类名；
- `:global()`包裹的类名，是全局生效的，不会被`css-modules`控制，定义的类名是什么，就是使用定义的类名`className="类名"`
> 注意：只有.title这样的类样式选择器，才会被模块化控制，类似于`body`这样的标签选择器，不会被模块化控制

### 在项目中启用模块化并同时使用Bootstrap
1. 把自己的样式表，定义为`.scss`文件
2. 第三方的样式表，还是以`.css`结尾
3. 我们只需要为自己的`.scss`文件，启用模块化即可
4. 运行`npm i sass-loader node-sass -D`安装能够解析`.scss`文件的loader
5. `webpack.config.js`文件：
```
module.exports = {
    module:{
        // 第三方匹配规则
        rules:[
            { test:/\.css$/, use: ['style-loader', 'css-loader'] },
            { test:/\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]','sass-loader'] },
        ]
    },
}
```
