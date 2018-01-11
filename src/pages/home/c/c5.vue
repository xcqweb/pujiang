<template>
    <div class="c5">
        <div class="title">
            <div class="top">
                <span>省外城市</span>
                <font>55%</font>
            </div>
            <div class="bottom">
                <span>省内城市</span>
                <font>45%</font>
            </div>
        </div>
        <ul>
            <div class="line"></div>
            <li v-for='item in outItems' v-bind:style="{ marginLeft: marginLeft +'%'}">
                <span v-bind:style="{  bottom:10+item.outProvince +'%'}">{{item.outProvince}}%</span>
                <div v-bind:style="{  height: item.outProvince +'%'}"></div>
                <font>{{item.name}}</font>
            </li>
        </ul>
        <ul>
            <div class="line"></div>
            <li v-for='item in inItems' v-bind:style="{ marginLeft: marginLeft +'%'}">
                <span v-bind:style="{  bottom:10+item.outProvince +'%'}">{{item.outProvince}}%</span>
                <div v-bind:style="{  height: item.outProvince +'%'}"></div>
                <font>{{item.name}}</font>
            </li>
        </ul>
        <Loading v-show="isloading"></Loading>
    </div>
</template>

<script>
import Vue from 'vue'
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
export default {
    name: 'c5',
    props:['inItemsProps',],
    data () {
    return {
    	isloading:false,
        marginLeft:3,
        outItems:[],
        inItems:this.inItemsProps,
    }
    },
    created(){
    	this.isloading = true;
    },
    computed: { 
    },
    methods: {
    	//请求数据
	  	getData(){
	  		api.touristOriginsource(api.params).then( (re) =>{
	  				let reData = re.data;
	  				//console.log(reData);
	  				this.outItems = reData.outItem;
	  				this.inItems = reData.inItem;
					if(re.status===200){
						this.isloading = false;
					}
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	},
    },
    mounted(){
    	this.getData();
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
            margin-top:20%;
            display:inline-block;
            width:70%;
        }
        font{
            display:block;
            margin-top:20%;
        }
    }
    ul{
        position:absolute;
        left:5%;
        width:90%;
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
            margin-left:80/700*100% !important;
        }
        li{
            float:left;
            height:100%;
            width:3rem;
            color:#fff;
            font-size:0.8rem;
            position:relative;
            span{
                display:inline-block;
                position:absolute;
                left:10%;
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
            }
        }
    }
    ul:nth-of-type(2){
        position:absolute;
        left:5%;
        top:68%;
        width:90%;
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