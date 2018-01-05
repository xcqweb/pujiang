<template>
    <div class="c4">
        <ul>
            <li v-for='item in men'>
                <img :src="item.img">
            </li>
            <font>{{menPercent}}</font>
        </ul>
        <ul>
            <li v-for='item in women'>
                <img :src="item.img">
            </li>
            <font>{{womenPercent}}</font>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'
let men = require('../../../assets/images/home/men.png')
let menE= require('../../../assets/images/home/menE.png')
let women= require('../../../assets/images/home/women.png')
let womenE= require('../../../assets/images/home/womenE.png')
export default {
  name: 'c4',
  data () {
    
    return {
        womenPercent:'40%',
        menPercent:'60%',
        men:[
            {img:menE},
            {img:menE},
            {img:menE},
            {img:menE},
            {img:menE},
            {img:menE},
            {img:menE},
            {img:men},
            {img:men},
            {img:men},
            {img:men},
        ],
        women:[
            {img:womenE},
            {img:womenE},
            {img:womenE},
            {img:womenE},
            {img:womenE},
            {img:womenE},
            {img:womenE},
            {img:women},
            {img:women},
            {img:women},
            {img:women},
        ]
    }
  },
  computed: { 
  },
  methods: {
  },
    mounted(){
    },
  components:{
  }
}
</script>

<style lang="less" scoped>
.c4{
    position:absolute;
    height:90%;
    width:100%;
    top:26%;
    img{                  
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
    ul{
        width:100%;
        height:50%;
        position:relative;
        li{
            float:left;
            height: auto;
            width: 16/300*100%;
            text-align: center;
            transform: translateY(10%);
            margin-right:3px;

        }
        li:nth-of-type(1){
            margin-left:10%;
            width: 21/300*100%;
            transform: translateY(-10%);
            margin-right:10px;
        }
        font{
            display:inline-block;
            position:absolute;
            
        }
    }
    ul:nth-of-type(1){
        height:40%;
        font{
            color:#49d9fe;
            right: 7%;
            top: 35%;
        }
    }
    ul:nth-of-type(2){
        font{
            color:#ff71bb;
            right: 7%;
            top: 25%;
        }
    }
}
</style>