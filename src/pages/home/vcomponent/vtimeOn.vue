<template>
  <div class="A5">
  	  
      <div id="container"></div>
      <Loading v-show="isloading"></Loading>
      <span class="num">{{currentNums}}<font></font></span>
      <span class="title" :class='comStyle'>( 单位 : 人次 )</span>
  </div>
</template>
<script>
import echarts_listen_resize from '@/common/js/echarts_listen_resize.js'
import echarts from 'echarts';
import Start_end_class from '@/common/js/star_end_class.js'
import Rw from '@/common/js/until/index'
import optionProps from '@/common/js/mixin/optionProps.js'
let w = document.body.clientWidth/1920
let isIE = !window.navigator.userAgent.indexOf('Chrome');
export default {
    name: 'a5',
    mixins: [optionProps],
    data () {
      return {
      	currentNum:0,
      	barNum:0,
        reTimer:null,
        data_arr:{},
        mins:10,
        isloading:false,
        btwsecends:5,
        option: {
            backgroundColor: 'rgba(0,0,0,0)',
            color: ['#00ffff', '#00ffa2', '#f0e750'],
            grid: {
               show: true,
               left: '13%',
               top: '26%',
               right: '8%',
               bottom: '8%',
               borderWidth: 0,
               borderColor: 'rgba(170,172,178,0.36)',
               backgroundColor: 'rgba(0,0,0,0)'
           },
           calculable: true,
           xAxis: [{
               type: 'category',
               boundaryGap: ['10%','10%'],
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
               		 margin: 15*w,
               		 align:'left',
               		 verticalAlign:'middle', 
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
                   fontSize:'100%',
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
                               width: 5*w,
                               color:'#2CC9E2',
                               shadowColor: '#060f2f',
                                shadowBlur: 4,
                                shadowOffsetY:16,
                           }
                       },
                       itemStyle: { //折现拐点标志的样式
                           normal: {
                               color: {
															    type: 'linear',
															    x: 0,
															    y: 0,
															    x2: 0,
															    y2: 1,
															    colorStops: [{
															        offset: 0, color: 'rgba(113,191,255,1)' // 0% 处的颜色
															    }, {
															        offset: 1, color: 'rgba(113,191,255,0.01)' // 100% 处的颜色
															    }],
															    globalCoord: false // 缺省为 false
															},
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
    props:['classt','num'],
    computed:{
    	currentNums(){
				return Rw.string_until.addPoint(this.currentNum)
			},
			comStyle(){
       		if(isIE>-1){
       			if(this.classt){
       				return 'pieTitle';
       			}else{
       				return 'ieTitle';
       			}
       			
       		}else{
       			if(this.classt){
       				return 't';
       			}
       		}
    	}
    },
    methods: {
        addZero(now){
            if(now.getMinutes() > 9){
                
                var minutes =now.getMinutes() 
            }else{
                var minutes ="0"+now.getMinutes()
            }
            if(now.getSeconds()>9){
                var seconds =now.getSeconds() 
            }else{
                var seconds ="0"+now.getSeconds()
            }
            if(now.getHours()>9){
                var hours =now.getHours() 
            }else{
                var hours ="0"+now.getHours()
            }
            return [ hours,minutes,seconds].join(':')
        },
        redomData(val){
                let _self=this
                var date = [];
                var data = [];
                let  powAverage =2
                let  average =1

                if(val>1440){
                     powAverage = val/2000 ;
                     average = val/1440 ;
                }else{
                     powAverage = 2 ;
                     average = 1 ;
                }
				function updateRandom() {
					  var p = Math.random(), n = Math.random() / 20;
					  if( p < 0.9 )
					    return 0.9 + n;
					  if( p < 1 )
					    return 0.95 + n;
					}
                for(let xi = this.num+1; xi >1;xi--){
                    date.push(this.addZero(new Date(new Date().getTime()+10*1000 - xi*5 * 1000)));
                    data.push((val*updateRandom()).toFixed(0))
                }
                
                function randomData() {
                	 var nowDate = new Date();
                   var now = +new Date(nowDate.getTime());
                    var nows = new Date(+now);
                    if(Math.random()>0.4 && powAverage>10){
                        value =(1- (Math.random()-1)/2)*average;
                    }else{
                        var value = Math.pow(Math.random()*powAverage,2);
                        
                    }
                    return {
                            xData: _self.addZero(nows),
                            sData: (val*updateRandom()).toFixed(0)
                    }
                }
                _self.currentNum = data[_self.num-2]
                _self.option.xAxis.data=date;
                _self.option.series.data=data;
                 _self.chart.setOption({
                        xAxis: {
                            data: date
                        },
                    series: [{
                        data: data
                    }]})
                
                if (_self.reTimer) {
                    window.clearInterval(_self.reTimer)
                }
                let count = 0;
                _self.reTimer=setInterval(function () {
                		count++
                		if(count>120){ //15分钟跟新一次接口数据
                			_self.getData({code:_self.code})
                		}
                    date.shift();
                    data.shift();
                    date.push(randomData().xData);
                    data.push(randomData().sData);
                    _self.option.xAxis.data=date;
                    _self.option.series.data=data;
                    _self.currentNum = data[_self.num-2]
                    _self.chart.setOption({
                        xAxis: {
                            data: date
                        },
                    series: [{
                        data: data
                    }]
                });
            }, 5000);
        },   
        redom(){
                let _self=this            
                var dom = document.getElementById('container');
                this.chart = echarts.init(dom);
                if (this.option && typeof this.option === "object") {    
                   this.chart.setOption(this.option, true);
                } 
        },
        getData(data){
            api.timeOn(data).then( r => {
                if(r.data.code ==="200"||r.data.code ===200){
                    this.barNum = r.data.data.num+Math.random();
                    this.redom()
                    this.redomData(this.barNum)
                    this.isloading = false
                }
            })
        }
        
    },
    watch:{
    	code:function(data){
    		this.isloading = true;
    		this.currentNum=0;
    		this.getData({code:data})
    	}
    },
    beforeDestroy(){
    	window.clearInterval(this.reTimer)
    	this.reTimer = null
    }
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
			font-size: 0.6rem;
			top: 1.5rem;
			left: 6rem;
		}
    .t{
      top: 1.2rem;
    }
    .ieTitle{
    	top: 1.55rem;
    	font-size: 0.7rem;
    }
    .pieTitle{
    	top: 1.3rem;
    	font-size: 0.7rem;
    }
    #container{
        width:100%;
        height:100%;
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
    	text-shadow: 0 0 0.1rem #ffe200;
    	box-shadow: 0 0 0.8rem #375FFF inset;
    	font{
    		font-size: 0.6rem;
    		margin-left: 0.2rem;
    	}
    }
}
</style>
