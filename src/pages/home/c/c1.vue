<style lang="less" scoped>
.c1{
    width: 100%;
    height: 100%;
}
.week{
	z-index: 200;
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

<template>
<div class="c1">
    <!--<div class="week">-->
        <!--<span class="oneweek " v-bind:class="{ chose: isActive }" @click='redom("c1",0)'>7日</span>-->
        <!--<span class="twoweek" v-bind:class="{ chose: !isActive }" @click='redom("c1",1)'>14日</span>-->
    <!--</div>-->
    <div id="c1" style="width:100%;height:100%">
    </div>
    <Loading v-show="isloading"></Loading>
</div>  
</template>

<script type="text/javascript">
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts'
import adaptation from '@/common/js/mixin/adaptation.js'
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
export default {
    mixins: [adaptation],
    name:'c1',
    data(){
        return{
        	isloading:false,
            isActive:true,
            responseData7:{
            	series:[],
            	date:[]
            },
        }
      },
      computed: {
		
      },
      created(){
      	this.isloading = true;
      	this.getData();
      },
    methods:{
    	//请求数据
	  	getData(){
	  		api.tripMode(api.params).then( (re) =>{
	    		let reData7= re.data.data7;
	    		this.responseData7.series = reData7.series;
	    		this.responseData7.date = reData7.date;
					if(re.status===200){
						this.isloading = false;
					}
					this.redom("c1",0);
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	},
        redom(id,i){
        	let date=[];
        	let series=[];
        		this.isActive = true;
        		date = this.responseData7.date;
        		series = this.responseData7.series;
        	
            this.chart = echarts.init(document.getElementById(id));
            let option = {
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow',// 默认为直线，可选为：'line' | 'shadow'
                        label:{
                        	formatter:function(params){
                          		 return params.value+' '+'(百分比)'
                        	}
                        }
                    }
                },
                color:['#FB7C7D','#7460EE','#6AEDD9','#438AFF ','#02C753','#FC6ACB '],
                grid: {
                    left: '5%',
                    right: '10%',
                    bottom: '5%',
                    top:'28%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : date,
                        axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                                show: true,
                                lineStyle: {
                                    color: '#368df7'
                                },
                        },
                        axisLabel: {
                                 textStyle: {
                                     color: '#ffffff',//x坐标轴标签字体颜色
                                     fontSize: '85%',
                                 },
                            },
                        splitLine:{
                                show:false,
                                lineStyle:{
                                    color:'#20549f',
                                    width:1,
                                    type:'solid'
                                },
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                            show: false,
                            lineStyle: {
                                color: 'white'
                            },
                                
                        },
                        axisLabel:{
                            showMinLabel:true,
                            textStyle:{
                                color:'#ffffff',
                                fontSize: "90%",
                            },
                            formatter: '{value}%'
                        },
                        splitLine:{
                                show:false,
                                lineStyle:{
                                    color:'#20549f',
                                    width:1,
                                    type:'solid'
                                },
                        }
                    }
                ],
                series : [

                    {
                        name:'自驾游',
                        type:'bar',
                        data:series[0]
                        ,barMaxWidth:'16%',               
                    },
                    {
                        name:'公共交通',
                        type:'bar',
                        data:series[1]
                        ,barMaxWidth:'16%',   
                    },
                    {
                        name:'团队游',
                        type:'bar',
                        data:series[2]
                        ,barMaxWidth:'16%',   
                    },
//                  {
//                      name:'飞机',
//                      type:'bar',
//                      data:series[3],
//                      barMaxWidth:'8%',   
//                  },
//                  {
//                      name:'长途汽车',
//                      type:'bar',
//                      data:series[4],
//                      barMaxWidth:'8%',   
//                  },
//                  {
//                      name:'骑行',
//                      type:'bar',
//                      data:series[5],
//                      barMaxWidth:'8%',   
//                  }

                ]
            };
            this.chart.setOption(option);
        }
    },
    mounted() {
        this.$nextTick(echarts_resize('c1',this));
    },
    components:{
    	Loading
    }
}
</script>

