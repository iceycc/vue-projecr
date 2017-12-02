<template>
  <div>
    <mt-field label="用户名" :state="nameState" v-model="username"></mt-field>
    <mt-field label="邮箱" :state="emailState" v-model="email"></mt-field>
    <mt-button @click="doLogin">登录</mt-button>
  </div>
</template>
<script>
export default {
  // 对象
  methods: {
    doLogin() {
      this.$axios
        .put("" + this.username, {
          isLogin: true
        })
        // 成功后跳转  并将
        .then(res => {
          window.localStorage.setItem("username", this.username);

          this.$router.push({
            name: "music.list"
          });
        });
    }
  },
  data() {
    return {
      username: "",
      email: "",
      nameState: "",
      emailState: ""
    };
  },
  watch: {
    email: function(newV) {
      if (newV == "w@icey.cc") {
        this.emailState = "success";
      } else if (!newV.includes("@")) {
        this.emailState = "error";
      } else {
        this.emailState = "warning";
      }
    },
    username: function(newV) {
      if (newV == "icey") {
        this.nameState = "success";
      } else if (newV == "") {
        this.nameState = "error";
      } else {
        this.nameState = "warning";
      }
    }
  }
};
</script>
