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
        height: 43%;
        float: left;
        width: 21%;
        margin-left: 3.1%;
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
        /*&:nth-child(1) {
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
        }*/
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
            background: linear-gradient(75deg, #4751cf, #7ba0fe);
        } 
        &:nth-of-type(7){
            background: linear-gradient(75deg, #7447cf, #c87bfe);
        }
        &:nth-of-type(8){
            background: linear-gradient(75deg, #EB5F44, #FCA855);
        }
        /*&:nth-of-type(9){
            background: linear-gradient(75deg, #ea5f44, #ffa955);
        }*/
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
        <Loading v-show="isloading"></Loading>
    </div>
</template>

<script>
import Vue from 'vue'
import optionProps from '@/common/js/mixin/optionProps.js'
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
export default {
    name: 'B17',
    mixins: [optionProps],
    data () {
        return {
            items:[
                {name:'景点',value:42,img:require('../../../assets/images/chanye/1.png')},
                {name:'酒店',value:114,img:require('../../../assets/images/chanye/2.png')},
                {name:'农家乐',value:107,img:require('../../../assets/images/chanye/3.png')},
                {name:'餐饮',value:343,img:require('../../../assets/images/chanye/4.png')},
                {name:'购物点',value:242,img:require('../../../assets/images/chanye/5.png')},
                {name:'休闲娱乐',value:198,img:require('../../../assets/images/chanye/6.png')},
                {name:'旅行社',value:14,img:require('../../../assets/images/chanye/7.png')},
                {name:'公共设施',value:120,img:require('../../../assets/images/chanye/8.png')},
            ],
        }
    },
    components:{

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
    },
    created(){
    	this.getData();
    },
    mounted(){
    
    },
    components:{
    	Loading
    }
}
</script>

