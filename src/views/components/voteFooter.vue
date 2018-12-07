<template>
  <div class="footer">
    <div class="footerList">
      <div class="listItem"
           @click="swichBtn(1)">
        <img slot="icon"
             src="../../../static/img/back.png">
        <span>返回首页</span>
      </div>
      <div class="listItem"
           id="3"
           @click="swichBtn(2)">
        <img class="listitem3"
             slot="icon"
             src="../../../static/img/voteBtn.png">
      </div>
      <div class="listItem"
           @click="swichBtn(3)">
        <img slot="icon"
             src="../../../static/img/prizeImg.png">
        <span>送TA礼物</span>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.footer {
  position: fixed;
  width: 100%;
  bottom: 0px;
  .footerList {
    display: flex;
    text-align: center;
    font-size: 0.21rem;
    .listItem {
      position: relative;
      width: 33.3%;
      height: 0.95rem;
      background: #fff;
      margin-top: 0.15rem;
      box-sizing: border-box;
      line-height: 0.95rem;
      img {
        height: 0.34rem;
        vertical-align: middle;
      }
      .listitem3 {
        position: absolute;
        height: 1.15rem;
        width: 1.15rem;
        border-radius: 1.15rem;
        top: -0.23rem;
        box-sizing: border-box;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
<script>
export default {
  data () {
    return {
      selected: 2
    }
  },
  methods: {
    swichBtn (tag) {
      console.log(tag)
      if (tag == this.selected) {
        return;
      } else {
        this.selected = tag;
      }

      if (this.selected == 1) {
        this.$router.push({ name: 'home' })
      } else if (this.selected == 2) {
        this.$router.push({ name: 'vote' })
      } else if (this.selected == 3) {
        this.$router.push({ name: 'votePrize' })
      }
    }
  }
}
</script>


