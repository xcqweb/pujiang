<style lang="less" scoped>
.c1{
    width: 100%;
    height: 100%;
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

<template>
<div class="c1">
    <div class="week">
        <span class="oneweek " v-bind:class="{ chose: isActive }" @click=''>7日</span>
        <span class="twoweek" v-bind:class="{ chose: !isActive }" @click=''>14日</span>
    </div>
    <div id="c1" style="width:100%;height:100%">
    </div>
</div>  
</template>

<script type="text/javascript">
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts'
import adaptation from '@/common/js/mixin/adaptation.js'
export default {
    mixins: [adaptation],
    name:'c1',
    data(){
        let series=[
                [320, 332, 301, 334,232, 301 ,],
                [120, 132, 101, 134,120, 232, ],
                [120, 232, 301, 134, 320, 332,],
                [62, 82, 91, 84,320, 332 ,],
                [62, 118, 64, 106,232, 301 ,],
                [120, 232, 301, 234,120, 232 ,],
            ]
        let date14=['6/13','6/14','6/15','6/16','6/17','6/18','6/19','6/20','6/21','6/22','6/23','6/24','6/25','6/26']
        let date7=['6/13','6/14','6/15','6/16','6/17','6/18',]
        return{
            isActive:true,
            option:{
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                color:['#7460EE','#438AFF ','#02C753','#6AEDD9','#FC6ACB ','#FB7C7D'],
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
                        data : date7,
                        axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                                show: true,
                                lineStyle: {
                                    color: '#368df7'
                                },
                        },
                        axisLabel: {
                                 textStyle: {
                                     color: '#ffffff',//x坐标轴标签字体颜色
                                     fontSize: 12,
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
                                fontSize: 10,
                            },
                            formatter: '{value}人'
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
                        name:'江南第一家',
                        type:'bar',
                        data:series[0]
                        ,barMaxWidth:'5%',               
                    },
                    {
                        name:'白石湾风景区',
                        type:'bar',
                        data:series[1]
                        ,barMaxWidth:'5%',   
                    },
                    {
                        name:'官岩山',
                        type:'bar',
                        data:series[2]
                        ,barMaxWidth:'5%',   
                    },
                    {
                        name:'神丽峡',
                        type:'bar',
                        data:series[3],
                        barMaxWidth:'5%',   
                    },
                    {
                        name:'水竹湾森林公园',
                        type:'bar',
                        data:series[4],
                        barMaxWidth:'5%',   
                    },
                    {
                        name:'仙华山',
                        type:'bar',
                        data:series[5],
                        barMaxWidth:'5%',   
                    },

                ]
            },
        }
      },
      computed: {

      },
    methods:{
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            this.chart.setOption(this.option);
        }
    },
    mounted() {
          this.$nextTick(echarts_resize('c1',this))
    }
}
</script>

