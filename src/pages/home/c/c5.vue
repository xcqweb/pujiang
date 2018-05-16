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
            <li v-for='item in outItemsCom' v-bind:style="{ marginLeft: marginLeft +'%'}">
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
    },
    computed: { 
    	outItemsCom(){
//  		this.outItems.forEach( (v,i) => {
//  			if(v._id==='missing'){this.outItems.splice(i,1)}
//  			if(v._id==='总计'){this.outItems.splice(i,1)}
//  		})
    		return this.outItems.splice(2)
    	}
    },
    watch:{
    	code:function(){
    	let data={};
		  data.code = this.code;
	    data.monthId = this.yearMonth;
	    this.getData(data)
    	}
    },
    methods: {
    	//请求数据
	  	getData(data){
	  		//api.params.code = this.code;
	  		api.touristOriginsource(data).then( (re) =>{
	  			
	  				let reData = re.data.data;
	  				if(!reData){
		  				this.inItems=[]
		  				this.outItems = []
		  				return 
		  			}
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
}
</script>

<style lang="less" scoped>
.c5{
    position:absolute;
    height:100%;
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
            height:36%;
            margin-top: 60%;
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
        top: 18%;
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
                /*display:inline-block;*/
                position:absolute;
                top:106%;
                left:-5%;
                font-size: 0.66rem;
            }
        }
    }
    ul:nth-of-type(2){
        position:absolute;
        left:5%;
        top:60%;
        width:100%;
        height:25%;
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