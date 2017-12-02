### 准备开始
---
#### 学员反馈
好像是听懂了，但是好像又不会用。。。 模块化代码跟单元测试有什么关系吗？代码重构呢？后面的项目中会接触到吗？在实际工作中好像这个很重要。。
*** 请大神们能随手关门，考虑一下耀哥的感受。后面真的是北风吹。。。
*** 路由局部刷新和ajax局部刷新一样吗
*** Vue.use(VueRouter) 这个写法知道是安装路由这个插件，但是这样写的方式看不懂 还有vue的原型和实例是什么啊 什么挂上面了哪都可以用 没听明白
    function Person(){};
    Person.prototype.$route = {name:'jack'};
        //1:Vue原型有了一个属性 $route
        //2:值是一个对象{name:'jack'}
    new Person().$route -> {name:'jack'}

    一个构造函数的原型挂载一个属性。使用该构造函数new出来的对象，都共享这个属性
    给Vue原型挂载属性，所有组件内的this对象(VueCompoent对象)


  嵌套路由弄不明白

  讲的很细，听的也还可以，但就是有一些许的懵。很乱，关于Router的使用部分还是有些乱，捋不顺。烦躁

  1.老师，默念几遍路由 就会搞不清路由到底是什么了？ 可以理解为：通过一些代码 去跳转到相应页面的url地址吗？ 
        
        路由 = 判断锚点值 + 行为-> 更改页面数据（innerHTML）
    
  2.在生活中或在我们浏览网页时，哪些实例或案例是嵌套路由的一种体现呢？

  凃哥能否在以后的项目中多给我们分享一些业务上的逻辑 和 容易踩到的坑？

  整体还是有点蒙，嵌套和路由
#### 复习
* 嵌套路由的好处
    - 避免代码冗余
    - 避免重复渲染
    - 利于组件的复用
* 如果遇上稍微公共一点的部分，就提取出来（使用嵌套路由），再将变化的单独做两个组件渲染，这样在代码的编写中，会累计出很多很多的组件
* app渲染 -> router-view(第一个坑) -> 可以包含第二个坑 -> 包含第三个坑
    - 一个坑只能包含另一个坑，  router-view 只能一级一级的嵌套
    - 最终可以使用多视图一次填入多个坑，但是无法继续嵌套路由了


#### 今日重点

#### 编程式导航
* $router 可写对象具备行为
* 根据浏览器历史记录前进或者后退`this.$router.go(-1||1);`
* 更改锚点值跳转 `this.$router.push(routeObj)` 

#### 重定向及404
* 重定向写在规则的第一行 `{path:'/',redirect:{name:'home'}  }`
* 404写在最后 `{ path:'*',component:NotFound }`

#### json-server
* 简化后端操作,伪造服务器，根据你的restful请求方式来对数据进行操作
* 数据: { id:"abc",isLogin:false}
* 在页面中要登录 { id:"abc",isLogin:true}
* 在需要权限控制的访问时，发起请求验证isLogin是否为true,放行
    - 否则next(false)
* 总结
    - 添加数据  post   http://localhost:3000/表名 
        + 请求体:id=1&value=abc
    - 删除数据 delete  http://localhost:3000/表名/:id
    - 查询数据 get http://localhost:3000/表名/:id
    - 更新数据 put http://localhost:3000/表名/:id
        + 请求体 value=abc

#### 路由信息对象
* #/home?id=1#a=1
* 以上字符串的封装
    - hash:a=1
    - query:{id:1}
    - fullpath:/home?id=1
* meta代表提前给路由配置的数据 （元数据）
* matched 父路由中meta设置了需要验证，就是需要验证，子路由就共享
* $router (只写对象 锚点值 )
* $route (只读对象 锚点值)

#### 案例-登录



### webpack
---
#### 简介
* 基于Node，就是一个node启动的程序
    - resource -> 入口 entry
    - ouput产出
* 项目代码的打包
    - 打包: 压缩（去除空格换行）
    - 合并: 减少请求次数
    - 混淆: 减少文件大小、保证代码安全
    - 优化:........
* 09年 commonjs规范 nodejs，模块化的加载器，需要学习成本。
    - requireJs 和seajs  拼杀
* 12年 
* 2017年 webpack处理解析js的模块，以及相关静态资源文件依赖,No.1
    - 默认支持commonjs
    - 默认支持ES6模块 import export

#### webpack启程
* 下载 `npm i -g webpack`
* 启动webpack
    - 进入到需要打包的目录开启命令 `webpack ./入口.js ./产出.js`

#### 配置文件来配置
* 进入到需要打包的目录开启命令 `webpack`
* 在当前目录下创建webpack.config.js文件, 其是node代码，最终向外导出配置
    - entry:入口
    - output:产出

#### 处理css

#### 处理less

#### 处理文件
* url-loader依赖file-loader
    - 如果超出大小限制条件，则使用file_loader生成一个全新的文件
    - 如果在范围之内，url-loader会将css中url指定为图片的base64编码
* base64减少请求次数
* base64加密文件增大三分之一
* 应用场景:
    - 图片较小，增大的3分之1就越少，建议大小控制在4kb以内

#### 处理ES6
* babel-loader
    - babel-core
    - 语法 env
    - 函数 transform-runtime

#### 处理html

#### 开发工具webpack-dev-server



### ajax请求
---
#### vue-resource

#### axios

#### 默认配置defaults

#### 拦截器

#### 合并请求

