<template>
<div class="content">
  <div :id="optionOut.id" style="width:100%;height:100%">
  </div>
</div>  
</template>

<script type="text/javascript">
import echarts_resize from '../../common/js/echarts_resize.js'
import echarts from 'echarts';
export default {
props: [
        'optionOut',
    ],
data(){
    return{
        option:{
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            color:['#7460EE','#438AFF ','#02C753','#6AEDD9','#FC6ACB ','#FB7C7D'],
            legend: {
                left:'50px',
                top:'12%',
                width:'25%',
                itemGap:25,
                itemWidth:15,
                data:this.optionOut.lenData,
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top:'28%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : this.optionOut.xData
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name:'人数（单位：千）'
                }
            ],
            series : [
                {
                    name:'江南第一家',
                    type:'bar',
                    data:this.optionOut.series[0]
                    ,barWidth:10,
                },
                {
                    name:'白石湾风景区',
                    type:'bar',
                    data:this.optionOut.series[1]
                    ,barWidth:10,
                },
                {
                    name:'官岩山',
                    type:'bar',
                    data:this.optionOut.series[2]
                    ,barWidth:10,
                },
                {
                    name:'神丽峡',
                    type:'bar',
                    data:this.optionOut.series[3],
                    barWidth:10,
                },
                {
                    name:'水竹湾森林公园',
                    type:'bar',
                    data:this.optionOut.series[4],
                    barWidth:10,
                },
                {
                    name:'仙华山',
                    type:'bar',
                    data:this.optionOut.series[5],
                    barWidth:10,
                },
                {
                    name: '支付方式',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: '20%',
                    center: ['83%', '25%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value:335, name:'男'},
                        {value:310, name:'女'},
                    ]
                },

            ]
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
      this.$nextTick(echarts_resize(this.optionOut.id,this))
}
}
</script>

<style lang="less" scoped>
</style>
