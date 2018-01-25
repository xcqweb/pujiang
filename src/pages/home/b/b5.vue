<template>
	<div class="b5">
        <div class="box">
            <vcircle :percents="percents" class='item'></vcircle>
        </div>
    	<Loading class='loading' v-show="isloading"></Loading>
	</div>
</template>

<script>
import Vue from 'vue'
import vcircle from './vcircle.vue'
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
  name: 'b5',
  mixins: [optionProps],
  data () {
    return {
    	percents:0
    }
  },
  created(){
	this.getData();
  },
  computed:{

  },
  methods: {
  	//请求数据
  	getData(){
  		api.congestion(api.params).then( (re) =>{
    		let reData = re.data;
			this.percents = reData.data.num;		
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

<style lang="less" scoped>
.b5{
    height: 100%;
    width: 100%;
    position: relative;  
}
.box{
        position: absolute;
        width: 132/223*100%;
        height: 132/223*100%;
        top: 69/260*100%;
        left: 45/226*100%;
    }
.loading{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0%;
	left: 0%;
}
</style>

