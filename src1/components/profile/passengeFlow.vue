<template>
  <div id="passengeFlow">
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
        color: ['#00ffff', '#00ffa2', '#f0e750'],
        grid: {
         show: true,
         left: '5%',
         top: '30%',
         right: '5%',
         bottom: '15%',
         borderWidth: 0,
         borderColor: 'rgba(170,172,178,0.33)',
         backgroundColor: 'rgba(0,0,0,0)',
        },
     calculable: true,
     xAxis: [{
         type: 'category',
         boundaryGap: false,
         //在（type: 'category'）中设置data有效
         data: ['1月', '2月', '3月', '4月', '5月'
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
                 color: 'rgba(170,172,178,0.53)'
             },
         },
         axisLabel: {
             textStyle: {
                 color: '#999999',//x坐标轴标签字体颜色
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
             textStyle: {
                 color: 'rgba(255,255,255,0.83)',
                 fontSize: 12,
             },
         },
         // splitArea: {
         //     show: true,
         //     areaStyle: {
         //         color: ['#112245', 'rgba(34,50,82,0.4)']
         //     }
         // }
     }],
     series: [{
                 name: '高危',
                 type: 'line',
                 smooth: false, //是否平滑曲线显示
                 lineStyle: { //线条样式 
                     normal: {
                         width: 2,
                         color:'#2CC9E2',
                     }
                 },
                 areaStyle: { //区域填充样式
                     normal: {
                         //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: '#098DFF'
                         }, {
                             offset: 1,
                             color: '#098DFF'
                         }], false),
                         opacity:0.8,
                     }
                 },
                 itemStyle: { //折现拐点标志的样式
                     normal: {
                         color: 'rgba(113,191,255,1)',
                         borderColor:'rgba(113,191,255,1)',
                         borderWidth:10,
                         opacity:0,
                     }
                 },
                 data: [0, 1900, 2100, 2954,3560]
             }

         ] //series结束
        }
    }
  },
methods:{
    redom(id){
        this.chart = echarts.init(document.getElementById(id));
         this.option.series[0].data[3]={
            symbolSize:15,
            value:2114,
            itemStyle: {
             normal: {
                 color: 'white',
                 opacity:1,
                 borderWidth:5,
                 borderColor:'#098DFF',
                 shadowBlur:5,
                 shadowColor:'#098DFF'
             }
         }
        }
        this.chart.setOption(this.option);
    }
},
mounted() {
      this.$nextTick(echarts_resize('passengeFlow',this))
}
}
</script>

<style lang="less" scoped>
#passengeFlow{
    width:100%;
    height:100%;
}
</style>
