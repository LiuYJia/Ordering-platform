<template>
    
    <!-- <transition name="van-slide-right"> -->
        
        <div id="shopcar">
            <van-nav-bar
            title="订单"
            left-text="返回"
            left-arrow
            @click-left="onClick"
            />

            <van-checkbox-group class="card-goods" v-model="checkedGoods">
                <van-checkbox
                    class="card-goods__item"
                    v-for="item in goods"
                    :key="item.id"
                    :name="item.id"
                >
                    <van-card
                    :title="item.title"
                    :desc="item.desc"
                    :num="item.num"
                    :price="formatPrice(item.price)"
                    :thumb="item.thumb"
                    />
                </van-checkbox>
            </van-checkbox-group>
            
            <van-submit-bar
                :price="totalPrice"
                :disabled="!checkedGoods.length"
                :button-text="submitBarText"
                @submit="onSubmit"
            />
            
            

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
            checkedGoods: ['1', '2', '3'],
            goods: [{
                id: '1',
                title: '进口香蕉',
                desc: '约250g，2根',
                price: 200,
                num: 1,
                thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
            }, {
                id: '2',
                title: '陕西蜜梨',
                desc: '约600g',
                price: 690,
                num: 1,
                thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
            }, {
                id: '3',
                title: '美国伽力果',
                desc: '约680g/3个',
                price: 2680,
                num: 1,
                thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
            }]
        }
    },
    created(){

    },
    computed: {
        submitBarText() {
        const count = this.checkedGoods.length;
            return '结算' + (count ? `(${count})` : '');
        },
        totalPrice() {
            return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
        }
    },
    methods:{
        formatPrice(price) {
            return (price / 100).toFixed(2);
        },
        onSubmit() {
            // Toast('点击结算');
            console.log(111);
        },
        onClick(){
            console.log(1);
            this.$router.push('/mainpage')
        }
    }
}
</script>
<style>
#shopcar{
    height: 100vh;
    width: 100vw;
}
#shopcar .card-goods{
  padding: 10px 20px;
}
#shopcar .card-goods__item{
    display: flex;
    height: 15vh;
    align-items: center;
    border-bottom: 1px solid rgb(218, 216, 216);
}
#shopcar .van-checkbox__icon{
    flex: 1;
    align-items: center;
    height: 100%;
    width: 100%;
    display: flex;
}
#shopcar .van-checkbox__label{
    flex: 15;
    align-items: center;
}
#shopcar .van-submit-bar{
    bottom: 8vh;
}
</style>


