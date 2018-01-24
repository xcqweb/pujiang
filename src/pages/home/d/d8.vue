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
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
	name: 'd8',
	mixins: [optionProps],
    data () {
    return {
    	allData:{},
    	percent:0,
    	isloading:false,
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
    		switch(num){
    			case 1:return '畅通';
    			break;
    			case 2:return '良好';
    			break;
    			case 3:return '拥堵';
    			break;
    			case 4:return '较拥堵';
    			break;
    			case 5:return "严重拥堵"
    			break;
    		}
    	}
    },
    methods: {
    getwidth(){

    }
    },
    created(){
    	this.isloading = true;
    	this.getData();
    },
    methods:{
    	//请求数据
	  	getData(){
	  		api.scenicCongestion(api.params).then( (re) =>{
	    		let reData = re.data.data;
	    		this.allData = reData;
	    		this.percent = this.allData[this.place].num;
				if(re.status===200){
					this.isloading = false;
				}
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	}
    },
    mounted(){
    },
    components:{
    vcircle,
    Loading
    }
}
</script>

