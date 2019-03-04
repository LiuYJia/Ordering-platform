<template>
    
    <!-- <transition name="van-slide-right"> -->
        
        <div id="mainPage">
            <van-nav-bar
                title="商品列表"
                left-text="注销登录"
                left-arrow
                @click-left="onClick"
            />

            <headermsg />
            
            <van-tabs>
                <van-tab title="商品">
                    <goodsList />
                </van-tab>
                <van-tab title="评论">
                    <comment />
                </van-tab>
                <van-tab title="商家">
                    <shopmsg />
                </van-tab>
            </van-tabs>
            <!-- //底部导航 -->
            <footerbar />

        </div>
        
    <!-- </transition> -->
</template>
<script>
import headermsg from './headermsg.vue'
import footerbar from './footer.vue'
import goodsList from './goodsList.vue'
import comment from './comment.vue'
import shopmsg from './shopmsg.vue'
export default {
    components: {
        headermsg,footerbar,goodsList,comment,shopmsg
    },
    name:'mainpage',
    data(){
        return{
            tablist:['商品','评论','商家'],
            active:0
        }
    },
    created(){

    },
    mounted(){
        
    },
    methods:{
        onClick(){
            console.log(1);
            this.$router.push('/login')
        },
        kkk(e){
            console.log(e.x,e.y);
        }
    }
}
</script>
<style>
#mainPage{
    height: 100vh;
    width: 100vw;
}
#mainPage .van-tabs{
    margin-top: 40px;
}
</style>


