<template>
  <div class="box"
       id="detailToTop">
    <router-view></router-view>
    <foot></foot>
  </div>
</template>
<script>
import foot from "./components/foot.vue";
export default {
  components: {
    foot
  }
};
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  overflow: hidden;
  background: rgb(65, 48, 112);
}
</style>


