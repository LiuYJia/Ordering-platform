
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
                <li v-for="(item,index1) in right" class="right-item right-item-hook">
                    <h3>{{item.name}}</h3>
                    <ul>
                        <li v-for="(obj,index2) in item.content">
                            <div class="goodmsg">
                                <img src="http://localhost:8080/static/img/gouwei.a14b144.jpg" alt="">    
                                <div class="msg">
                                    <p>{{obj.name}}</p>
                                    <p>{{obj.dis}}</p>
                                </div>
                                <div class="add">
                                    <div :class="{pop: true, mov: obj.num>0}" @click="reducegoods(obj,index1,index2)" class="reducegoods"><span class="iconfont">&#xe64b;</span></div>
                                    <div class="goodsnum" :class="{isNum: true, notNum: obj.num>0}">{{obj.num}}</div>
                                    <div @click="addgoods(obj,index1,index2,$event)" class="addgoods"><span class="iconfont">&#xe65e;</span></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- 运动的小球 -->
        <div id="points">
            <div class="pointOuter pointPre">
                <div class="point-inner"></div>
            </div>  
            <div class="pointOuter pointPre">
                <div class="point-inner"></div>
            </div>  
            <div class="pointOuter pointPre">
                <div class="point-inner"></div>
            </div>  
            <div class="pointOuter pointPre">
                <div class="point-inner"></div>
            </div>  
            <div class="pointOuter pointPre">
                <div class="point-inner"></div>
            </div>  
            <div class="pointOuter pointPre">
                <div class="point-inner"></div>
            </div>  
            <div class="pointOuter pointPre">
                <div class="point-inner"></div>
            </div>  
            <div class="pointOuter pointPre">
                <div class="point-inner"></div>
            </div>  
            <div class="pointOuter pointPre">
                <div class="point-inner"></div>
            </div>  
            <div class="pointOuter pointPre">
                <div class="point-inner"></div>
            </div>  
            <div class="pointOuter pointPre">
                <div class="point-inner"></div>
            </div>  
            <div class="pointOuter pointPre">
                <div class="point-inner"></div>
            </div>  
            <div class="pointOuter pointPre">
                <div class="point-inner"></div>
            </div>  
        </div>
        <!-- 购物车 -->
        <div class="shopcar" @click="goShopcar">                       
            <div class="iconcar">
                <van-icon name="shopping-cart-o" />
                <p class="badge">{{allnum}}</p>
            </div>
            
            <div class="shopbtn"><van-button type="info">购物车</van-button></div>
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
                {'name':'推荐',content:[{id:1,name:'111',dis:'good',num:'0'},{id:2,name:'222',dis:'bad',num:'0'}]},
                {'name':'热销',content:[{id:3,name:'333',dis:'good',num:'0'},{id:4,name:'444',dis:'bad',num:'0'}]},
                {'name':'折扣',content:[{id:5,name:'555',dis:'good',num:'0'},{id:6,name:'666',dis:'bad',num:'0'}]},
                {'name':'主食',content:[{id:7,name:'777',dis:'good',num:'0'},{id:8,name:'888',dis:'bad',num:'0'}]},
                {'name':'饮料',content:[{id:9,name:'999',dis:'good',num:'0'},{id:10,name:'101',dis:'bad',num:'0'},
                {id:11,name:'1111',dis:'good',num:'0'},{id:12,name:'1212',dis:'bad',num:'0'},
                {id:13,name:'1313',dis:'good',num:'0'},{id:14,name:'1414',dis:'bad',num:'0'},
                {id:15,name:'1515',dis:'good',num:'0'},{id:16,name:'1616',dis:'bad',num:'0'}]}
            ],
            listHeight:[],
            scrollY:0,
            clickEvent:false,
            goodsnum:'',
            allnum:0,
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
        
    },
    methods:{
        goShopcar(){
            this.$router.push('/shopcar');
        },
        addgoods(obj,index1,index2,event){          
            obj.num++;  
            this.allnum++;
            // 小球动画 
            var top = event.clientY-window.innerHeight/2.5,// 小球降落起点
                left = event.clientX,
                endTop = window.innerHeight-90,  // 小球降落终点
                endLeft = 100; 
            // 小球到达起点并去掉小球的display: none;
            var outer = $('#points .pointPre').first().removeClass("pointPre").css({
                left: left + 'px',
                top: top + 'px',
            });
            var inner = outer.find(".point-inner"); 
 
            setTimeout(function() { 
                // 将jquery对象转换为DOM对象
                outer[0].style.webkitTransform = 'translate3d(0,' + (endTop - top) + 'px,0)';
                inner[0].style.webkitTransform = 'translate3d(' + (endLeft - left) + 'px,0,0)';
                
                // 小球运动完毕恢复到原点
                setTimeout(function() {
                    outer.removeAttr("style").addClass("pointPre");
                    inner.removeAttr("style");
                }, 1000);  //这里的延迟值和小球的运动时间相关
            }, 0);         
        },
        reducegoods(obj,index1,index2){            
            obj.num--;
            this.allnum--;
            if(obj.num<0){
                obj.num=0;
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
    opacity: 0;
    right: -50vw;
    transition: all ease .5s;
}
.mov {
    right: 0;
    opacity: 1;
}
.isNum{
    opacity: 0;
}
.notNum{
    opacity: 1;
}
#goodsList .left{
    flex: 1;
    background: #eee;
    height: calc(67vh - 130px - 5vh);
}
#goodsList .shopcar{
    height: 5vh;
    width: 100vw;
    background-color: whitesmoke;
    position: absolute;
    bottom: 0;
    display: flex;
}
#goodsList .shopcar .iconcar{
    flex: 2;
    text-align: center;  
    display: flex;
    align-items: center;
    justify-content: center;  
}
#goodsList .shopcar .iconcar p{
    width: 20px;
    position: relative;
    left: -10px;
    top: -2vh;
    background: red;
    color: white;
    border-radius: 50px;
}
#goodsList .shopcar .iconcar i{
    font-size: 27px;
    border: 1px solid #1989fa;
    color: #1989fa;
}
#goodsList .shopcar .shopbtn{
    flex: 1;
    text-align: right
}
#goodsList .shopcar .shopbtn button{
    height: 5vh;
    line-height: 5vh;
    width: 100%;
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
    height: calc(67vh - 130px - 5vh);
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
#goodsList .goodmsg .msg p{
    width: 100%;
    text-align: center;
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
    text-align: center;
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
/* 运动小球 */
.pointPre {  /* 动画的小球 */
    display: none;
}
.pointOuter {
    position: absolute;  
    z-index: 114;  
    /* 当小球抛出时遵循贝塞尔曲线过渡 */
    -webkit-transition: all 1s cubic-bezier(0.39,-0.4,0.83,0.23) 0s;
    transition: all 1s cubic-bezier(0.39,-0.4,0.83,0.23) 0s; 
}

.point-inner {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #00a0dc;
    /* 过渡属性名称 过渡时间 过渡曲线 延迟时间 */
    transition: all 1s ease 0s;
    -webkit-transition: all 1s ease 0s;     
}  
</style>

