<style lang="less" scoped>
.d17_box{
    width: 100%;
    height: 90%;
    margin-top: 3%;
    img{                  
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
    /*// font{
    //     box-shadow: inset 0 0 126rem rgba(0,28 ,201 ,0.06);
    // }*/
    .d17_item{
        height: 45%;
        float: left;
        width: 17%;
        margin-left: 2.8%;
        margin-top: 3%;
        border-radius: 5px;
        div{
            transform: translate(0,30%)
        }
        .item_img{
            height: 30%;
        }
        .item_name{
            height: 20%;
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-size: 1.1rem;
            text-shadow: 2px 2px 3px #252121;
        }
        .item_num{
            height: 30%;
            display:flex;
            align-items:center;
            justify-content:center;
            font{
                color: aliceblue;
                font-family:numberFont;
                font-size: 2.7rem;
                text-shadow: 2px 3px 3px #252121;
            }
        }
        &:nth-child(1) {
            width: 36.8%;
            div{
                width:49%;
            }
            .item_img{
                height: 75%;
                 transform: translate(0,0%);
            }
            .item_name{
                height: 30%;
                transform: translate(0,-20%);
                font-size: 1.5rem;
            }
            .item_num{
                float: right;
                height: 100%;
                transform: translate(0,-100%);
                font{
                     font-size: 4.8rem;
                }
            }
        }
        &:nth-of-type(1){
            background: linear-gradient(75deg, #0084ec, #34caf7);
        }
        &:nth-of-type(2){
            background: linear-gradient(75deg, #2d4eca, #0f98ed);
        }
        &:nth-of-type(3){
            background: linear-gradient(75deg, #5947cf, #8d7bfe);
        }
        &:nth-of-type(4){
            background: linear-gradient(75deg, #ea446c, #ff7655);
        }
        &:nth-of-type(5){
            background: linear-gradient(75deg, #2bba75, #39e9d2);
        }
        &:nth-of-type(6){
            background: linear-gradient(75deg, #2994bc, #39e9b1);
        }
        &:nth-of-type(7){
            background: linear-gradient(75deg, #4751cf, #7ba0fe);
        } 
        &:nth-of-type(8){
            background: linear-gradient(75deg, #7447cf, #c87bfe);
        }
        &:nth-of-type(9){
            background: linear-gradient(75deg, #ea5f44, #ffa955);
        }
    }
}
</style>

<template>
    <div class="d17_box">
        <div 
        class="d17_item"
        v-for="item in items"
        >
            <div class="item_img">
                <img :src="item.img"/>
            </div>
            <div class="item_name"><font>{{item.name}}</font></div>
            <div class="item_num"><font>{{item.value}}</font></div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name: 'B17',
    mixins: [optionProps],
    data () {
        return {
            items:[
                {name:'景点',value:39,img:require('../../../assets/images/chanye/1.png')},
                {name:'酒店',value:374,img:require('../../../assets/images/chanye/2.png')},
                {name:'农家乐',value:752,img:require('../../../assets/images/chanye/3.png')},
                {name:'餐饮',value:926,img:require('../../../assets/images/chanye/4.png')},
                {name:'购物点',value:94,img:require('../../../assets/images/chanye/5.png')},
                {name:'休闲娱乐',value:553,img:require('../../../assets/images/chanye/6.png')},
                {name:'旅行社',value:72,img:require('../../../assets/images/chanye/7.png')},
                {name:'公共设施',value:1384,img:require('../../../assets/images/chanye/8.png')},
                {name:'厕所',value:297,img:require('../../../assets/images/chanye/9.png')},
            ],
        }
    },
    components:{

    },
    computed: { 

    },
    methods: {
        watchTouristFn(val){
            console.log(val)
        }
    },
    mounted(){
    
    },
}
</script>

