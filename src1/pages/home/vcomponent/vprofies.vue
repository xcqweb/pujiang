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
		<span>{{profileData.all_nub}}</span>
		<font>人</font>
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
import Start_end_class from '@/common/js/star_end_class.js'
import {begindaytime} from '@/common/js/gtime.js'

export default {
	name: 'a2',
	data () {
	return {
		profileData:{
			all_nub:'',
			current_nub:'',
			week_income:'',
			year_incom:'',
			yesterday_nub:''
		},
		selectlist:{
			title:'江南第一家 ',
			selectStatus:false,

			place:[
				{
					name:'江南第一家 ',value:'江南第一家 '
				},
				{
					name:'仙华山 ',value:'仙华山 '
				},
				{
					name:'神丽峡',value:'神丽峡'
				},
        {
          name:'官岩山',value:'官岩山'
        },
        {
          name:'白石洲风景区',value:'白石洲风景区'
        },
        {
          name:'金狮湖',value:'金狮湖'
        }
			]
		},
    option:null,
    nub:'',
    set_config:'',
    chart:null
	}
	},
	methods:{
		showselect(){
			this.selectlist.selectStatus=true;
		},
		redom(id){
		  let setconfig = this.set_config;
      let nub = this.nub;
		  //$loading.open({reload:false});
      this.chart = echarts.init(document.getElementById(id));
			let option = {
        backgroundColor: 'rgba(0,0,0,0)',
          legend: {
          data: ['饼图二', '饼图三']
        },
        series: [{
          name: '',
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
              value: nub,
              name:"",
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
              value: setconfig,
              name:'',
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
            name: '',
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
              value: 2000,
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
      };
			this.option = option;
			this.chart.setOption(this.option);
		},
		get_response(){
      let _self = this;
      let start_end_instance =  new Start_end_class('profile',begindaytime);
      start_end_instance.get_response(_self.$el).then(re => {
        let data = re.data.data;
          this.profileData.all_nub = data.all_nub;
          this.profileData.current_nub = data.current_nub;
          this.profileData.week_income = data.week_income;
          this.profileData.year_incom = data.year_incom;
          this.profileData.yesterday_nub = data.yesterday_nub;
          _self.redom();
           $loading.close();
      })
        .catch( e =>{
          this.reloading=true;
          console.log(e);
        });
		},
    request(){
		  //debugger;
      let start_end_instance =  new Start_end_class('passengerwarning',begindaytime);
      start_end_instance.get_response(this.$el).then(re => {
        //设置默认值
        this.nub = re.data.data.nub;
        this.set_config = re.data.data.set_config;
        console.log(this.nub,this.set_config);
        this.redom(this.$el);
      }).catch( e =>{
          console.log(e);
        })
    }
	},
	mounted() {
    this.get_response();
    this.request();
		this.$nextTick( () => {
      echarts_resize('vwarning',this);
    })
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
