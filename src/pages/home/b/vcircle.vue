<template>
    <div class="ta_c">
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
            <font v-show='percents'>{{percents}}</font>
        </div>
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
  	}
  },
  props:{
  	percents:Number
  }
}
</script>

<style lang="less" scoped>
.ta_c{
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
}
img{                  
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}
img:nth-child(1){                  
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
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
    top: 0;
}
font{
    font-family: numberFont;
    color: #fff;
    /*position: absolute;*/
    /*display: inline-block;*/
    /*top: 0;
    transform: translateY(50%);
    left: 0;
    transform: translateX(-50%);
    height: 100%;
    width: 100%;
    text-align: center;*/
    align-content: center;
    font-size:2rem;
}
</style>