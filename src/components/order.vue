<template>
    
    <!-- <transition name="van-slide-right"> -->
        
        <div id="order">
            <van-nav-bar
            title="订单"
            left-text="注销登录"
            left-arrow
            @click-left="onClick"
            />

            <div v-for="item in buyList" :key="item.id">
                <van-card
                    :num=item.num
                    :price=item.price
                    :desc=item.desc  
                    :title=item.title
                    :thumb=item.imageURL            
                />
                <div slot="footer" class="optionbtn" >
                    <van-button size="mini" class="detail" @click="clickDetail(item.id)">详情</van-button>
                    <van-button size="mini" class="delete" @click="clickDelete(item.id)">删除</van-button>
                </div>
            </van-card>
            </div>
            
            

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
        return{
            buyList:[{
                id:1,
                num:2,
                price:2,
                desc:'这个商品很好吃',
                title:'这个商品没有名字',
                imageURL:'http://localhost:8080/static/img/gouwei.a14b144.jpg'
            },{
                id:2,
                num:4,
                price:4,
                desc:'这个商品很好吃',
                title:'这个商品没有名字',
                imageURL:'http://localhost:8080/static/img/gouwei.a14b144.jpg'
            }]
        }
    },
    created(){

    },
    methods:{
        onClick(){
            this.$router.push('/login')
        },
        clickDetail(d){
            this.$router.push('/orderdetail')
        },
        clickDelete(d){
            console.log(d);
        }
    }
}
</script>
<style>
#order{
    height: 100vh;
    width: 100vw;
}
#order .optionbtn{
    text-align: right;
    padding-right: 5vw;
    color: white;
}
#order .optionbtn .detail{
    background-color: rgb(18, 157, 167);
    color: white;
    border-radius: 10px;
}
#order .optionbtn .delete{
    background-color: red;
    color: white;
    border-radius: 10px;
}
</style>


