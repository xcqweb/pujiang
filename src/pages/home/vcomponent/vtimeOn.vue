<template>
  <div class="A5">
  	  
      <div id="container"></div>
      <Loading v-show="isloading"></Loading>
      <span class="num">{{currentNums}}<font></font></span>
      <span class="title">( 单位 : 人)</span>
  </div>
</template>
<script>
import Vue from 'vue'
import echarts_listen_resize from '@/common/js/echarts_listen_resize.js'
import echarts from 'echarts';
import Start_end_class from '@/common/js/star_end_class.js'
import Rw from '@/common/js/until/index'
import api from '@/api/moudles/tanzhenData'
import optionProps from '@/common/js/mixin/optionProps.js'


let isIE = window.navigator.userAgent.indexOf('Trident');
export default {
    name: 'a5',
    mixins: [optionProps],
    data () {
      return {
      	currentNum:0,
        reTimer:null,
        data_arr:{},
        mins:60,
        btwsecends:5,
        option: {
            backgroundColor: 'rgba(0,0,0,0)',
            color: ['#00ffff', '#00ffa2', '#f0e750'],
            grid: {
               show: true,
               left: 66,
               top: '16%',
               right: '8%',
               bottom: 36,
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
                       color: 'rgba(170,172,178,0.33)',
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
               		 margin: 5,
               		 align:'left',
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
               name:'',
               nameTextStyle:{
                   color:'#ffffff',
                   fontSize:'75%',
                   padding:[0,20,0,0]
                },
               minInterval: 1,
               splitNumber:5,
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
                       fontSize: '80%',
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
    computed:{
    	currentNums(){
				return Rw.string_until.addPoint(this.currentNum)
			},
    },
    methods: {
        //添加数据
        addData(i,date,data,bigDate,bigData) {
        		function getTime(){
        			let date = new Date();
        			let h=date.getHours()< 10 ? '0'+date.getHours() : date.getHours(); //获取小时
							let m=date.getMinutes()< 10 ? '0'+date.getMinutes() : date.getMinutes(); //获取分
							let s=date.getSeconds()< 10 ? '0'+date.getSeconds() : date.getSeconds(); //获取秒
							return h+":"+m+":"+s
        		}
        		
          		bigDate[i] = getTime();
        		//console.log(i,bigDate[i],getTime())
            date.push(bigDate[i]);
            data.push(bigData[i]);
            date.shift();
            data.shift();
            if(isIE>-1){ 
            	this.currentNum = data[7];
						}else{ 
            	this.currentNum = data[31];
							
						}
            
        },
        redom(id){
            let _self=this;
            var i = 0;
            if(isIE>-1){ 
            	i=7;
						}else{ 
							i=32;
						}
            let timerIndex = Math.round((_self.mins*60) / _self.btwsecends)-5;
            this.chart = echarts.init(document.getElementById(id));
            this.chart.setOption(this.option);
            if (this.reTimer) {
                  window.clearInterval(this.reTimer)
            }
            let date=[];
            let data=[];
            if(isIE>-1){ 
							 date=_self.data_arr.date.slice(0,8);
            	 data=_self.data_arr.data.slice(0,8);
						}else{ 
							 date=_self.data_arr.date.slice(0,33);
            	 data=_self.data_arr.data.slice(0,33);
						}
            
            this.reTimer=setInterval(function () {
                i++;
               // console.log(i,timerIndex,_self)
		                if(i > timerIndex){
		                	_self.isloading = true;
		                	_self.chart.setOption({});
                        let start_end_instance1 =  new Start_end_class('timeline',_self.mins,Math.round((_self.mins*60) / _self.btwsecends),this.code);
                        start_end_instance1.get_timeline().then(re =>{
                            //_self.data_arr = Rw.array_until.remove_common(_self.data_arr,re.arr);
                            _self.data_arr = [];
                            _self.data_arr = re.arr;
                            if(isIE>-1){ 
														 		i=7;
															}else{ 
																 i=32;
															}
							            	//console.log(re)
                          _self.option.xAxis.data=re.arr.date;
               					 _self.option.series.data=re.arr.data;
               					// _self.option.yAxis.max = Math.max(...re.arr.data);
               					 //_self.chart = echarts.init(document.getElementById('container'));
              						_self.chart.setOption(_self.option);
              						if(re.code===200){
					                	_self.isloading = false;
					                }
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
            _self.$nextTick(echarts_listen_resize('container',_self));
        },
        getData(){},
        getData1(){
            let _self = this;
            if(this.chart){
            	this.chart.dispose();
            }
            this.chart = echarts.init(document.getElementById('container'));
            //_self.mins= 60;
            //self.btwsecends = 5;
            let start_end_instance =  new Start_end_class('timeline',_self.mins,Math.round((_self.mins*60) / _self.btwsecends),this.code);
            start_end_instance.get_timeline().then(re =>{
                _self.data_arr = re.arr;
                  //console.log(re);
              _self.option.xAxis.data=re.arr.date;
              _self.option.series.data=re.arr.data;
              //_self.option.yAxis.max = Math.max(...re.arr.data);
                Rw.judgment_until.typesof(_self.data_arr);
                _self.redom('container');
                if(re.code===200){
                	setTimeout( () => {
                		this.isloading = false;
                	},5000)
                	
                }
            })
            _self.$nextTick(echarts_listen_resize('container',_self));
        },
    },
    watch:{
    	code:function(){
    		this.isloading = true;
    		this.currentNum=0;
    		this.getData1();
    	}
    },
    created(){
    },
    mounted() {
        this.$nextTick( () => {
            	this.getData1();
            	echarts_listen_resize('container',this)
        });
      },
}
</script>

<style lang="less" scoped>
.A5{
    width:100%;
    height:100%;
  	position: absolute;
  	.title{
			position: absolute;
			color: #fff;
			font-size: 12px;
			top: 22px;
			left: 6rem;
		}
    #container{
        width:100%;
        height:92%;
        margin-top: 1.6rem;
    }
    .num{
    	position: absolute;
    	top: 8%;
    	right: 6%;
    	color: #ffe200;
    	border: 2px solid #375FFF;
    	padding: 0.3rem 0.6rem;
    	border-radius: 0.4rem;
    	font-family: numberFont;
    	font{
    		font-size: 0.6rem;
    		margin-left: 0.2rem;
    	}
    }
}
</style>
