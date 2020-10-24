## 厦门大学宽带无线实验室主页

### 开发技术

采用目前流行的前端开发技术开发，以模块化、组件化的方式构建、打包项目

+ 常规的现代化前端项目
+ 使用webpack打包
+ 使用React/React-router构建的一个单页应用，路由使用hash路由
+ 开发语言：Typescript（JavaScript）/SCSS

### 项目结构

```bash
-resources
  |_ images # 存储静态图片
  |_ style # 全局样式
  |_ template # ejs 模版
  
-src
  |_ components # 通用组件
  |_ utils # 通用工具函数
  |_ main # 首页
  |_ activity # 学术活动页面
  |_ member # 成员页面
  |_ tutor # 导师页面
  |_ graduate # 毕业生去向页面
  |_ achievement # 学术成就页面
  |_ index.tsx # 页面入口
  
-babel.config.js # babel 配置
-tsconfig.json # typescript编译选项
-webpack.base.config.js # webpack配置
-webpack.dev.config.js
-webpack.prod.config.js 
```

### 构建流程

#### 环境需求

+ 需要安装[Node.js](https://nodejs.org/en/)
+ 部分依赖包安装可能需要镜像（镜像可参考文章：[使用Webpack/React去打包构建Electron应用](https://juejin.im/post/6845166890550050829)）

#### 运行流程

+ 开发模式：该模式下通过模块热替换可以热更新页面，用于快速开发和调试页面，命令行

```bash
npm run dev
```



+ 生产模式：该模式下输出index.html，index.style.css，index.prod.js，vendors~index.prod.js文件，其中文件内代码经过一定优化（压缩等），可以直接上传到对应的服务器上。并且对依赖库（React等）进行过滤，并以CDN的形式引入加快页面渲染速度。运行命令如下

```bash
npm run build
```



### 后续TODO

- [x] 静态网页开发
- [ ] 剩余页面内容的开发
- [ ] 页面动效设计&开发
- [ ] 页面适配（手机端），媒体查询编写
- [ ] 页面数据迁移至云数据库
- [ ] 页面图像压缩与优化（base64，添加loading状态）
- [ ] 部分样式调整









