<style lang="less">
.d3{
    width:100%;
    height:100%;
    position:relative;
    h1{
        position:absolute;
        width:10rem;
        top:1.3rem;
        left:25%;
        text-align:left;
        font-size: 1.1rem;
        color:white;
    }
    img{                  
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
    ul{
        li{
            display:inline-block;
            float:left;
            width:12%;
            height:auto;
            margin-left:1%;
            text-align: center;

        }
    }
    .title-star{
         position:absolute;
         top:3rem;
         left:5%;
    }

    .linebox{
        position:relative;
        margin-top:5%;
        margin-left: 5%;
        width:90%;
        height:11%;
        .title{
            position:absolute;
            top:0;
            left:0;
            color:white;
        }
        .imgleft{
            position:absolute;
            bottom:12px;
            height:auto;
            width:10%;
            span{
                position:absolute;
                top:50%;
                left:50%;
                transform: translate(-50% ,-95%);
                font-size:0.8rem;
                font-family: numberFont;
            }
        }
        .imgright{
            position:absolute;
            bottom:12px;
            height:auto;
            width:10%;
        		
            span{
            	font-family: numberFont;
                position:absolute;
                top:50%;
                left:50%;
                transform: translate(-50% ,-95%);
                font-size:0.8rem;
            }
        }
        .titleleft{
            position:absolute;
            left: 1rem;
            bottom:15px;
            width: 3rem;
            height: 1rem;
        }
        .titleright{
            position:absolute;
            right: 1rem;
            bottom:15px;
            width: 3rem;
            height: 1rem;
        }
        .line{
            position:absolute;
            bottom: 0;
            width: 100%;
            height: 10px;
            .lineleft{
                position:absolute;
                left: 0;
                width: 55%;
                height: 100%;
                border-radius: 5px 0 0 5px;
            }
            .lineright{
                position:absolute;
                right: 0;
                width: 55%;
                height: 100%;
                border-radius:  0 5px 5px 0;
            }
        }
    }
    .progress{
        margin-top:16%;
    }
    .msg{
        position:relative;
        margin-top:3%;
        margin-left: 5%;
        width:90%;
        font-size: 0.7rem;
        color:white;
        .title{
            display:block;
            margin-left:0;
            text-align:left;
        }
        .comment{
            text-align:left;
            margin-top: 1.5rem;
            .name{
				font-size: 0.8rem;
            }
            .place{
                margin-left:20px;
            }
            .comment-star{
                display:inline-block;
                width:30%;
                transform: translateY(10%);
            }
            .text{
            	text-indent: 2em;
                display:block;
                margin-top:5px;
                line-height:1.5rem;
            }
        }
    }
}
</style>

<template>
    <div class="d3">
        <!--<vstar 
        class='title-star'
        :star='topStar.numb' 
        :style="{width:topStar.width}">
        </vstar>-->
        <vline :progressbar='oneprogressbar' class='progress'></vline>
        <!--<vline :progressbar='twoprogressbar'></vline>-->
        <!--<vline :progressbar='threeprogressbar'></vline>-->
        <div class="msg">
            <!--<span class="title">评论</span>-->
            <div class="comment">
                <span class="name">137****5565</span>
                <span class="place">{{commentProp.palce}}</span>
                <vstar 
                class='comment-star'
                :star='topStar.numb'>
                </vstar>
                <span class="text">
                    仙华山又名仙姑山，景区地址位于浙江省金华市浦江县境内城北2公里处，总面积18万平方公里。主峰少女峰，仙华山以奇秀的闪点峰林为胜，有着“第一仙峰”之称，感觉这里风景秀美，挺不错的
                </span>
            </div>
             <div class="comment">
                <span class="name">181****1484</span>
                <span class="place">{{commentProp.palce}}</span>
                <vstar 
                class='comment-star'
                :star='topStar.numb'>
                </vstar>
                <span class="text">
                   仙华山又名仙姑山，景区地址位于浙江省金华市浦江县境内城北2公里处，总面积18万平方公里。主峰少女峰，仙华山以奇秀的闪点峰林为胜，有着“第一仙峰”之称，感觉这里风景秀美，挺不错的
                </span>
            </div>
             <div class="comment">
                <span class="name">189****1244</span>
                <span class="place">{{commentProp.palce}}</span>
                <vstar 
                class='comment-star'
                :star='topStar.numb'>
                </vstar>
                <span class="text">
                    风景很美！一路爬的腰酸背痛，下次来得有所准备，拍了很多风景照片回去做壁纸！
                </span>
            </div>
        </div>
        <Loading v-show="isloading"></Loading>
    </div>
</template>

<script>
import Vue from 'vue'
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name: 'd3',
    mixins: [optionProps],
    props:['place'],
    data () {
        return {
        	commentProp:{},
        	isloading:false,
        	allData:{},
            topStar:{
                numb:3,
                width:'30%',
            },
            comment:{
                place:'常州',
                text:''
            },
            oneprogressbar:{
                title:'满意度',
                leftimg:require('../../../assets/images/home/d/compoment.png'),
                rightimg:null,
                leftProcess:90,
                rightProcess:10,
                leftColor:'#6dffeb',
                rightColor:'#4299b9',
                leftTitle:'',
                rightTitle:'',
 
            },
            twoprogressbar:{
                title:'男女比例',
                leftimg:require('../../../assets/images/home/d/men.png'),
                rightimg:require('../../../assets/images/home/d/women.png'),
                leftProcess:55,
                rightProcess:45,
                leftColor:'#7798ff',
                rightColor:'#ff77dd',
                leftTitle:'男',
                rightTitle:'女',
            },
            threeprogressbar:{
                title:'出行方式',
                leftimg:require('../../../assets/images/home/d/driver.png'),
                rightimg:require('../../../assets/images/home/d/team.png'),
                leftProcess:55,
                rightProcess:45,
                leftColor:'#ffdd6c',
                rightColor:'#ff719c',
                leftTitle:'自驾游',
                rightTitle:'团队游',
            },
            
            
            
        }
    },
    watch:{
    	place:function(){
    		this.oneprogressbar.leftProcess = this.allData[this.place].oneprogressbar.leftProcess;
			this.oneprogressbar.rightProcess = 100-this.allData[this.place].oneprogressbar.leftProcess;
			this.twoprogressbar.leftProcess = this.allData[this.place].twoprogressbar.leftProcess;
			this.twoprogressbar.rightProcess = 100-this.allData[this.place].twoprogressbar.leftProcess;
			this.threeprogressbar.leftProcess = this.allData[this.place].threeprogressbar.leftProcess;
			this.threeprogressbar.rightProcess = 100-this.allData[this.place].threeprogressbar.leftProcess;
			
			this.commentProp = this.allData[this.place].comment;
    	}
    },
    components:{
    },
    computed: { 
		commentProps(){
			return this.allData[this.place].comment;
		}
    },
    methods: {
		//请求数据
	  	getData(){
	  		api.contentRatio(api.params).then( (re) =>{
	  				let reData = re.data.data;
	  				this.allData = reData;
	  				
	  				//console.log(reData)
	  				
	  				this.oneprogressbar.leftProcess = reData[this.place].oneprogressbar.leftProcess;
	  				this.oneprogressbar.rightProcess = 100-reData[this.place].oneprogressbar.leftProcess;
	  				this.twoprogressbar.leftProcess = reData[this.place].twoprogressbar.leftProcess;
	  				this.twoprogressbar.rightProcess = 100-reData[this.place].twoprogressbar.leftProcess;
	  				this.threeprogressbar.leftProcess = reData[this.place].threeprogressbar.leftProcess;
	  				this.threeprogressbar.rightProcess = 100-reData[this.place].threeprogressbar.leftProcess;
	  				
	  				this.commentProp = reData[this.place].comment;
					if(re.status===200){
						this.isloading = false;
					}
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	}
    },
    created(){
    	this.isloading = true;
    	this.getData();
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
    },
    components:{
    	Loading
    }
}
Vue.component('vstar',{
        props:['star'],
        data(){
            return{
                 imgStar:require('../../../assets/images/home/d/star.png'),
            }
        },
        template:`<ul><li v-for='item in arr'><img :src="imgStar"/></li></ul>`,
        computed: { 
            arr:function(){
                let arrstar=[]
                for (var i = 0; i < this.star; i++) {
                    arrstar.push(i)
                }
                return arrstar
            }
        },
        methods:{
            chosen:function(){
            },
                
        },
    }
)
//Vue.component('vline',{
//      props:['progressbar'],
//      data(){
//          return{
//               imgStar:require('../../../assets/images/home/d/star.png'),
//          }
//      },
//      template:`
//      <div class='linebox'>
//          <span class='title'>{{progressbar.title}}</span>
//          <div class='imgleft' 
//              :style="{left:progressbar.leftProcess-15+'%'}">
//              <span>{{progressbar.leftProcess}}%</span>
//              <img :src="progressbar.leftimg"/></div>
//          <div class='imgright' 
//              :style="{right:progressbar.rightProcess-10+'%'}">
//              <span v-show='progressbar.rightimg'>{{progressbar.rightProcess}}%</span>
//              <img :src="progressbar.rightimg"/></div>
//          <font class='titleleft' :style="{color:progressbar.leftColor}">{{progressbar.leftTitle}}</font>
//          <font class='titleright' :style="{color:progressbar.rightColor}">{{progressbar.rightTitle}}</font>
//          <div class='line'>
//              <div class='lineleft' :style="{width:progressbar.leftProcess+'%',backgroundColor:progressbar.leftColor}"></div>
//              <div class='lineright' :style="{width:progressbar.rightProcess+'%',backgroundColor:progressbar.rightColor}"></div>
//          </div>
//      </div>`,
//      computed: { 
//          arr:function(){
//              let arrstar=[]
//              for (var i = 0; i < this.star; i++) {
//                  arrstar.push(i)
//              }
//              return arrstar
//          }
//      },
//      methods:{
//          chosen:function(){
//          },
//              
//      },
//  }
//)

Vue.component('vline',{
        props:['progressbar'],
        data(){
            return{
                 imgStar:require('../../../assets/images/home/d/star.png'),
            }
        },
        template:`
        <div class='linebox'>
            <span class='title'>{{progressbar.title}}</span>
            <div class='imgleft' 
                :style="{left:progressbar.leftProcess-15+'%'}">
                <span>{{progressbar.leftProcess}}%</span>
                <img :src="progressbar.leftimg"/></div>
            <div class='imgright' 
                :style="{right:progressbar.rightProcess-10+'%'}">
                <span v-show='progressbar.rightimg'>{{progressbar.rightProcess}}%</span>
                <img :src="progressbar.rightimg"/></div>
            <font class='titleleft' :style="{color:progressbar.leftColor}">{{progressbar.leftTitle}}</font>
            <font class='titleright' :style="{color:progressbar.rightColor}">{{progressbar.rightTitle}}</font>
            <div class='line'>
                <div class='lineleft' :style="{width:progressbar.leftProcess+'%',backgroundColor:progressbar.leftColor}"></div>
                <div class='lineright' :style="{width:progressbar.rightProcess+'%',backgroundColor:progressbar.rightColor}"></div>
            </div>
        </div>`,
        computed: { 
            arr:function(){
                let arrstar=[]
                for (var i = 0; i < this.star; i++) {
                    arrstar.push(i)
                }
                return arrstar
            }
        },
        methods:{
            chosen:function(){
            },
                
        },
    }
)
</script>

