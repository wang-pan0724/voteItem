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
      <div class="voteTips">给<span>TA</span>送上一份礼物吧</div>
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
      </div>
    </div>
    <img class="voteUserImg"
         src="../../../static/img/img1.png"
         alt="">
    <div class="infoLists">
      <div class="infoList">
        <div class="infoListContant">
          <div>
            <img src="../../../static/img/img1.png"
                 alt="">
          </div>
          <p>超级跑车</p>
          <p class="money">2点</p>
        </div>
      </div>
      <div class="infoList">
        <div class="infoListContant">
          <div>
            <img src="../../../static/img/img1.png"
                 alt="">
          </div>
          <p>超级跑车</p>
          <p class="money">2点</p>
        </div>
      </div>
      <div class="infoList">
        <div class="infoListContant">
          <div>
            <img src="../../../static/img/img1.png"
                 alt="">
          </div>
          <p>超级跑车</p>
          <p class="money">2点</p>
        </div>
      </div>

      <div class="select">
        <div class="select1">请选择以上礼物</div>
        <div class="select2">
          <label for="num">数量：</label>
          <select class="form-control"
                  id="num">
            <option value="1">数字1</option>
            <option value="2"
                    selected>数字2</option>          
          </select>
        </div>
      </div>
      <div class="signUp">微信支付</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

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
      margin-top: 0.14rem;
      p:first-child {
        margin-bottom: 0.1rem;
      }
      span {
        color: rgb(252, 255, 0);
      }
    }
  }
  .voteUserImg {
    width: 6.66rem;
    display: block;
    margin: auto;
  }
  .infoLists {
    border-radius: 0.1rem;
    width: 7.02rem;
    background: #fff;
    padding: 0.3rem 0.2rem;
    margin: 0.14rem auto;
    box-sizing: border-box;
    overflow: hidden;
    .infoList {
      width: 33.3%;
      height: 2.18rem;
      margin-bottom: 0.1rem;
      text-align: center;
      box-sizing: border-box;
      float: left;
      padding: 0rem 0.05rem;
      color: rgb(110, 110, 110);
      font-size: 0.22rem;
      .infoListContant {
        height: 100%;
        border: 1px solid rgb(230, 230, 230);
        font-size: 0.18rem;
        margin-bottom: 0.08rem;
      }
      .money {
        color: rgb(240, 85, 104);
        font-size: 0.18rem;
      }
      img {
        width: 0.86rem;
        height: 0.86rem;
        margin-top: 0.14rem;
        border-radius: 0.05rem;
        margin-bottom: 0.2rem;
      }
    }
    .select {
      float: left;
      margin: 0.4rem 0rem;
      width: 100%;
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.22rem;
      display: flex;
      .select1 {
        width: 50%;
      }
      .select2 {
        flex: 1;
        display: flex;
        label {
          position: absolute;
          right: 1.7rem;
        }
        select {
          position: absolute;
          right: 0.5rem;
          border-radius: 0.1rem;
        }
      }
    }
    .signUp {
      float: left;
      width: 6.38rem;
      height: 0.8rem;
      color: #fff;
      line-height: 0.8rem;
      text-align: center;
      background: rgb(25, 173, 25);
      border-radius: 0.06rem;
      margin: 0rem auto 0.2rem;
    }
  }
}
</style>

