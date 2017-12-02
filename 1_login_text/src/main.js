// 引入各种模块
import Vue from 'vue';
import VueRouter from 'vue-router';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import Axios from 'axios';

// 引入组件
import App from './components/App.vue';
import Home from './components/Home.vue';
import Music from './components/Music.vue';
import List from './components/List.vue';
import Login from './components/Login.vue';

// 安装
// 基于vue的需要Vue.use安装(原理忘了TODO:)
Vue.use(VueRouter);
Vue.use(MintUi);
// 
Vue.prototype.$axios = Axios;


//拦截器   

Axios.interceptors.request.use(function (config) {
  MintUi.Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
    // duration: 5000
    
  });
  return config;
});
Axios.interceptors.response.use(function (config) {
  MintUi.Indicator.close();
  return config;
});
//baseURL
Axios.defaults.baseURL = 'http://localhost:3000/';



// baseURL
Axios.defaults.baseURL = 'http://localhost:3000/users'


// 设置路由  前端路由
let router = new VueRouter();
// 路由配置
router.addRoutes([
  // 首页
  {name:'home',path:'/home',component:Home,
  children:[
    {name:'login',path:'login',component:Login},
    {name:'music',path:'music',component:Music,meta:{check:true},
    children:[
      { name: 'music.list', path: 'list', component: List }

    ]},
  ]}
])


// 设置全局钩子
router.beforeEach((to,from,next)=>{
  let flag = true;
  // 判断是放行
  to.matched.forEach(function(ele){
    // 如果meta中有check说明不能放行 记为false
    if (ele.meta.check){
      flag = false;
    }
  })



  //flag为true的话放行
  if (flag) {
    return next();
  }
  var username = window.localStorage.getItem("username");


  Axios.get('/' + username)
    .then(function (res) {
      // 登陆的话放行
      if (res.data.isLogin) {
        return next()
      }
      // 没有登陆的话 跳转到 登陆页
      //没有登录
      MintUi.Toast({
        message: '请登录',
        position: 'middle',
        duration: 5000
      });

      next({
        name: "login"
      })
    })
    // 出现错误的话
    .catch(function () {
      console.log(err)
    })
})








// 
new Vue({
  el:'#app',
  router,
  render:c=>c(App)
})