<template>
    
    <!-- <transition name="van-slide-right"> -->
        
        <div id="mainPage">
            <van-nav-bar
            title="个人中心"
            left-text="注销登录"
            left-arrow
            @click-left="onClick"
            />
            <headermsg />
            <footerbar />
        </div>
    <!-- </transition> -->
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


