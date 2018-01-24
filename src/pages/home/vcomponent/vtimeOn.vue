<template>
  <div class="A5">
      <div id="container"></div>
      <Loading v-show="isloading"></Loading>
  </div>
</template>
<script>
import Vue from 'vue'
import echarts_listen_resize from '@/common/js/echarts_listen_resize.js'
import echarts from 'echarts';
import Start_end_class from '@/common/js/star_end_class.js'
import Rw from '@/common/js/until/index'
import api from '@/api/moudles/tanzhenData'
import Loading from '@/components/commonui/loading/loading.vue'
export default {
    name: 'a5',
    data () {
      return {
        isloading:false,
        reTimer:null,
        data_arr:{},
        mins:60,
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
               backgroundColor: 'rgba(0,0,0,0)'
           },
           calculable: true,
           xAxis: [{
               type: 'category',
               //boundaryGap: ['0%','0%'],
               //在（type: 'category'）中设置data有效
               splitLine: { //坐标轴在 grid 区域中的分隔线；
                   show: false,
                   lineStyle: { //分割线颜色，可设单个，也可以设置数组。
                       color: 'rgba(170,172,178,0.33)'
                   }
               },
               axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                   show: true,
                   margin:12,
                   lineStyle: {
                       color: '#05a1cd',
                       shadowBlur:50,
                       shadowColor:'#05a1cd',
                   },
               },
               axisLabel: { 
               		 margin: 4,
                   textStyle: {
                       color: '#fff',//x坐标轴标签字体颜色
                       fontSize: '75%',
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
                   color:'#ffffff',
                   fontSize:'75%',
                   padding:[0,20,0,0]
                },
               min: 0,
               minInterval: 1,
               splitNumber:4,
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
                       fontSize: '90%',
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
                       itemStyle: { //折现拐点标志的样式
                           normal: {
                               color: 'rgba(113,191,255,1)',
                               borderColor:'rgba(113,191,255,1)',
                               borderWidth:10,
                               opacity:0,
                           }
                       },
//                      markLine: {
//					                data: [
//					                    {type: 'max', name: '最大值'},
//					                    {type: 'min', name: '最小值'}
//					                ]
//					            },
                   }

               ] //series结束
         },
      }
    },
    methods: {
      //添加数据
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
            this.chart = echarts.init(document.getElementById(id));
            this.chart.setOption(this.option);
            if (this.reTimer) {
                window.clearInterval(this.reTimer)
            }
            let date=_self.data_arr.date.slice(0,6);
            let data=_self.data_arr.data.slice(0,6);
            this.reTimer=setInterval(function () {
                i++;
                if(i > timerIndex){
                      let start_end_instance1 =  new Start_end_class('timeline',20,50);
                      start_end_instance1.get_timeline(_self.$el).then(re =>{
                          _self.data_arr = Rw.array_until.remove_common(_self.data_arr,re);
                          i=8;
                            //console.log(re);
                        _self.option.xAxis.data=re.date;
                        _self.option.series.data=re.data;
                        //console.log(_self.option.xAxis.data)
                        _self.option.yAxis.max = Math.max(...re.data);
                      })
                };
               _self.addData(i,date,data,_self.data_arr.date,_self.data_arr.data);

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
          this.$nextTick(echarts_listen_resize('container',this));
        },
        get_respose(){
          this.isloading = true;
            let _self = this;
            _self.mins= 60;
            self.btwsecends = 5;
            let start_end_instance =  new Start_end_class('timeline',_self.mins,Math.round((_self.mins*60) / _self.btwsecends));
            start_end_instance.get_timeline(_self.$el).then(re =>{
                _self.data_arr = re;
                //console.log(re.date)
              _self.option.xAxis.data=re.date.reverse();
              _self.option.series.data=re.data.reverse();
              _self.option.yAxis.max = Math.max(...re.data);
                Rw.judgment_until.typesof(_self.data_arr);
                _self.redom('container');
               this.isloading = false;
            })
          this.$nextTick(echarts_listen_resize('container',this));
        },
    },
    created(){
    	this.get_respose();
    },
    mounted() {
        this.$nextTick(echarts_listen_resize('container',this));
      },
    components:{
      Loading
    }
}
</script>

<style lang="less" scoped>
.A5{
    width:100%;
    height:100%;
  position: absolute;
    #container{
        width:100%;
        height:92%;
        margin-top: 1.6rem;
    }
}
</style>
