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
.d8v{
    height: 100%;
    width: 100%;
    .box{
        width: 6.25rem;
        height: 6.6rem;
        top: 2.4rem;
        left: 4rem;
        .item{
        	top: 1.8rem;
        	left: 4rem;
        	position: absolute;
        }
        
    }
    span{
        position: absolute;
        left: 4.5rem;
        width: 6.6rem;
        top: 1.2rem;
        text-align: center;
        display: inline-block;
        line-height: 6.6rem;
        font-size: 1rem;
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

.d8vie{
    height: 100%;
    width: 100%;
    .box{
        width: 6.25rem;
        height: 6.6rem;
        top: 1.4rem;
        left: 4rem;
        .item{
        	top: 1.8rem;
        	left: 4rem;
        	position: absolute;
        }
        
    }
    span{
        position: absolute;
        left: 4.5rem;
        top: 4.8rem;
        text-align: center;
        display: inline-block;
        width: 6.25rem;
        /*height: 6.6rem;*/
        /*line-height: 6.6rem;*/
        font-size: 1rem;
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
    <div :class="comStyle">
        <div class="box">
            <vcircle :percents="percent" class='item' :class='isVideo' :isVideo='isVideo' :colorCom='colorCom'></vcircle>     
        </div>
        <span :style="{color:colorCom}">{{txt}}</span>
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
    	percent:0,
        text:'一般'
    }
    },
    props:['place','isVideo'],
    watch: { 
    },
    computed:{
    	txt(){
    		let num = this.percent;
    			if(num<=1)return '畅通';
    			if(num>1&&num<=2)return '良好';
    			if(num>2&&num<=3)return '较拥堵';
    			if(num>3&&num<=4)return '拥堵';
    			if(num>4&&num<=5)return "严重拥堵";
    	},
    	colorCom(){
    		let num = this.percent;
    			if(num<=1)return '#00FFA2';
    			if(num>1&&num<=2)return '#17FF00';
    			if(num>2&&num<=3)return '#F2FF00';
    			if(num>3&&num<=4)return '#FFA200';
    			if(num>4&&num<=5)return "#FF0000";
    	},
    	comStyle(){
    		let isIE = window.navigator.userAgent.indexOf('Trident')
       		if(isIE>-1&&this.isVideo){
	    		return 'd8vie'
       		}
   			if(this.isVideo){
    			return 'd8v'
    		}else{
    			return 'd8'
    		}
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
                    	if(!res){
                    		return
                    	}
                      	let num = Number(res.data.detail.index)||0
                            _self.percent=num.toFixed(2);
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

