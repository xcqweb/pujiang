<template>
    <div class="video">
        <!--<video controls="controls"  src="../../../assets/video/kaiyuan.mp4"  autoplay="autoplay"  loop="loop" style="">
            您的浏览器不支持 video 标签。
        </video>
        <video controls="controls" poster="" autoplay="autoplay"  loop="loop" style="">
            您的浏览器不支持 video 标签。
            视频接口
            http://192.168.1.75:10800/play2.html?channel=3
            <source src="../../../assets/video/kaiyuan.mp4" type="audio/mp4"/>
        </video>-->
        <section :class="fullStyle1" @mouseover="showFullBtn(1)" @mouseleave="hideFullBtn(1)">
        	<!--<iframe ref='v' src="http://120.55.190.57:10800/play.html?channel=1" width="100%" height="100%" frameborder="0" seamless="seamless" scrolling="no" allow-scripts='allow-same-origin allow-scripts'></iframe>-->
        	<Loading class='video' v-show='false'></Loading>
        	<i class="fullScreen" @click.capture="fullScreen(1)" title="全屏" v-show="fullBtn1"></i>
        	<span>仙华山1</span>
        </section>
        
        <section :class="fullStyle2" @mouseover="showFullBtn(2)" @mouseleave="hideFullBtn(2)">
        	<!--<iframe ref='v' src="http://120.55.190.57:10800/play.html?channel=2" width="100%" height="100%" frameborder="0" seamless="seamless" scrolling="no" allow-scripts='allow-same-origin allow-scripts'></iframe>-->
        	<Loading class='video' v-show='false'></Loading>
        	<i class="fullScreen" @click.capture="fullScreen(2)" title="全屏" v-show="fullBtn2"></i>
        	<span>仙华山2</span>
        </section>
        <section :class="fullStyle3" @mouseover="showFullBtn(3)" @mouseleave="hideFullBtn(3)">
        	<!--<iframe ref='v' src="http://120.55.190.57:10800/play.html?channel=3" width="100%" height="100%" frameborder="0" seamless="seamless" scrolling="no" allow-scripts='allow-same-origin allow-scripts'></iframe>-->
        	<Loading class='video' v-show='false'></Loading>
        	<i class="fullScreen" @click.capture="fullScreen(3)" title="全屏" v-show="fullBtn3"></i>
        	<span>江南第一家1</span>
        </section>
        <section :class="fullStyle4" @mouseover="showFullBtn(4)" @mouseleave="hideFullBtn(4)">
        	<!--<iframe ref='v' src="http://120.55.190.57:10800/play.html?channel=4" width="100%" height="100%" frameborder="0" seamless="seamless" scrolling="no" allow-scripts='allow-same-origin allow-scripts'></iframe>-->
        	<Loading class='video' v-show='false'></Loading>
        	<i class="fullScreen" @click.capture="fullScreen(4)" title="全屏" v-show="fullBtn4"></i>
        	<span>江南第一家2</span>
        	
        	<div class="close" v-if="closeShow" v-show='bigCloseBtn'>
       			<span class="closeBtn"  @click="close()" title="退出全屏"></span>
       		</div>
        </section>
       	
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'a9',
    data () {
      return {
      	bigCloseBtn:false,
      	fullStyle1:'',
      	fullStyle2:'',
      	fullStyle3:'',
      	fullStyle4:'',
      	fullBtn1:false,
      	fullBtn2:false,
      	fullBtn3:false,
      	fullBtn4:false,
      }
    },
    methods: {
    	showFullBtn(i){
    		this.bigCloseBtn = true;
    		switch(i){
    			case 1:
    			this.fullBtn1 = true;
    			break;
    			case 2:
    			this.fullBtn2 = true;
    			break;
    			case 3:
    			this.fullBtn3 = true;
    			break;
    			case 4:
    			this.fullBtn4 = true;
    			break;
    		}
    	},
    	hideFullBtn(i){
    		this.bigCloseBtn = false;
    		switch(i){
    			case 1:
	    			if(timer1)return
	    			let timer1 = setTimeout( ()=> {
	    			this.fullBtn1 = false;
	    			},2000)
    			break;
    			case 2:
    				if(timer2)return
	    			let timer2 = setTimeout( ()=> {
	    			this.fullBtn2 = false;
	    			},2000)
    			break;
    			case 3:
    				if(timer3)return
	    			let timer3 = setTimeout( ()=> {
	    			this.fullBtn3 = false;
	    			},2000)
    			break;
    			case 4:
    				if(timer4)return
	    			let timer4 = setTimeout( ()=> {
	    			this.fullBtn4 = false;
	    			},2000)
    			break;
    		}
    		
    	},
    	fullScreen(i){
    		
    		switch(i){
    			case 1:
    			this.fullStyle1 = 'fullStyle';
    			break;
    			case 2:
    			this.fullStyle2 = 'fullStyle';
    			break;
    			case 3:
    			this.fullStyle3 = 'fullStyle';
    			break;
    			case 4:
    			this.fullStyle4 = 'fullStyle';
    			break;
    		}
    		this.$store.state.videoFull = true;
    	},
    	close(i){
    		this.$store.state.videoFull = false;
    		
    			this.fullStyle1 = '';
    			this.fullStyle2 = '';
    			this.fullStyle3 = '';
    			this.fullStyle4 = '';
    	}
    },
    computed:{
    	closeShow(){
    		let isShow = this.$store.state.videoFull;
    		return isShow;
    	}
    },
    components:{
    	Loading
    },
    mounted(){
    }
}
</script>

<style lang="less" scoped>

.video{
    width:100%;
    height:100%;
   .close{
	position: absolute;
	bottom: -4.5rem;
	z-index: 3222222222;
	color: #fff;
	background-color: rgba(0,0,0,0.5);
	width: 450%;
	height: 15%;
	left: -150%;
	.closeBtn{
		display: block;
		width: 2rem;
		height: 2rem;
		position: absolute;
		bottom: 0;
		left: 88%;
		background: url(../../../assets/images/video/fullscreen.png) no-repeat;
		background-size: contain;
		
	}
}
    video{
        width:95%;
        height:100%;
        margin-top:7px;
    }
    video:nth-of-type(1){
      margin-left:5px;
    }
    video:nth-of-type(1){
    }
     section{
        width:42%;
        height:33%;
        margin-top:12px;
        margin-left: 5px;
        position: absolute;
        .fullScreen{
        	position: absolute;
        	color: #fff;
        	width: 1.5rem;
        	height: 1.5rem;
        	right: 1rem;
        	bottom:0.3rem;
        	background: url(../../../assets/images/video/fullscreen.png) no-repeat;
        	background-size: contain;
        	cursor: pointer;
        }
        img{
        	width: 100%;
        	height: 120%;
        }
        span{
        	color:#fff;
        	font-size: 1rem;
        	position: absolute;
        	bottom: -2.5rem;
        	left: 38%;
        }
        .time2{
        	color:#fff;
        	font-size: 12px;
        	position: absolute;
        	top: 10px;
        }
        .time1{
        	color:#fff;
        	font-size: 12px;
        	position: absolute;
        	text-align: right;
        	top: 10px;
        	right: 10px;
        }
    }
    .fullStyle{
		 position: absolute;
	      top: -15% !important;
	      left: -5% !important;
	      z-index: 1212121212;
	      width: 170%;
	      height: 160%;
	      animation: scaleS 0.5s ease-out;
    }
    
    @keyframes scaleS{
    	from{
    		transform: scale(0);
    	}
    	to{
    		transform: scale(1);
    	}
    }
    
    section:nth-of-type(1){
      top:3rem;
      left:1.5rem;
    }
    section:nth-of-type(2){
      top:3rem;
      right:1.5rem;
    }
    section:nth-of-type(3){
      bottom:4.5rem;
      left:1.5rem;
    }
    section:nth-of-type(4){
      bottom:4.5rem;
      right:1.5rem;
    }
    
}
</style>
