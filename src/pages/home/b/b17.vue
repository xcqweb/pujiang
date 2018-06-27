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
    .loading{
    	padding: 1.5rem 0 1rem 0;
    	margin-top: -1.5rem;
    }
    .d17_item{
        height: 43%;
        float: left;
        width: 21%;
        margin-left: 3.1%;
        margin-top: 3%;
        border-radius: 5px;
        cursor: pointer;
        &:hover{
			box-shadow: 0 0 5rem  rgba(1,1,13,0.3) inset !important;
	      }
        div{
            transform: translate(0,30%)
        }
        .item_img{
           width: 2.7rem;
           height: 2.7rem;
           margin: auto;
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
        &:nth-of-type(1){
        	box-shadow: 0 0 1rem #000;
            background: linear-gradient(75deg, #0084ec, #34caf7);
             .item_img{
	           background: url('../../../assets/images/chanye/1.png') no-repeat;
	           background-size: contain;
	        }
        }
        &:nth-of-type(2){
        	box-shadow: 0 0 1rem #000;
            background: linear-gradient(75deg, #2d4eca, #0f98ed);
            .item_img{
	           background: url('../../../assets/images/chanye/2.png') no-repeat;
	           background-size: contain;
	        }
        }
        &:nth-of-type(3){
        	box-shadow: 0 0 1rem #000;
            background: linear-gradient(75deg, #5947cf, #8d7bfe);
            .item_img{
	           background: url('../../../assets/images/chanye/3.png') no-repeat;
	           background-size: contain;
	        }
        }
        &:nth-of-type(4){
        	box-shadow: 0 0 1rem #000;
            background: linear-gradient(75deg, #ea446c, #ff7655);
            .item_img{
	           background: url('../../../assets/images/chanye/4.png') no-repeat;
	           background-size: contain;
	        }
        }
        &:nth-of-type(5){
        	box-shadow: 0 0 1rem #000;
            background: linear-gradient(75deg, #2bba75, #39e9d2);
            .item_img{
	           background: url('../../../assets/images/chanye/5.png') no-repeat;
	           background-size: contain;
	        }
        }
        
        &:nth-of-type(6){
        	box-shadow: 0 0 1rem #000;
            background: linear-gradient(75deg, #4751cf, #7ba0fe);
            .item_img{
	           background: url('../../../assets/images/chanye/6.png') no-repeat;
	           background-size: contain;
	        }
        } 
        &:nth-of-type(7){
        	box-shadow: 0 0 1rem #000;
            background: linear-gradient(75deg, #7447cf, #c87bfe);
            .item_img{
	           background: url('../../../assets/images/chanye/7.png') no-repeat;
	           background-size: contain;
	        }
        }
        &:nth-of-type(8){
        	box-shadow: 0 0 1rem #000;
            background: linear-gradient(75deg, #EB5F44, #FCA855);
            .item_img{
	           background: url('../../../assets/images/chanye/8.png') no-repeat;
	           background-size: contain;
	        }
        }
    }
}
</style>

<template>
    <div class="d17_box">
        <div 
        class="d17_item"
        v-for="item in items"
        title="点击查看详情"
        @click="showDetials(item)"
        >
            <div class="item_img"></div>
            <div class="item_name"><font>{{item.name}}</font></div>
            <div class="item_num"><font>{{item.value}}</font></div>
        </div>
        <Loading v-show="isloading" class='loading'></Loading>
        <detials v-show = 'status' @closeToast='closeToast' :currentItem='currentItem'></detials>
    </div>
</template>

<script>
import Vue from 'vue'
import detials from '@/components/commonui/detials/detials'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name: 'B17',
    mixins: [optionProps],
    data () {
        return {
        	status:false,
        	currentItem:'景点',
            items:[
                {name:'景点',value:42},
                {name:'酒店',value:114},
                {name:'农家乐',value:107},
                {name:'餐饮',value:343},
                {name:'购物点',value:242},
                {name:'休闲娱乐',value:198},
                {name:'旅行社',value:14},
                {name:'公共设施',value:120},
            ],
        }
    },
    created(){
    
    },
    methods: {
        //请求数据
	  	getData(){
	  		api.params.code = this.code; 
	  		api.getProductData(api.params).then( (re) =>{
	    		let reData = re.data.data;
	    		
	    		reData.forEach( (item,index) => {
	    			this.items[index].value = item.num;
	    		})
	    		
	    		if(re.status===200){
	    			this.isloading=false;
	    		}
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	},
	  	showDetials(data){
	  		this.status = true
	  		this.currentItem = data.name
	  	},
	  	closeToast(){
	  		this.status = false
	  	}
    },
    components:{
    	detials
    }
}
</script>

