<template>
    <div class="ta_c">
        <div class='rotImg'>
            <div class="Rotation1 img ">
                <img :src="circle"/>
            </div>
            <div class="Rotation2 img ">
                <img :src="cut"/>
            </div>
            <div class="Rotation3 img ">
                <img :src="half"/>
            </div>
            <div class=" line">
                <img :src="line"/>
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
        circle:require('../../../assets/images/circle/violet/item-circle.png'),
        cut:require('../../../assets/images/circle/violet/cut.png'),
        half:require('../../../assets/images/circle/violet/half.png'),
        line:require('../../../assets/images/circle/violet/line.png'),
        percent:'',
        text:'较为拥堵',
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
    }
}
img{                  
    max-width: 100%;
    max-height: 100%;
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
    height: auto;
    text-align: center;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
}
font{
    font-family: numberFont;
    color: white;
    position: absolute;
    display: inline-block;
    top: 40%;
    transform: translateY(-50%);
    left: 50%;
    transform: translateX(-50%);
    height: 50%;
    width: 50%;
    font-size:2rem;
}
</style>