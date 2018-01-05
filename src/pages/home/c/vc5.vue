<template>
  <div class="main_content">
    <div id="vc5"></div>
  </div>
</template>
<script>
  import echarts_resize from '../../../common/js/echarts_resize.js'
  import echarts from 'echarts';
  import { mapGetters } from 'vuex'
  import store from '../../../vuex/index' 
  import { mapActions } from 'vuex'
  import timeMixin from '@/common/js/mixin/timeMixin.js'
  import Vue from 'vue'
  export default {
    mixins: [timeMixin],
    data() {
      return {
        chart: null,
        isActive:true,
        xnub:null,
        ynub:null,
        loading:true,
        reloading:false,
        oneweekMock:[
            {"nub":50,"date":"交通"},
            {"nub":33,"date":"住宿"},
            {"nub":60,"date":"餐饮"},
            {"nub":39,"date":"游玩"},
            {"nub":52,"date":"环境"},
            {"nub":42,"date":"消费"},
        ],
      }
    },
    store:store,
    computed:{

      isCase:{
        get: function(){
          return window.location.hash.length > 3 ? true :false;
        } 
      },
    },
    methods: {
    redom7(){
        if(this.chart){
            this.chart.dispose();
        }
      this.isActive=true;
      let dataY=[];
      let dataX=[];
      for (var i = 0; i < this.oneweekMock.length; i++) {
          dataY.push(this.oneweekMock[i].nub);
          dataX.push(this.oneweekMock[i].date)
      }
      this.$nextTick(echarts_resize('vc5',this,dataX,dataY))
    },
      redom (id,xyfonsiz,datax,datay) {
        var _self= this;
        _self.loading=false;
        this.chart = echarts.init(document.getElementById(id))
        let option={
                    backgroundColor: 'rgba(0,0,0,0)',
                    color: ['#1F6ABB','#3897C5','#A4C5E6'],
                    grid: {
                         show: true,
                         left: '15%',
                         top: '20%',
                         right: '5%',
                         bottom: '20%',
                         borderWidth: 0,
                         backgroundColor: 'rgba(0,0,0,0)',
                     },
                    xAxis: [
                        {
                        axisLabel :{  
                            interval:0   
                        }  ,
                        show:true,
                        barGap: 0,
                      //  boundaryGap: false,
                        
                        padding:0,
                        barMaxWidth:6,
                        type: 'category',
                        data: datax,
                        fontSize: 6,
                        scale: false,
                        lineStyle:2,
                        splitNumber:14,
                        minInterval:7,
                        axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
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
                        axisTick:{
                                show:false,
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
                    yAxis:{
                        show:true,
                        nameTextStyle:{
                          color:'#ffffff'
                        },
                        splitLine:{
                          show:false,
                        },
                        axisLabel:{
                            showMinLabel:true,
                            textStyle:{
                                color:'#ffffff',
                                fontSize: 12,
                            },
                            formatter: '{value} %'
                        },
                        axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                            show: false,
                            lineStyle: {
                                color: '#368df7'
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
                        barMaxWidth:'20%',
                        data:datay,
                        itemStyle:{
                            normal: {
                                color: '#57abfe'
                            }
                        },
                        label:{
                        normal:{
                            show:true,
                            position:'top',
                            textStyle:{
                                color:'#2CC9E2',
                            },
                            formatter: '{c}%'
                        }
                       },
                    }
                
                ]
            }//option
        this.chart.setOption(option)
      }
    },
    components:{},
    mounted() {
      this.redom7();
    }
  }
</script>
<style lang="less" type="text/less" scoped>
.main_content {
    width: 100%;
    height: 100%;
    position: relative;
    #vc5{
        width: 100%;
        height: 100%;
    }
}

</style>