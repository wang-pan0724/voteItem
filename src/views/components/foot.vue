<template>
  <div class="footer">
    <div class="footerList">
      <div class="listItem"
           id="1"
           @click="swichBtn(1)">
        <img slot="icon"
             v-show="selected == 1"
             src="../../../static/img/foot1_active.png">
        <img slot="icon"
             v-show="selected != 1"
             src="../../../static/img/foot1.png">
        <div :class="selected == 1 ? 'select' : 'default'">首页</div>
      </div>
      <div class="listItem"
           id="2"
           @click="swichBtn(2)">
        <img slot="icon"
             v-show="selected == 2"
             src="../../../static/img/foot2_active.png">
        <img slot="icon"
             v-show="selected != 2"
             src="../../../static/img/foot2.png">
        <div :class="selected == 2 ? 'select' : 'default'">报名</div>
      </div>
      <div class="listItem"
           id="3"
           @click="swichBtn(3)">
        <div class="listitem3">
          <div class="listItemCircle">
            <img slot="icon"
                 v-show="selected == 3"
                 src="../../../static/img/foot3.png">
            <img slot="icon"
                 v-show="selected != 3"
                 src="../../../static/img/foot3.png">
            <div>奖品</div>
          </div>
        </div>
      </div>
      <div class="listItem"
           id="4"
           @click="swichBtn(4)">
        <img slot="icon"
             v-show="selected == 4"
             src="../../../static/img/foot4_active.png">
        <img slot="icon"
             v-show="selected != 4"
             src="../../../static/img/foot4.png">
        <div :class="selected == 4 ? 'select' : 'default'">榜单</div>
      </div>
      <div class="listItem"
           id="5"
           @click="swichBtn(5)">
        <img slot="icon"
             v-show="selected == 5"
             src="../../../static/img/foot3.png">
        <img slot="icon"
             v-show="selected != 5"
             src="../../../static/img/foot5.png">
        <div :class="selected == 5 ? 'select' : 'default'">投诉</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.footer {
  position: fixed;
  width: 100%;
  bottom: 0px;
  .select {
    color: rgb(255, 186, 0);
  }
  .default {
    color: #fff;
  }
  .footerList {
    display: flex;
    text-align: center;
    font-size: 0.21rem;
    img {
      display: block;
      margin: auto;
      width: 0.34rem;
      margin-bottom: 0.1rem;
    }
    .listItem {
      position: relative;
      width: 20%;
      height: 0.95rem;
      background: rgb(51, 51, 51);
      margin-top: 0.15rem;
      padding: 0.12rem 0rem;
      box-sizing: border-box;
    }
    .listitem3 {
      position: absolute;
      background: rgb(51, 51, 51);
      height: 1.1rem;
      width: 1.1rem;
      border-radius: 1.1rem;
      top: -0.15rem;
      padding: 0.12rem;
      box-sizing: border-box;
      .listItemCircle {
        background: #fff;
        height: 0.86rem;
        width: 0.86rem;
        border-radius: 100%;
        padding-top: 0.12rem;
        box-sizing: border-box;
        color: rgb(51, 51, 51);
        img {
          margin-bottom: 0rem;
        }
      }
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      selected: 1
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
        this.$router.push({ name: 'signUp' })
      } else if (this.selected == 3) {
        this.$router.push({ name: 'prize' })
      } else if (this.selected == 4) {
        this.$router.push({ name: 'rankList' })
      } else if (this.selected == 5) {
        location.href = '/static/complain/complain.html'
      }
    }
  },
  mounted () {
    if (this.$route.name == 'home') {
      this.selected = 1;
    } else if (this.$route.name == 'signUp') {
      this.selected = 2;
    } else if (this.$route.name == 'prize') {
      this.selected = 3;
    } else if (this.$route.name == 'rankList') {
      this.selected = 4;
    } else if (this.$route.name == 'complain') {
      this.selected = 5;
    }
  },
  watch: {
    // 	selected() {
    // 		if(this.selected == 1) {
    // 			this.$router.push({name: 'home'})
    // 		} else if(this.selected == 2) {
    // 			this.$router.push({name: 'outSea'})
    // 		} else if(this.selected == 3) {
    // 			this.$router.push({name: 'local'})
    // 		} else if(this.selected == 4) {
    // 			this.$router.push({name: 'self'})
    // 		}
    // 	},
    $route (to, from) {
      if (to.name == 'home') {
        this.selected = 1
      } else if (to.name == "signUp") {
        this.selected = 2
      }
    }
  }
}
</script>

