<template>
  <div class="otherBox">
    <router-view></router-view>
  </div>
</template>
<script>
import token from "./plugin/token/index.js";
export default {
  
};
</script>
<style lang="less">
  .mint-tabbar {
    background: rgb(65, 48, 112);
  }
  .otherBox {
    width: 100%;
    overflow: hidden;
  }
</style>