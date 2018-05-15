<template>
  <div id="mainhome" @click="headerLeave($event)">
    <transition name="slide-fade">
        <div class="header" v-show='headerStatus' @mouseleave="mouseLeave"   @click="headerLeave($event)">
            <headerBody></headerBody>
        </div>
    </transition>
    <div class="headmock" v-on:mouseenter="headerEnter"></div>
    <router-view class='mockrouter'
    :placeName = 'placeName'
    :placeAttractions = 'placeAttractions'
    ></router-view>
    <!--使用if 每次重新渲染 并传递筛选景区-->
        <config v-if = "toast"></config>
        <transition name="fade">	
        	<div class="videoFull" v-show="videoFull"></div>
        </transition>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import headerBody from '@/pages/home/header.vue'
import config from '@/components/commonui/config/scienceConfig.vue'
export default {
        data() {
            return {
                headerStatus:false,
                allComponents: [],
                componentName: '',
		                topComponents:[
		                    {name:'vtopOne',id:'one',title:'浦江客流人数分析'},
		                    {name:'vprofies',id:'two',title:'景区概况'},
		                    {name:'vtopThree',id:'three',title:''},
		                    {name:'vcontentment',id:'four',title:'游客满意度'},
		                ],
		                bottomComponents:[
		                    {name:'vtimeOn',id:'one',title:'客流实时监测'},
		                    {name:'vchartMap',id:'two',title:'国内游客来源地'},
		                    {name:'vrinking',id:'three',title:'游客来源排行榜'},
		                    {name:'vpercenPie',id:'four',title:'营销推广'},
		                    {name:'vvideo',id:'five',title:'视频监控'},
		                ],
		                text:'headerBody',
		            }
        },
        components: {
                headerBody,
                config
        },
        computed: {
          ...mapGetters({
              placeName: 'version/name',
              placeAttractions:'version/placeAttractions',
              comment:'version/comment',
            }),
            //设置客流预警蒙层显示
	          toast(){
	          	let toast = this.$store.state.showToast;
	          	return toast
	          },
	          videoFull(){
	          	let toast = this.$store.state.videoFull;
	          	return toast
	          }
        },
        methods: {
        	
            console(){
                console.log(this.components)
            },
            mouseLeave(){
            	this.headerStatus=false;
            },
            headerEnter(){
                this.headerStatus=true;
            },
            headerLeave(e){
            	//console.dir(this.$el.childNodes[0].contains(e.target))
            	if(!this.$el.childNodes[0].contains(e.target)){
            		this.headerStatus=false;
            	}
                
            },

        },
        mounted() {
        }
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
  transition: all .11s linear;
}
.slide-fade-leave-active {
  transition: all 0.1s linear;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(0px);
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
