<template>
    
    <transition name="van-slide-right">
        
        <div id="mainPage">
            <van-nav-bar
            title="商品列表"
            left-text="注销登录"
            left-arrow
            @click-left="onClick"
            />
            <headermsg />
        </div>
    </transition>
</template>
<script>
// import headerMsg form 
import headermsg from './headermsg.vue'
export default {
    components: {
        headermsg
    },
    name:'mainpage',
    data(){
        return{}
    },
    created(){

    },
    methods:{
        onClick(){
            console.log(1);
            this.$router.push('/login')
        }
    }
}
</script>
<style>
#mainPage{
    /* background-color: aqua; */
    height: 100vh;
    width: 100vw;
}
</style>


