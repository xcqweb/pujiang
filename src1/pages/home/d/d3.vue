<style lang="less">
.d3{
    width:100%;
    height:100%;
    position:relative;
    h1{
        position:absolute;
        width:10rem;
        top:1.3rem;
        left:5%;
        text-align:left;
        font-size: 1.1rem;
        color:white;
    }
    img{                  
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
    ul{
        li{
            display:inline-block;
            float:left;
            width:12%;
            height:auto;
            margin-left:1%;
            text-align: center;

        }
    }
    .title-star{
         position:absolute;
         top:3rem;
         left:5%;
    }

    .linebox{
        position:relative;
        margin-top:5%;
        margin-left: 5%;
        width:90%;
        height:13%;
        .title{
            position:absolute;
            top:0;
            left:0;
            color:white;
        }
        .imgleft{
            position:absolute;
            bottom:12px;
            height:auto;
            width:10%;
            span{
                position:absolute;
                top:50%;
                left:50%;
                transform: translate(-50% ,-95%);
                font-size:.8rem;
            }
        }
        .imgright{
            position:absolute;
            bottom:12px;
            height:auto;
            width:10%;
            span{
                position:absolute;
                top:50%;
                left:50%;
                transform: translate(-50% ,-95%);
                font-size:.8rem;
            }
        }
        .titleleft{
            position:absolute;
            left: 1rem;
            bottom:15px;
            width: 3rem;
            height: 1rem;
        }
        .titleright{
            position:absolute;
            right: 1rem;
            bottom:15px;
            width: 3rem;
            height: 1rem;
        }
        .line{
            position:absolute;
            bottom: 0;
            width: 100%;
            height: 10px;
            .lineleft{
                position:absolute;
                left: 0;
                width: 55%;
                height: 100%;
                border-radius: 5px 0 0 5px;
            }
            .lineright{
                position:absolute;
                right: 0;
                width: 55%;
                height: 100%;
                border-radius:  0 5px 5px 0;
            }
        }
    }
    .progress{
        margin-top:16%;
    }
    .msg{
        position:relative;
        margin-top:5%;
        margin-left: 5%;
        width:90%;
        color:white;
        .title{
            display:block;
            margin-left:0;
            text-align:left;
        }
        .comment{
            text-align:left;
            margin-top:5px;
            .name{

            }
            .place{
                margin-left:20px;
            }
            .comment-star{
                display:inline-block;
                width:30%;
                transform: translateY(10%);
            }
            .text{
                display:block;
                margin-top:5px;
                line-height:1.3rem;
            }
        }
    }
}
</style>

<template>
    <div class="d3">
        <h1>{{place}}</h1>
        <vstar 
        class='title-star'
        :star='topStar.numb' 
        :style="{width:topStar.width}">
        </vstar>
        <vline :progressbar='oneprogressbar' class='progress'></vline>
        <vline :progressbar='twoprogressbar'></vline>
        <vline :progressbar='threeprogressbar'></vline>
        <div class="msg">
            <span class="title">评论</span>
            <div class="comment">
                <span class="name">{{commentProp.name}}</span>
                <span class="place">来自：{{commentProp.palce}}</span>
                <vstar 
                class='comment-star'
                :star='topStar.numb'>
                </vstar>
                <span class="text">
                    {{commentProp.context}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'd3',
    props:['commentProp', 'place'],
    data () {
        return {
            topStar:{
                numb:5,
                width:'30%',
            },
            comment:{
                place:'常州',
                text:''
            },
            oneprogressbar:{
                title:'满意度',
                leftimg:require('../../../assets/images/home/d/compoment.png'),
                rightimg:null,
                leftProcess:90,
                rightProcess:10,
                leftColor:'#6dffeb',
                rightColor:'#4299b9',
                leftTitle:'',
                rightTitle:'',
 
            },
            twoprogressbar:{
                title:'男女比例',
                leftimg:require('../../../assets/images/home/d/men.png'),
                rightimg:require('../../../assets/images/home/d/women.png'),
                leftProcess:55,
                rightProcess:45,
                leftColor:'#7798ff',
                rightColor:'#ff77dd',
                leftTitle:'男',
                rightTitle:'女',
            },
            threeprogressbar:{
                title:'出行方式',
                leftimg:require('../../../assets/images/home/d/driver.png'),
                rightimg:require('../../../assets/images/home/d/team.png'),
                leftProcess:55,
                rightProcess:45,
                leftColor:'#ffdd6c',
                rightColor:'#ff719c',
                leftTitle:'自驾游',
                rightTitle:'团队游',
            },
            
            
            
        }
    },
    components:{
    },
    computed: { 

    },
    methods: {

    },
    mounted(){
    },
}
Vue.component('vstar',{
        props:['star'],
        data(){
            return{
                 imgStar:require('../../../assets/images/home/d/star.png'),
            }
        },
        template:`<ul><li v-for='item in arr'><img :src="imgStar"/></li></ul>`,
        computed: { 
            arr:function(){
                let arrstar=[]
                for (var i = 0; i < this.star; i++) {
                    arrstar.push(i)
                }
                return arrstar
            }
        },
        methods:{
            chosen:function(){
            },
                
        },
    }
)
Vue.component('vline',{
        props:['progressbar'],
        data(){
            return{
                 imgStar:require('../../../assets/images/home/d/star.png'),
            }
        },
        template:`
        <div class='linebox'>
            <span class='title'>{{progressbar.title}}</span>
            <div class='imgleft' 
                :style="{left:progressbar.leftProcess-20+'%'}">
                <span>{{progressbar.leftProcess}}%</span>
                <img :src="progressbar.leftimg"/></div>
            <div class='imgright' 
                :style="{right:progressbar.rightProcess-20+'%'}">
                <span v-show='progressbar.rightimg'>{{progressbar.rightProcess}}%</span>
                <img :src="progressbar.rightimg"/></div>
            <font class='titleleft' :style="{color:progressbar.leftColor}">{{progressbar.leftTitle}}</font>
            <font class='titleright' :style="{color:progressbar.rightColor}">{{progressbar.rightTitle}}</font>
            <div class='line'>
                <div class='lineleft' :style="{width:progressbar.leftProcess+'%',backgroundColor:progressbar.leftColor}"></div>
                <div class='lineright' :style="{width:progressbar.rightProcess+'%',backgroundColor:progressbar.rightColor}"></div>
            </div>
        </div>`,
        computed: { 
            arr:function(){
                let arrstar=[]
                for (var i = 0; i < this.star; i++) {
                    arrstar.push(i)
                }
                return arrstar
            }
        },
        methods:{
            chosen:function(){
            },
                
        },
    }
)
</script>

