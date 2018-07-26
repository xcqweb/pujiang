
<!--实时客流-->
<template>
  <div class="A5">
  	  
      <div id="container"></div>
      <Loading v-show="isloading"></Loading>
      <span class="num">{{currentNums}}<font></font></span>
      <span class="title" :class='comStyle'>( 单位 : 人次 )</span>
  </div>
</template>
<script>
import echarts from 'echarts';
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
        isloading:false,
        websocket:null,
        token:'',
        data:[],
        date:[],
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
        
        redomData(data,date){
                    let _self = this
                    _self.currentNum = data[data.length-1]||0
                    _self.chart.setOption({
                        xAxis: {
                            data: date
                        },
                    series: [{
                        data: data
                    }]
                });
        },   
        redom(){
        				if(this.chart){
        					this.chart.dispose()
        				}
                let _self=this            
                var dom = document.getElementById('container');
                this.chart = echarts.init(dom);
                if (this.option && typeof this.option === "object") {    
                   this.chart.setOption(this.option, true);
                } 
        },
        //转换日期格式
        transformDate(str){
        	let re = ''
        	re = `${str.substring(0,2)}:${str.substring(2,4)}:${str.substring(4,6)}`
        	return re
        },
        getData(){},
        //建立websocket连接
        connectWebsocket(){
        	let _self = this;
			    this.redom()
        	if ('WebSocket' in window) {  
			        this.websocket = new WebSocket("ws://115.29.17.176/pjsocket/websocket");  
			    }  
			    else {  
			        alert('Not support websocket')  
			    }  
        
         //连接成功建立的回调方法  
			    this.websocket.onopen = function (event) {  
			      console.log('websocket连接成功...')
			      this.token = "dghg6767ghyyy76yt5r"+Math.random()
			      this.send("{'code':'"+_self.code+"',token:'"+this.token+"'}");
			      
			    }  
			    //接收到消息的回调方法  
			    this.websocket.onmessage = function (event) {  
			    	_self.isloading = false
			    	if(_self.data.length>=_self.num){
			    		_self.data.shift()
			    		_self.date.shift()
			    	}
			    	let re = JSON.parse(event.data)
			    	let curTime = _self.transformDate(re.inTime)
			    	
			    	_self.date.push(curTime)
			    	_self.data.push(re.curSum)
			    	_self.redomData(_self.data,_self.date)
			    }  
			    
			    //连接关闭的回调方法  
			    this.websocket.onclose = function () {  
			        console.log('websocket连接关闭...')
			    }  
        }
    },
    watch:{
    	code:function(data){
    		let _self = this
    		this.isloading = true;
    		this.currentNum=0;
    		this.data = []
    		this.date = []
    		this.redom()
    		this.websocket.send("{'code':'"+data+"',token:'"+this.token+"'}");
    	}
    },
    mounted(){
    	this.$nextTick(this.connectWebsocket())
    },
    beforeDestroy(){
    	this.token = ''
    	this.websocket.close();
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
