### 准备开始
---
#### 学员反馈
  期待老师的表演

  mvc太绕了，想起了一首歌，山路十八弯
    M - Model  数据模型(DB)
    V - View   视图(res.render + 模板引擎 )
    C - Controller 控制器
    C就是调用M + 调用V + 属于自己的处理业务逻辑

  歌词滚动那块儿不是很理解?
    1:请求歌词数据解析成对象{time:content}
    2:通过对象生成DOM ,将其插入到歌词盒子
        <p time="50">喜欢你 那双眼..</p>
        <p time="56">愿再可...</p>
    3:滚动
        audio 的timeupdate事件，e.target.currentTime获取时间
        将时间与对象中的key对比，存在则需要滚动
            如果需要，查找元素的top值，与歌词盒子的top值相减
            用其差让歌词盒子向上移动

  还有后台歌曲添加那块字符串拼接很乱，
      /public/files/歌名

菜鸟  讲得已经很细致了,但是还是只听懂了大概,大概5成吧,不过后面要是有时间看的话还是能搞懂的
#### 复习
* input 输入节流
    - 记录一个时间,如果当前时间与记录的时间相差大于x秒，那么则设置定时器发请求
    - 输入后直接清空定时器,继续延迟两秒，直到没有输入则才发请求
* 闭包在案例中的作用就是保护全局变量

#### 记住我补充说明
* 主要就是让客户端保存一个用户名,
* 如果需要保存密码,就应该是加密的密码
* 显示页面的时候，取出来回填
  - 保存cookie就可以了


#### 项目总结
* 把所有代码app.js
  - 将路由文件抽取出来
    + 路由调用控制器
      * C:控制器负责业务逻辑 + 调用V + 调用M
* 后端接口
  - 登录、注册、音乐的增删改查
    + 登录:验证用户名密码一致，将数据保存在session上
    + 后端权限验证:
      * 在中间件中，通过正则区分哪些需要验证
        - 如果session上没有user信息则代表没有登录
      


#### 今日重点
### vue介绍
---
#### 介绍
* 尤雨溪(Evan You) vue.js框架的作者
  - 框架 vue.js 框架运行我们的代码
  - 库  jquery 我们调用库的功能
* 2014年2月，开源了一个前端开发库Vue.js
* Vue.js 是一个JavaScript来编写的框架
* Weex 使用vue.js的语法，能够生成IOS、android运行的代码
* vue.js本身就能在PC端运行
* 最终vue.js语法可以完成跨三端
* github星星
  - angular 30.4k
  - react 82k  2013年出的,国外使用多
  - vue.js 74.8k  国内使用多

#### 前端框架有什么用
* 框架就是给了规则,并实现细节
  - 开发者按照规则,去实现业务逻辑
* 帮助我们去节省DOM操作的实现细节,完全的丢弃DOM的思维
  - 将数据与页面的元素挂钩
* 双向数据绑定
  - 页面改变影响内存
  - 内存改变影响页面
* Object.defineProperty就是Vue.js实现双向数据绑定的基本代码
  - Vue兼容IE9及以上,因为Object.defineProperty

#### vue起步

#### vue启动总结
* 1:引包
* 2:创建对象(启动Vue) 
  - `new Vue(选项);`
* 3:页面中留坑 `<div id="app"></div>`
* 思想
  - el:坑  
  - vue将template属性结合data属性，将数据渲染到el指定的坑中
  - {{可以使用data中的属性}} 插值表达式,也可以调用函数，也可以三元表达式
  - v-model="data中的属性"
* 在vue中,凡是以v-xxx开头，写在了标签上,就叫做vue的__指令__
  - 指令可以具备很多更能
    + 1:双向属性绑定
    + 2:元素是否显示的功能
    + 3:给标签中某个元素赋值变量的功能
    + 4:遍历输出页面数据
 
#### 插值表达式 
* {{ 表达式 }}
  - 对象
  - 字符串
  - 判断后的布尔值
  - 三元表达式

#### 常见报错
* Property or method "name" is not defined on the instance but referenced during render.
* 代表使用了name，但是没有定义name，name不是data中的属性

#### vue中常用的v-指令演示
* v-text:其实就是设置元素的innerText，只能是双标签
* v-html:其实就是设置元素的innerHTML，只能是双标签
* v-if:是元素的移除与插入,v-else与其要是邻居
* v-show:是元素的显示与隐藏

#### methods和v-on的使用
* 注意:
  - 在template中使用data的属性直接用
  - 在methods函数中使用data的属性this.xxxx
* 普通写法
  - `v-on:原生事件名="表达式||函数名"`
    + 函数调用可以传参，也可以不传参省略()
* 简写形式
  - `@原生事件名="表达式||函数名"`

#### class结合v-bind使用
* 普通写法
  - `v-bind:属性名="变量名||表达式"`
* 简写形式
  - `:属性名="变量名||表达式"`
* 指令可以放在标签上

#### v-for的使用
* 输出一个英雄列表
* 以数组为数据
  - `v-for="(ele,index) in arr"`
* 以对象为数据
  - `v-for="(value,key,index) in obj"`
* 单个参数可以不写括号
* 括号内都是形参，名字随便

#### 特殊属性key
* vue中列表的输出，都会写上:key="变量值"
* vue默认会根据自己的算法去标识DOM元素与js内存元素之间的位置关系
  - 如果不给key，vue计算浪费性能
  - 如果给定key, vue不会计算了,提升性能
* 列表中的双向数据绑定,DOM元素的值与js内存元素之间的值的关系

#### 漂亮的列表
* class 是可变的
* class 接收的值，最终会被转换为 `样式1 样式2 样式3`
  - 一个样式
    + 最终返回字符串
  - 多个样式
    + 1:可以是对象{样式1:true,样式2:true}
    + 2:字符串 `样式1 样式2 样式3`

#### vue版本历史区别
* vue1.xxx 中可以在模板内有多个根节点的
* vue2.xxx 中不允许
  - `Component template should contain exactly one root element`

#### 练习
* 英雄列表增删改查

#### script标签
* 请求来的代码（字符串）会被执行
* script标签不受跨域影响
* JSONP没有兼容性问题,get请求
  - 需要前后端一起编码来完成
    + 前端:创建script标签(get请求)
      * 挂载全局函数
      * 传递函数名称
    + 后端:
      * 接收回调函数名称
      * 响应  函数名(数据) 的字符串 给script标签
    + script 标签自动执行以上字符串

#### 总结
* options 选项
  - `new Vue(options)`
  - el:字符串或者DOM元素 （目的地）
  - data:对象或者是函数（数据） -> M(Model)
  - template:字符串 （页面） -> V (View)
  - methods: 对象 (功能)
* 常用指令
    + 双向数据绑定 v-model="变量名" (变量与页面的关系)
      * 必须要在data中声明(页面影响内存的必须)
      * 在methods中通过this.xxx获取到页面的value值
      * 在template中直接使用xxx获取页面的value值
    + v-if v-else 必须邻居、是插入与移除的故事
    + v-show 是隐藏与显示的故事
    + v-text 双标签、就是元素的innerText
    + v-html 双标签、就是元素的innerHTML
    + `v-for="(ele,index) in arr" :key="index"`
    + `v-for="(value,key,index) in obj" :key="index"`
    + v-on:原生事件="表达式或函数" 
      * 简写->    @原生事件
    + v-bind:属性="表达式或函数"
      * 简写->    :属性
* template只能有一个根节点
* v-for 单个参数可以省略括号，其他的要加括号
* template中使用的变量。data一定要声明
  - template中使用的函数。methods一定要声明

#### 看文档的对象分类(component组件)
* 全局  Vue.xxx
* 选项 就是new Vue(options)
* 实例 以后课上再说
* 指令 用在标签上
* 特殊特性 vue中的一些属性 key


#### watch
#### computed
#### filter
#### render

#### 使用主体组件
#### 使用子组件
#### 父子组件使用(父传子)
#### 创建全局组件
#### 子向父组件通信（获取组件对象）(扩展)
#### 获取元素