<template>
	<div id="history">
		<ul class="title">
			<li>序号</li>
			<li>预警时间</li>
			<li>景区名称</li>
			<li>预警人数</li>
		</ul>
		<ul class="content" v-for="(data,i) in hisArr" :class="{'bc1':i%2===0,'bc2':i%2===1}" :key="i">
			<li>{{i+1}}</li>
			<li>{{data.editTime}}</li>
			<li>{{data.name}}</li>
			<li>{{data.configNum}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				hisArr:[]
			}
		},
		props:['historyList'],
		computed:{
		},
		created(){
			this.hisArr =JSON.parse(window.localStorage.getItem('historyList')) || this.$store.state.historyList; 
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
		    height: 15rem;
		    border-radius: 10px;
		    -webkit-box-shadow: inset 0 0 6px #02275A;
		    background-color: #0F2059;
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
		    height: 15rem;
		    border-radius: 10px;
		    -webkit-box-shadow: inset 0 0 6px #02275A;
		    background-color: #0F2059;
		}	
</style>