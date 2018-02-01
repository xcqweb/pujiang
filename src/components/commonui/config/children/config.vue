<template>
	<div id="config">
		<ul class="title">
			<li>序号</li>
			<li>预警时间</li>
			<li>景区名称</li>
			<li>预警人数</li>
		</ul>
		<ul class="content" v-for="(data,i) in dataList" :class="{'bc1':i%2===0,'bc2':i%2===1}">
			<li>{{i+1}}</li>
			<li>{{data.loadNum}}</li>
			<li>{{data.name}}</li>
			<li>{{data.configNum}}<span class="edit" @click="edit(data)">修改</span></li>
		</ul>
		<div class="editBox" v-show="showEdit">
			<div>
				<p class="txt"><input type="text" ref="input" :value="editVal" /><button @click="confirm">确认</button></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				editVal:0,
				showEdit:false,
				editData:{}
			}
		},
		props:['dataList'],
		methods:{
			edit(data){
				this.editVal = data.configNum;
				this.showEdit = true;
				this.editData = data;
			},
			confirm(){
				this.showEdit = false;
				//console.log(this.$refs.input.value,this.editData)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	#config{
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
				.edit{
					font-size: 0.8rem;
					padding: 0.2rem 0.8rem;
					border-radius: 1rem;
					background-color: #5E90D7;
					position: absolute;
					right: 0.6rem;
				}
			}
		}
		.bc1{
			background-color: #264095;
		}
		.bc2{
			background-color: #1E3382 ;
		}
		.editBox{
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,0.5);
			position: absolute;
			top: 0;
			left: 0;
			.txt{
				position: absolute;
				margin: auto;
				height: 5%;
				width: 30%;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				input{
					height: 125%;
					font-size: 1rem
				}
				button{
					margin-left: 1rem;
					background-color: #FF0000;
					position: absolute;
					right: -10%;
					border: none;
					height: 140%;
					width: 25%;
					color: #fff;
				}
			}
		}
	}
</style>