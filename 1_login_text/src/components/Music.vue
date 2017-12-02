<template>
  <div>
    <h5>音乐首页</h5>
    <mt-swipe :auto="4000">
      <mt-swipe-item>121</mt-swipe-item>
      <mt-swipe-item>221</mt-swipe-item>
      <mt-swipe-item>321</mt-swipe-item>
    </mt-swipe>


    <router-view></router-view>


  </div>
</template>
<script>
      export default {
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
.mint-swipe{
  background-color: yellow;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 50px;

}

</style>
