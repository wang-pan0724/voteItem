<<template>
  <div class="signUp">
      <div class="title">活动报名处</div>
      <div class="userName">姓名：<input v-model="name" placeholder="输入您的姓名"></div>
      <div class="userName">手机号：<input v-model="phoneNum" placeholder="输入您的手机号"></div>
      <p class="tips">*请输入正确的手机号，方便联系您兑奖奖品</p>
      <div class="userImg">
        <p>上传照片（1-3）张（默认第一张为封面照）</p>
        <div class="imgList">
          <input type="file" id="file" @change="fileChange($event)" accept="image/*" >
          <img src="../../../static/img/add.png"/>
          <img v-for="(item,index) of imgList" :src="item.file.src" alt="">
        </div>
      </div>
      <div class="mottoContant">
        <div>参赛宣言：</div>
        <textarea rows="3" cols="20" v-model="motto" placeholder="在此输入您的参赛宣言哦~"></textarea>
      </div>
      <p class="tips">*参赛宣言请不要超过50字</p>
      <div class="userName">收货地址：<input v-model="address" placeholder="在此输入您的收货地址哦~"></div>
      <p class="tips">*请如实填写报名信息，提交信息为唯一获奖凭证，个人信息不会泄露。</p>
      <div class="sure">提交报名</div>
      <div class="goHome" @click="goHome">返回首页</div>
  </div>
</template>
<<script>
export default {
  components: {
       
  },
  data() {
		return {
      name: "",
      phoneNum:"",
      motto:"",
      address:"",
      imgList: [],
      file: {
          src: ""
      },
		}
  },
  methods:{
    goHome(){
      this.$router.push({name: 'home'});
    },
    fileChange(el) {
        if (!el.target.files[0].size) return;
        this.fileList(el.target.files);
        el.target.value = ''
    },
    fileList (files) {
        if (this.imgList.length + files.length > 3) {
            // Toast('最多只能上传3张');
            Toast({
              message: '最多只能上传3张',
              position: 'bottom',
              duration: 3000
            });
            return
        }
        for (var i = 0; i < files.length; i++) {
            this.fileAdd(files[i]);
        }
    },
    fileAdd(file) {
        this.size = this.size + file.size;//总大小
        var reader = new FileReader();
        reader.vue = this;
        reader.readAsDataURL(file);

        reader.onload = function () {
            file.src = this.result;
            this.vue.imgList.push({
                file
            });
        }
        console.log(JSON.stringify(this.imgList));
    },
  }
}
</script>
<style lang="less" scoped>
.signUp{
  background: rgb(236, 236, 236);
  min-height: 100vh;
  padding-bottom: 1.6rem;
  .title{
    height: 0.98rem;
    line-height: 0.98rem;
    text-align: center;
    font-size: 0.35rem;
  }
  .userName{
    width: 7.06rem;
    height: 0.84rem;
    margin: 0 auto;
    background: #fff;
    margin-bottom: 0.1rem;
    border-radius: 0.08rem;
    line-height: 0.84rem;
    padding: 0rem 0.3rem;
    box-sizing: border-box;
    color: rgb(153, 153, 153);
    font-size: 0.28rem;
    input{
      border: 0px;
      outline: 0px;
    }
  }
  .tips{
    width: 7.06rem;
    font-size: 0.25rem;
    margin: 0rem auto 0.25rem;
    color: rgb(65, 48, 112);
    line-height: 0.36rem;
  }
  .userImg{
    width: 7.06rem;
    height: 2.7rem;
    margin: 0 auto;
    background: #fff;
    border-radius: 0.08rem;
    margin-bottom: 0.1rem;
    padding: 0.3rem;
    box-sizing: border-box;
    color: rgb(153, 153, 153);
    font-size: 0.28rem;
    p{
      margin-bottom: 0.35rem;
    }
    .imgList{
      input{
        width: 1.4rem;
        height: 1.4rem;
        position: absolute;
        z-index:9;
        opacity: 0;
      }
      img{
        width: 1.4rem;
        height: 1.4rem;
        margin-right: 0.1rem;
      }
    }
    
  }
  .mottoContant{
    width: 7.06rem;
    height: 1.76rem;
    margin: 0 auto;
    background: #fff;
    border-radius: 0.08rem;
    margin-bottom: 0.1rem;
    padding: 0.3rem;
    box-sizing: border-box;
    color: rgb(153, 153, 153);
    font-size: 0.28rem;
    display: flex;
    textarea{
      flex: 1;
      border: 0px;
      outline: 0px;
    }
  }
  .sure{
    width: 7.06rem;
    height: 0.84rem;
    margin: 0.5rem auto 0.1rem;
    background: rgb(255, 186, 0);
    border-radius: 0.08rem;
    line-height: 0.84rem;
    text-align: center;
    font-size: 0.33rem;
    color: #000;
  }
  .goHome{
    width: 7.06rem;
    height: 0.84rem;
    margin: 0 auto;
    background: #fff;
    color: rgb(65, 48, 112);
    border-radius: 0.08rem;
    margin-bottom: 0.1rem;
    line-height: 0.84rem;
    text-align: center;
    font-size: 0.33rem;
  }
}
</style>


