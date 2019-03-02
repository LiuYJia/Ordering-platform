
<template>

    <div id="headerMsg">
        <div class="center">
            <div class="imgDiv">
                <img src="../assets/images/gouwei.jpg" alt="logo">
            </div>
            
            <div class="shopdetail">
                <p><svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bingqilindianpu"></use>
                </svg>&nbsp;{{msg.shopName}}</p>
                <p>{{msg.postTypeAndtime}}</p>
                <p><svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-youhuiquan"></use>
                </svg>&nbsp;{{msg.discount}}</p>
            </div>
        </div>
        <van-notice-bar
                :text=notice
                left-icon="volume-o"
                color="#f60"
                background=""
            />
    </div>
  
</template>

<script>
import { Dialog } from 'vant'
import headerData from '../assets/api/mainpage'
import axios from 'axios'
export default {
    name:'headermsg',
    data(){
        return{
            username:'',
            password:'',
            msg:'',
            notice:'111'
        }
    },
    created(){
        axios.get('static/data.json').then((res) => {            
            this.notice = res.data.resultJson.notice
            this.msg = res.data.resultJson
        })
    },
    
    methods:{
        
    }
}
</script>

<style>
#headerMsg{
  height: 25vh;
  width: 100vw;
  border: 1px solid gray;
  background-image: url('../assets/images/gouwei.jpg');
  background-size: 100vw 25vh;
  box-sizing:border-box;
  z-index: 1;
  position: relative;
}
#headerMsg:after{
    content: "";
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background: inherit;
    filter: blur(5px);
    z-index: 2;
}
#headerMsg .imgDiv{
    flex: 1;
    display: flex;
    height: 80%;
    align-items: center;
    justify-content:center;
}
#headerMsg .imgDiv img{
    height: 100%;
    width: 100%;
    border: 1px solid gray;    
}
#headerMsg .van-notice-bar{
    margin-top: 25vh;
}
#headerMsg .center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 20vh;
    width: 90vw;
    z-index: 11;  
    display: flex;
    align-items: center;
}
#headerMsg .shopdetail{
    flex: 2;
    display: flex;
    height: 80%;
    align-items: center;
    flex-wrap:wrap;
}
#headerMsg .shopdetail p{
    width:100%;
    text-align: center;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
}
#headerMsg .shopdetail svg{
    height: 25px;
    width: 25px;
}
</style>

