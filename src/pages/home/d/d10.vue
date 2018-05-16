<template>
	<div class="d10">
		<sleckte
			:selectList="qyselectlist" 
            v-on:listenAtparent="catchMsg"
		></sleckte>
		<div class="video" v-if="!isIE">
			<!--[if !IE]><!-->  
			    <object type='application/x-vlc-plugin' id='vlc' events='True' width="560" height="360" pluginspage="http://www.videolan.org" codebase="http://downloads.videolan.org/pub/videolan/vlc-webplugins/2.0.6/npapi-vlc-2.0.6.tar.xz">  
			        <param name='mrl' value='rtsp://117.148.153.159:554/cam/realmonitor?channel=3&subtype=0' />  
			        <param name='volume' value='50' />  
			        <param name='autoplay' value='true' />  
			        <param name='loop' value='false' />  
			        <param name='fullscreen' value='false' />  
			    </object>  
			<!--<![endif]-->  
		</div>
		<div class="video" v-else>
			    <object type='application/x-vlc-plugin' id='vlc' events='True' width="460" height="258" pluginspage="http://www.videolan.org" codebase="http://downloads.videolan.org/pub/videolan/vlc-webplugins/2.0.6/npapi-vlc-2.0.6.tar.xz">  
			        <param name='mrl' :value='vsrc' />  
			        <param name='volume' value='50' />  
			        <param name='autoplay' value='true' />  
			        <param name='loop' value='false' />  
			        <param name='fullscreen' value='false' />  
			    </object>  
		</div>
	</div>
</template>

<script>
	let isIE = window.navigator.userAgent.indexOf('Trident')===-1?true:false
	import sleckte from '@/components/commonui/dropdown/dropdown-menu.vue'
	export default{
		data(){
			return{
				isIE:isIE,
				vsrc:'sp://117.148.153.159:554/cam/realmonitor?channel=1&subtype=0'
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
		                    place:['仙华山1','仙华山2','仙华山3','仙华山4','仙华山5']
		               }
				}
			}
			
		},
		methods:{
			catchMsg(val){
				console.log(val)
				switch(val){
					case '仙华山1':
					this.vsrc = 'sp://117.148.153.159:554/cam/realmonitor?channel=1&subtype=0'
					break;
					case '仙华山2':
					this.vsrc = 'rtsp://117.148.153.159:554/cam/realmonitor?channel=3&subtype=0'
					break;
				}
			}
		},
	
		computed:{
	        comStyle(){
	        	if(isIE>-1){ 
		    		return 'd10v'
				}else{
					return 'd10'
				}
	        }
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
		margin: 52px 0 0 15px;
	}
}

.d10v{
	width: 100%;
	height: 100%;
	.video{
		width: 460/488*100%;
		height: 258/345*100%;
		margin: 52px 0 0 20px;
	}
}
</style>