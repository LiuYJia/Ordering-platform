<template>
    <div id="comment">       
        <div class="grade">
            <div class="num">
                <div><p style="color:yellow;font-size:25px">9.9</p>
                <h3>综合评分</h3></div>
            </div>
            <div class="star">
                <p>服务态度:<van-rate v-model="severValue" /></p>
                <p>商品质量:<van-rate v-model="quaValue" /></p>
                <p>上餐速度:<van-rate v-model="speedValue" /></p>
            </div>
        </div>
        <div class="comList" ref="comList">
            <div class="oneList" v-for="items in this.commentList" :key="items.id">
                <div class="leftmsg">
                    <p>{{items.name}}</p>
                    <p>{{items.com}}</p>
                </div>
                <div class="rightmsg">
                    <p>{{items.time}}</p>
                </div>
                
            </div>
        </div>
        <div class="publish">
            <van-cell-group>
                <van-field
                    v-model="comInput"
                    center
                    clearable
                    label="发表评论"
                    placeholder="请输入您想说的话"
                >
                <van-button slot="button" size="small" type="primary" @click="publish">发表</van-button>
                </van-field>
            </van-cell-group>
        </div>
    </div>
</template>
<script>
import { Row, Col } from 'vant'
export default {
    data(){
        return{
            value:4,
            comInput:'',
            severValue:4,
            quaValue:3,
            speedValue:3,
            commentList:[{id:1,name:'张三',com:'感觉好不错！',time:'2019-2-27 12:00'},
                        {id:2,name:'李四',com:'味道好极了！',time:'2019-2-27 12:00'},
                        {id:4,name:'李四',com:'味道好极了！',time:'2019-2-27 12:00'},
                        {id:5,name:'李四',com:'味道好极了！',time:'2019-2-27 12:00'},
                        {id:6,name:'李四',com:'味道好极了！',time:'2019-2-27 12:00'},
                        {id:3,name:'赵五',com:'垃圾，真的垃圾！',time:'2019-2-27 12:00'}]
        }
    },
    created(){
        
    },
    mounted(){
        this.$refs.comList.addEventListener('scroll', () => {
            $('.publish').css('display','none');
            var t1 = this.$refs.comList.scrollTop;
            var t2;
            var _this = this;
            var timer = setTimeout(function(){
                t2 = _this.$refs.comList.scrollTop;
                if(t2 == t1){
                    $('.publish').css('display','block');
                }
            }, 500);
        }, false)                
    },
    methods:{
        publish(){
            console.log(this.comInput);
        }
    }
}
</script>
<style>
    #comment{
        height: calc(67vh - 130px);
        width: 100vw; 
        position: relative;  
    }
    #comment .publish{
        background-color: red;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    #comment .grade{
        height: calc((67vh - 130px) * 1/3);
        display: flex;  
    }
    #comment .grade .num{
        height: 100%;
        flex: 1; 
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid gray;
    }
    #comment .grade .num p{
        text-align: center;
    }
    #comment .grade .star{
        height: 100%;
        flex: 2; 
        display: flex;
        flex-wrap:wrap;
        align-items: center;
        justify-content: center;
        font-size: 14px;
    }
    #comment .grade .star p{
        width: 100%;
        text-align: center;
    }
    
    #comment .grade .star .van-rate{
        display: inline;
    }
    #comment .comList{
        height: calc((67vh - 130px) * 2/3);
        overflow: scroll;
    }
    #comment .comList .oneList{
        display: flex;
        border-top: 1px solid gray;
        height: 8vh;
        align-items: center;
        font-size: 14px;
        justify-content: center;
    }
    #comment .comList .oneList .leftmsg{
        flex: 2;      
    }
    #comment .comList .oneList .leftmsg p{
        margin-left: 10vw;
    }
    #comment .comList .oneList .rightmsg{
        flex: 1;
    }
</style>

