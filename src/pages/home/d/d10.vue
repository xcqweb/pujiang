<template>
	<div class="d10">
		<div :class="comStyle" v-if="isIE">
			<transition name='scales'>
				<iframe :src="comSrc" width="460" height="256" scrolling="no" :class="comfullStyle" @mouseenter="showBtn" @mouseleave="hideBtn"></iframe> 
			</transition>
			 
			 <transition name='fade'>
			 	<span class="fullScreen" @click="fullScreen" v-show="hoverStatus"></span>
			 </transition>
			 
			 <div class="close" v-show="status">
       			<span class="closeBtn"  @click="closeFull" title="退出全屏"></span>
       		</div>
		</div>
		
		<div :class="comStyle" v-else>
			<transition name='scales'>
				<iframe :src="comSrc" width="528" height="290" scrolling="no" :class="comfullStyle" @mouseenter="showBtn" @mouseleave="hideBtn"></iframe> 
			</transition>
			 
			 <transition name='fade'>
			 	<span class="fullScreen" @click="fullScreen" v-show="hoverStatus"></span>
			 </transition>
			 
			 <div class="close" v-show="status">
       			<span class="closeBtn"  @click="closeFull" title="退出全屏"></span>
       		</div>
		</div>
		<sleckte
			:selectList="qyselectlist" 
            v-on:listenAtparent="catchMsg"
		></sleckte>
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
				isIE:isIE
				
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
		                    place:['仙华山1','仙华山2','神丽峡1','神丽峡2']
		               }
				}
			}
			
		},
		methods:{
			catchMsg(val){
				console.log(val)
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
	        		
	        		case '前吴村3':
	        		return 'http://114.55.237.138:10800/play.html?channel=6';
	        		break;
	        	}
	        }
		},
		mounted(){
			this.scienceName = this.qyselectlist.title
		},
		components:{
			sleckte
		}
	}
</script>

<style scoped="scoped" lang="less">
.d10{
	width: 100%;
	height: 100%;
	.video{
		width: 460/488*100%;
		height: 258/345*100%;
		margin: 66px 0 0 15px;
		iframe{
			
		}
		.fullScreen{
			position: absolute;
        	color: #fff;
        	width: 1.5rem;
        	height: 1.5rem;
        	right: 1.3rem;
        	bottom:2.6rem;
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
		height: 258/345*100%;
		margin: 66px 0 0 15px;
		iframe{
			
		}
		.fullScreen{
			position: absolute;
        	color: #fff;
        	width: 1.5rem;
        	height: 1.5rem;
        	right: 2.5rem;
        	bottom:3.6rem;
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