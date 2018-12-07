<<template>
  <div class="home">
      <mt-swipe :auto="4000" class="homeSwipe">
            <mt-swipe-item><img src="../../../static/img/img1.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/img1.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/img1.png" alt=""></mt-swipe-item>
        </mt-swipe>
        <div class="countDownTitle">活动结束倒计时</div>
        <div class="timer">
            <span>{{dd}}天</span>
            <span>{{hh}}时</span>
            <span>{{mm}}分</span>
            <span>{{ss}}秒</span>
        </div>
        <div class="activity">票数榜单</div>
        <div class="rankLists">
          <div class="rankList">
            <div class="level">
              <img src="../../../static/img/gold.png"/>
              <p>1</p>
            </div>
            <div class="userIcon"><img src="../../../static/img/userIcon.png"/></div>
            <div class="info">
              <p>张美美 <span>113号</span></p>
              <p>票数： <span>8893</span></p>
              <p>参赛宣言： <span>光努力没用 要刻苦</span></p>
            </div>
          </div>
          <div class="rankList">
            <div class="level">
              <img src="../../../static/img/gold.png"/>
              <p>1</p>
            </div>
            <div class="userIcon"><img src="../../../static/img/userIcon.png"/></div>
            <div class="info">
              <p>张美美 <span>113号</span></p>
              <p>票数： <span>8893</span></p>
              <p>参赛宣言： <span>光努力没用 要刻苦</span></p>
            </div>
          </div>
          <div class="rankList">
            <div class="level">
              <img src="../../../static/img/gold.png"/>
              <p>1</p>
            </div>
            <div class="userIcon"><img src="../../../static/img/userIcon.png"/></div>
            <div class="info">
              <p>张美美 <span>113号</span></p>
              <p>票数： <span>8893</span></p>
              <p>参赛宣言： <span>光努力没用 要刻苦</span></p>
            </div>
          </div>

          <div class="more">
            查看更多 <img src="../../../static/img/arrow.png" alt="">
            </div>
        </div>
  </div>
</template>
<<script>
export default {
   components: {
       
    },
    data() {
        return {
         thisTime:1540879747001,
         dd:0,
         hh:0,
         mm:0,
         ss:0
        };
    },
    created(){
        this.InitTime(this.thisTime);
    },
    methods: {
        countDownS_cb: function (x) {
            console.log(x)
        },
        countDownE_cb: function (x) {
            console.log(x)
        },
        InitTime(endtime){
            var that = this;
            var time = parseInt(endtime) - new Date().getTime();
            if(time<=0){
                return '结束'
            }else{
                that.dd = Math.floor(time / 1000 / 60 / 60 / 24);
                that.hh = Math.floor((time / 1000 / 60 / 60) % 24);
                that.mm = Math.floor((time / 1000 / 60) % 60);
                that.ss = Math.floor(time / 1000 % 60);
            }
        }
    },
    mounted() {
        setInterval( ()=> {
            this.InitTime(this.thisTime)
        }, 1000);
 
    },
};
</script>
<style lang="less" scoped>
.home{
    background: rgb(65, 48, 112);
    height: 100%;
    padding-bottom: 1.3rem;
    .homeSwipe{
        height: 3.78rem;
    }
    .countDownTitle{
        font-size: 0.28rem;
        color: rgb(233, 195, 255);
        text-align: center;
        padding-top: 0.18rem;
        box-sizing: border-box;
    }
    .timer{
        margin: 0.25rem auto 0.3rem;
        width: 5.2rem;
        text-align: center;
        display: flex;
        font-size: 0.16rem;
        span{
            height: 0.44rem;
            width: 1.1rem;
            line-height: 0.44rem;
            display: block;
            // padding: 0.1rem 0.24rem;
            margin: 0rem 0.1rem;
            background: #fff;
            border-radius: 3px;
        }
    }
    .activity{
        width: 7.02rem;
        height: 0.6rem;
        margin: 0 auto;
        color: rgb(252, 255, 0);
        text-align: center;
        line-height: 0.6rem;
        font-size: 0.28rem;
        background: rgb(95, 76, 148);
    }
    .rankLists{
      padding: 0rem 0.24rem;
      box-sizing: border-box;
      .rankList{
        display: flex;
        height: 1.56rem;
        padding: 0.2rem 0rem;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(100,84,144);
        .level{
          padding: 0.12rem 0.3rem;
          text-align: center;
          color:rgb(255, 216, 34);
          font-size: 0.35rem;
          img{
            width: 0.4rem;
            height: 0.35rem;
            margin-bottom: 0.1rem;
          }
        }
        .userIcon{
          width: 1.2rem;
          height: 1.2rem;
          margin-right: 0.2rem;
          img{
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 1.2rem;
          }
        }
        .info{
          padding: 0.12rem 0rem;
          color:#fff;
          font-size: 0.21rem;
          span{
            color:rgb(255, 216, 34);
          }
        }
      }
      .more{
            text-align: center;
            color: rgb(249, 240, 255);
            font-size: 0.23rem;
            margin: 0.25rem 0rem;
            img{
                width: 0.15rem;
                height: 0.13rem;
            }
        }
    }
}
</style>