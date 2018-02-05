<template>
	<div id="config">
		<ul class="title">
			<li>景区名称</li>
			<li>游客承载量</li>
			<li>预警人数</li>
			<li></li>
		</ul>
		<ul class="content" v-for="(data,i) in dataList" :class="{'bc1':i%2===0,'bc2':i%2===1}" :ref="i">
			<template >
				<li>{{i+1}}</li>
				<li>{{data.name}}</li>
				<li v-if="i!==editIndex">{{data.loadNum}}</li>
				<li v-if="i===editIndex"><input type="number" class="load" :value="loadNum" /><span class="tip" v-show="tipShow">不能为空!</span></li>
				
				<li v-if="i!==editIndex">{{data.configNum}}</li>
				<li v-if="i===editIndex"><input type="number" class="config" :value="configNum" /></li>
				
				<li v-if="i!==editIndex"><span class="edit" @click="edit(data,i)">修改</span></li>
				<li v-if="i===editIndex">
					<input type="button" id="confirmBtn" @click="confirm(i)" value="保 存" />
					<input type="button" id="cancelBtn" @click="cancel(i)" value="取 消" />
				</li>
			</template> 
			<!--<template v-if="showEdit">
				<li>{{i+1}}</li>
				<li>{{data.name}}</li>
				
				
				<li><input type="button" id="confirmBtn" @click="confirm" value="保 存" /></li>
			</template>-->
		</ul>
		<!--<div class="editBox" v-show="showEdit">
			<div>
				<p class="txt">
					<label for="one">游客承载量:</label><input type="text" ref="input1" id="one" :value="editVal1" />
					<label class="two" for="two">预警人数:</label><input type="text" ref="input2" id="two" :value="editVal2" />
					<p class="txt"><button @click="confirm">确认</button></p>
				</p>
			</div>
		</div>-->
	</div>
</template>

<script>
	import {editTime} from '@/common/js/gtime.js'
	export default {
		data(){
			return {
				load:'load',
				loadNum:0,
				configNum:0,
				showEdit:true,
				editIndex:'',
				tipShow:false,
				editData:{}
			}
		},
		props:['dataList','scienceProps'],
		watch:{
			scienceProps:function(){
				//选择景区时清除编辑模式
				this.editIndex = '';
			}
		},
		created(){
		},
		methods:{
			//编辑按钮
			edit(data,i){
				this.loadNum = data.loadNum;
				this.configNum = data.configNum;
				this.editIndex = i;
				this.showEdit = true;
				this.editData = data;
			},
			//确认修改
			confirm(i){
				let editEle = document.getElementById('config').getElementsByClassName('content');
				//console.log(editEle[i]);
				if(editEle[i].getElementsByClassName('load')[0].value==='' || editEle[i].getElementsByClassName('config')[0].value===''){
					this.tipShow = true;
					setTimeout( () => {
						this.tipShow = false;
					},3000)
					return;
				}
				if(confirm('确认要修改吗?')){
					this.showEdit = false;
					
					//修改时间
					this.editData.editTime = editTime;
					this.editData.loadNum =  editEle[i].getElementsByClassName('load')[0].value;
					this.editData.configNum =  editEle[i].getElementsByClassName('config')[0].value;
					this.$store.state.setConfigData = this.editData;
					
					this.editIndex = '';
					
					//console.log(this.$store.state.setConfigData)
				}else{
					this.editIndex = '';
				}
			},
			cancel(){
				this.editIndex = '';
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	#config{
		width: 100%;
		height: 90%;
		background: linear-gradient(#2d449d 50%,#264095 50%);
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
				
				position: relative;
				font-size: 0.9rem;
				.edit{
					font-size: 0.8rem;
					padding: 0.2rem 0.8rem;
					border-radius: 1rem;
					background-color: #5E90D7;
				}
			}
			
			li:nth-child(1){
				flex: 2;
			}
			li:nth-child(2){
				flex: 2;
			}
			li:nth-child(3){
				flex: 3;
			}
			li:nth-child(4){
				flex: 3;
			}
			li:nth-child(5){
				flex: 2;
			}
		}
		.bc1{
			background-color: #264095;
		}
		.bc2{
			background-color: #1E3382 ;
		}
		li{
			input[type=number]{
				width: 60%;
				line-height: 1.2rem;
				text-align: left;
			}
			input[type=button]{
				width: 40%;
				line-height: 1.2rem;
				border: none;
				background-color: #ff6700;
				color: #fff;
				padding: 0.2rem 0.6rem;
				font-size: 0.8rem;
				border-radius: 1rem;
			}
			.tip{
				color: #f00;
				font-size: 0.8rem;
				//background-color: #f00;
				font-weight: bold;
				padding: 0.3rem;
				position: absolute;
				width: 38%;
				right: -20%;
				top: 0%;
			}
		}
	}
	
			#config::-webkit-scrollbar{
			    width: 0.45rem;
			    height: 5rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			#config::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			#config::-webkit-scrollbar-thumb{
			    width: 10px;
			    height: 15rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #02275A;
			    background-color: #0F2059;
			}
</style>