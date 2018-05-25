<template>
  <div class="main_content" v-show='show' id="A1loding">
  	<span class="title" :class='comStyle'>( 单位 : 人)</span>
    <div id="righthz"></div>
    <!--<div class="week">-->
        <!--<span class="oneweek " v-bind:class="{ chose: isActive }" @click='redom7'>7日</span>-->
        <!--<span class="twoweek" v-bind:class="{ chose: !isActive }" @click='redom14'>14日</span>-->
    <!--</div>-->
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
//import store from '../../../vuex/index'
import timeMixin from '@/common/js/mixin/timeMixin.js'
import Start_end_class from '@/common/js/star_end_class.js'
import Bus from '@/common/js/bus.js'
import {begindaytime} from '@/common/js/gtime.js'
import optionProps from '@/common/js/mixin/optionProps.js'
import vdate from '@/components/commonui/vueDate/app.vue'


export default {
    name:'a1',
    mixins: [timeMixin,optionProps],
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
//  store:store,
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
    		this.request();
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
      	//console.log(this.oneweekMock[i]._id.indexOf(0))
      	if(this.oneweekMock[i]._id.indexOf(0)){
      		this.oneweekMock[i]._id = this.oneweekMock[i]._id.substring(5,6)+"/"+this.oneweekMock[i]._id.substr(6)
          dataY.push(this.oneweekMock[i].total);
          dataX.push(this.oneweekMock[i]._id)
      	}else{
      		this.oneweekMock[i]._id = this.oneweekMock[i]._id.substring(4,6)+"/"+this.oneweekMock[i]._id.substr(6)
          dataY.push(this.oneweekMock[i].total);
          dataX.push(this.oneweekMock[i]._id)
      	}
      		
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
                         left: 66,
                         top: '26%',
                         right: '6%',
                         bottom: 30,
                         borderWidth: 0,
                         backgroundColor: 'rgba(0,0,0,0)',
                     },
                    xAxis: [
                        {
                        axisLabel :{
                            interval:0
                        },
                        axisPointer:{
                          show:true,

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
                             margin: 15,
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
                    			fontSize: 20,
                    			verticalAlign:'bottom',
                    			align:'left',
                    			margin:[60,60,60,60]
                    		},
                        show:true,
                        nameTextStyle:{
                          color:'#ffffff'
                        },
                        splitLine:{
                          show:false,
                        },
                         axisPointer:{
                          show:true,

                          lineStyle:{
                            type:"dashed"
                          },
                          label:{
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
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                    {offset: 0, color: '#86b6ff'},
                                    {offset: 0.5,color:'#6a95fe'},
                                    {offset: 1, color: '#5d88f7'}
                                    ]
                                )
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
        // this.$router.push({ path: '/' });
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
	font-size: 12px;
	top: 1.1rem;
	left: 6rem;
}
.t{
  top: 1.2rem;
}
.ieTitle{
	top: 1.2rem;
	font-size: 14px;
}
.clock{
	width: 30%;
	height: 26px;
	box-shadow: 1px 0 30px  rgba(1,1,13,0.4);
	border-radius: 6px;
	font-size: 0.8rem;
	position: absolute;
	top: 3%;
	left:25%;
	color: #fff;
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
