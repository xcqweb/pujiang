<template>
    <div :class="comStyle">
        <canvas id="pieB2"></canvas>
       
        <span>{{percent}}%</span>
        <div class="text" v-show="isVideo"><font>客流预警</font></div>
        <p class="configBtn" @click="passagerConfig" v-show="!isVideo">设置</p>
        <img v-show="isVideo" class="line" src="../../../assets/images/circle/violet/line.png"/>
      	<Loading v-show="isloading"></Loading>
      	<!--使用if 每次重新渲染 并传递筛选景区-->
        <config v-if = "showToast" @closeToast='closeToast'></config>
    </div>
</template>

<script>
import Vue from 'vue'
import config from '@/components/commonui/config/scienceConfig'
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
import {begindaytime} from '@/common/js/gtime.js'
import optionProps from '@/common/js/mixin/optionProps.js'
import axios from 'axios'
export default {
  name: 'b2',
  mixins: [optionProps],
  data () {
    return {
    	code:0,
    	percent:0,
        imgacircle:require('../../../assets/images/home/b/circle.png'),
        nub:'',
        set_config:'',
        configNumber:'',
        showToast:false,
        requestAnimation:null
    }
  },
  props:['isVideo'],
  computed: {
  	comStyle(){ //兼容IE样式
  		let isIE = window.navigator.userAgent.indexOf('Trident')
       		if(isIE>-1){
       			if(this.isVideo){
		    			return 'b2vie'
		    		}else{
		    			return 'b2'
		    		}
       		}else{
       			if(this.isVideo){
		    			return 'b2v'
		    		}else{
		    			return 'b2'
		    		}
       		}
  	}
  },
  watch:{
  	code:function(){
  		this.request();
  	}
  },
  methods:{
  	
  	//获取数据
	getData(){
		api.params.code= 0;
		api.getPassengerWarnSetList(api.params).then( (re) => {
			//console.log(re)
			let reData = re.data.data;
		}).catch( e =>{
		      console.log(e);
		    })
	},
  	//设置预警颜色
  	changColor(p){
  		if(p<=50&&p>=0){
    		return '#6dffeb'
        }else if(p>50 && p<70){
    		return '#fda925'
        }else{
    		return '#ff0600'
        }
  	},
  	//客流设置
  	passagerConfig(){
  		this.showToast = true;
  	},
  	closeToast(){
  		this.showToast = false;
  	},
      redom(){
      	let _self = this;
     	var canvas = document.getElementById('pieB2');
        var ctx = canvas.getContext('2d');
        
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

		var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
        
        cancelAnimationFrame(this.requestAnimation)
		//画布属性
        var mW = canvas.width = 250;
        var mH = canvas.height = 250;
        var lineWidth = 2;

        //圆属性
        var r = mH / 2; //圆心
        var cR = r - 16 * lineWidth; //圆半径

        //Sin 曲线属性
        var sX = 0;
        var sY = mH / 2;
        var axisLength = mW; //轴长
        var waveWidth = 0.05 ;   //波浪宽度,数越小越宽
        var waveHeight = 5; //波浪高度,数越大越高
        var speed = 0.1; //波浪速度，数越大速度越快
        var xOffset = 0; //波浪x偏移量

        ctx.lineWidth = lineWidth;

        //画圈函数
        var IsdrawCircled = false;
        
        
        //range控件信息
        var rangeValue = 30;
        var nowRange  //用于做一个临时的range
        	if(this.percent<15){
        		speed = 0;
        		waveWidth = 0;
        		waveHeight = 0;
        		if(this.percent===0){
        			nowRange = 0
        		}else{
        			nowRange = this.percent+8
        		}
        		
        	}else if(this.percent>=70){
        		nowRange = this.percent-8
        	}else{
        		nowRange = this.percent
        	}
        	

    	
		nowRange = nowRange>=100?100:nowRange
        
        var drawCircle = function(){
			
			  ctx.arc(126,126,105,0,2*Math.PI,false);  
			  ctx.strokeStyle = 'transparent';
		      ctx.stroke();  
			  ctx.fillStyle = 'rgba(0, 218, 255,0.2)';
			  ctx.fill();
			  
		      ctx.closePath();
		      ctx.beginPath();
		      ctx.strokeStyle="#00DAFF";
		      ctx.arc(126,242,2,0,2*Math.PI); 
		      ctx.stroke();
		      ctx.fillStyle = 'rgb(99, 188, 241)';
			  ctx.fill();
            
            for(var i=0; i<360; i++){
            	let s1 = 1-i/360
        		ctx.beginPath()
	            ctx.strokeStyle=`rgba(0, 218, 255,${s1})`;
	            ctx.arc(126,126,116,2*Math.PI*(90-i)/360,2*Math.PI*(90-i+1)/360);  
	            ctx.stroke();
            }
			ctx.beginPath();
            ctx.arc(r+1, r+1, cR+12, 0, 2 * Math.PI);
            ctx.clip();
            ctx.closePath();
            
           
        }

        //画sin 曲线函数
        function drawSin(xOffset){
            ctx.save();
            var points=[];  //用于存放绘制Sin曲线的点
            ctx.beginPath();
            //在整个轴长上取点
            for(var x = sX; x < sX + axisLength; x += 20 / axisLength){
                //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
                var y = -Math.sin((sX + x) * waveWidth + xOffset);

                var dY = mH * (1 - nowRange / 100 );

                points.push([x, dY + y * waveHeight]);
                ctx.lineTo(x, dY + y * waveHeight);
            }
 			  
            //封闭路径
            ctx.lineTo(axisLength, mH);
            ctx.lineTo(sX, mH);
            ctx.lineTo(points[0][0],points[0][1]);
            
            ctx.fillStyle = _self.changColor(_self.percent);
            ctx.fill();
            
            ctx.beginPath();
            ctx.clip();
            ctx.restore();
            ctx.closePath();
        };

        //写百分比文本函数
        var drawText = function(){
            ctx.save();
            var size = 0.4*cR;
            ctx.font = size + 'px Microsoft Yahei';
            ctx.textAlign = 'center';
            ctx.fillStyle = "rgba(255,255,255,0)";
            ctx.fillText(~~_self.value + '%', r, r + size / 2);
            ctx.restore();
        };

        function render(){
            ctx.clearRect(0, 0, mW, mH);
            if(IsdrawCircled == false){
                drawCircle();
            }
            drawSin(xOffset);
			xOffset += speed;
			xOffset>100?xOffset=0:xOffset
			if(speed>0){ //水位低时不产生波浪
				_self.requestAnimation = requestAnimationFrame(render)
			}
        }
		render()
      },
  request(){
	  api.params.code= this.code;
      api.passengerwarning(api.params).then( (re) => {
      this.percent = re.data.data.warnPercent;
      this.isloading=false;
		this.redom()
    }).catch( e =>{
      console.log(e);
    })
  }
  },
  beforeDestroy(){
  	cancelAnimationFrame(this.requestAnimation) //解除监听
  },
  mounted() {
  	this.$nextTick(this.request())
  },
   components:{
    	config
    }
}
</script>

<style lang="less" scoped>
.b2{
    height:100%;
    width:100%;
    position:relative;
    span{
        position:absolute;
        display: block;
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        color:#fff;
        font-size: 1.8rem;
        font-family: numberFont;
    }
    .configBtn{
    	position: absolute;
    	right: 5%;
    	top: 5%;
    	color: #5798CC;
    	font-weight: bold;
    	border: 0.2rem solid #50A6D5;
    	border-radius: 0.4rem;
    	padding: 0.2rem 0.8rem;
    	text-shadow: 0 0 10rem #50A6D5;
    	cursor: pointer;
    }
    .configBtn:hover{
    	color: #8bb2d2;
    	border-color: #8bb2d2;
    }
    #pieB2{
        height:12rem;
        width: 12rem;
        position:absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    
    .text{
        width:80%;
        position:absolute;
        bottom:0.6rem;
        left:50%;
        font{
            margin-left:10%;
            color:#1da7fe;
            font-size:1rem;
        }
    }
    img{
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
}


.b2v{
    height:100%;
    width:100%;
    position:relative;
    span{
        position:absolute;
        display: block;
        width: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: 5rem auto;
        color:#fff;
        font-size: 1.5rem;
        font-family: numberFont;
    }
    .configBtn{
    	position: absolute;
    	right: 5%;
    	top: 5%;
    	color: #5798CC;
    	font-weight: bold;
    	border: 0.2rem solid #50A6D5;
    	border-radius: 0.4rem;
    	padding: 0.2rem 0.8rem;
    	cursor: pointer;
    }
    #pieB2{
        height:8.5rem;
        width: 8.5rem;
        position:absolute;
        top: -2.3rem;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    .line{
    	margin-top: 2.15rem !important;
    }
    .text{
        width:80%;
        position:absolute;
        bottom:1.5rem;
        right: -3.8rem;
        font{
            margin-left:10%;
            color:#fff;
            font-size:1rem;
            position: absolute;
            left: -2.2rem;
            bottom: 0.1rem;
            font-family: numberFont;
        }
    }
    img{
        width: 7.3rem;
    }
}

.b2vie{
    height:100%;
    width:100%;
    position:relative;
    span{
        position:absolute;
        display: block;
        width: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: 5.3rem auto;
        color:#fff;
        font-size: 1.8rem;
        font-family: numberFont;
    }
    .configBtn{
    	position: absolute;
    	right: 5%;
    	top: 5%;
    	color: #5798CC;
    	font-weight: bold;
    	border: 0.2rem solid #50A6D5;
    	border-radius: 0.4rem;
    	padding: 0.2rem 0.8rem;
    	cursor: pointer;
    }
    #pieB2{
        height:8.5rem;
        width: 8.5rem;
        position:absolute;
        top: -1rem;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    .line{
    	margin-top: 2.5rem !important;
    }
    .text{
        width:80%;
        position:absolute;
        bottom:0.6rem;
        right:-3.6rem;
        font{
            margin-left:10%;
            color:#fff;
            font-size:1rem;
            position: absolute;
            left: -2rem;
            bottom: 0.2rem;
            font-family: numberFont;
        }
    }
    img{
        width: 7.3rem;
    }
}

</style>
