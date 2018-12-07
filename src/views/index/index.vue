<template>
    <div class="home">
        <mt-swipe :auto="4000" class="homeSwipe">
            <mt-swipe-item><img src="../../../static/img/img1.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/img1.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/img1.png" alt=""></mt-swipe-item>
        </mt-swipe>
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
        <div class="countDownTitle">活动结束倒计时</div>
        <div class="timer">
            <span>{{dd}}天</span>
            <span>{{hh}}时</span>
            <span>{{mm}}分</span>
            <span>{{ss}}秒</span>
        </div>

        <div class="signUp" @click="goSignUp">我要报名</div>
        <div class="search">
            <input type="text" placeholder="输入编号或者姓名">
            <div>搜索 <img src="../../../static/img/search.png" alt=""></div>
        </div>
        <div class="infoLists">
            <div class="infoList">
                <div class="info">
                    <img src="../../../static/img/img1.png" alt="">
                    <div class="infoNum">83号</div>
                    <div class="infoBtn" @click="voteThisMan">投<span>TA</span>一票</div>
                    <div class="infoName">
                        <span>张美美</span>
                        <span>88998票</span>
                    </div>
                </div>
            </div>
            <div class="infoList">
                <div class="info">
                    <img src="../../../static/img/img1.png" alt="">
                    <div class="infoNum">83号</div>
                    <div class="infoBtn">投<span>TA</span>一票</div>
                    <div class="infoName">
                        <span>张美美</span>
                        <span>88998票</span>
                    </div>
                </div>
            </div>
            <div class="infoList">
                <div class="info">
                    <img src="../../../static/img/img1.png" alt="">
                    <div class="infoNum">83号</div>
                    <div class="infoBtn">投<span>TA</span>一票</div>
                    <div class="infoName">
                        <span>张美美</span>
                        <span>88998票</span>
                    </div>
                </div>
            </div>
            <div class="infoList">
                <div class="info">
                    <img src="../../../static/img/img1.png" alt="">
                    <div class="infoNum">83号</div>
                    <div class="infoBtn">投<span>TA</span>一票</div>
                    <div class="infoName">
                        <span>张美美</span>
                        <span>88998票</span>
                    </div>
                </div>
            </div>
            <div class="more">
                查看更多 <img src="../../../static/img/arrow.png" alt="">
            </div>
        </div>
        <div class="activity">活动规则</div>
        <div class="activityInfo">
            <p>文化与艺术学院“最美新生”评选大赛</p>
            <img src="../../../static/img/img1.png" alt="">
            <div>
                本次活动由陕西国际商贸学院与艺术学院主办，全国高校大学生联盟承办，活动真实有效，奖品会按时下发，请同学们积极参与，大力投票！ 
                <br>
                （一）【温馨提示】
                <br>
                1、活动期间每个微信号每天可投一票
                <br>
                2、报名需提交真实照片，虚假的照片和报名信息视为无效；同一个选手不可重复报名
                <br>
                3、比赛成绩按照票数评选，活动结束后，排行榜可直接看至名次
                <br>
                4、本活动公正、公平、公开，欢迎监督，但对诋毁造谣之言论将追究法律责任
                <br>
                （二）【大赛申明】
                <br>
                禁止刷票，否则取消获奖资格或清票，1分钟投票超过100票，系统将自动判定为疑似刷票行为，锁定投票资格10分钟并扣票警示，严重者取消参赛资格
                <br>
                （三）【注意事项】
                <br>
                1、禁止盗用他人照片或冒用他人名义参赛
                <br>
                2、一旦参赛，将认定参赛者提供了自己照片的合法使用权
                <br>
                3、本投票活动内所有奖品均以实物为准，奖品价值有限，请勿恶性竞争
            </div>
        </div>
    </div>
</template>

<script>
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
        voteThisMan(){
            this.$router.push({name: 'vote'});
        },
        goSignUp(){
            this.$router.push({name: 'signUp'});
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
    .voteNumber{
        width: 7.06rem;
        height: 1.08rem;
        margin: 0.14rem auto;
        background: rgb(111, 91, 168);
        padding: 0.18rem 0rem;
        box-sizing: border-box;
        display: flex;
        .voteList{
            width: 33.3%;
            text-align: center;
            border-right: 0.04rem solid rgb(194, 150, 222);
            .voteNum{
                color: rgb(252, 255, 0);
            }
            .voteName{
                color: #fff;
            }
        }
        .voteList:last-child{
             border-right:0px;
        }
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
    .countDownText{
        color: #fff;
        text-align: center;
        padding: 0.18rem 0rem;
        box-sizing: border-box;
    }
    .signUp{
        width: 3.52rem;
        height: 0.6rem;
        color: rgb(22, 12, 0);
        line-height: 0.6rem;
        text-align: center;
        background: rgb(255, 186, 0);
        border-radius: 0.06rem;
        margin: 0.18rem auto;
    }
    .search{
        width: 6.84rem;
        height: 0.64rem;
        display: flex;
        margin: 0.36rem auto;
        input{
            flex: 1;
            height: 0.64rem;
            outline: none;
            margin-right: 0.1rem;
            border: 0px;
            padding-left: 0.1rem;
            box-sizing: border-box;
            border-radius: 0.06rem;
        }
        div{
            position: relative;
           width: 1.48rem;
           background: rgb(255, 186, 0);
           border-radius: 0.06rem;
           line-height: 0.64rem; 
           text-align: center;
           img{
               position: absolute;
               width: 0.38rem;
               height: 0.38rem;
               top: 0.1rem;
               margin-left: 2px;
           }
        }
    }
    .infoLists{
        position: relative;
        width: 100%;
        padding: 0rem 0.2rem;
        box-sizing: border-box;
        margin: 0px auto;
        overflow: hidden;
        .info{
            background: #fff;
            padding-bottom: 0.02rem;
        }
        .infoList{
            position: relative;
            width: 50%;
            float: left;
            height: auto;
            padding: 0.24rem 0.2rem;
            box-sizing: border-box;
            // background: #fff;
            img{
                width: 3.16rem;
            }
            .infoNum{
                position: absolute;
                top:0.24rem;
                width: 1.2rem;
                height: 0.44rem;
                line-height: 0.44rem;
                text-align: center;
                background: rgba(0, 0, 0, 0.5);
                color: rgb(252, 255, 0);
                border-radius: 3px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 0.23rem;
            }
            .infoBtn{
                position: absolute;
                width: 2.06rem;
                height: 0.52rem;
                line-height: 0.52rem;
                top: 3.54rem;
                text-align: center;
                background:rgba(65, 48, 112,0.8); 
                border-radius: 0.52rem;
                color: #fff;
                left: 50%;
                transform: translateX(-50%);
                font-size: 0.2rem;
                span{
                    color: rgb(252, 255, 0);
                }
            }
            .infoName{
                position: relative;
                margin: 0.48rem 0rem 0.24rem 0rem;
                width: 2.76rem;
                height: 0.62rem;
                padding: 0.1rem;
                box-sizing: border-box;
                border: 2px solid rgb(209,209,209);
                border-radius: 0.1rem;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                font-size: 0.23rem;
                span{
                    display: block;
                    height: 0.32rem;
                    line-height: 0.32rem;
                    width: 50%;
                    text-align: center;
                }
                span:first-child{
                    border-right: 1px solid rgb(84,84,84);
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
    .activityInfo{
        width: 6.26rem;
        margin: auto;
        font-size: 0.21rem;
        p{
            margin-top: 0.38rem;
            color: rgb(252, 255, 0);
            text-align: center;
        }
        img{
            width: 6.26rem;
            height: 2.9rem;
            margin: 0.2rem 0rem;
        }
        div{            
            line-height: 0.42rem;
            color: rgb(249, 240, 255);
        }
    }
}
    
</style>

