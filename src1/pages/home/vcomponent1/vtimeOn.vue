<template>
  <div class="A5">
    <div id="container"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import echarts_listen_resize from '@/common/js/echarts_listen_resize.js'
import echarts from 'echarts';
import Start_end_class from '@/common/js/star_end_class.js'
import Rw from '@/common/js/until/index'
export default {
    name: 'a5',
    data () {
      return {
        reTimer:null,
        data_arr:{},
        mins:20,
        btwsecends:5,
        option: {
            backgroundColor: 'rgba(0,0,0,0)',
            color: ['#00ffff', '#00ffa2', '#f0e750'],
            grid: {
               show: true,
               left: '10%',
               top: '15%',
               right: '5%',
               bottom: '10%',
               borderWidth: 0,
               borderColor: 'rgba(170,172,178,0.33)',
               backgroundColor: 'rgba(0,0,0,0)',
           },
           calculable: true,
           xAxis: [{
               type: 'category',
               boundaryGap: false,
               //在（type: 'category'）中设置data有效
               splitLine: { //坐标轴在 grid 区域中的分隔线；
                   show: false,
                   lineStyle: { //分割线颜色，可设单个，也可以设置数组。
                       color: 'rgba(170,172,178,0.33)'
                   }
               },
               axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                   show: true,
                   lineStyle: {
                       color: '#05a1cd',
                       shadowBlur:50,
                       shadowColor:'#05a1cd',
                   },
               },
               axisLabel: {
                   textStyle: {
                       color: '#05a1cd',//x坐标轴标签字体颜色
                       fontSize: 15,
                   },
               },
               axisTick:{
                    show:false,
                }
           }],
           yAxis: {
               type: 'value',
               name:'单位：人',
               nameTextStyle:{
                          color:'#ffffff'
                },
               min: 0,
               minInterval: 1,
               splitNumber:2,
               splitLine: {
                   show: false,
                   lineStyle: {
                       color: 'rgba(170,172,178,0.33)'
                   }
               },
               axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                   show: true,
                   lineStyle: {
                       color: '#05a1cd'
                   },
               },
               axisLabel: {
                   textStyle: {
                       color: '#ffffff',
                       fontSize: 12,
                   },
               },
               axisTick:{
                    show:false,
                },
                axisPoiner:{
                    label:{
                        show:true,

                    }
                }
               // splitArea: {
               //     show: true,
               //     areaStyle: {
               //         color: ['#112245', 'rgba(34,50,82,0.4)']
               //     }
               // }
           },
           series: [{
                       type: 'line',
                       smooth: true, //是否平滑曲线显示
                       lineStyle: { //线条样式 
                           normal: {
                               width: 2,
                               color:'#2CC9E2',
                           }
                       },

                    //    areaStyle: { //区域填充样式
                    //        normal: {
                    //            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    //            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //                offset: 0,
                    //                color: 'rgba(0,222,255,0.4)'
                    //            }, {
                    //                offset: 1,
                    //                color: 'rgba(0,222,255,0)'
                    //            }], false),
                    //            opacity:0.8,
                    //        }
                    //    },
                       itemStyle: { //折现拐点标志的样式
                           normal: {
                               color: 'rgba(113,191,255,1)',
                               borderColor:'rgba(113,191,255,1)',
                               borderWidth:10,
                               opacity:0,
                           }
                       },
                   }

               ] //series结束
         },
      }
    },
    computed: { 
    },
    methods: {
        addData(i,date,data,bigDate,bigData) {
            date.push(bigDate[i]);
            data.push(bigData[i]);
            date.shift();
            data.shift();
        },
        redom(id){
            let _self=this;
            var i = 8;
            let timerIndex = Math.round((_self.mins*60) / _self.btwsecends)-5;
            $loading.open({el:_self.$el,message:'图表绘制中',reload:false})
            this.chart = echarts.init(document.getElementById(id));
            this.chart.setOption(this.option);
            if (this.reTimer) {
                window.clearInterval(this.reTimer)
            }
            let date=_self.data_arr.date.slice(0,8);
            let data=_self.data_arr.data.slice(0,8);

            this.reTimer=setInterval(function () {
                i++;
                
                if(i > timerIndex){
                    let start_end_instance1 =  new Start_end_class('timeline',20,500);
                    start_end_instance1.get_timeline(_self.$el).then(re =>{
                        // console.log(re)
                        _self.data_arr = Rw.array_until.remove_common(_self.data_arr,re)
                        i=8;
                    }) 
                };
                _self.addData(i,date,data,_self.data_arr.date,_self.data_arr.data);
                _self.option.xAxis.data=date;
                _self.option.series.data=data;
                _self.option.yAxis.max = Math.max(...data);
                $loading.close();
                _self.chart.setOption({
                    xAxis: {
                        data: date
                    },
                    series: [{
                        name:'成交',
                        data: data
                    }]
                });
            }, _self.btwsecends*1000);
        },
        get_respose(){
            let _self = this;
            _self.mins= 20;
            self.btwsecends = 5;
            let start_end_instance =  new Start_end_class('timeline',_self.mins,Math.round((_self.mins*60) / _self.btwsecends));
            start_end_instance.get_timeline(_self.$el).then(re =>{
                _self.data_arr = re ;
                console.log(re)
                Rw.judgment_until.typesof(_self.data_arr)
                _self.$nextTick(echarts_listen_resize('container',_self))
                _self.redom('container')
            })
        },
    },
    mounted() {
        this.get_respose();
        
      },
    components:{

    }
}
</script>

<style lang="less" scoped>
.A5{
    width:100%;
    height:100%;
    #container{
        width:100%;
        height:100%;
    }
}
</style>