<template>
  <div id="mainhome" @click="headerLeave($event)">
    <transition name="slide-fade">
        <div class="header" v-show='headerStatus' @mouseout="mouseLeave" @mouseover="mouseOver" @click="headerLeave($event)">
            <headerBody v-clickOutside='hide'></headerBody>
        </div>
    </transition>
    <div class="headmock" v-on:mouseenter="headerEnter"></div>
    <router-view class='mockrouter'></router-view>
  </div>
</template>
<script type="text/javascript">
import headerBody from '@/pages/home/header.vue'
export default {
        data() {
            return {
                headerStatus:false,
                timer:null
		            }
        },
        components: {
                headerBody,
        },
        beforeDestroy(){
        	this.$off()
        },
        methods: {
	        	hide(){
	        		this.headerStatus=false;
	        	},
	        	mouseOver(){
	        		window.clearTimeout(this.timer)
	        	},
            mouseLeave(){
              	this.timer = window.setTimeout( () => {
            			this.headerStatus=false;
            		},1000)
            },
            headerEnter(){
                this.headerStatus=true;
            },
            headerLeave(e){
            		this.headerStatus=false;
            },
        },
    }
</script>

<style lang="less" type="text/less" scoped >
/*h1标题颜色，当前颜色白*/
@hColor:#efeefd;
/*文本内容颜色*/
@textColor:#8687c0;
@headerBackColor:#133596;
@topBottomColor:#163387;
@borderColor:#49d9fe;
@borderLen: 18px;

.slide-fade-enter-active {
  transition: all 0.36s linear;
}
.slide-fade-leave-active {
  transition: all 0.5s linear;
}
.slide-fade-enter {
	transform: translateY(-100%);
}
.slide-fade-leave-to{
	transform: translateY(-100%);
	opacity: 0;
}

#mainhome{
    -webkit-transform: translate3d(0, 0, 0);
   -moz-transform: translate3d(0, 0, 0);
   -ms-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
    width:100vw;
    height: 100vh;
    position: relative;
    background-color: #0d1f6d;
    overflow: hidden;
    .header{
        position:fixed;
        width: 100%;
        height: 100/1080*100%;
        background-color: rgba(19,53,150,0.1);
        z-index: 2500;
    }
    .videoFull{
    	width: 100%;
			height: 100%;
			position: absolute;
			z-index: 1222222;
			top: 0;
			background-color: rgba(0,0,0,0.9);
    }
    @keyframes full{
		from{
			transform: scale(0);
		}
		to{
			transform: scale(1);
		}
	}
	
	@keyframes out{
		from{
			transform: scale(1);
		}
		to{
			transform: scale(0);
		}
	}
	
	.fade-enter-active,  {
	  animation: full 0.5s ease-in-out;  
	}
	.fade-leave-active{
		animation: out 0.5s ease-in-out; 
	}
    
    
    .headmock{
        width: 100%;
        height: 2%;
        visibility:unset;
        z-index:777;
    }
    .mockrouter{
        margin-top:0;
    }
}
</style>
