<template>
	<div id="history">
		<ul class="title">
			<li>序号</li>
			<li>景区名称</li>
			<li>游客承载量</li>
			<li>预警人数</li>
		</ul>
		<ul class="content" v-for="(data,i) in dataList" :class="{'bc1':i%2===0,'bc2':i%2===1}">
			<li>{{i+1}}</li>
			<li>{{data.name}}</li>
			<li>{{data.loadNum}}</li>
			<li>{{data.configNum}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		props:['dataList']
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
</style>