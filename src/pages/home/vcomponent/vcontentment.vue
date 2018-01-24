
<!--游客满意度-->
<template>
  <div>
    <div class="face"></div>
    <canvas id="c"></canvas>
    <input type="range" id="r" min="0" max="100" step="1">
    <span class="value">{{value}}%</span>
    <!--<span class="nub">{{nub}}<font>万人</font></span>-->
    <Loading v-show="isloading"></Loading>
  </div>
</template>

<script>
import Vue from 'vue'
import Rw from '@/common/js/until/index.js'
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
  name: 'a4',
  mixins: [optionProps],
  data () {
    return {
    		isloading:false,
        value:'',
        people:'',
    }
  },
  computed: {
    nub:function(){
    	//加上标点
      return Rw.string_until.addPoint(this.people)
    }
  },
  created(){
  	this.isloading = true;
  	this.getData();
  },
  methods: {
  	//请求数据
  	getData(){
  		api.touristSatisfaction(api.params).then( (re) =>{
    		let reData = re.data.data;
				if(re.status===200){
					this.isloading = false;
				}
					this.value = reData.value;
					this.people = reData.nub;
	    }).catch( (e) => {
	    	console.log(e);
	    })
  	}
  },
  components:{
  	Loading
  },
  mounted(){
    let _self = this;
     var canvas = document.getElementById('c');
        var ctx = canvas.getContext('2d');
        var range = document.getElementById('r');

        //range控件信息
        var rangeValue = range.value;
        var nowRange = 0;   //用于做一个临时的range

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
        var waveHeight = 6; //波浪高度,数越大越高
        var speed = 0.09; //波浪速度，数越大速度越快
        var xOffset = 0; //波浪x偏移量

        ctx.lineWidth = lineWidth;

        //画圈函数
        var IsdrawCircled = false;
        var drawCircle = function(){

            ctx.beginPath();
            ctx.strokeStyle = '#1080d0';
            ctx.arc(r, r, cR+5, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(r, r, cR, 0, 2 * Math.PI);
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
            ctx.fillStyle = "rgba(06, 85, 128, 0.8)";
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

            if(nowRange > rangeValue){
                var tmp = 1;
                nowRange -= tmp;
            }

            drawSin(xOffset);
            // drawText();

            xOffset += speed;
            requestAnimationFrame(render);
        }

        render();
  }
}
</script>

<style lang="less" scoped>
div{
    width:100%;
    height:100%;
    position:relative;
}
.face{
    width:9%;
    height:18%;
    display: block;
    position:absolute;
    top:48.2%;
    left:23%;
    background-image:url('../../../assets/images/home/迷之笑脸.png');
    background-size: 100% 100%;
        z-index:4;
}
#c{
    width:25%;
    height:53%;
    display: block;
    position:absolute;
    top:30%;
    left:15%;

}
.value{
    width:50%;
    height:53%;
    display: block;
    position:absolute;
    top:50%;
    right:12%;
    font-size:1.8rem;
    color:#6dffeb;
    /*font-family:numberFont;*/
}
.nub{
    width:50%;
    height:53%;
    display: block;
    position:absolute;
    top:52%;
    right:1%;
    font-size:1.5rem;
    color:white;
    font{
        font-size:1rem;
    }
}
#r{
    display: block;
    margin: 0 auto;
    display:none;
}
#r::before{
    color: black;
    content: attr(min);
    padding-right: 10px;
}
#r::after{
    color: black;
    content: attr(max);
    padding-left: 10px;
}
</style>
