<template>
        
        <div id="setting">
            <van-nav-bar
            title="个人中心"
            left-text="注销登录"
            left-arrow
            @click-left="onClick"
            />
            
            <div class="user-poster">
                <img src="" alt="head" class="headimg"/>
            </div>
            
            <van-row class="user-links">
                <van-col span="8">
                    <van-icon name="pending-payment" />
                    全部订单
                </van-col>
                <van-col span="8">
                    <van-icon name="records" />
                    已支付
                </van-col>
                <van-col span="8">
                    <van-icon name="bill-o" />
                    未完成
                </van-col>
            </van-row>

            <van-cell-group class="user-group">
                <!-- <van-cell icon="records" title="全部订单" is-link /> -->
            </van-cell-group>

            <van-cell-group>
                <van-cell icon="points" title="个人资料" is-link @click="godata"/>
                <van-cell icon="gold-coin-o" title="优惠券" is-link />
                <van-cell icon="gift-o" title="反馈" is-link />
            </van-cell-group>



            <footerbar />
        </div>
</template>
<script>
// import headerMsg form 
import headermsg from './headermsg.vue'
import footerbar from './footer.vue'
export default {
    components: {
        headermsg,footerbar
    },
    name:'mainpage',
    data(){
        return{}
    },
    created(){

    },
    methods:{
        onClick(){
            this.$router.push('/login')
        },
        godata(){
            this.$router.push('/persondata')
        }
    }
}
</script>
<style>
#setting{
    height: 100vh;
    width: 100vw;
}
#setting .van-col{
    text-align: center;
}
#setting .user-links{
    height: 10vh;
    display: flex;
    align-items: center;
}
#setting .user-poster{
    background-image: url('../assets/images/gouwei.jpg');
    background-size:100vw 40vh;
    background-repeat: no-repeat;
    width: 100vw;
    height: 40vh;
    position: relative;
}
#setting .headimg{
    background-color: skyblue;
    height: 30vw;
    width: 30vw;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%,-50%);
}
</style>


