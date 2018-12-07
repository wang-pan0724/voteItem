<template>
  <div class="home">
    <mt-swipe :auto="4000"
              class="homeSwipe">
      <mt-swipe-item><img src="../../../static/img/img1.png"
             alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../../static/img/img1.png"
             alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../../static/img/img1.png"
             alt=""></mt-swipe-item>
    </mt-swipe>
    <div class="voteInfo">
      <img class="usericon"
           src="../../../static/img/userIcon.png"
           alt="">
      <div class="voteName">张美美 <span>排名：</span> <b>1</b></div>
      <div class="voteNumber">
        <div class="voteList">
          <div class="voteNum">171</div>
          <div class="voteName">已报名</div>
        </div>
        <div class="voteList">
          <div class="voteNum">171</div>
          <div class="voteName">累计投票</div>
        </div>
        <div class="voteList">
          <div class="voteNum">171</div>
          <div class="voteName">访问量</div>
        </div>
      </div>
      <div class="voteTips">
        <p>与第一名差 <span>122334455</span> 与 上一名差<span>7677</span>票</p>
        <p>“参赛宣言：<span>光努力没有用 要刻苦！</span>”</p>
      </div>
    </div>
    <img class="voteUserImg"
         src="../../../static/img/img1.png"
         alt="">
    <div class="signUp">我也要参加</div>

    <div class="activity">礼物列表</div>
    <div class="infoLists">
      <div class="infoList">
        <img src="../../../static/img/img1.png"
             alt="">
        <div class="infoListContant">
          <p class="name">李世典，给TA送了超级跑车X1</p>
          <p class="time">2018-10-29 13:30:28</p>
        </div>
        <img src="../../../static/img/img1.png"
             alt="">
      </div>
      <div class="infoList">
        <img src="../../../static/img/img1.png"
             alt="">
        <div class="infoListContant">
          <p class="name">李世典，给TA送了超级跑车X1</p>
          <p class="time">2018-10-29 13:30:28</p>
        </div>
        <img src="../../../static/img/img1.png"
             alt="">
      </div>
    </div>
    <div class="more">
      查看更多 <img src="../../../static/img/arrow.png"
           alt="">
    </div>
    <voteFooter></voteFooter>
  </div>
</template>

<script>
import voteFooter from "../components/voteFooter.vue";
export default {
  components: {
    voteFooter
  },
  data () {
    return {

    };
  },
  created () {

  },
  methods: {
    // voteThisMan(){
    //     this.$router.push({name: 'vote'});
    // },
    // goSignUp(){
    //     this.$router.push({name: 'signUp'});
    // },

  },
  mounted () {

  },
};
</script>
<style lang="less" scoped>
.home {
  background: rgb(65, 48, 112);
  height: 100%;
  padding-bottom: 1.3rem;
  .homeSwipe {
    height: 3.78rem;
  }
  .voteInfo {
    position: relative;
    width: 6.66rem;
    height: 2.96rem;
    margin: 0.4rem auto 0.2rem;
    background: rgb(111, 91, 168);
    padding-top: 0.77rem;
    .usericon {
      position: absolute;
      top: -0.32rem;
      left: 50%;
      transform: translateX(-50%);
      width: 1.04rem;
      height: 1.04rem;
      border-radius: 1.04rem;
      border: 0.1rem solid rgb(111, 91, 168);
      box-sizing: border-box;
    }
    .voteName {
      text-align: center;
      color: rgb(255, 252, 0);
      font-size: 0.26rem;
      span {
        color: #fff;
        font-size: 0.26rem;
        margin-left: 0.2rem;
      }
      b {
        color: rgb(239, 202, 58);
        font-size: 0.3rem;
      }
    }
    .voteNumber {
      position: relative;
      width: 5.88rem;
      height: 1.08rem;
      margin: 0.22rem auto;
      border-bottom: 1px solid rgb(100, 84, 144);
      padding: 0.18rem 0rem;
      box-sizing: border-box;
      display: flex;
      .voteList {
        width: 33.3%;
        text-align: center;
        border-right: 0.04rem solid rgb(194, 150, 222);
        .voteNum {
          color: rgb(252, 255, 0);
        }
        .voteName {
          color: #fff;
        }
      }
      .voteList:last-child {
        border-right: 0px;
      }
    }
    .voteTips {
      text-align: center;
      font-size: 0.26rem;
      line-height: 0.33rem;
      color: #fff;
      p:first-child {
        margin-bottom: 0.1rem;
      }
      span {
        color: rgb(252, 255, 0);
      }
    }
  }

  .signUp {
    width: 3.52rem;
    height: 0.6rem;
    color: rgb(22, 12, 0);
    line-height: 0.6rem;
    text-align: center;
    background: rgb(255, 186, 0);
    border-radius: 0.06rem;
    margin: 0.18rem auto;
  }
  .voteUserImg {
    width: 6.66rem;
    display: block;
    margin: auto;
  }
  .infoLists {
    width: 7.02rem;
    background: #fff;
    padding: 0.35rem;
    margin: 0 auto;
    box-sizing: border-box;
    border-radius: 0.1rem;
    .infoList {
      margin-bottom: 0.1rem;
      display: flex;
      .infoListContant {
        margin: 0 0.2rem;
        .name {
          margin-bottom: 0.1rem;
          font-size: 0.28rem;
          color: rgb(55, 55, 55);
        }
        .time {
          font-size: 0.2rem;
          color: rgb(207, 207, 207);
        }
      }
      img {
        width: 0.82rem;
        height: 0.82rem;
        border-radius: 0.05rem;
      }
    }
  }
  .more {
    text-align: center;
    color: rgb(249, 240, 255);
    font-size: 0.23rem;
    margin: 0.25rem 0rem;
    img {
      width: 0.15rem;
      height: 0.13rem;
    }
  }
  .activity {
    width: 7.02rem;
    height: 0.6rem;
    margin: 0.4rem auto 0.2rem;
    color: rgb(252, 255, 0);
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.28rem;
    background: rgb(95, 76, 148);
  }
}
</style>

