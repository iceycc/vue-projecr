### 音乐小案例(最终版本)

#### 用到的技术点

* vue + 单页面应用 + webpack + MuitUi

#### 步骤

##### 1 配置webpack
* 1- `npm init` 初始化包()  生成package.json文件
  * 或者  直接复制一个成型的配置文件 package.json
* 2- `npm i (各种模块) -S` 下载各种模块
  * 如果有配置好的js文件 直接`npm i`下载配置好的各种模块
  * 后面有需要可以继续下载模块
* 3-配置webpack
  *  新建一个 'webpack.config.js' 文件
  *  书写各种配置 
    *  包含入口 出口 文件
    *  模块对象 加载器 插件 等
  * 根据配置 `npm i (各种loader)` 可以第二部完成
  * 注意下载不好可以直接拷贝现成的

##### 2 配置也一个 json-server 接口服务器 基于node
* 1- ` npm install json-server -g`
* 2- `json-server --watch ./data.json`

##### 3 配置 webpack-dev-server 

* 让src目录下的文件能够运行起来
* 全局安装 不利于项目提交 ` npm install webpack-dev-server -g` 
* 使用npm 命令项目启动工具
  * package.json 中的scripts属性 是一个命令行命令的缩写
    - "scripts":{  "dev":"webpack-dev-server"   }
    - `npm run dev` 运行对应的命令
    - 当你npm run 命令的时候,npm会自动将当前node_modules/.bin加入到临时环境变量中
* webpack-dev-server
* --inline 自动刷新(自动替换达不到效果的时候，会触发刷新)
* --hot 热替换(不刷新就直接替换内容)
* --open 自动打开浏览器
* --port 设置一个端口号

##### 下载的各种包

##### 5 项目结构开始搭建

* 1启动 json-servert
* 2启动 npm run dev
* src 项目的主体