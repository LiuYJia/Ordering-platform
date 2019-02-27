<template>
    
    <!-- <transition name="van-slide-right"> -->
        
        <div id="order">
            <van-nav-bar
            title="订单详情"
            left-text="返回"
            left-arrow
            @click-left="onClick"
            />

            <van-card
                :num=item.num
                :price=item.price
                :desc=item.desc  
                :title=item.title
                :thumb=item.imageURL
                v-for="item in buyList" :key="item.id"
            />
            <p class="all">总计100元</p>

            <div class="orderDetail">
                <h4>订单信息</h4>
                <div>
                    <p>订单号：111111</p>
                    <p>生成时间：2018-2-27</p>
                    <p>支付方式：线上支付</p>
                </div>
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
            console.log(1);
            this.$router.push('/order')
        }
    }
}
</script>
<style>
#order{
    height: 100vh;
    width: 100vw;
}
#order .all{
    text-align: right;
    padding-right: 4vw;
    border-bottom: 1px solid gray;
}
#order .orderDetail{
    border-top: 1px solid gray;
    margin-top: 5vh;
}
#order .orderDetail h4{
    padding: 2vh 4vw;
}
#order .orderDetail div{
    background-color: rgb(243, 242, 242)
}
#order .orderDetail p{
    height: 5vh;
    display: flex;
    width: 92vw;
    align-items: center;
    padding-left: 4vw;
    margin: -1px auto;
}
</style>


