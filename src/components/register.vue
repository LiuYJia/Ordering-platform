
<template>
  <div id="register">
      <van-nav-bar
        title="注册账号"
        left-text="登录"
        left-arrow
        @click-left="onClickLogin"
        />
    <div class="blackModel">

        <p class="title">Ordering Plantform</p>
        
        <div class="inputfield">
            <van-cell-group>
                <van-field
                    v-model="username"
                    label="用户名"
                    placeholder="请输入用户名"
                    left-icon="contact"
                />
                <van-field
                    v-model="password"
                    label="密码"
                    type="password"
                    left-icon="bag-o"
                    placeholder="请输入密码"
                />
            </van-cell-group>
        </div>

        <div class="btn">
            <van-button round type="primary" size="large" @click="register">注册</van-button>
        </div>
    </div>
  </div>
  
</template>

<script>
import { Dialog } from 'vant'
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    created(){
        
    },
    methods:{
        register(){
            Dialog.alert({
                message: '请输入正确信息'
            }).then(() => {
                this.username = ''
                this.password = ''
            });
            console.log(this.username,this.password)
        },
        onClickLogin(){
            this.$router.push('/login')
        }
    }
}
</script>

<style>
#register{
  background-image: url(../assets/login.jpg);
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  position: relative; 
}
#register .van-nav-bar{
    background-color: transparent;
    color: #1989fa;
}
#register .blackModel{
    height: 90%;
    width: 85%;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
}
#register .blackModel p.title{
    text-align: center;
    font-size: 25px;
    margin-top: 60px;
}
#register .blackModel .inputfield,.btn{
    text-align: center;
    margin-top: 3rem;
}
#register .blackModel .van-cell-group{
    width: 90%;
    margin: 0 auto;
}
#register .blackModel button{
    width: 90%;
}
#register .blackModel a{
    color: black;
    margin-top: 20px;
    display: block;
}
</style>

