<template>
	 <transition name="fade">
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
			<history :scienceProp='scienceProps' v-show="tab"></history>
			<config :scienceProp='scienceProps' v-show="!tab"></config>
			</div>
		</div>
	</transition>
</template>

<script>
	import componetstatus from '@/pages/home/componentstatus.js'
	import optionProps from '@/common/js/mixin/optionProps.js'
	import history from '@/components/commonui/config/children/history.vue'
	import config from '@/components/commonui/config/children/config.vue'
	
	import { mapMutations,mapActions} from 'vuex'
	
	export default{
		mixins: [optionProps],
		data(){
			return {
				tab:true,
				scienceProps:0,
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
			}
		},
		watch:{
		},
		methods:{
			
			catchmsg1(data){
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
        		this.code=0;
        	},
        	getData(){}
		},
		created(){
			//console.log(this.nameToCode['仙华山'])
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
					cursor: pointer;
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
	
	@keyframes full{
		from{
			transform: scale(0.1);
		}
		to{
			transform: scale(1);
		}
	}
	
	@keyframes out{
		from{
			transform: scale(1);
		}
		to{
			transform: scale(0);
		}
	}
	
	.fade-enter-active,  {
	  animation: full 0.2s ease-out;  
	}
	.fade-leave-active{
		animation: out 0.2s ease-out; 
	}
</style>