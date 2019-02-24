<template>
    <div id="footer">
        <router-link class="list" @click="clickEvent(1)" to="/mainPage"> 
            <div class="center">
                <van-icon name="shop" />
                <p>商品列表</p>
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
        position: absolute;
        bottom: 0;        
    }
    #footer .list{
        height: 100%;
        float: left;
        width: calc(50% - 1px);
        text-align: center;
        position: relative;
        border-right: 1px solid white;
        color: black;
    }
    #footer .setting{
        height: 100%;
        width: calc(50% - 1px);
        float: left;
        text-align: center;
        position: relative;
        color: black;
    }
    #footer .center{
        position: absolute;
        transform: translate(-50%,-50%);
        left: 50%;
        top: 50%;
    }
</style>

