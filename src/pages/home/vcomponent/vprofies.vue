<template>
  <div class="v-profile">
	<!--<vSelect class='vSelect'-->
			<!--:selectList="selectlist"-->
			<!--&gt;-->
	<!--</vSelect>-->
	<div class='shuaxin'></div>

	<div class="leftprofile">
		<div class='top'>
			<p>{{profileData.current_nub}}<font>人次</font></p>
			<span>当前客流人数</span>
		</div>

		<div class='bottom'>
			<p>{{profileData.week_income}}<font>人次</font></p>
			<span>本月客流总数</span>
		</div>

	</div>
	<div class="rightprofile">
		<div class='top'>
			<p>{{profileData.yesterday_nub}}<font>人次</font></p>
			<span>昨日客流总数</span>
		</div>
		<div class='bottom'>
			<p>{{profileData.year_incom}}<font>人次</font></p>
			<span>本年客流总数</span>
		</div>

	</div>
	<div class="lines"></div>
	<span class="flowtourist">客流预警</span>
	<div id="vwarning"></div>
	<div class="vwarningImg">
		<span>{{percent}}%</span>
	</div>
    <Loading v-show="isloading"></Loading>
  </div>
</template>

<script>
import Vue from 'vue'
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
import api from '@/api/moudles/tanzhenData'
//import vSelect from '../../../components/commonui/dropdown/dropdown-menu.vue'
import Rw from '@/common/js/until/index.js'
import Start_end_class from '@/common/js/star_end_class.js'
import {begindaytime} from '@/common/js/gtime.js'
import Loading from '@/components/commonui/loading/loading.vue'
import optionProps from '@/common/js/mixin/optionProps.js'
//import Bus from '@/common/js/bus.js'
export default {
	name: 'a2',
	mixins: [optionProps],
	data () {
	return {
	  isloading:false,
	  allData:[],
	  currentPlace:'',
		profileData:{
			all_nub:'',
			current_nub:'',
			week_income:'',
			year_incom:'',
			yesterday_nub:''
		},
//		selectlist:{
//			title:'江南第一家 ',
//			selectStatus:false,
//			place:[
//				{
//					name:'江南第一家',value:'江南第一家'
//				},
//				{
//					name:'仙华山',value:'仙华山'
//				},
//				{
//					name:'神丽峡',value:'神丽峡'
//				},
//      {
//        name:'官岩山',value:'官岩山'
//      },
//      {
//        name:'白石洲风景区',value:'白石洲风景区'
//      },
//      {
//        name:'金狮湖',value:'金狮湖'
//      }
//			]
//		},



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

			            data: [{
			                    value: 0,
			                    name: '客流占最大客流比率'
			                },
			                {
			                    value: 100,
			                    name: '剩余占比',
			                    itemStyle: {
													    normal: {
													        color: 'rgba(255,255,255,1)',//未完成的圆环的颜色
													        label: {
													            show: false
													        },
													    },
													}
			                }

			            ]
			        },
			    ]
			},
	      nub:0,
	      set_config:0,
	      percent:0
	}
	},
  watch:{
    //观察景区变化更新数据
//  currentPlace:function(){
//  	this.nub = this.allData[this.currentPlace].all_nub;
//  	this.profileData.all_nub = this.allData[this.currentPlace].all_nub;
//    this.profileData.current_nub = this.allData[this.currentPlace].current_nub;
//    this.profileData.week_income = this.allData[this.currentPlace].week_income;
//    this.profileData.year_incom = this.allData[this.currentPlace].year_incom;
//    this.profileData.yesterday_nub = this.allData[this.currentPlace].yesterday_nub;
//
//  },

    nub:function(){
    	this.percent = (this.nub*100/this.set_config).toFixed(0);
          this.option.series[0].data[0].value = this.percent;
          this.option.series[0].data[1].value = 100-this.percent;
      let Ratio = this.nub/this.set_config;
      let setColor = '';
      //console.log(Ratio)
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
      //console.log(this.option.series[0].data[0].itemStyle.normal.color);
      this.redom("vwarning");
    },
  },
	methods:{
  get_response(){
    let start_end_instance =  new Start_end_class('profile',begindaytime);
    start_end_instance.get_response().then(re => {
      let data = re.data.data;
      console.log(re)
      //初始化数据
      this.profileData.all_nub = data.all_nub;
      this.profileData.current_nub = data.current_nub;
      this.profileData.week_income = data.week_income;
      this.profileData.year_incom = data.year_incom;
      this.profileData.yesterday_nub = data.yesterday_nub;
      if(re.code===200){
      	this.isloading=false;
      }
    })
      .catch( e =>{
        console.log(e);
      });
  },
  request(){
    this.isloading = true;
    let start_end_instance =  new Start_end_class('passengerwarning',begindaytime);
    start_end_instance.get_response().then(re => {
      //设置默认值

      let data = re.data.data
      this.nub = data.nub;
      this.set_config = data.set_config;
      this.isloading = false;
    }).catch( e =>{
      console.log(e);
    })
  },
		showselect(){
			this.selectlist.selectStatus=true;
		},
		redom(id){
      this.chart = echarts.init(document.getElementById(id));
			this.chart.setOption(this.option);
		},
		getScenic(scenic){
			console.log(secnic)
			this.selectlist.title = secnic;
		}
	},
	computed:{
		transformColor(){
			return '#f00';
		}
	},
	created(){
//		Bus.$on('itemtodo', target => {
//          this.selectlist.title = target;
//          this.currentPlace = target;
//      });

		this.get_response();
    this.request();
	},
	mounted() {
    this.$nextTick(echarts_resize('vwarning',this));
	},

	components:{
		//vSelect,
    Loading
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
			position: absolute;
			display: inline-block;
			top: 45%;
			transform: translateY(-50%);
			left: 50%;
			transform: translateX(-50%);
		 	font-size:1.5rem;
		 	font-family:numberFont;
		}
	}
}
</style>
