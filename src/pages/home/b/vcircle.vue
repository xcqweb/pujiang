<template>
    <div :class="comStyle">
        <div class='rotImg'>
            <div class="Rotation1 img ">
                <img :src="circles"/>
            </div>
            <div class="Rotation2 img ">
                <img :src="cuts"/>
            </div>
            <div class="Rotation3 img ">
                <img :src="halfs"/>
            </div>
            <div class=" line">
                <img :src="lines"/>
            </div>
        </div>
        <font v-show='percents' :style="{color:colorCom}">{{percents}}</font>
        <font v-show='isVideo' class="title">拥堵指数</font>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: '',
  data () {
    return {
        circle1:require('../../../assets/images/circle/violet/畅通3.png'),
        circle2:require('../../../assets/images/circle/violet/良好3.png'),
        circle3:require('../../../assets/images/circle/violet/较拥堵3.png'),
        circle4:require('../../../assets/images/circle/violet/拥堵3.png'),
        circle5:require('../../../assets/images/circle/violet/严重拥堵3.png'),
        cut1:require('../../../assets/images/circle/violet/畅通1.png'),
        cut2:require('../../../assets/images/circle/violet/良好1.png'),
        cut3:require('../../../assets/images/circle/violet/较拥堵1.png'),
        cut4:require('../../../assets/images/circle/violet/拥堵1.png'),
        cut5:require('../../../assets/images/circle/violet/严重拥堵1.png'),
        half1:require('../../../assets/images/circle/violet/畅通2.png'),
        half2:require('../../../assets/images/circle/violet/良好2.png'),
        half3:require('../../../assets/images/circle/violet/较拥堵2.png'),
        half4:require('../../../assets/images/circle/violet/拥堵2.png'),
        half5:require('../../../assets/images/circle/violet/严重拥堵2.png'),
        line1:require('../../../assets/images/circle/violet/畅通4.png'),
        line2:require('../../../assets/images/circle/violet/良好4.png'),
        line3:require('../../../assets/images/circle/violet/较拥堵4.png'),
        line4:require('../../../assets/images/circle/violet/拥堵4.png'),
        line5:require('../../../assets/images/circle/violet/严重拥堵4.png'),
        percent:'',
        text:'较为拥堵',
    }
  },
  computed:{
  	circles(){
  		let num = this.percents;
  		if(num<=1)return this.circle1;
		if(num>1&&num<=2)return this.circle2;
		if(num>2&&num<=3)return this.circle3;
		if(num>3&&num<=4)return this.circle4;
		if(num>4&&num<=5)return this.circle5;
  	},
  	cuts(){
  		let num = this.percents;
  		if(num<=1)return this.cut1;
		if(num>1&&num<=2)return this.cut2;
		if(num>2&&num<=3)return this.cut3;
		if(num>3&&num<=4)return this.cut4;
		if(num>4&&num<=5)return this.cut5;
  	},
  	halfs(){
  		let num = this.percents;
  		if(num<=1)return this.half1;
		if(num>1&&num<=2)return this.half2;
		if(num>2&&num<=3)return this.half3;
		if(num>3&&num<=4)return this.half4;
		if(num>4&&num<=5)return this.half5;
  	},
  	lines(){
  		let num = this.percents;
  		if(num<=1)return this.line1;
		if(num>1&&num<=2)return this.line2;
		if(num>2&&num<=3)return this.line3;
		if(num>3&&num<=4)return this.line4;
		if(num>4&&num<=5)return this.line5;
  	},
  	comStyle(){
  		let isIE = window.navigator.userAgent.indexOf('Trident')
        if(isIE>-1&&this.isVideo){ 
    		return 'ta_cvie'
		}
        if(isIE>-1&&!this.isVideo){ 
    		return 'ta_cie'
		}
		if(isIE===-1&&this.isVideo){
			return 'ta_cv'
		}else{
			return 'ta_c'
		}
  		
  	}
  },
  props:['percents','isVideo','colorCom']
}
</script>

<style lang="less" scoped>
.ta_c{
    height: 96%;
    width: 98%;
    position: relative;
    .rotImg{
        height: 100%;
        width: 100%;
        top:0;
        left: 0;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{                  
	   height: 7.3rem !important;
	}
	img:nth-child(1){                  
	    min-width: 100%;
	    min-height: 100%;
	    width: auto;
	    height: auto;
	}
	
	.img{
    height: auto;
    text-align: center;
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
}

.line{
    max-height: 100%;
    max-width: 100%;
    text-align: center;
    position: absolute;
    width: 100%;
    left: 0;
    top: 1rem;
}
font{
	width: 50%;
    font-family: numberFont;
    color: #fff;
    text-align: left;
    font-size:2rem;
    position: absolute;
    bottom: 3.2rem;
    left:1.6rem;
}
}


.ta_cie{
    height: 100%;
    width: 100%;
    position: relative;
    .rotImg{
        height: 100%;
        width: 100%;
        top:0;
        left: 0;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{                  
	    height: 7.3rem !important;
	}
	img:nth-child(1){                  
	    min-width: 100%;
	    min-height: 100%;
	    width: auto;
	    height: auto;
	}
	
	.img{
    height: 7.3rem !important;
    text-align: center;
    top: 0;
    left: 0;
    position: absolute;
}

.line{
    max-height: 100%;
    max-width: 100%;
    text-align: center;
    position: absolute;
    width: 100%;
    left: 0;
    top: 1rem;
}
font{
	width: 50%;
    font-family: numberFont;
    color: #fff;
    text-align: left;
    font-size:2rem;
    position: absolute;
    bottom: 2.9rem;
    left:1.9rem;
}
}
@keyframes rotation{
from {
	transform: rotate(0deg);
	-webkit-transform: rotate(0deg);
	-ms-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	}
to {
	-webkit-transform: rotate(360deg);
	-ms-transform: rotate(360deg);
	-moz-transform: rotate(360deg);
	-o-transform: rotate(360deg);
}
}
@keyframes rotation2{
from {
	transform: rotate(0deg);
	-webkit-transform: rotate(0deg);
	-ms-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	}
to {
	transform: rotate(-360deg);
	-webkit-transform: rotate(-360deg);
	-ms-transform: rotate(-360deg);
	-moz-transform: rotate(-360deg);
	-o-transform: rotate(-360deg);
	}
}
.Rotation1{
transform: rotate(360deg);
-webkit-transform: rotate(360deg);
-ms-transform: rotate(360deg);
-moz-transform: rotate(360deg);
-o-transform: rotate(360deg);

animation: rotation 3s linear infinite;
-moz-animation: rotation 3s linear infinite;
-webkit-animation: rotation 3s linear infinite;
-ms-animation: rotation 3s linear infinite;
-o-animation: rotation 3s linear infinite;
}
.Rotation2{
transform: rotate(360deg);
-webkit-transform: rotate(360deg);
-ms-transform: rotate(360deg);
-moz-transform: rotate(360deg);
-o-transform: rotate(360deg);

animation: rotation2 3s linear infinite;
-moz-animation: rotation2 3s linear infinite;
-ms-animation: rotation2 3s linear infinite;
-webkit-animation: rotation2 3s linear infinite;
-o-animation: rotation2 3s linear infinite;
}
.Rotation3{
transform: rotate(360deg);
-webkit-transform: rotate(360deg);
-ms-transform: rotate(360deg);
-moz-transform: rotate(360deg);
-o-transform: rotate(360deg);

animation: rotation 3s linear infinite;
-moz-animation: rotation 3s linear infinite;
-ms-animation: rotation 3s linear infinite;
-webkit-animation: rotation 3s linear infinite;
-o-animation: rotation 3s linear infinite;
}





.ta_cv{
    height: 7rem;
    width: 7.2rem;
    position: relative;
    .rotImg{
        height: 100%;
        width: 100%;
        top:0;
        left: 0;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{                  
	   height: 7.3rem !important;
	}
	img:nth-child(1){                  
	    min-width: 100%;
	    min-height: 100%;
	    width: auto;
	    height: auto;
	}
	.img{
	    height: auto;
	    text-align: center;
	    left: 0;
	    top: -6px;
	    width: 100%;
	    position: absolute;
	}
	
	.line{
	    max-height: 100%;
	    max-width: 100%;
	    text-align: center;
	    position: absolute;
	    width: 100%;
	    left: 0;
	    top: 1rem;
	}
	font{
		width: 100%;
	    font-family: numberFont;
	    color: #fff;
	    position: absolute;
	    left: 0;
	    bottom: 2.2rem;
	    font-size:1.3rem;
	    text-align: center;
	}
	
	.title{
		width: 100%;
		color: #fff;
	    position: absolute;
	    text-align: center;
	    bottom: -3.2rem;
	    left: 0;
	    font-size:1rem;
	}
}

@keyframes rotation{
from {
	transform: rotate(0deg);
	-webkit-transform: rotate(0deg);
	-ms-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	}
to {
	-webkit-transform: rotate(360deg);
	-ms-transform: rotate(360deg);
	-moz-transform: rotate(360deg);
	-o-transform: rotate(360deg);
}
}
@keyframes rotation2{
from {
	transform: rotate(0deg);
	-webkit-transform: rotate(0deg);
	-ms-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	}
to {
	transform: rotate(-360deg);
	-webkit-transform: rotate(-360deg);
	-ms-transform: rotate(-360deg);
	-moz-transform: rotate(-360deg);
	-o-transform: rotate(-360deg);
	}
}
.Rotation1{
transform: rotate(360deg);
-webkit-transform: rotate(360deg);
-ms-transform: rotate(360deg);
-moz-transform: rotate(360deg);
-o-transform: rotate(360deg);

animation: rotation 3s linear infinite;
-moz-animation: rotation 3s linear infinite;
-webkit-animation: rotation 3s linear infinite;
-ms-animation: rotation 3s linear infinite;
-o-animation: rotation 3s linear infinite;
}
.Rotation2{
transform: rotate(360deg);
-webkit-transform: rotate(360deg);
-ms-transform: rotate(360deg);
-moz-transform: rotate(360deg);
-o-transform: rotate(360deg);

animation: rotation2 3s linear infinite;
-moz-animation: rotation2 3s linear infinite;
-ms-animation: rotation2 3s linear infinite;
-webkit-animation: rotation2 3s linear infinite;
-o-animation: rotation2 3s linear infinite;
}
.Rotation3{
transform: rotate(360deg);
-webkit-transform: rotate(360deg);
-ms-transform: rotate(360deg);
-moz-transform: rotate(360deg);
-o-transform: rotate(360deg);

animation: rotation 3s linear infinite;
-moz-animation: rotation 3s linear infinite;
-ms-animation: rotation 3s linear infinite;
-webkit-animation: rotation 3s linear infinite;
-o-animation: rotation 3s linear infinite;
}

.ta_cvie{
    height: 7rem;
    width: 7rem;
    position: relative;
    .rotImg{
        height: 100%;
        width: 100%;
        top:0;
        left: 0;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{                  
	    height: 7.3rem !important;
	}
	img:nth-child(1){                  
	    min-width: 100%;
	    min-height: 100%;
	    width: auto;
	    height: auto;
	}
	.img{
	    height: auto;
	    text-align: center;
	    left: 0;
	    top: 0.5rem;
	    min-width: 100%;
	    position: absolute;
	}
	
	.line{
	    max-height: 100%;
	    max-width: 100%;
	    text-align: center;
	    position: absolute;
	    width: 100%;
	    left: 5%;
	    bottom: -1.5rem;
	}
	font{
		width: 100%;
	    font-family: numberFont;
	    color: #fff;
	    position: absolute;
	    left: 0;
	    bottom: 1.3rem;
	    font-size:1.3rem;
	    text-align: center;
	}
	
	.title{
		width: 100%;
		color: #fff;
	    position: absolute;
	    text-align: center;
	    bottom: -3.3rem;
	    left: 5%;
	    font-size:1rem;
	}
}

@keyframes rotation{
from {
	transform: rotate(0deg);
	-webkit-transform: rotate(0deg);
	-ms-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	}
to {
	-webkit-transform: rotate(360deg);
	-ms-transform: rotate(360deg);
	-moz-transform: rotate(360deg);
	-o-transform: rotate(360deg);
}
}
@keyframes rotation2{
from {
	transform: rotate(0deg);
	-webkit-transform: rotate(0deg);
	-ms-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	}
to {
	transform: rotate(-360deg);
	-webkit-transform: rotate(-360deg);
	-ms-transform: rotate(-360deg);
	-moz-transform: rotate(-360deg);
	-o-transform: rotate(-360deg);
	}
}
.Rotation1{
transform: rotate(360deg);
-webkit-transform: rotate(360deg);
-ms-transform: rotate(360deg);
-moz-transform: rotate(360deg);
-o-transform: rotate(360deg);

animation: rotation 3s linear infinite;
-moz-animation: rotation 3s linear infinite;
-webkit-animation: rotation 3s linear infinite;
-ms-animation: rotation 3s linear infinite;
-o-animation: rotation 3s linear infinite;
}
.Rotation2{
transform: rotate(360deg);
-webkit-transform: rotate(360deg);
-ms-transform: rotate(360deg);
-moz-transform: rotate(360deg);
-o-transform: rotate(360deg);

animation: rotation2 3s linear infinite;
-moz-animation: rotation2 3s linear infinite;
-ms-animation: rotation2 3s linear infinite;
-webkit-animation: rotation2 3s linear infinite;
-o-animation: rotation2 3s linear infinite;
}
.Rotation3{
transform: rotate(360deg);
-webkit-transform: rotate(360deg);
-ms-transform: rotate(360deg);
-moz-transform: rotate(360deg);
-o-transform: rotate(360deg);

animation: rotation 3s linear infinite;
-moz-animation: rotation 3s linear infinite;
-ms-animation: rotation 3s linear infinite;
-webkit-animation: rotation 3s linear infinite;
-o-animation: rotation 3s linear infinite;
}
</style>