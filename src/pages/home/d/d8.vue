<style lang="less" scoped>
.d8{
    height: 100%;
    width: 100%;
    position: relative;
    .box{
        position: absolute;
        width: 80/223*100%;
        height: 132/223*100%;
        top: 69/260*100%;
        left: 25/226*100%;
        
    }
    span{
        position: absolute;
        top: 50%;
        right:1%;
        display: inline-block;
        width: 50%;
        height: 10%;
        font-size: 2rem;
        color: #c7c8f9;
        
    }
    .loading{
    	position: absolute;
		width: 100%;
		height: 100%;
		top: 0%;
		left: 0%;
    }

}
</style>
<template>
    <div class="d8">
    	<div>
	        <div class="box">
	            <vcircle :percents="percent" class='item'></vcircle>     
	        </div>
	        <span>{{txt}}</span>
	    </div>
	    <Loading v-show="isloading" class="loading"></Loading>
	</div>
</template>

<script>
import Vue from 'vue'
import vcircle from '../b/vcircle.vue'
import optionProps from '@/common/js/mixin/optionProps.js'
import vAjax from '@/common/js/v-ajax.js'
Vue.use(vAjax);
export default {
	name: 'd8',
	mixins: [optionProps],
    data () {
    return {
    	allData:{},
    	percent:0,
        text:'一般'
    }
    },
    props:['place'],
    watch: { 
    	place:function(){
    		this.percent = this.allData[this.place].num;
    	}
    },
    computed:{
    	txt(){
    		let num = this.percent;
    			if(num<=1)return '畅通';
    			if(num>1&&num<=2)return '良好';
    			if(num>2&&num<=3)return '拥堵';
    			if(num>3&&num<=4)return '较拥堵';
    			if(num>4&&num<=5)return "严重拥堵";
    	}
    },
    methods: {
    	
    },
    created(){
    },
    methods:{
    	//请求数据
	  	getData(){
    		 var _self= this
                this.$ajax({
                    type:'GET',
                    url:'http://jiaotong.baidu.com/trafficindex/city/details',
                    dataType:'jsonp',
                    jsonp:'jsonpcallback',
                    data:{
                      cityCode : 197,
                    },
                    success:function(res){
                    	//console.log(res)
                      	let num = Number(res.data.detail.index) 
                          _self.percent=num;
                      if(res.status===0){
							_self.isloading = false;
						}
		           },
                    error:function(err){
                      console.log(err);
                    }
                })
    	}
    },
    mounted(){
    },
    components:{
    	vcircle,
    }
}
</script>

