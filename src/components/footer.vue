<template>
    <div id="footer">
        <router-link class="list" @click="clickEvent(1)" to="/mainPage"> 
            <div class="center">
                <van-icon name="shop" />
                <p>商品列表</p>
            </div>           
        </router-link>
        <router-link class="order" @click="clickEvent(3)" to="/order">
            <div class="center">
                <van-icon name="coupon" />
                <p>订单</p>
            </div>
        </router-link>
        <router-link class="setting" @click="clickEvent(2)" to="/setting">
            <div class="center">
                <van-icon name="setting" />
                <p>个人中心</p>
            </div>
        </router-link>
        
    </div>
</template>
<script>
import { Row, Col } from 'vant'
export default {
    data(){
        return{}
    },
    created(){
        
    },
    methods:{
        clickEvent:function(e){
            
        }
    }
}
</script>
<style>
    #footer{
        height: 8vh;
        width: 100vw;
        background-color: #45a0fa;
        background-color: rgb(1, 1, 1,0.7);
        position: absolute;
        bottom: 0;  
        display: flex;  
        align-items: center;    
    }
    #footer a{
        flex: 1;
        text-align: center;
        color: black;
    }
    #footer a:first-child{
        border-right: 1px solid white;
    }
    #footer a:last-child{
        border-left: 1px solid white;
    }
</style>

