<template>
	<div class="d10">
		<div :class="comStyle" v-if="isIE">
			<transition name='scales'>
				<iframe :src="comSrc" :width="w" :height="h" scrolling="no" :class="comfullStyle" @mouseenter="showBtn" @mouseleave="hideBtn"></iframe> 
			</transition>
			 
			 <transition name='fade'>
			 	<span class="fullScreen" @click="fullScreen" v-show="hoverStatus" title="全屏"></span>
			 </transition>
			 
			 <div class="close" v-show="status">
       			<span class="closeBtn"  @click="closeFull" title="退出全屏"></span>
       		</div>
		</div>
		
		<div :class="comStyle" v-else>
			<transition name='scales'>
				<iframe :src="comSrc" :width="wie" :height="hie" scrolling="no" :class="comfullStyle" @mouseenter="showBtn" @mouseleave="hideBtn"></iframe> 
			</transition>
			 
			 <transition name='fade'>
			 	<span class="fullScreen" @click="fullScreen" v-show="hoverStatus" title="全屏"></span>
			 </transition>
			 
			 <div class="close" v-show="status">
       			<span class="closeBtn"  @click="closeFull" title="退出全屏"></span>
       		</div>
		</div>
		<sleckte
			:selectList="qyselectlist" 
            v-on:listenAtparent="catchMsg"
		></sleckte>
		<Loading v-show="isloading"></Loading>
	</div>
</template>

<script>
	let isIE = window.navigator.userAgent.indexOf('Trident')===-1?true:false
	import sleckte from '@/components/commonui/dropdown/dropdown-menu.vue'
	export default{
		data(){
			return{
				vsrc:'',
				status:false,
				hoverStatus:false,
				scienceName:'',
				isIE:isIE,
				w:0,
				h:0,
				wie:0,
				hie:0,
				isloading:true,
				
			}
		},
		props:{
			qyselectlist:{
				type:Object,
				default:function(){
					return {
		                    width:'55%',
		                    left:'30%',
		                    title:'仙华山1',
		                    selectStatus:false,
		                    place:['仙华山1','仙华山2','新光村1','新光村2','前吴村1','前吴村2','民生村1','民生村2','潘周家村1','潘周家村2','冷坞村1','冷坞村2','上河村1','上河村2']
		               }
				}
			}
			
		},
		methods:{
			catchMsg(val){
				console.log(val)
				this.isloading =true
				this.scienceName = val
			},
			fullScreen(){
				this.status = true
			},
			closeFull(){
				this.status = false
			},
			showBtn(){
				this.hoverStatus = true
			},
			hideBtn(){
				this.timer = window.setTimeout( () => {
					this.hoverStatus = false
				},1500)
			}
		},
	
		computed:{
	        comStyle(){
	        	if(this.isIE){ 
		    		return 'video'
				}else{
					return 'videoie'
				}
	        },
	        comfullStyle(){
	        	return this.status?'fullStyle':''
	        },
	        comSrc(){
	        	switch(this.scienceName){
	        		case '仙华山1':
	        		return 'http://114.55.237.138:10800/play.html?channel=1';
	        		break;
	        		
	        		case '仙华山2':
	        		return 'http://114.55.237.138:10800/play.html?channel=2';
	        		break;
	        		
	        		case '新光村1':
	        		return 'http://114.55.237.138:10800/play.html?channel=3';
	        		break;
	        		
	        		case '新光村2':
	        		return 'http://114.55.237.138:10800/play.html?channel=4';
	        		break;
	        		
	        		case '前吴村1':
	        		return 'http://114.55.237.138:10800/play.html?channel=5';
	        		break;
	        		
	        		case '前吴村2':
	        		return 'http://114.55.237.138:10800/play.html?channel=6';
	        		break;
	        		
	        		case '民生村1':
	        		return 'http://114.55.237.138:10800/play.html?channel=7';
	        		break;
	        		
	        		case '民生村2':
	        		return 'http://114.55.237.138:10800/play.html?channel=8';
	        		break;
	        		
	        		case '潘周家村1':
	        		return 'http://114.55.237.138:10800/play.html?channel=9';
	        		break;
	        		
	        		case '潘周家村2':
	        		return 'http://114.55.237.138:10800/play.html?channel=10';
	        		break;
	        		
	        		case '冷坞村1':
	        		return 'http://114.55.237.138:10800/play.html?channel=11';
	        		break;
	        		
	        		case '冷坞村2':
	        		return 'http://114.55.237.138:10800/play.html?channel=12';
	        		break;
	        		
	        		case '上河村1':
	        		return 'http://114.55.237.138:10800/play.html?channel=13';
	        		break;
	        		
	        		case '上河村2':
	        		return 'http://114.55.237.138:10800/play.html?channel=14';
	        		break;
	        	}
	        }
		},
		mounted(){
			this.scienceName = this.qyselectlist.title
			let w = document.body.clientWidth/1920
    		this.w = 560*w
    		this.h = 315*w
    		this.wie = 528*w
    		this.hie = 300*w
    		
    		this.$nextTick( () => {
		    	let items = this.$el.querySelector('iframe')
			    	items.onload = () => {
			    		window.setTimeout( () => {
			    			this.isloading = false
			    		},1000)
			    	}
	    	})
		},
		components:{
			sleckte,
			Loading
		}
	}
</script>

<style scoped="scoped" lang="less">
.d10{
	width: 100%;
	height: 100%;
	position: relative;
	.video{
		width: 460/488*100%;
		height: 345/345*100%;
		margin: 4.2rem 0 0 15px;
		iframe{
			
		}
		.fullScreen{
			position: absolute;
        	color: #fff;
        	width: 1.5rem;
        	height: 1.5rem;
        	right: 1.5rem;
        	bottom:3.3rem;
        	background: url(../../../assets/images/video/fullscreen.png) no-repeat;
        	background-size: contain;
        	cursor: pointer;
		}
		.fullStyle{
			width: 100vw;
			height: 100vh;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 10000;
			//animation: scaleS 0.5s ease;
		}
		
		@keyframes scaleS{
	    	from{
	    		transform: scale(0);
	    	}
	    	to{
	    		transform: scale(1);
	    	}
	    }
		  .close{
			position: fixed;
			bottom: -4.5rem;
			z-index: 3222222222;
			color: #fff;
			background-color: rgba(0,0,0,0.5);
			width: 100%;
			height: 15%;
			right: 0;
			cursor: pointer;
			.closeBtn{
				display: block;
				width: 2rem;
				height: 2rem;
				position: absolute;
				bottom: 75px;
				right: 40px;
				background: url(../../../assets/images/video/fullscreen.png) no-repeat;
				background-size: contain;
				
			}
		}
	}
	
	.videoie{
		width: 460/488*100%;
		height: 345/345*100%;
		margin: 4.2rem 0 0 15px;
		iframe{
			
		}
		.fullScreen{
			position: absolute;
        	color: #fff;
        	width: 1.5rem;
        	height: 1.5rem;
        	right: 2.5rem;
        	bottom:3.3rem;
        	background: url(../../../assets/images/video/fullscreen.png) no-repeat;
        	background-size: contain;
        	cursor: pointer;
		}
		.fullStyle{
			width: 100vw;
			height: 100vh;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 10000;
			//animation: scaleS 0.5s ease;
		}
		
		@keyframes scaleS{
	    	from{
	    		transform: scale(0);
	    	}
	    	to{
	    		transform: scale(1);
	    	}
	    }
		  .close{
			position: fixed;
			bottom: -4.5rem;
			z-index: 3222222222;
			color: #fff;
			background-color: rgba(0,0,0,0.5);
			width: 100%;
			height: 15%;
			right: 0;
			cursor: pointer;
			.closeBtn{
				display: block;
				width: 2rem;
				height: 2rem;
				position: absolute;
				bottom: 75px;
				right: 40px;
				background: url(../../../assets/images/video/fullscreen.png) no-repeat;
				background-size: contain;
				
			}
		}
	}
}





.fade-enter-activee {
  transition: opacity .1s;
}

.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>