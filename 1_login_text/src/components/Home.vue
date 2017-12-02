<template>
  <div>
    
    <router-link :to="{name:'login'}">登陆</router-link>
    <router-link :to="{name:'music'}">音乐首页</router-link>
    <router-link :to="{name:'music.list'}">音乐列表</router-link>
    <mt-button type="primary" @click="exit">退出</mt-button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    exit() {
      var username = window.localStorage.getItem("username");
      this.$axios.put("" + username, {
        isLogin: false
      })
      .then(
        this.$router.push({
          name:'login'
        })
      );
    }
  }
};
</script>
