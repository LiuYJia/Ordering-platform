<template>
        
        <div id="setting">
            <van-nav-bar
            title="个人中心"
            left-text="注销登录"
            left-arrow
            @click-left="onClick"
            />
            
            <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
            <van-row class="user-links">
                <van-col span="8">
                    <van-icon name="pending-payment" />
                    待付款
                </van-col>
                <van-col span="8">
                    <van-icon name="records" />
                    待接单
                </van-col>
                <van-col span="8">
                    <van-icon name="bill-o" />
                    已支付
                </van-col>
            </van-row>

            <van-cell-group class="user-group">
                <van-cell icon="records" title="全部订单" is-link />
            </van-cell-group>

            <van-cell-group>
                <van-cell icon="points" title="个人资料" is-link />
                <van-cell icon="gold-coin-o" title="优惠券" is-link />
                <van-cell icon="gift-o" title="可用积分" is-link />
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
        }
    }
}
</script>
<style>
#setting{
    height: 100vh;
    width: 100vw;
}
#setting img{
    height: 40vh;
}
#setting .van-col{
    text-align: center;
}
#setting .user-links{
    height: 10vh;
    display: flex;
    align-items: center;
}
</style>


