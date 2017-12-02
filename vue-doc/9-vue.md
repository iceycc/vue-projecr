### 准备开始
---
#### 学员反馈
 watch 不是太理解
    前期先以应用为主，通过应用了解结果就ok

 整体蒙圈状态
    component组件 ： 可组成的部件(html、css、js) 
        组件内声明: 只能在该组件内使用 components:{组件名:组件对象  }
        全局组件: 所有组件共享 Vue.component(组件名,组件对象)
    过滤器filter:   对显示的数据进行添油加醋
        组件内声明: 只能在该组件内使用 filters:{ 过滤器名:fn过滤方式  }
         全局: 所有组件共享 Vue.filter(过滤器名,fn过滤方式)
         fn过滤方式:  接收原来的数据，返回要显示的数据
    监视:
        watch 单个监视  computed 多个监视
    生命周期
        正常使用默认触发
            创建前
            创建后(数据完成了初始化,可以操作数据)
            装载前
            装载后(组件的data与template放入到页面，可以操作DOM)
        更改组件内容（了解）
            更新前（可以发生二次更改，不建议乱用）
            更新后（获取最终更新结果）
        组件销毁与停用
            激活 结合缓存组件，避免频繁创建与销毁组件(keep-alive) 
                        (v-if="true")
            停用 结合缓存组件，避免频繁创建与销毁组件(keep-alive) 
                        (v-if="false")
            销毁前(v-if="false")
            销毁后(v-if="false")


 老师，我一直想对你说，上课你敲键盘的声音很大，大的使我的睡意都没了，谢谢老师键盘的声音！老师，你的声音还可以再大点，这样，全班上课都不瞌睡了！

  信息量有点大,消化不容易

  <cal></cal>标签是啥
            在元素上 <input v-xxx>   属性-> 指令
                在页面中<cal></cal>  组件

  过滤器不太懂->  对数据添油加醋显示
#### 复习
* 声明式导出
    - 出
        + 声明并导出`export const num = 1;`
        + 声明后导出`var num2 = 2;  export {num2}; `
    - 入`import {num,num2} from './xxx.js';`
    - 全部导入
        + `import * as obj from './xxx.js';`
        + `{ default:xxx,num:xxx,num2:xxx  } `
    - 举例导入一个cal.js 具备加减乘除功能的对象
        + cal.js 中分别导出4个函数
        + 只引入加法函数 `import {add} from './cal.js';`
            * 以上含义是只需要计算器文件中4个函数中的之一
* ES6
    - 对象属性的声明 `var name = 1; { name:name}` -> `{name}`
    - 对于属性是函数的声明
        + `{ fn(){ }    }`  干掉了:function  `{fn:function(){ }}`

#### 今日重点
* 路由
    - 后端路由: `router.get('url',事)`
        + 请求方式 + url 的判断 -> 分发 做什么事
* 路由的核心

### 路由
---
#### 路由原理
* 传统开发方式 url改变后 立刻发起请求，响应整个页面，渲染整个页面
* SPA 锚点值改变后 不会发起请求,发起ajax请求,局部改变页面数据
    - 页面不跳转 用户体验更好

#### SPA
* single page application(单页应用程序)
* 前端路由
    - 锚点值监视
    - ajax获取动态数据
    - 核心点是锚点值
* 前端框架 Vue/angular/react都很适合开发单页应用

#### 基本使用
* vue-router 
* 其是vue的核心插件
* 1:下载 `npm i vue-router -S`
* 1.5(重要):安装插件`Vue.use(VueRouter);`  
* 2:在main.js中引入vue-router对象 `import VueRouter form './x.js';`
* 3:创建路由对象 `var router = new VueRouter();`
* 4:配置路由规则 `router.addRoutes([路由对象]);`
    - 路由对象`{path:'锚点值',component:要(填坑)显示的组件}`
* 5:将配置好的路由对象交给Vue
    - 在options中传递-> key叫做 router
* 6:留坑(使用组件) `<router-view></router-view>`

#### 插件安装原理
* 需要使用Vue.use(VueRouter); 来安装插件，否则不认识router-view这个组件
* 见图
    - 插件内行为:
        + 1:注册全局组件
        + 2:给Vue原型挂载属性供实例使用

#### 常见编写错误
* tempalate 写错 :  template or render function is not define
* 启动以后没有路由效果 `new Vue`的时候
    - render 写错
    - router 没给   matched of undifined
    - `new Vue` 写成 `new VueRouter` 不会报错
    - `<router-vue><router-vue>`   `<router-view>`

#### router-link
* to
* 帮助我们生成a标签的href
* 锚点值代码维护不方便，如果需要改变锚点值名称
    - 则需要改变 [使用次数 + 1（配置规则）] 个地方的代码

#### 命名路由
* 1:给路由对象一个名称 `{ name:'home',path:'/home',component:Home}`
* 2:在router-link的to属性中描述这个规则
    - `<router-link :to="{name:'home'}></router-link>"`
    - 通过名称找路由对象，获取其path，生成自己的href
* 大大降低维护成本，锚点值改变只用在main.js中改变path属性即可

#### 中午任务
* 78练习，预习路由传参、嵌套路由、路由守卫

#### 参数router-link
* `Vue.prototype.xxx = {add:fn}`
* 所有组件中，使用this.xxx就能拿到这个对象
* 查询字符串 
    - 1:配置`:to="{name:'detail',query:{id:hero.id} }"`
    - 2:规则 `{name:'detail',path:'/detail',component:Detail}`
    - 3:获取 `this.$route.query.id`
    - 4:生成 `<a href="/detail?id=1">`
* path方式 
    - 4:生成 `<a href="/detail/1">`
    - 1:配置 `:to="{name:'detail',params:{id:hero.id}  }"`
    - 2:规则 `{ name:'detail',path:'/detail/:id'}`
    - 3:获取 `this.$route.params.id`
* 查询字符串配置参数
    - router-link一次
    - 获取的时候一次
* path方式配置参数
    - router-link一次
    - 规则配置的时候声明位置
    - 获取的时候一次
* 总结书写代码注意事项
    - path方式需要在路由规则中声明位置
    
#### vue-router中的对象
* $route 路由信息对象,只读对象
* $router 路由操作对象,只写对象

#### 多视图(命名视图)
* 避免代码书写错误
    - `{name:'detail',path:'/detail',component:Detail}`
* 避免component不小心写成components
* 更为灵活的视图配置

#### 嵌套路由
* 市面上所谓的用单页应用框架开发多页应用
    - 嵌套路由
* 案例
    - 进入我的主页显示：电影、歌曲
* 代码思想
    - 1:router-view的细分
        + router-view第一层中，包含一个router-view
    - 2:每一个坑挖好了，要对应单独的组件

#### 知识点介绍
* 路由meta元数据
* 路由钩子

#### 总结
* 操作步骤
    - 1:引入对象
    - 2:安装插件    
        + 注册全局组件
        + 给Vue原型挂载属性,供Vue的实例使用 -> 组件内的this
    - 3:创建路由对象
    - 4:配置路由规则
    - 5:将路由对象交给Vue的选项
    - 6:留坑 写在App.js中
* 锚点的可维护性
    - 命名路由 + router-link + 传递参数
    - 查询字符串
        + `<router-link :to="{ name:'xxx',query:{ id:1 }}"></router-link>`
        + 配置`{ name:'xxx',path:'/xxx',组件}`
        + 获取 `this.$route.query.id`
   - path方式
        + `<router-link :to="{ name:'xxx',params:{ mid:1 }}"></router-link>`
        + 配置`{ name:'xxx',path:'/xxx/:mid',组件}`
        + 获取 `this.$route.params.mid`
* 多视图
    - 避免代码错误 `{name:'xxx',path:'/xxx',components:{ 坑名:组件,坑名:组件}}`
    - 更为灵活
* 嵌套路由
    - 需求复杂,变化中包含着变化
        + 避免代码冗余
        + 避免重复渲染
    - router-view 包含router-view
    - `{ path:'/home',component:Home ,`
    -  `children:[ { path:'music',component:Music} ]     }`
* 路由元数据
    - `{name:'home',path:'home',meta:{数据}   }`
* 路由守卫
    - 全局守卫(所有锚点改变都有效)
        + `beforeEach((to,from,next)=>{  })`
        + 一定要处理
            * 1:放行 `next();`
            * 2:禁止 `next(false);`
            * 3:跳转 `next({ name:'home'  })`
    - 路由独享守卫(1对1属于某一条路由规则)
    - 组件守卫(1对1属于组件有效)



#### 案例-登录
#### 编程式导航
#### 重定向及404