<template>
  <div class="main_content" v-show='show' id="A1loding">
    <div id="righthz"></div>
    <div class="week">
        <span class="oneweek " v-bind:class="{ chose: isActive }" @click='redom7'>7日</span>
        <span class="twoweek" v-bind:class="{ chose: !isActive }" @click='redom14'>14日</span>
    </div>
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
import Start_end_class from '@/common/js/star_end_class.js'
import Bus from '@/common/js/bus.js'
import axios from 'axios'
import {begindaytime} from '@/common/js/gtime.js'
export default {
    name:'a1',
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
            {"nub":"1293","date":"6/14"},
            {"nub":"2331","date":"6/15"},
            {"nub":"1012","date":"6/16"},
            {"nub":"999","date":"6/17"},
            {"nub":"2458","date":"6/18"},
            {"nub":"2122","date":"6/19"},
            {"nub":"1789","date":"6/20"}
        ],
        twoWeekMock:[
            {"nub":"1293","date":"6/14"},
            {"nub":"2331","date":"6/15"},
            {"nub":"1012","date":"6/16"},
            {"nub":"999","date":"6/17"},
            {"nub":"2458","date":"6/18"},
            {"nub":"2122","date":"6/19"},
            {"nub":"1789","date":"6/20"},
            {"nub":"1293","date":"6/21"},
            {"nub":"2331","date":"6/22"},
            {"nub":"1012","date":"6/23"},
            {"nub":"999","date":"6/24"},
            {"nub":"2458","date":"6/25"},
            {"nub":"2122","date":"6/26"},
            {"nub":"1789","date":"6/27"}
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
    store:store,
    computed:{

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
      this.$nextTick(echarts_resize('righthz',this,dataX,dataY))
    },
    redom14(){
        if(this.chart){
            this.chart.dispose();
        }
        let dataY=[];
        let dataX=[];
        for (var i = 0; i < this.twoWeekMock.length; i++) {
            dataY.push(this.twoWeekMock[i].nub);
            dataX.push(this.twoWeekMock[i].date)
        }
    this.isActive=false;
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
                         left: '15%',
                         top: '30%',
                         right: '10%',
                         bottom: '10%',
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
                        fontSize: 6,
                        scale: true,
                        lineStyle:2,
                        splitNumber:14,
                        minInterval:7,
                        axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                             show: true,
                                lineStyle: {
                                    color: 'rgba(170,172,178,0.53)'
                             },
                        },
                         axisLabel: {
                             textStyle: {
                                 color: '#ffffff',//x坐标轴标签字体颜色
                                 fontSize: xyfonsiz,
                             },
                        },
                        axisTick:{
                                show:false,
                        },
                        splitLine:{
                            show:true,
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
                            color:'rgba(0,0,0,0)',
                            fontSize: xyfonsiz,
                          }
                        },
                        axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                            show: false,
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
                        barMaxWidth:'50%',
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
                            textStyle:{
                                color:'#2CC9E2',
                            }
                        }
                       },
                    }

                ]
            };
        this.chart.setOption(option)
      },
    request(){
        let _self = this;
        // this.$router.push({ path: '/' });
      //请求数据
        let start_end_instance =  new Start_end_class('passenger',begindaytime);
        start_end_instance.get_response(_self.$el).then(re => {
          console.log(re+"kkkk");
        _self.twoWeekMock = re.data.data;
        _self.oneweekMock = re.data.data.substr(7);
        _self.redom7();
        $loading.close();
        })
        .catch(e=>{
            console.log(e+' ')
        })
    }
    },
    components:{},
    created() {
          this.request();
          this.redom7();
    }
  }
</script>
<style lang="less" type="text/less" scoped>
.main_content {
  width: 100%;
  height: 100%;
  position: relative;
}
.load{
  width: 100%;
  height: 100%;
  position: absolute;

}
.loading{
    margin-top: 30%;
    height: 50px;
    color: #05a1cd;
     font-size: 30px;
  }
  .reload{
  width: 100%;
  height: 100%;
  position: absolute;

}
.reloading{
    margin-top: 30%;
    height: 150px;
    width: 200px;
    margin-left: 37%;
    font-size: 30px;
  }
#righthz{
  width: 100%;
  height: 90%;
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
