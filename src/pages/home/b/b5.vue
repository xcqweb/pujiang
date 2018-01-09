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
export default {
  name: 'b5',
  data () {
    return {
    	isloading:false,
    	percents:0
    }
  },
  created(){
	this.isloading = true;
  },
  computed:{

  },
  methods: {
  	//请求数据
  	getData(){
  		api.congestion(api.params).then( (re) =>{
    		let reData = re;
			this.percents = reData.data.num;
			this.isloading = false;
			
			//console.log(re.data)
	    }).catch( (e) => {
	    	console.log(e);
	    })
  	}
  },
  mounted(){
    this.getData();
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

