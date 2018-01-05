<template>
  <div id="villageIncome">
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
             color: ['#3AA6F5', '#82CCE6', '#A699F9'],
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
             legend:{
              left:40,
              top:'20%',
              show:true,
              itemGap:25,
              itemWidth:10,
              data:[{
                name:'停车场收入',
                icon:'circle',
                textStyle:{
                  color:'#5F7078'
                }
              },{
                name:'公园收入',
                icon:'circle',
                textStyle:{
                  color:'#5F7078'
                }
              },{
                name:'交通收入',
                icon:'circle',
                textStyle:{
                  color:'#5F7078'
                }
              }
              ],
             },
             animation:true,
             animationDelay:1000,
             calculable: true,
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
             series: [{
                     name: '停车场收入',
                     type: 'line',
                     animation:true,
                     animationDuration: 2000,
                     smooth: true, //是否平滑曲线显示
                     lineStyle: { //线条样式 
                         normal: {
                             width: 1,
                             color:'white'
                         }
                     },
                     itemStyle:{
                        normal:{
                            borderWidth:0,
                            width:0,
                            opacity:0,
                        }
                     },
                     areaStyle: { //区域填充样式
                         normal: {
                             //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                             color: '#3AA6F5',
                             opacity:0.6,
                         }
                     },
                     z:40,
                     data: [0, 3122, 3921, 3132, 2560, 1230, 1550,454]
                 }, {
                     name: '公园收入',
                     type: 'line',
                     smooth: true,
                     lineStyle: {
                         normal: {
                             width: 1,
                             color:'white'
                         }
                     },
                     itemStyle:{
                        normal:{
                            borderWidth:0,
                            width:0,
                            opacity:0,
                        }
                     },
                     areaStyle: {
                         normal: {
                             color: '#82CCE6',
                             opacity:0.6,
                         }
                     },
                     z:30,
                     data: [0, 812, 2134, 1361, 413, 1330, 1301,900]
                 }, {
                     name: '交通收入',
                     type: 'line',
                     smooth: true,
                     lineStyle: {
                         normal: {
                             width: 1,
                             color:'white'

                         }
                     },
                     itemStyle:{
                        normal:{
                            borderWidth:0,
                            width:0,
                            opacity:0,
                        }
                     },
                     areaStyle: {
                         normal: {
                             color: '#A699F9',
                             opacity:0.6,
                         }
                     },
                     z:20,
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
      this.$nextTick(echarts_resize('villageIncome',this))
}
}
</script>

<style lang="less" scoped>
#villageIncome{
    width:100%;
    height:100%;
}
</style>
