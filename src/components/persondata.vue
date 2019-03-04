
<template>
  <div id="persondata">

        <van-nav-bar
            title="个人资料"
            left-text="返回"
            left-arrow
            @click-left="onClick"
            />
        <div class="inputfield">
            <div class="upload">
                <van-uploader :after-read="onRead">
                    <van-icon name="photograph" /><label :after-read="onRead">上传头像</label>                    
                </van-uploader>
                <img  src="http://localhost:8080/static/img/gouwei.a14b144.jpg" alt="xx">
            </div>
            
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

            <van-button round type="primary" size="large" @click="save">保存</van-button>
        </div>

        <footerbar /> 
    </div>
  </div>
  
</template>

<script>
import { Dialog } from 'vant'
import footerbar from './footer.vue'
export default {
    components: {
        footerbar
    },
    data(){
        return{
            username:'',
            password:''
        }
    },
    created(){
        
    },
    methods:{
        onClick(){
            // Dialog.alert({
            //     message: '请输入正确信息'
            // }).then(() => {
            //     this.username = ''
            //     this.password = ''
            // });
            this.$router.push('/setting')
        },
        save(){

        },
        onRead(file) {
            console.log(file)
        }
    }
}
</script>

<style>
#persondata{
  height: 100vh;
  width: 100vw;
}
#persondata .inputfield{
    margin-top: 5vh;
    text-align: center;
}
#persondata .upload{
    padding-left: 4vw;
    display: flex;
    height: 15vw;
    align-items: center;
}
#persondata .upload .van-uploader{
    /* flex: 1; */
}
#persondata img{
    height: 15vw;
    width: 15vw;
    position: absolute;
    right: 4vw;
}
#persondata button{
    margin: 10vh auto;
    width: 80%;
}
</style>

