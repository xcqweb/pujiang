<template>
    <div :class="comStyle">
        <canvas id="pieB2"></canvas>
        <div class="circle">
            <!--<img :src="imgacircle"/>-->
        </div>
        <span>{{percent}}%</span>
        <div class="text" v-show="isVideo"><font>预警客流</font><font></font></div>
        <p class="configBtn" @click="passagerConfig" v-show="!isVideo">设置</p>
      <Loading v-show="isloading"></Loading>
    </div>
</template>

<script>
import Vue from 'vue'
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
//import Start_end_class from '@/common/js/star_end_class.js'
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
        configNumber:''
    }
  },
  props:['isVideo'],
  computed: {
  	comStyle(){
  		if(this.isVideo){
    			return 'b2v'
    		}else{
    			return 'b2'
    		}
  	}
  },
  watch:{
  	code:function(){
  		this.request();
  		this.$store.state.currentCode = this.code;
  	}
  },
  methods:{
  	
  	//获取数据
	getData(){
		api.params.code= 0;
		api.getPassengerWarnSetList(api.params).then( (re) => {
			//console.log(re)
			let reData = re.data.data;
			//this.$store.state.dataList = reData;
			
		}).catch( e =>{
		      console.log(e);
		    })
	},
  	
  	//客流设置
  	passagerConfig(){
  		this.$store.state.showToast = true;
  		this.$store.state.currentCode = this.code;
  		
  		//console.log(this.$store.state.currentCode,this.code);
  	},
      redom(){
      	let _self = this;
     var canvas = document.getElementById('pieB2');
        var ctx = canvas.getContext('2d');
        //var range = document.getElementById('r');

        //range控件信息
        var rangeValue = 30;
        var nowRange  //用于做一个临时的range
        
    	nowRange=this.percent+10
      	nowRange = nowRange<=11&&nowRange>0?11:nowRange
		nowRange = nowRange>=100?100:nowRange

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
        var waveWidth = 0.015 ;   //波浪宽度,数越小越宽
        var waveHeight = 0; //波浪高度,数越大越高
        var speed = 0.1; //波浪速度，数越大速度越快
        var xOffset = 0; //波浪x偏移量

        ctx.lineWidth = lineWidth;

        //画圈函数
        var IsdrawCircled = false;
        var drawCircle = function(){
			
			  ctx.arc(126,126 ,98,0,2*Math.PI,false);  
			  ctx.strokeStyle = 'transparent';
		      ctx.stroke();  
			  ctx.fillStyle = 'rgba(0, 218, 255,0.2)';
			  ctx.fill();
			  
		      ctx.closePath();
		      ctx.beginPath();
		      ctx.strokeStyle="#00DAFF";
		      ctx.arc(126,231,2,0,2*Math.PI); 
		      ctx.stroke();
		      ctx.fillStyle = 'rgb(99, 188, 241)';
			  ctx.fill();
            
            for(var i=0; i<360; i++){
            	let s1 = 1-i/360
        		ctx.beginPath()
	            ctx.strokeStyle=`rgba(0, 218, 255,${s1})`;
	            ctx.arc(126,126,105,2*Math.PI*(90-i)/360,2*Math.PI*(90-i+1)/360);  
	            ctx.stroke();
            }
            
			
			
			ctx.beginPath();
            ctx.arc(r+1, r+1, cR+7, 0, 2 * Math.PI);
            ctx.clip();
        }

        //画sin 曲线函数
        var drawSin = function(xOffset){
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
            ctx.fillStyle = '#6dffeb';
            ctx.fill();

            ctx.restore();
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

        var render = function(){
            ctx.clearRect(0, 0, mW, mH);

            rangeValue = _self.value-10;

            if(IsdrawCircled == false){
                drawCircle();
            }

            if(nowRange <= rangeValue){
                var tmp = 1;
                nowRange += tmp;
            }

            if(nowRange >= rangeValue){
                var tmp = 1;
                nowRange -= tmp;
            }

            drawSin(xOffset);
              // drawText();

            xOffset += speed;
            requestAnimationFrame(render);
        }

        render();
      },
  request(){
	  api.params.code= this.code;
      api.passengerwarning(api.params).then( (re) => {
//  	axios.get('https://www.easy-mock.com/mock/5a55b07fde90b06840dd913f/example/passengerwarning').then( (re) => {
      //设置默认值
      this.nub = re.data.data.count;
      this.set_config = 100000;
      this.percent = re.data.data.warnPercent;
      this.configNumber = re.data.data.count;
      this.isloading=false;
      let nub = this.nub;
  	  let setconfig = this.nub*100/this.percent;
      	let Ratio = this.percent/100
	      let setColor = '';
	      if(Ratio<0.3){
	      	setColor='#1da7fe'
	      }else if(Ratio<0.5){
	      	setColor='#7460EE'
	      }else if(Ratio<0.7){
	      	setColor='#eee716'
	      }else if(Ratio<0.9){
	      	setColor='#cb1f1f'
	      }else{
	      	setColor='#f00'
	      }
		this.redom()
    }).catch( e =>{
      console.log(e);
    })
  }
  },
  mounted() {
  	this.$nextTick(this.request())
  },
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
        font-size: 1.6rem;
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
        height:12rem;
        width: 12rem;
        position:absolute;
        top: 0px;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: auto;
        //transform: translate(30%,12%) scale(0.9);
    }
    .circle{
        height: auto;
        width:110/223*100%;
        text-align: center;
        position:absolute;
        top:55%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .text{
        width:80%;
        position:absolute;
        bottom:0.6rem;
        left:50%;
        transform: translateX(-50%);
        font{
            margin-left:10%;
            color:#1da7fe;
            font-size:1rem;
            /*font-family: numberFont;*/
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
        height: 2rem;
        line-height: 2rem;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        color:#fff;
        font-size: 1.6rem;
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
        height:136px;
        width: 136px;
        position:absolute;
        top: 0px;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    .circle{
        height: auto;
        width:110/223*100%;
        text-align: center;
        position:absolute;
        top:55%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .text{
        width:80%;
        position:absolute;
        bottom:0.6rem;
        left:50%;
        transform: translateX(-50%);
        font{
            margin-left:10%;
            color:#fff;
            font-size:16px;
            /*font-family: numberFont;*/
        }
    }
    img{
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
}

</style>
