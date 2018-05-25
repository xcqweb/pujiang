
<!--游客满意度-->
<template>
  <div class="content">
    <div class="num">{{value}}%</div>
    <ul class="bar">
    	<li v-for="i in bgCom" :class="i.bg"></li>
    </ul>
    <Loading v-show="isloading"></Loading>
  </div>
</template>

<script>
import Rw from '@/common/js/until/index.js'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
  name: 'a4',
  mixins: [optionProps],
  data () {
    return {
        value:'',
        people:'',
        items:[],
    }
  },
  computed: {
    nub:function(){
    	//加上标点
      return Rw.string_until.addPoint(this.people)
    },
    bgCom(){
    	for(var	 i=0; i<20; i++){
    		let n = this.value/10
    		if(i<2*n){
    			this.items[i] = {bg:'active'}
    		}else{
    			this.items[i] = {bg:'gray'}
    		}
    	}
    	return this.items
    }
  },
  created(){
  },
  methods: {
  	//请求数据
  	getData(){
  		api.touristSatisfaction(api.params).then( (re) =>{
    		let reData = re.data.data;
				if(re.status===200){
					this.isloading = false;
				}
					this.value = reData.value;
					this.people = reData.nub;
	    }).catch( (e) => {
	    	console.log(e);
	    })
  	}
  },
  mounted(){
   }
}
</script>

<style lang="less" scoped>
	.content{
		width: 100%;
		height: 100%;
		.num{
			width: 100%;
			font-size: 2.3rem;
			color: #00E5FF;
			text-align: left;
			margin-top: 12%;
			margin-left: 5%;
		}
		.bar{
			width: 100%;
			margin-left:5%;
			margin-top: 5%;
			li{
				width: 2.4%;
				height: 2.3rem;
				border-radius: 2px;
				color:#fff;
				float: left;
				margin-left: 2%;
			}
			.active{
				background-color: #00E5FF;
			}
			.gray{
				background-color: #7B7B7B;
			}
		}
	}
</style>
