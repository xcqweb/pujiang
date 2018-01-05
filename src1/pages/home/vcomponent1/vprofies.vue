<template>
  <div class="v-profile">
	<vSelect class='vSelect' 
			:selectList="selectlist" 
			>
	</vSelect>
	<div class='shuaxin'></div>
	
	<div class="leftprofile">
		<div class='top'>
			<p>{{profileData.current_nub}}<font>人次</font></p>
			<span>当前客流总数</span>
		</div>
		
		<div class='bottom'>
			<p>{{profileData.week_income}}<font>万元</font></p>
			<span>当前景区本周收益</span> 
		</div>
		
	</div>
	<div class="rightprofile">
		<div class='top'>
			<p>{{profileData.yesterday_nub}}<font>人次</font></p>
			<span>昨日客流总数</span>  
		</div>
		<div class='bottom'>
			<p>{{profileData.year_incom}}<font>万元</font></p>
			<span>当前景区年收益</span>
		</div>
		
	</div>
	<div class="lines"></div>
	<span class="flowtourist">客流预警</span>
	<div id="vwarning"></div>
	<div class="vwarningImg">
		<span>9.831</span>
		<font>万人</font>
	</div>
  </div>
</template>

<script>
import Vue from 'vue'
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
import api from '@/api/moudles/tanzhenData'
import vSelect from '../../../components/commonui/dropdown/dropdown-menu.vue'
import Rw from '@/common/js/until/index.js'
export default {
	name: 'a2',
	data () {
	return {
		profileData:{
			all_nub:'',
			current_nub:'',
			week_income:'',
			year_incom:'',
			yesterday_nub:'',
		},
		selectlist:{
			title:'宝晶宫 ',
			selectStatus:false,
			
			place:[
				{
					name:'宝晶宫 ',value:'宝晶宫 '
				},
				{
					name:'洞天仙境 ',value:'洞天仙境 '
				},
				{
					name:'千年瑶寨',value:'千年瑶寨'
				}
			]
		},
		option:{
		  backgroundColor: 'rgba(0,0,0,0)',
		  series: [{
			  name: '饼图二',
			  type: 'pie',
			  radius: ['45%', '60%'],
			  label: {
				  normal: {
					  position: 'center'
				  }
			  },
			  animationType:'expansion',
			  animation:false,
			  hoverAnimation:false,
			  data: [
			  {
				  value: 60,
				  label: {
					  normal: {
						  textStyle: {
							  color: '#7460EE',
							  fontSize: 30
						  }
					  }
				  },
				  itemStyle: {
					  normal: {
						  color: '#f2f2f2'
					  },
					  emphasis: {
						  color: '#f2f2f2'
					  }
				  },
				  hoverAnimation: false
			  },{
				  value: 70,
				  name: '',
				  label: {
					  normal: {
						  textStyle: {
							  color: '#999999',
							  fontSize: 38
						  },
						  position: 'center'
					  }
				  },
				  itemStyle:{
					  normal:{
						  color:'#7460EE'
					  },
					  emphasis:{
						  color:'#7460EE'
					  }
				  }
			  }, ]
		  },
		  {
			  name: '饼图二',
			  type: 'pie',
			  radius: ['45%', '60%'],
			  label: {
				  normal: {
					  position: 'center'
				  }
			  },

			  center:['50%','55%'],
			  hoverAnimation:false,
			  data: [ {
				  value: 120,
				  label: {
					  normal: {
						  textStyle: {
							  color: 'rgba(0,0,0,0)',
							  fontSize: 30
						  }
					  }
				  },
				  itemStyle: {
					  normal: {
						  color: 'rgba(0,0,0,0)'
					  },
					  emphasis: {
						  color: 'rgba(0,0,0,0)'
					  }
				  },
				  hoverAnimation: false
			  }]
		  },
		  ]
	  },
	}
	},
	computed: { 

	},
	methods:{
		showselect(){
			this.selectlist.selectStatus=true;
		},
		redom(id){
			this.chart = echarts.init(document.getElementById(id));
			this.chart.setOption(this.option);
		},
		get_response(){
			let _self = this;
			api.profile()
                .then((data ) => {
					for(name in _self.profileData){
						_self.profileData[name] = Rw.string_until.addPoint(data.data.data[name])
					}
				})
                .catch(error => {
                  this.reloading=true;
                  console.log(error)
                });
		}
	},
	mounted() {
		this.get_response()
		this.$nextTick(echarts_resize('vwarning',this))
	},
	components:{
		vSelect
	}
}
</script>

<style lang="less" scoped>
.v-profile{
	height:100%;
	width:100%;
	position:relative;
	.flowtourist{
		position:absolute;
		bottom:5%;
		left:45.5%;
		font-size:1.1rem;
		color:white;
		z-index:2;
	}
	.lines{
		position:absolute;
		top:55%;
		width:90%;
		height:2px;
		left:5%;
		background-color:#20549f;
	}
	.shuaxin{
		display: inline-block;
		position:absolute;
		top: 8px;
		right: 38px;
		height: 18px;
		width: 18px;
		background-image: url('../../../assets/刷新.png');
		z-index: 1;
		cursor: pointer;
	}
	p{
		color:#ffd800;
		font-size:1.8rem;
		font{
			font-size: .9rem;
		}
	}
	span{
		color: #43dbff;
		font-size: 1rem;
	}
	.leftprofile{
		position:absolute;
		height: 100%;
		width: 20%;
		top:0;
		left:10%;
		z-index: 1;
		div{
			p{
				margin-bottom: .8rem;
			}
		}
		.top{
			position:absolute;
			top: 25%;
		}
		.bottom{
			position:absolute;
			bottom: 15%;
		}
	}
	.rightprofile{
		position:absolute;
		height: 100%;
		width: 20%;
		top:0;
		right:10%;
		z-index: 1;
		div{
			p{
				margin-bottom: .8rem;
			}
		}
		.top{
			position:absolute;
			top: 25%;
		}
		.bottom{
			position:absolute;
			bottom: 15%;
		}
	}
	#vwarning{
		position:absolute;
		top: 17%;
		left: 33%;
		height:309/1920*100vw;
		width:309/1920*100vw;


	}
	.vwarningImg{
		position:absolute;
		top: 17%;
		left: 33%;
		height:309/1920*100vw;
		width:309/1920*100vw;
		background-image:url('../../../assets/vwarning.png');
		background-size: 100% 100%;
		color:#fa678f;
		span{
			position: absolute;
			display: inline-block;
			top: 40%;
			transform: translateY(-50%);
			left: 50%;
			transform: translateX(-50%);
		 	color:#fa678f;
		 	font-size:1.3rem;
		}
		font{
			position: absolute;
			display: inline-block;
			top: 55%;
			transform: translateY(-50%);
			left: 50%;
			transform: translateX(-50%);
		}
	}
}
</style>