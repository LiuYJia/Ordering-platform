
<template>
    <div id="goodsList">
        <div class="left" ref="left">
            <ul>
                <li v-for="(item,index) in left" :class="{current:currentIndex==index}" @click="selectItem(index,$event)">
                    <span class="left-item">{{item}}</span>
                </li>
            </ul>
        </div>
        <div class="right" ref="right">
            <ul>
                <li v-for="item in right" class="right-item right-item-hook">
                    <h3>{{item.name}}</h3>
                    <ul>
                        <li v-for="obj in item.content">
                            <div class="goodmsg">
                                <img src="http://localhost:8080/static/img/gouwei.a14b144.jpg" alt="">    
                                <div class="msg">
                                    <p>{{obj.name}}</p>
                                    <p>{{obj.dis}}</p>
                                </div>
                                <div class="add">
                                    <div :class="{pop: true, mov: obj.num>0}" @click="reducegoods(obj.num)" class="reducegoods"><span class="iconfont">&#xe64b;</span></div>
                                    <div class="goodsnum">{{obj.num}}</div>
                                    <div @click="addgoods(obj.num)" class="addgoods"><span class="iconfont">&#xe65e;</span></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="shopcar" @click="goShopcar">
            <van-icon name="shopping-cart-o" />
        </div>
    </div> 
</template>

<script>
import { Dialog } from 'vant'
import headerData from '../assets/api/mainpage'
import axios from 'axios'
import { truncate } from 'fs';
import BetterScroll from 'better-scroll'
export default {
    name:'goodsList',
    data(){
        return{
            left:['推荐','热销','折扣','主食','饮料'],
            right:[
                {'name':'推荐',content:[{id:1,name:'111',dis:'good',num:''},{id:2,name:'222',dis:'bad',num:''}]},
                {'name':'热销',content:['333','444']},
                {'name':'折扣',content:['555','666']},
                {'name':'主食',content:['777','888']},
                {'name':'饮料',content:['999','000','999','000','999','000','999','000','999','000']}
            ],
            listHeight:[],
            scrollY:0,
            clickEvent:false,
            goodsnum:''
        }
    },
    created(){
        axios.get('static/data.json').then((res) => {
            this.notice = res.data.resultJson.notice
            this.msg = res.data.resultJson
        })
    },
    mounted(){
        this.$nextTick(()=>{
            this._initScroll();
            this._getHeight();
        })
    },     
    computed: { 
        currentIndex(){
          for( let i = 0;i<this.listHeight.length;i++ ){
            let height1 = this.listHeight[i];
            let height2 = this.listHeight[i+1];
            //当遍历到listHeight最后一个元素的时候，height2的值为undefined,如果是
            //最后一个元素的话!height2为真，后面就不需要判断了
            if( !height2 || (this.scrollY >= height1 && this.scrollY<height2)){
                return i;
            }
          }
          //默认情况下是返回第一个元素
          return 0;
        }
    },
    watch:{
        goodsnum:{
            handler:function(val,oldval){
                console.log(1222);
                if(val==0){
                    
                    $('#goodsList .goodsnum').css('opacity','0')
                }else{
                    $('#goodsList .goodsnum').css('opacity','1')
                }
            }
        }
    },
    methods:{
        goShopcar(){
            this.$router.push('/shopcar');
        },
        addgoods(d){               
            d++;
            this.goodsnum = d; 
            console.log(d);
        },
        reducegoods(d){            
            d--;
            this.goodsnum = d; 
            if(d<0){
                d=0;
            }

        },
        _initScroll(){
            this.lefts = new BetterScroll(this.$refs.left,{
                click:true
            })
            this.rights = new BetterScroll(this.$refs.right,{
                click: true,
                probeType:3
            })
            this.rights.on('scroll',(pos)=>{
                if( pos.y <= 0 ){
                    this.scrollY = Math.abs( Math.round(pos.y) );
                }
                //this.scrollY = Math.abs(Math.round(pos.y))//绝对值 四舍五入
            })
        },
        _getHeight(){
            var rightItems = this.$refs.right.getElementsByClassName('right-item-hook');
            var height = 0;
            this.listHeight.push(height);
            for(var i=0;i<rightItems.length;i++){
                var item = rightItems[i];
                height += item.clientHeight;
                this.listHeight.push(height);
            }
        },
        selectItem(index,event){
            this.clickEvent = true;
            if(!event._constructed){
                return;
            }else{
                var rightItems = this.$refs.right.getElementsByClassName('right-item-hook');
                var el = rightItems[index];
                this.rights.scrollToElement(el,300);
            }
        }
    }
}
</script>

<style>
#goodsList{
    display: flex;
    overflow: hidden;
    height: calc(67vh - 130px);
    width: 100vw;
}
.pop {
    display: inline-block;
    position: relative;
    left: 48px;
    opacity: 0;
    transition: all ease .5s;
}
.mov {
    left: 0;
    opacity: 1;
}
#goodsList .left{
    flex: 1;
    background: #eee;
}
#goodsList .shopcar{
    height: 10vh;
    width: 10vh;
    background-color: whitesmoke;
    position: fixed;
    right: 0;
    bottom: 10vh;
    border: 1px solid gray;
    border-radius: 120px;
    display: flex;
    align-items: center;
    justify-items: center;
    text-align: center;
    
}
#goodsList .shopcar i{
    font-size: 40px;
    margin: 0 auto;
}
#goodsList .left li{
    width: 100%;
    height: 100%;  
}
#goodsList .current{
    background: white;
    border-left: 3px solid red;
}
#goodsList .left-item{
    display: flex;
    height: 10vh;
    text-align: center;
    border-bottom:1px solid white;
    align-items: center;
    justify-content: center;
}
#goodsList .right{
    flex: 4;
}
#goodsList .right img{
    height: 10vh;
    width: 10vh;
}
#goodsList  .goodmsg{
    display: flex;
    width: 100%
}
#goodsList .goodmsg img{
    flex: 1;
}
#goodsList .goodmsg .msg{
    flex: 2;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
#goodsList .goodmsg .add{
    flex: 2;
    display: flex;
    align-items: flex-end;
}
#goodsList .goodmsg .add span{
    color: red;
    font-size: 20px;
}   
#goodsList .goodmsg .addgoods,.reducegoods,.goodsnum{
    flex: 1;
    font-size: 20px;
}

#goodsList .right h3{
    padding-left: 20px;
}
#goodsList .right-item li{
    height: 12vh;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
    background: white;
    padding-left: 20px;
}
</style>

