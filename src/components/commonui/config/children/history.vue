<template>
	<div id="history">
		<ul class="title">
			<li>序号</li>
			<li>预警时间</li>
			<li>景区名称</li>
			<li>预警人数</li>
		</ul>
		<ul class="content" v-for="(data,i) in transformHisArr" :class="{'bc1':i%2===0,'bc2':i%2===1}" :key="i">
			<li>{{i+1}}</li>
			<li>{{data.warnDate}}</li>
			<li>{{data.name}}</li>
			<li>{{data.warnSet}}</li>
		</ul>
	</div>
</template>

<script>
	import api from '@/api/index.js'
	import optionProps from '@/common/js/mixin/optionProps.js'
	
	export default {
		mixins: [optionProps],
		data(){
			return {
				hisArr:[]
			}
		},
		props:['scienceProp'],
		computed:{
			transformHisArr(){
				let arr=this.hisArr
				arr.forEach( (item,index) => {
					arr[index].warnDate = item.warnDate.substring(0,4)+'/'+item.warnDate.substring(4,6)+"/"+item.warnDate.substring(6,8)+" "+item.warnDate.substring(8,10)+':'+item.warnDate.substring(10,12)+':'+item.warnDate.substring(12,14)
				})
				return arr;
			}
		},
		watch:{
			code:function(){
				this.getData();
			}
		},
		methods:{
			getData(){
				api.params.code= this.code;
				api.getPassengerWarnHistory(api.params).then( (re) => {
					//console.log(re)
					let reData = re.data.data;
					this.hisArr = reData;
				}).catch( e =>{
				      console.log(e);
				    })
			}
		},
		created(){
			this.getData();
		}
	}
</script>

<style scoped="scoped" lang="less">
	#history{
		width: 100%;
		height: 90%;
		background: linear-gradient(#1E3382 50%,#264095 50%);
		background-size:  20%;
		overflow-y: scroll;
		.title,.content{
			color: #fff;
			width: 100%;
			height: 10%;
			display:flex;
			background-color: #1E3382;
			align-items:center;
			li{
				flex: 1;
				position: relative;
				font-size: 0.9rem;
			}
		}
		.bc1{
			background-color: #264095;
		}
		.bc2{
			background-color: #1E3382 ;
		}
	}
	
		#history::-webkit-scrollbar{
		    width: 0.45rem;
		    height: 5rem;
		}
		/*定义滚动条的轨道，内阴影及圆角*/
		#history::-webkit-scrollbar-track{
		    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		    border-radius: 10px;
		}
		/*定义滑块，内阴影及圆角*/
		#history::-webkit-scrollbar-thumb{
		    width: 10px;
		    height: 10rem;
		    border-radius: 10px;
		    -webkit-box-shadow: inset 0 0 6px #02275A;
		    background-color: #0F2059;
		}	
		/*ie*/
		#history{
			scrollbar-face-color: #0F2059;
			scrollbar-highlight-color: ;
			scrollbar-shadow-color: #02275A;
			scrollbar-track-color: #263984;
		}
		#history::scrollbar{
		    width: 0.45rem;
		    height: 5rem;
		}
		/*定义滚动条的轨道，内阴影及圆角*/
		#history::scrollbar-track{
		    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		    border-radius: 10px;
		}
		/*定义滑块，内阴影及圆角*/
		#history::scrollbar-thumb{
		    width: 10px;
		    height: 10rem;
		    border-radius: 10px;
		    -webkit-box-shadow: inset 0 0 6px #02275A;
		    background-color: #0F2059;
		}	
</style>