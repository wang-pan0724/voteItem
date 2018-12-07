<<template>
  <div class="home">
      <mt-swipe :auto="4000" class="homeSwipe">
            <mt-swipe-item><img src="../../../static/img/img1.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/img1.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/img1.png" alt=""></mt-swipe-item>
        </mt-swipe> 
        <div class="activity">主办方/领奖方式</div>
        <div class="activityHost">
          <p class="host">主办单位：青岛理工大学</p>
          <p class="prizeTips">以下奖品在活动结束后活动负责人将通过留存手机号提供地址方式核实发放。</p>
          <div class="prizeList">
            <div class="list">
                <p>特等奖（1名）</p>
                <p>奖品：iPhone x（个人超过6888888票，仅限票数最高者）</p>
                <img src="../../../static/img/prize.png"/>
            </div>
            <div class="list">
                <p>特等奖（1名）</p>
                <p>奖品：iPhone x（个人超过6888888票，仅限票数最高者）</p>
                <img src="../../../static/img/prize.png"/>
            </div>
          </div>
          <div class="tips">
            奖品说明：幸运的你 参加原创大赛实现愿望,获得精美礼品一份 奖品说明奖项说明: 1)每个分类...3)本次活动可以通过“奖品许愿”将自己喜爱的奖品以许愿形式在作品中注明
          </div>
        </div>
  </div>
</template>
<<script>
export default {
  
}
</script>
<style lang="less" scoped>
.home{
    background: rgb(65, 48, 112);
    height: 100%;
    padding-bottom: 1.3rem;
    .homeSwipe{
        height: 3.78rem;
    }
    .activity{
        width: 7.02rem;
        height: 0.6rem;
        margin: 0.32rem auto 0rem;
        color: rgb(252, 255, 0);
        text-align: center;
        line-height: 0.6rem;
        font-size: 0.28rem;
        background: rgb(95, 76, 148);
    }
    .activityHost{
      width: 7.02rem;
      margin: 0.32rem auto 0rem;
      background: #fff;
      padding: 0.35rem;
      box-sizing: border-box;
      border-radius: 0.08rem;
      .host{
          color: rgb(65, 48, 112);
          font-size: 0.18rem;
          line-height: 0.28rem;
      }
      .prizeTips{
          color: rgb(51, 51, 51);
          font-size: 0.15rem;
          line-height: 0.28rem;
          margin: 0.1rem 0rem 0.28rem 0rem;
      }
      .prizeList{
          color:rgb(208, 38, 38);
          font-size: 0.16rem;
          line-height: 0.42rem;
          .list{
              position: relative;
              img{
                position: relative;
                width: 100%;
                margin: 0.35rem 0rem 0.7rem 0rem;
              }
          }
      }
      .tips{
          color:rgb(51,51,51);
          font-size: 0.16rem;
          line-height: 0.42rem;
          margin-bottom: 2.2rem;
      }
    }
}
</style>