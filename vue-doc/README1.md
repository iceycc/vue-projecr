## vue总结

### new Vue
* el
* template || render 选其一
  * template 页面视图 字符串
  * render 渲染的内容 函数
### 组件
* tempate 页面 (View)
* data 是一个函数
* methods 是一个对象 key是函数名 value是函数体
* components 室间隔对象
* props 是一个数组
* filter是一个对象  key是过滤器名
  * return 最终显示结果
  * 调用方法
* watch 是一个对象
  * 监视数据
* computed (计算属性 )  
  * 一个对象
    * key计算的属性名称
  * 增强版的watch 可以结合多个监视变量加入监视
  * 可以return一个对象 
### 难点

* 父传子
  * 1-子,生命接受参数的属性名 props
  * 2-父,通过属性名传递参数
    * 常量 属性名="值"
    * 变量 属性名="变量名"
* 全区API 
  * `Vue.component(组件名,组件对象)` 声明全局对象
  * `Vue.fileter(过滤器名,function(v,argv1,argv2){return 显示内容})`
* 子传父组件通讯
  * 1- `var vm = new Vue();`
  * 2- vm.$on("事件名",回调函数(形参1,形参2))
  * 3- vm.$emit("事件名",数据1,数据2)
  * 补充
    * vm.$off
    * $.once("事件名")
### 模块化
* common.js
* ES6模块化导入
  * 声明式导出
  `export cal from "./cal.js" `
  `export default "导出了"`
  * 全部导出
  * 声明再导出
  * 注意 不能在块级作用域中使用
* ES6中的简写

* refs


### 路由
* 后端node.js中的路由
* 
* 锚点请求
````javascript
 

````
* 路由原理
  * 传统
  * vue
* SPA  * 
  * 单页应用程序
* 基本使用
  * vue-router
  * 下载
  * 