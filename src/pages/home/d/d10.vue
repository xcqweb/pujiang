<template>
      <div class="d10">
        <div class="player">
          <video-player
          	 class="vjs-custom-skin" 
          	 :options="playerOptions"
          	 @ready="playerIsReady"
             @playing='onPlayerPlaying'
          	></video-player>
        </div>
        <sleckte
					:selectList="qyselectlist" 
          v-on:listenAtparent="catchMsg"
				></sleckte>
		<Loading v-show='isloading' class='vloading'></Loading>
      </div>
</template>

<script>
	import sleckte from '@/components/commonui/dropdown/dropdown-menu.vue'
	import 'video.js/dist/video-js.css'  //文件目录D:\svn\pujiang\pujiang\node_modules\_video.js@7.0.5@video.js\dist
  import { videoPlayer } from 'vue-video-player'  //控制条中英文在video.cjs.js文件配置
	import 'videojs-flash'
	import 'videojs-hotkeys'
	export default{
		  data() {
	      return {
	      	isloading:true,
	      	scienceName:'',
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
			},
			playerOptions: {
				type:Object,
				default:function(){
					return {
			          height: '360',
			          sources: [{
			            type: "rtmp/mp4",
			            src: "rtmp://115.29.13.132:10935/hls/stream_12"
			          }],
			          techOrder: ['flash'],
			          autoplay: true,
			          controls: true,
			          poster: "http://115.29.13.132:10800/snap/2/channel_2.jpg"
			        }
				}
			}
			
		},
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    watch:{
    	scienceName:function(){
    		
    	}
    },
    methods: {
      onPlayerPlaying(){
      	this.isloading = false
      },
      playerIsReady(player) {
        	this.isloading = false
        player.hotkeys({
          volumeStep: 0.1,
          seekStep: 5,
          enableModifiersForNumbers: false,
          fullscreenKey: function(event, player) {
            return ((event.which === 70) || (event.ctrlKey && event.which === 13));
          }
        })
      },
      catchMsg(data){
      	this.isloading = true
      	this.scienceName = data
        this.playerOptions.sources[0].src = this.comSrc()
      	
      },
      comSrc(){
	        	switch(this.scienceName){
	        		case '仙华山1':
	        		this.playerOptions.poster = 'http://115.29.13.132:10800/snap/1/channel_1.jpg'
	        		return 'rtmp://115.29.13.132:10935/hls/stream_1';
	        		break;
	        		
	        		case '仙华山2':
	        		this.playerOptions.poster = 'http://115.29.13.132:10800/snap/2/channel_2.jpg'
	        		return 'rtmp://115.29.13.132:10935/hls/stream_2';
	        		break;
	        		
	        		case '新光村1':
	        		this.playerOptions.poster = 'http://115.29.13.132:10800/snap/3/channel_3.jpg'
	        		return 'rtmp://115.29.13.132:10935/hls/stream_3';
	        		break;
	        		
	        		case '新光村2':
	        		this.playerOptions.poster = 'http://115.29.13.132:10800/snap/4/channel_4.jpg'
	        		return 'rtmp://115.29.13.132:10935/hls/stream_4';
	        		break;
	        		
	        		case '前吴村1':
	        		this.playerOptions.poster = 'http://115.29.13.132:10800/snap/5/channel_5.jpg'
	        		return 'rtmp://115.29.13.132:10935/hls/stream_5';
	        		break;
	        		
	        		case '前吴村2':
	        		this.playerOptions.poster = 'http://115.29.13.132:10800/snap/6/channel_6.jpg'
	        		return 'rtmp://115.29.13.132:10935/hls/stream_6';
	        		break;
	        		
	        		case '民生村1':
	        		this.playerOptions.poster = 'http://115.29.13.132:10800/snap/7/channel_7.jpg'
	        		return 'rtmp://115.29.13.132:10935/hls/stream_7';
	        		break;
	        		
	        		case '民生村2':
	        		this.playerOptions.poster = 'http://115.29.13.132:10800/snap/8/channel_8.jpg'
	        		return 'rtmp://115.29.13.132:10935/hls/stream_8';
	        		break;
	        		
	        		case '潘周家村1':
	        		this.playerOptions.poster = 'http://115.29.13.132:10800/snap/9/channel_9.jpg'
	        		return 'rtmp://115.29.13.132:10935/hls/stream_9';
	        		break;
	        		
	        		case '潘周家村2':
	        		this.playerOptions.poster = 'http://115.29.13.132:10800//snap/10/channel_10.jpg'
	        		return 'rtmp://115.29.13.132:10935/hls/stream_10';
	        		break;
	        		
	        		case '冷坞村1':
	        		this.playerOptions.poster = 'http://115.29.13.132:10800/snap/11/channel_11.jpg'
	        		return 'rtmp://115.29.13.132:10935/hls/stream_11';
	        		break;
	        		
	        		case '冷坞村2':
	        		this.playerOptions.poster = 'http://115.29.13.132:10800/snap/12/channel_12.jpg'
	        		return 'rtmp://115.29.13.132:10935/hls/stream_12';
	        		break;
	        		
	        		case '上河村1':
	        		this.playerOptions.poster = 'http://115.29.13.132:10800/snap/13/channel_13.jpg'
	        		return 'rtmp://115.29.13.132:10935/hls/stream_13';
	        		break;
	        		
	        		case '上河村2':
	        		this.playerOptions.poster = 'http://115.29.13.132:10800/snap/14/channel_14.jpg'
	        		return 'rtmp://115.29.13.132:10935/hls/stream_14';
	        		break;
	        	}
	        }
		
	},
	components:{
			sleckte,
			Loading,
			videoPlayer
		}
}
</script>

<style scoped="scoped" lang="less">

.d10{
	width: 100%;
	height: 100%;
	position: relative;
	padding-top: 3.6rem;
	padding-left: 1.2rem;
	box-sizing: border-box;
	.vjs-custom-skin{
		top: 20px;
	}
	.vloading{
		top: -3rem;
		padding-bottom: 3rem;
	}
}
</style>