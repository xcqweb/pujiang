<template>
  <div id="way">
  </div>
</template>

<script type="text/javascript">
import echarts_resize from '../../common/js/echarts_resize.js'
import echarts from 'echarts';
export default {
  data(){
    return{
    option:{
            backgroundColor: 'white',
             color: ['#7460EE', '#438AFF', '#02C753','#6AEDD9'],
             grid: {
                 show: true,
                 left: '2%',
                 top: '30%',
                 right: '2%',
                 bottom: '12%',
                 height:'75%',
                 borderWidth: 0,
                 borderColor: 'rgba(170,172,178,0.33)',
                 backgroundColor: 'rgba(0,0,0,0)',
             },
             animation:true,
             animationDelay:1000,
             calculable: true,
             legend:{
              left:40,
              top:'20%',
              show:true,
              itemGap:25,
              itemWidth:10,
              data:[{
                name:'火车',
                icon:'circle',
                textStyle:{
                  color:'#5F7078'
                }
              },{
                name:'自驾',
                icon:'circle',
                textStyle:{
                  color:'#5F7078'
                }
              },{
                name:'公交',
                icon:'circle',
                textStyle:{
                  color:'#5F7078'
                } 
              },{
                name:'徒步',
                icon:'circle',
                textStyle:{
                  color:'#5F7078'
                }
              }],
             },
             xAxis: [{
                 type: 'category',
                 boundaryGap: false,
                 //在（type: 'category'）中设置data有效
                 data: ['1月', '2月', '3月', '4月', '5月',
                     '6月', '7月', '8月'
                 ],

                 splitLine: { //坐标轴在 grid 区域中的分隔线；
                     show: false,
                     lineStyle: { //分割线颜色，可设单个，也可以设置数组。
                         color: 'rgba(170,172,178,0.33)'
                     }
                 },
                 axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                     show: true,
                     lineStyle: {
                         color: 'rgba(170,172,178,0.53)' //x轴线的样式
                     },
                 },
                 axisLabel: {
                     textStyle: {
                         color: '#999999',
                         fontSize: 15,
                     },
                 },
             }],
             yAxis: [{
                 type: 'value',
                 min: 0,
                 max: 4000,
                 splitLine: {
                     show: true,
                     lineStyle: {
                         color: 'rgba(170,172,178,0.33)'
                     }
                 },
                 axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                     show: false,
                     lineStyle: {
                         color: 'rgba(170,172,178,0.53)'
                     },
                 },
                 axisLabel: {
                    insdie:true,
                    margin:'-30',
                     textStyle: {
                         color: '#999999',
                         fontSize: 12,
                     },
                 },
             }],
             series: [
                      {
                     name: '火车',
                     type: 'line',
                     animation:true,
                     animationDuration: 2000,
                     smooth: true, //是否平滑曲线显示
                     lineStyle: { //线条样式 
                         normal: {
                             width: 1,
                             color:'#7460EE'
                         }
                     },
                     itemStyle:{
                        normal:{
                            borderWidth:0,
                            width:0,
                            opacity:0,
                        }
                     },
                     data: [0, 122, 1921, 2132, 3560, 2230, 550,2454]
                 },{
                     name: '自驾',
                     type: 'line',
                     animation:true,
                     animationDuration: 2000,
                     smooth: true, //是否平滑曲线显示
                     lineStyle: { //线条样式 
                         normal: {
                             width: 1,
                             color:'#438AFF'
                         }
                     },
                     itemStyle:{
                        normal:{
                            borderWidth:0,
                            width:0,
                            opacity:0,
                        }
                     },
                     data: [0, 3122, 3921, 3132, 2560, 1230, 1550,454]
                 }, {
                     name: '公交',
                     type: 'line',
                     smooth: true,
                     lineStyle: {
                         normal: {
                             width: 1,
                             color:'#02C753'
                         }
                     },
                     itemStyle:{
                        normal:{
                            borderWidth:0,
                            width:0,
                            opacity:0,
                        }
                     },
                     data: [0, 812, 2134, 1361, 413, 1330, 1301,900]
                 }, {
                     name: '徒步',
                     type: 'line',
                     smooth: true,
                     lineStyle: {
                         normal: {
                             width: 1,
                             color:'#6AEDD9'

                         }
                     },
                     itemStyle:{
                        normal:{
                            borderWidth:0,
                            width:0,
                            opacity:0,
                        }
                     },
                     data: [0, 832, 3921, 2914, 1954, 2120, 1670,32]
                 },

             ] //series结束
         },
    }
  },
methods:{
    redom(id){
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption(this.option);
    }
},
mounted() {
      this.$nextTick(echarts_resize('way',this))
}
}
</script>

<style lang="less" scoped>
#way{
    width:100%;
    height:100%;
}
</style>
