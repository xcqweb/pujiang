<template>
    <div class="box">
        <div class="leftSide" >
            <div class="tabList item">
                <div class="border">
                    <div class="qylable">景区：</div>
                    <sleckte 
                    :selectList="qyselectlist" 
                    v-on:listenAtparent="catchMsg"
                    ></sleckte>
                </div>
            </div>
            <div class="dateItem item">
                <div class="border">
                    <vdate
                    	class='date'
                    	@pageDate='getDate'
                    ></vdate>
                </div>
            </div>
            <div class="item"
                v-for='item in leftComponents'
                :class="item.id">
                <h1>{{item.title}}</h1>
                <span @click='cutover(item,leftComponents)'>
                </span>
                <div class="border" v-if='!item.show'>
                	<keep-alive>
	                    <componet
	                   	:qyselectlist='item.qyselectlist'
	                   	:playerOptions='item.playerOptions'
	                    :apiName='item.apiName'
	                    :isVideo=true
	                    :is='item.name'
	                    :key="item.id"
	                    :placeName = 'placeName'
	                    :touristProp = "updateData.turist"
	                    ></componet>
                    </keep-alive>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import componetstatus from '@/pages/home/componentstatus.js'
import vdate from '@/components/commonui/vueDate/appv.vue'
import Bus from '@/common/js/bus'
const place = ['仙华山1','仙华山2','新光村1','新光村2','前吴村1','前吴村2','民生村1','民生村2','潘周家村1','潘周家村2','冷坞村1','冷坞村2','上河村1','上河村2']
export default {
    name: 'barChartOption',
    props:['placeName','turistArr'],
        data () {
            return {
                 qyselectlist:{
                    width:'55%',
                    left:'30%',
                    title:'全部',
                    selectStatus:false,
                    place:['全部','仙华山', '前吴村', '塘波村', '民生村','罗源村','白石湾','江南第一家','嵩溪村','宝掌幽谷','登高村','神丽峡','礼张村','农批市场','檀溪镇', '冷坞村','上河村','汽车客运站', '翠湖','马岭','利民村','下湾村','新光村','西山村','田后蓬','薛下庄村','下薛宅', '金狮湖','高速路','官岩寺','上山遗址','渠南村', '温泉','水晶城','水竹湾', '平湖森林果园', '三角潭林场','罗家村','白岩山前滑草基地','里黄宅村','善庆村',
'文化馆','通济桥水库大坝','三城山农庄','塔山宾馆','月泉书院遗址公园']
                },

                updateData:{
                    turist:'全部',
                },
                
                leftComponents:[
                    {name:'D6',id:'one',index:3,time:900,show:false,title:'景区客流'},
                    {name:'D9',id:'two',index:3,time:900,show:false,title:''},
                    {name:'A1',id:'three',index:3,time:900,show:false,title:'历史客流',apiName:'passengers'},
                    {name:'D10',id:'four',index:4,time:1200,show:false,title:'',qyselectlist:{
	                    width:'30%',
	                    left:'0.1rem',
	                    top:'0.9rem',
	                    title:'仙华山1',
	                    selectStatus:false,
	                    place:place
	                },
                    playerOptions:{
				          height: '360',
				          sources: [{
				            type: "rtmp/mp4",
				            src: "rtmp://115.29.13.132:10935/hls/stream_1"
				          }],
				          techOrder: ['flash'],
				          autoplay: true,
				          controls: true,
				          poster: "http://115.29.13.132:10800//snap/1/channel_1.jpg"
				        }
                    },
                    
                    
                    
                    {name:'D10',id:'five',index:4,time:1200,show:false,title:'',qyselectlist:{
	                    width:'30%',
	                    left:'0.1rem',
	                    top:'0.9rem',
	                    title:'仙华山2',
	                    selectStatus:false,
	                    place:place
	                },
                    playerOptions:{
				          height: '360',
				          sources: [{
				            type: "rtmp/mp4",
				            src: "rtmp://115.29.13.132:10935/hls/stream_2"
				          }],
				          techOrder: ['flash'],
				          autoplay: true,
				          controls: true,
				          poster: "http://115.29.13.132:10800//snap/2/channel_2.jpg"
				        }},
				        
				        
				        
                    {name:'D10',id:'six',index:4,time:1200,show:false,title:'',qyselectlist:{
	                    width:'30%',
	                    left:'0.1rem',
	                    top:'0.9rem',
	                    title:'新光村1',
	                    selectStatus:false,
	                    place:place
	                },
                    playerOptions:{
				          height: '360',
				          sources: [{
				            type: "rtmp/mp4",
				            src: "rtmp://115.29.13.132:10935/hls/stream_3"
				          }],
				          techOrder: ['flash'],
				          autoplay: true,
				          controls: true,
				          poster: "http://115.29.13.132:10800//snap/3/channel_3.jpg"
				        }},
				        
				        
				        
                    {name:'D10',id:'seven',index:4,time:1200,show:false,title:'',qyselectlist:{
	                    width:'30%',
	                    left:'0.1rem',
	                    top:'0.9rem',
	                    title:'前吴村1',
	                    selectStatus:false,
	                    place:place
	                },
                    playerOptions:{
				          height: '360',
				          sources: [{
				            type: "rtmp/mp4",
				            src: "rtmp://115.29.13.132:10935/hls/stream_5"
				          }],
				          techOrder: ['flash'],
				          autoplay: true,
				          controls: true,
				          poster: "http://115.29.13.132:10800//snap/5/channel_5.jpg"
				        }},
                ],

            }
        },
    computed: {
    	
    },
    methods: {
        getDate(val){
        	Bus.$emit('timeRange',val)
    	},
        catchMsg(data){
           this.updateData.turist = data
        },
          
    },
    components:{
        ...componetstatus,
        vdate
    },
    beforeDestroy(){
  	    Bus.$off('timeRange')
 	},
}
</script>

<style lang="less" scoped>
    @import '../../../assets/style/video.less';
</style>
