<template>
    <div class="c5">
        <div class="title">
            <div class="top">
                <span>省外城市</span>
                <!--<font>55%</font>-->
            </div>
            <div class="bottom">
                <span>省内城市</span>
                <!--<font>45%</font>-->
            </div>
        </div>
        <ul>
            <div class="line"></div>
            <li v-for='item in outItems' v-bind:style="{ marginLeft: marginLeft +'%'}">
                <span v-bind:style="{  bottom:18+item.percent +'%'}">{{item.percent}}%</span>
                <div v-bind:style="{  height: item.percent+10+'%'}"></div>
                <font>{{item._id}}</font>
            </li>
        </ul>
        <ul>
            <div class="line"></div>
            <li v-for='item in inItems' v-bind:style="{ marginLeft: marginLeft +'%'}">
                <span v-bind:style="{  bottom:18+item.percent +'%'}">{{item.percent}}%</span>
                <div v-bind:style="{  height: item.percent+10 +'%'}"></div>
                <font>{{item._id}}</font>
            </li>
        </ul>
        <Loading v-show="isloading"></Loading>
    </div>
</template>

<script>
import Vue from 'vue'
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name: 'c5',
    props:['inItemsProps',],
    mixins: [optionProps],
    data () {
    return {
        marginLeft:2,
        outItems:[],
        inItems:[],
    }
    },
    created(){
    	this.getData();
    },
    computed: { 
    },
    watch:{
    	code:function(){
    		this.getData();
    	}
    },
    methods: {
    	//请求数据
	  	getData(){
	  		api.params.code = this.code;
	  		api.touristOriginsource(api.params).then( (re) =>{
	  				let reData = re.data.data;
	  				//console.log(reData)
	  				this.inItems = reData.shengnei;
	  				this.outItems = reData.shengwai;
					if(re.status===200){
						this.isloading = false;
					}
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	},
    },
    mounted(){
    	
    },
    components:{
    	Loading
    }
}
</script>

<style lang="less" scoped>
.c5{
    position:absolute;
    height:90%;
    width:100%;
    
    .title{
        position:absolute;
        top:-2%;
        left:5%;
        width:8%;
        height:78%;
        color:#fff;
        font-size:.8rem;
        div{
            width:100%;
            height:50%;
        }
        .top{
            background-color:#6792fb;
            margin-top: 95%;
        }
        .bottom{
            background-color:#606bff;
        }
        span{
            margin-top:32%;
            display:inline-block;
            width:70%;
        }
        font{
            display:block;
            margin-top:20%;
            /*font-family: numberFont;*/
        }
    }
    ul{
        position:absolute;
        left:5%;
        width:100%;
        height:24%;
        top: 24%;
        .line{
            position:absolute;
            width:80%;
            height:1px;
            left:80/700*100%;
            bottom:0;
            background-color:#368df7;
        }
        li:nth-of-type(1){
            margin-left:70/700*100% !important;
        }
        li{
            float:left;
            height:100%;
            width:2.6rem;
            color:#fff;
            font-size:0.8rem;
            position:relative;
            span{
                display:inline-block;
                position:absolute;
                left:-2%;
                font-size: 0.66rem;
                /*font-family: numberFont;*/
            }
            div{
                background-color:#6792fb;
                position:absolute;
                bottom:0;
                width:20px;

            }
            font{
                display:inline-block;
                position:absolute;
                bottom:-36%;
                left:0%;
                font-size: 0.66rem;
            }
        }
    }
    ul:nth-of-type(2){
        position:absolute;
        left:5%;
        top:68%;
        width:100%;
        height:29%;
        .title{
            background-color:#606bff;
        }
        .line{
            background-color:#606bff;
        }
        li{
            div{
                background-color:#606bff;
            }
        }
        
    }
}
</style>