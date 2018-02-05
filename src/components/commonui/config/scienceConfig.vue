<template>
	<div id="box">
		
		<div class="content">
			<span class="science">景区:</span>
			<sleckte
			:selectList="qyselectlist" 
	        v-on:listenAtparent="catchmsg1"
			>
			</sleckte>
		<div class="title">
			<span class="history" @click="history" :class="{'active':tab}">预警历史</span>
			<span class="config" @click="waringConfig" :class="{'active':!tab}">预警设置</span>
			<span class="close" @click="close">x</span>
		</div>
		<history :historyList="slectListHistory" v-show="tab"></history>
		<config :dataList="slectList" :scienceProps="scienceProps" v-show="!tab"></config>
		</div>
	</div>
</template>

<script>
	import componetstatus from '@/pages/home/componentstatus.js'
	
	import history from '@/components/commonui/config/children/history.vue'
	import config from '@/components/commonui/config/children/config.vue'
	import optionProps from '@/common/js/mixin/optionProps.js'
	
	export default{
		mixins: [optionProps],
		data(){
			return {
				tab:true,
				updateData:{
                    turist:'全部',
                },
                qyselectlist:{
                    width:'30%',
                    left:'9%',
                    top: '-5%',
                    title:'全部',
                    selectStatus:false,
                    place:[
		             '全部',
		            '仙华山',
		            '前吴村',
		            '塘波村',
		            '民生村',
		            '罗源村',
		            '白石湾',
		            '江南第一家',
		            '嵩溪村',
		            '宝掌幽谷',
		            '登高村',
		            '神丽峡',
		            '礼张村',
		            '农批市场',
		            '檀溪镇',
		            '冷坞村',
		            '上河村',
		            '汽车客运站',
		            '翠湖',
		            '马岭',
		            '利民村',
		            '下湾村',
		            '新光村',
		            '西山村',
		            '田后蓬',
		            '薛下庄村',
		            '下薛宅',
		            '金狮湖',
		            '高速路',
		            '官岩寺',
		            '上山遗址',
		            '渠南村',
		            '温泉',
		            '水晶城',
		            '水竹湾',
		            '平湖森林果园',
		            '三角潭林场',
		            '罗家村',
		            '白岩山前滑草基地',
		            '里黄宅村',
		            '善庆村',
		            '文化馆',
		            '通济桥水库大坝',
		            '三城山农庄',
		            '塔山宾馆',
		            '月泉书院遗址公园'],
                },
                slectList:[],
                slectListHistory:[],
                dataList:[
		            	{name:'仙华山',loadNum:12300,configNum:10000},
		            	{name:'前吴村',loadNum:12500,configNum:10000},
		            	{name:'塘波村',loadNum:12000,configNum:16000},
		            	{name:'民生村',loadNum:12000,configNum:10000},
		            	{name:'罗源村',loadNum:12000,configNum:10000},
		            	{name:'白石湾',loadNum:12000,configNum:10000},
		            	{name:'江南第一家',loadNum:12000,configNum:10000},
		            	{name:'嵩溪村',loadNum:12000,configNum:10000},
		            	{name:'宝掌幽谷',loadNum:12000,configNum:10000},
		            	{name:'登高村',loadNum:12000,configNum:10000},
		            	{name:'神丽峡',loadNum:12000,configNum:10000},
		            	{name:'礼张村',loadNum:12000,configNum:10000},
		            	{name:'农批市场',loadNum:12000,configNum:10000},
		            	{name:'檀溪镇',loadNum:12000,configNum:10000},
		            	{name:'冷坞村',loadNum:12000,configNum:10000},
		            	{name:'上河村',loadNum:12000,configNum:10000},
		            	{name:'汽车客运站',loadNum:12000,configNum:10000},
		            	{name:'翠湖',loadNum:12000,configNum:10000},
		            	{name:'马岭',loadNum:12000,configNum:10000},
		            	{name:'利民村',loadNum:12000,configNum:10000},
		            	{name:'下湾村',loadNum:12000,configNum:10000},
		            	{name:'新光村',loadNum:12000,configNum:10000},
		            	{name:'西山村',loadNum:12000,configNum:10000},
		            	{name:'田后蓬',loadNum:12000,configNum:10000},
		            	{name:'薛下庄村',loadNum:12000,configNum:10000},
		            	{name:'下薛宅',loadNum:12000,configNum:10000},
		            	{name:'金狮湖',loadNum:12000,configNum:10000},
		            	{name:'高速路',loadNum:12000,configNum:10000},
		            	{name:'官岩寺',loadNum:12000,configNum:10000},
		            	{name:'上山遗址',loadNum:12000,configNum:10000},
		            	{name:'渠南村',loadNum:12000,configNum:10000},
		            	{name:'温泉',loadNum:12000,configNum:10000},
		            	{name:'水晶城',loadNum:12000,configNum:10000},
		            	{name:'水竹湾',loadNum:12000,configNum:10000},
		            	{name:'平湖森林果园',loadNum:12000,configNum:10000},
		            	{name:'三角潭林场',loadNum:12000,configNum:10000},
		            	{name:'罗家村',loadNum:12000,configNum:10000},
		            	{name:'白岩山前滑草基地',loadNum:12000,configNum:10000},
		            	{name:'里黄宅村',loadNum:12000,configNum:10000},
		            	{name:'善庆村',loadNum:12000,configNum:10000},
		            	{name:'文化馆',loadNum:12000,configNum:10000},
		            	{name:'通济桥水库大坝',loadNum:12000,configNum:10000},
		            	{name:'三城山农庄',loadNum:12000,configNum:10000},
		            	{name:'塔山宾馆',loadNum:12000,configNum:10000},
		            	{name:'月泉书院遗址公园',loadNum:12000,configNum:10000},
		            ],
		             historyList:[
		            	{name:'仙华山',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'前吴村',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'塘波村',editTime:'2018/02/02 13:12:45',configNum:16000},
		            	{name:'民生村',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'罗源村',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'白石湾',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'江南第一家',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'嵩溪村',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'宝掌幽谷',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'登高村',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'神丽峡',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'礼张村',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'农批市场',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'檀溪镇',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'冷坞村',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'上河村',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'汽车客运站',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'翠湖',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'马岭',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'利民村',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'下湾村',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'新光村',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'西山村',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'田后蓬',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'薛下庄村',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'下薛宅',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'金狮湖',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'高速路',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'官岩寺',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'上山遗址',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'渠南村',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'温泉',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'水晶城',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'水竹湾',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'平湖森林果园',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'三角潭林场',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'罗家村',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'白岩山前滑草基地',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'里黄宅村',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'善庆村',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'文化馆',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'通济桥水库大坝',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'三城山农庄',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'塔山宾馆',editTime:'2018/02/02 13:12:45',configNum:10000},
		            	{name:'月泉书院遗址公园',editTime:'2018/02/02 13:12:45',configNum:10000},
		            ]
			}
		},
		watch:{
			code:function(){
				if(this.code===0){
					this.slectList = this.dataList;
					this.slectListHistory = this.historyList;
				}else{
					this.slectList = [];
					this.slectList.push(this.dataList[this.code-1]);
					
					this.slectListHistory = [];
					this.slectListHistory.push(this.historyList[this.code-1]);
				}
				this.updateData.turist = this.qyselectlist.place[this.code];
				//console.log(this.updateData.turist)
			}
		},
		methods:{
			catchmsg1(data){
                //console.log(data)
             	//this.updateData.turist = data;
             	this.scienceProps = data;
        	},
        	history(){
        		this.tab = true;
        	},
        	waringConfig(){
        		this.tab = false;
        	},
        	//关闭蒙层
        	close(){
        		this.$store.state.showToast = false;
        	}
		},
		created(){
			//初始化传值
			this.slectList = this.dataList;
			this.slectListHistory = this.historyList;
			//应急指挥平台选择景区
			this.code = this.$store.state.currentCode;
			this.qyselectlist.title = this.qyselectlist.place[this.$store.state.currentCode];
			//console.log(this.qyselectlist.title,this.$store.state.currentCode)
		},
		
		mounted(){
		},
		computed:{
			
		},
		components:{
			...componetstatus,
			config,
			history,
		}
	}
</script>

<style scoped="scoped" lang="less">
	#box{
		width: 100%;
		height: 100%;
		background-color: rgba(10, 14, 39,0.8);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10000;
		.content{
			width: 50%;
			height: 80%;
			margin: auto;
			position: absolute;
			border: 0.1rem solid #415CDB;
			border-radius: 0.4rem;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 10001;
			background: #264095;
			.title{
				color: #fff;
				height: 10%;
				position: relative;
				background-color: #264095;
				
				.history,.config{
					background-color: #739CD6;
					position: absolute;
					top: 0;
					margin-top: 1rem;
					padding: 0.3rem 0.8rem;
					border-radius: 1rem;
				}
				.history{
					
					left: 38%;
				}
				.config{
					left: 52%;
					
				}
				.active{
					background-color: #EA484F;
				}
				.close{
					position: absolute;
					color: rgba(225,225,225,0.5);
					font-size: 2rem;
					right: 2%;
					top: 8%;
				}
			}
		}
		.v-dropdown-menu{
			background-color: #1E3382;
			border-radius: 0 0.3rem 0.3rem 0;
		}
		.science{
			position: absolute;
			top: -5%;
			left: 0%;
			color: #fff;
			border: 0.5rem solid #415CDB;
			padding: 0rem 1rem;
			border-radius: 0.3rem 0 0 0.3rem;
			background-color: #1E3382;
			 height:1.8rem;
    		line-height: 1.8rem;
		    border: 1px solid #1b44ba;
		    transform: translate(0,-50%);
		    color: white;
		    box-shadow: 1px 0 30px  rgba(1,1,13,0.4);
		    z-index: 320;
		    white-space: nowrap;
		}
	}
</style>