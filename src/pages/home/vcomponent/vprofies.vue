<template>
  <div class="v-profile">
	<!--<vSelect class='vSelect'-->
			<!--:selectList="selectlist"-->
			<!--&gt;-->
	<!--</vSelect>-->
	<!--刷新-->
	<!--<div class='shuaxin'></div>-->

	<div class="leftprofile">
		<div class='top'>
			<p>{{curSum}}<font></font></p>
			<span>今日客流总人次</span>
		</div>

		<div class='bottom'>
			<p>{{curMonthSum}}<font></font></p>
			<span>本月客流总人次</span>
		</div>

	</div>
	<div class="rightprofile">
		<div class='top'>
			<p>{{yesterdaySum}}<font></font></p>
			<span>昨日客流总人次</span>
		</div>
		<div class='bottom'>
			<p>{{curYearSum}}<font></font></p>
			<span>本年客流总人次</span>
		</div>

	</div>
	<div class="lines"></div>
	<span class="flowtourist"></span>
	<div id="vwarning"></div>
	<div class="vwarningImg">
		<span>{{profileData.warnRate}}%</span>
	</div>
    <Loading v-show="isloading"></Loading>
  </div>
</template>

<script>
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
import api from '@/api/moudles/tanzhenData'
import until from '@/common/js/until/index.js'
import Start_end_class from '@/common/js/star_end_class.js'
import {begindaytime} from '@/common/js/gtime.js'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
	name: 'a2',
	mixins: [optionProps],
	data () {
	return {
	  allData:[],
	  currentPlace:'',
		profileData:{
			warnRate:'',
			curSum:'',
			curMonthSum:'',
			curYearSum:'',
			yesterdaySum:''
		},
				option : {

			    backgroundColor: 'rgba(0,0,0,0)',
			    color: ['#7460EE'],
			    z:1000,
			    tooltip: {
			        show: false,//鼠标移入提示
			        //formatter: "{a} <br/>{b} : {c}%"
			        formatter:function(params){
			        	return params.name+":"+"<br/>"+params.percent.toFixed(2)+"%"
			        },
			    },
			    legend: {
			        show: false,
			        itemGap: 12,
			        data: ['01']
			    },
			    series: [
			    {
			            name: '',
			            type: 'pie',
			            clockWise: false,
			            radius: ['54%', '60%'],
			            itemStyle:  {
									    normal: {
									        label: {
									            show: false
									        },
									        labelLine: {
									            show: false
									        },
									        shadowBlur: 40,
									        shadowColor: 'rgba(40, 40, 40, 0.5)',
									    }
									},
			            hoverAnimation: false,

			            data: [
			                {
			                    value: 100,
			                    name: '剩余占比',
			                    itemStyle: {
													    normal: {
													        color: 'rgba(255,255,255,0.9)',//未完成的圆环的颜色
													        label: {
													            show: false
													        },
													    },
													}
			                },{
			                    value: 0,
			                    name: '客流占最大客流比率'
			                }

			            ]
			        },
			         {
			            name: '',
			            type: 'pie',
			            clockWise: false,
			            radius: ['0', '54%'],
			            itemStyle:  {
									    normal: {
									        label: {
									            show: false
									        },
									        labelLine: {
									            show: false
									        },
									        shadowBlur: 40,
									        shadowColor: 'rgba(40, 40, 40, 0.5)',
									    }
									},
			            hoverAnimation: true,
			              data: [
			                {
			                    value: 100,
			                    name: '剩余占比',
			                    itemStyle: {
													    normal: {
													        color: {
																	    type: 'radial',
																	    x: 0.5,
																	    y: 0.5,
																	    r: 0.5,
																	    colorStops: [{
																	        offset: 0, color: 'rgba(22,51,135,0.01)' // 0% 处的颜色
																	    }, {
																	        offset: 1, color: 'rgba(255,255,255,0.1)' // 100% 处的颜色
																	    }],
																	    globalCoord: false // 缺省为 false
																	},
													        label: {
													            show: false
													        },
													    },
													}
			                },{
			                    value: 0,
			                    name: '客流占最大客流比率'
			                }

			            ]
			         }
			    ]
			},
	      nub:0,
	      set_config:0,
	      percent:0
	}
	},
  watch:{
  },
	methods:{
  getData(){
    let start_end_instance =  new Start_end_class('profile',begindaytime);
    start_end_instance.get_response().then(re => {
    	
      let data = re.data.data;
      //console.log(re)
      //初始化数据
      this.profileData.warnRate = data.warnRate;
      this.profileData.curSum = data.curSum;
      this.profileData.curMonthSum = data.curMonthSum;
      this.profileData.curYearSum = data.curYearSum;
      this.profileData.yesterdaySum = data.yesterdaySum;
      
      //设置百分比
      this.option.series[0].data[1].value = this.profileData.warnRate;
      this.option.series[0].data[0].value = 100-this.profileData.warnRate;
      let Ratio = this.profileData.warnRate/100;
      let setColor = '';
      if(Ratio<0.3){
      	setColor='#0af94a'
      }else if(Ratio<0.5){
      	setColor='#7460EE'
      }else if(Ratio<0.7){
      	setColor='#eee716'
      }else if(Ratio<0.9){
      	setColor='#cb1f1f'
      }else{
      	setColor='#f00'
      }

      this.option.color[0] = setColor;
      this.redom("vwarning");
      
      
      if(re.data.code===200){
      	this.isloading=false;
      }
    })
      .catch( e =>{
        console.log(e);
      });
  },
		showselect(){
			this.selectlist.selectStatus=true;
		},
		redom(id){
      this.chart = echarts.init(document.getElementById(id));
			this.chart.setOption(this.option);
		},
	},
	computed:{
		transformColor(){
			return '#f00';
		},
		curSum(){
			return until.string_until.addPoint(this.profileData.curSum)
		},
		curMonthSum(){
			return until.string_until.addPoint(this.profileData.curMonthSum)
		},
		curYearSum(){
			return until.string_until.addPoint(this.profileData.curYearSum)
		},
		yesterdaySum(){
			return until.string_until.addPoint(this.profileData.yesterdaySum)
		},
	},
	mounted() {
    this.$nextTick(echarts_resize('vwarning',this));
	},
}
</script>

<style lang="less" scoped>
.v-profile{
	height:100%;
	width:100%;
	position:relative;
	.flowtourist{
		position:absolute;
		bottom:3%;
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
		font-family:numberFont;
		text-shadow: 0 0 0.5rem #ffd800;
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
		z-index: 100;

	}
	.vwarningImg{
		position:absolute;
		top: 17%;
		left: 33%;
		height:309/1920*100vw;
		width:309/1920*100vw;
		background-image:url('../../../assets/vwarning.png');
		background-size: 100% 100%;
		span{
			color:#f5781f;
			text-shadow: 0 0 0.5rem #f5781f;
			position: absolute;
			display: inline-block;
			top: 43%;
			transform: translateY(-50%);
			left: 50%;
			transform: translateX(-50%);
		 	font-size:2rem;
		 	font-family:numberFont;
		}
	}
}
</style>
