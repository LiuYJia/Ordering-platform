
<template>
  <div id="login">
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
            <van-button round type="primary" size="large" @click="login">登录</van-button>
            <p><a href="javascript:void(0)" @click="register">注册账号</a></p>
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
        login(){
            // Dialog.alert({
            //     message: '请输入正确信息'
            // }).then(() => {
            //     this.username = ''
            //     this.password = ''
            // });
            console.log(this.username,this.password);
            this.$router.push('/mainPage')
        },
        register(){
            this.$router.push('/register')
        }
    }
}
</script>

<style>
#login{
  background-image: url(../assets/images/login.jpg);
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  position: relative; 
}
#login .blackModel{
    height: 90%;
    width: 85%;
    background-color: rgba(2, 2, 2, 0.5);
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
}
#login .blackModel p.title{
    text-align: center;
    font-size: 25px;
    margin-top: 60px;
}
#login .blackModel .inputfield,.btn{
    text-align: center;
    margin-top: 3rem;
}
#login .blackModel .van-cell-group{
    width: 90%;
    margin: 0 auto;
}
#login .blackModel button{
    width: 90%;
}
#login .blackModel a{
    color: black;
    margin-top: 20px;
    display: block;
}
</style>

