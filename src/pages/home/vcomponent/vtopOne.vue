
<!--历史客流-->
<template>
  <div class="main_content" id="A1loding">
  	<span class="title" :class='comStyle'>( 单位 : 人次 )</span>
    <div id="righthz"></div>
    <Loading v-if="isloading"></Loading>
    <div class="clock" v-if="isdate">
    	<vdate
    		@pageDate='getDate'
    	></vdate>
    </div>
  </div>
</template>
<script>
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
import Start_end_class from '@/common/js/star_end_class.js'
import Bus from '@/common/js/bus.js'
import {begindaytime} from '@/common/js/gtime.js'
import optionProps from '@/common/js/mixin/optionProps.js'
import vdate from '@/components/commonui/vueDate/app.vue'

let w = document.body.clientWidth/1920

export default {
    name:'a1',
    mixins: [optionProps],
    data() {
      return {
      	timeRange:{begin:[],end:[]},
        chart: null,
        isActive:true,
        xnub:null,
        ynub:null,
        loading:true,
        reloading:false,
        oneweekMock:[
            {"nub":"1293","date":"6/14"},
            {"nub":"2331","date":"6/15"},
            {"nub":"1012","date":"6/16"},
            {"nub":"999","date":"6/17"},
            {"nub":"2458","date":"6/18"},
            {"nub":"2122","date":"6/19"},
            {"nub":"1789","date":"6/20"}
        ],

        opinion: ['学习氛围差', '学习氛围一般', '学习氛围很好'],
        opinionData1: [

        ],
        opinionData2: this.$store.state.data,
        opinionData: [
            {value:26, name:'学习氛围差'},
            {value:31, name:'学习氛围一般'},
            {value:8, name:'学习氛围很好'}
          ],
      }
    },
    props:['isdate','apiName','classo'],
    computed:{
    	comStyle(){
    		let isIE = window.navigator.userAgent.indexOf('Trident')
       		if(isIE>-1){
       			return 'ieTitle';
       		}else{
       			if(this.classo){
       				return 't';
       			}
       		}
    	}
			
    },
    watch:{
    	code:function(){
    		this.isloading = true;
    		if(this.timeRange.begin ||this.timeRange.end){
    			this.request(this.timeRange);
    		}else{
    			this.request();
    		}
    	},
    	timeRange:{
    		handler:function(val){
    			this.request(val)
    		},
    		deep:true
    	}
    },
    methods: {
    	getDate(val){
    		this.timeRange = val
    	},
    redom7(){
        if(this.chart){
            this.chart.dispose();
        }
      this.isActive=true;
      let dataY=[];
      let dataX=[];
      for (var i = 0; i < this.oneweekMock.length; i++) {
      	//console.log(this.oneweekMock[i]._id)
      		this.oneweekMock[i]._id = this.oneweekMock[i]._id.substring(4,6)+"/"+this.oneweekMock[i]._id.substr(6)
          dataY.push(this.oneweekMock[i].total);
          dataX.push(this.oneweekMock[i]._id)
      		
      }
      this.$nextTick(echarts_resize('righthz',this,dataX,dataY))
      
    },
      redom (id,xyfonsiz,datax,datay) {
        var _self= this;
        this.chart = echarts.init(document.getElementById(id))

        let option={
                    backgroundColor: 'rgba(0,0,0,0)',
                    color: ['#1F6ABB','#3897C5','#A4C5E6'],
                    grid: {
                         show: true,
                         left: '13%',
                         top: '26%',
                         right: '6%',
                         bottom: '10%',
                         borderWidth: 0,
                         backgroundColor: 'rgba(0,0,0,0)',
                     },
                     tooltip:{
                     	show:false,
                     	textStyle:{
				            		fontSize:'80%',
				            	},
				            	formatter:function(params){
				            		console.log(params)
				            	}
                     },
                    xAxis: [
                        {
                        axisLabel :{
                            interval:0
                        },
                        axisPointer:{
                          show:true,
                          label:{
                          	fontSize:'70%',
                          	padding:[10,10*w]
                          },

                          lineStyle:{
                            type:"dashed"
                          }
                        },
                          show:true,
                        barGap: 0,
                      //  boundaryGap: false,
                        padding:0,
                        barMaxWidth:2,
                        type: 'category',
                        data: datax,
                        fontSize: "50%",
                        scale: true,
                        lineStyle:2,
                        splitNumber:6,
                        minInterval:1,
                        axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                             show: true,
                                lineStyle: {
                                    color: 'rgba(170,172,178,0.53)'
                             },
                        },
                         axisLabel: {
                             textStyle: {
                                 color: '#fff',//x坐标轴标签字体颜色
                                 fontSize: "75%",
                             },
                             margin: 15*w,
                             verticalAlign:'middle',
                        },
                        axisTick:{
                            show:false,
                        },
                        splitLine:{
                            //show:true,
                            lineStyle:{
                                color:'#20549f',
                                width:1,
                                type:'solid'
                            },
                        }

                        }
                    ],
                    yAxis:{
                    		name:"",
                    		nameTextStyle:{
                    			fontSize: '100%',
                    			verticalAlign:'bottom',
                    			align:'left',
                    			margin:[60,60,60,60]
                    		},
                        show:true,
                        nameTextStyle:{
                          color:'#ffffff'
                        },
                        minInterval: 1,
                 				splitNumber:5,
                        splitLine:{
                          show:false,
                        },
                         axisPointer:{
                          show:true,

                          lineStyle:{
                            type:"dashed"
                          },
                          label:{
                          	fontSize:'70%', 
                          	padding:[10,10*w],
                          	precision:0
                          }
                        },
                        axisLabel:{
                           show:true,
                          textStyle:{
                            color:'#fff',
                            fontSize: "75%",
                          }
                        },
                        axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                            show: true,
                            lineStyle: {
                                color: 'rgba(170,172,178,0.53)'
                            },
                        },
                        axisTick:{
                            show:false,
                        }
                    },
                    series : [
                    {
                        name:'计划',
                        type:'bar',
                        barMaxWidth:'30%',
                        data:datay,
                        itemStyle:{
                            normal: {
                               
                                 color: {
															    type: 'linear',
															    x: 0,
															    y: 0,
															    x2: 0,
															    y2: 1,
															    colorStops: [
                                    {offset: 0, color: '#86b6ff'},
                                    {offset: 0.5,color:'#6a95fe'},
                                    {offset: 1, color: '#8f88f7'}
                                    ],
															    globalCoord: false // 缺省为 false
															},
                            }
                        },
                        label:{
                        normal:{
                            show:true,
                            position:'top',
                            distance:5,
                            textStyle:{
                                color:'#2CC9E2',
                                fontSize:"70%"
                            }
                        }
                       },
                    }

                ]
            };
           let isIE = window.navigator.userAgent.indexOf('Trident')
          if(isIE>-1){ 
            	option.series[0].label.normal.distance = 10;
						}
        this.chart.setOption(option)
      },
      getData(){},
    request(range){
        let _self = this;
      //请求数据
        let start_end_instance =  new Start_end_class(this.apiName,'','',this.code,range);
        start_end_instance.get_response(_self.$el).then(re => {
        	//console.log(re.data)
        _self.oneweekMock = re.data.data;
        _self.redom7("righthz");
          this.isloading=false;
        })
        .catch(e=>{
            console.log(e)
        })
    }
    },
    created(){
    	this.request(this.timeRange);
    },
    components:{
    	vdate
    },
    mounted() {
      Bus.$on('timeRange',(val) => {
      	this.timeRange = val
      })
    },
  }
</script>
<style lang="less" type="text/less" scoped>
.main_content {
  width: 100%;
  height: 100%;
  position: relative;
}

.title{
	position: absolute;
	color: #fff;
	font-size: 0.6rem;
	top: 1.1rem;
	left: 6rem;
}
.t{
  top: 1.2rem;
}
.ieTitle{
	top: 1.2rem;
	font-size: 0.7rem;
}
.clock{
	width: 30%;
	height: 1.5rem;
	box-shadow: 1px 0 30px  rgba(1,1,13,0.4);
	border-radius: 0.3rem;
	font-size: 0.8rem;
	position: absolute;
	top: 0.7rem;
	left:25%;
	color: #fff;
}
.clock:hover{
	box-shadow: 1px 0 30px  rgba(1,1,13,1);
}
.load{
  width: 100%;
  height: 100%;
  position: absolute;

}
.loading{
    margin-top: 30%;
    height: 3.6rem;
    color: #05a1cd;
     font-size: 2.2rem;
  }
  .reload{
  width: 100%;
  height: 100%;
  position: absolute;

}
.reloading{
    margin-top: 30%;
    height: 10.8rem;
    width: 14.3rem;
    margin-left: 37%;
    font-size: 2.2rem;
  }
#righthz{
  width: 100%;
  height: 100%;
  div{
    width: 100%;
    height: 100%;
  }
}
.week{
    height: 1.5rem !important;
    width: 7rem !important;
    position: absolute;
    top: 5%;
    right: 10%;
    font-size:0.8rem;
    &:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
        line-height: 25px;
     }
    .oneweek{
      cursor: pointer;
      float: left;
      height: 1.5rem;
      line-height:1.5rem;
      width: 47%;
      color: #abb5d3;
      background-image:url('../../../assets/images/home/透明框—14日.png');
      background-size: 100% 100%;
      &.chose{
        background-image:url('../../../assets/images/home/透明框—7日.png');
          background-size: 100% 100%;
          color:#d3ddf9;
      }
    }
    .twoweek{
      cursor: pointer;
      float: right;
      height: 1.5rem;
      line-height:1.5rem;
      width: 47%;
      color: #abb5d3;
      background-image:url('../../../assets/images/home/透明框—14日.png');
      background-size: 100% 100%;
      &.chose{
        background-image:url('../../../assets/images/home/透明框—7日.png');
          background-size: 100% 100%;
          color:#d3ddf9;
      }
    }
  }
      .chose{
          background-image:url('../../../assets/images/home/透明框—7日.png');
          background-size: 100% 100%;
      }
</style>
