<template>
    <div id="shopmsg">        
        <div class="msg">
            <div class="name">
                <div class="left"><p style="font-size:18px">够味(北京店)</p><p>已好评1000人</p></div>
                <div class="right"><van-icon name="like" @click="clickHeart"/><p>点个赞</p></div>
            </div>
            <div class="num">
                <div><p>人均消费</p><p>50元</p></div>
                <div><p>好评度</p><p>90%</p></div>
                <div><p>平均上餐速度</p><p>10分钟</p></div>
            </div>
        </div>
        <div class="discount">
            <h3>公告与活动</h3>
            <p>此商家是很不错，此商家是很不错，此商家是很不错，此商家是很不错，此商家是很不错，此商家是很不错</p>
            <van-list>
                <van-cell
                    v-for="item in discountList"
                    :key="item.id"
                    :title="item.msg"
                />
            </van-list>
        </div>
    </div>
</template>
<script>
import { Row, Col } from 'vant'
export default {
    data(){
        return{
            discountList:[{
                id:'1',
                msg:'这里是一条优惠信息这里是一条优惠信息'
            },{
                id:'2',
                msg:'这里是一条满减信息这里是一条满减信息'
            },
            {
                id:'3',
                msg:'这里是一条打折信息这里是一条打折信息'
            }]
        }
    },
    created(){
        
    },
    methods:{
        clickHeart(){
            console.log('点赞信息');
        }
    }
}
</script>
<style>
    #shopmsg{
        height: calc(67vh - 130px);
        width: 100vw; 
        position: relative;  
    }
    #shopmsg .msg{
        height: calc((67vh - 130px) * 2/5);
        border-bottom: 1px solid gray;
         font-size: 14px; 
    }
    #shopmsg .msg .name{
        height: 50%;
        width: 100%;
        display: flex;
        align-items: center;
    }
    #shopmsg .msg .name .left{
        flex: 3;
        text-align: center;
    }
    #shopmsg .msg .name .right{
        flex: 2;
        text-align: center;
    }
    #shopmsg .msg .name .right .van-icon{
        color: red;
        font-size: 20px;
    }
    #shopmsg .msg .num{
        height: 50%;
        width: 100%;
        display: flex;
        align-items: center;
        border-top: 1px solid gray;
          
    }
    #shopmsg .msg .num div{
        flex: 1;
        text-align: center;
    }
    #shopmsg .msg .num div:first-child{
        border-right: 1px solid gray;
    }
    #shopmsg .msg .num div:last-child{
        border-left: 1px solid gray;
    }
    #shopmsg .discount{
        height: calc((67vh - 130px) * 3/5);
        overflow: scroll;
        font-size: 14px;
    }
    #shopmsg .discount h3{
        padding-top: 1vh;
        padding-left: 1vh;
    }
    #shopmsg .discount p{
        padding: 1vh;
        color: red;
    }
    #shopmsg .discount .van-cell{
        border-top: 1px solid gray;
    }
</style>

