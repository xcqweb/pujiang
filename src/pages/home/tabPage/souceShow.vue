<template>
    <div class="box">
        <div class="topSide" >
            <div class=" item tabLists">
                <div class="border">
                    <div class="qylable">景区：</div>
                    <sleckte 
                    :selectList="qyselectlist" 
                    v-on:listenAtparent="catchmsg1"
                    ></sleckte>
                </div>
            </div>
            <div class="dateItem item">
                <div class="border">
                    <clock></clock>
                </div>
            </div>
            <div class="item"
                v-for='item in topComponents'
                :class="item.id">
                <h1>{{item.title}}</h1>
                </span>
                <div class="border" v-if='!item.show'>
                    <componet
                    :isVideo = 'item.isVideo'
                    :is='item.name'
                    :key="item.id"
                    :place='place'
                    :touristProp = "updateData.turist"
                    ></componet>
                </div>
            </div>
        </div>
        <div class="bottomSide">
            <div class="item"
                v-for='item in bottomComponents'
                :class="item.id">
                <h1>{{item.title}}</h1>
                </span>
                <div class="border" v-if='!item.show'>
                    <componet
                    :is='item.name'
                    :key="item.id"
                    :place="place"
                    :touristProp = "updateData.turist"
                    ></componet>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Vue from 'vue'
import echarts from 'echarts'
import componetstatus from '@/pages/home/componentstatus.js'
import Bus from '@/common/js/bus.js'
import _ from 'lodash'
import { mapGetters } from 'vuex'

export default {
    props:['placeName','placeAttractions'],
    name: 'souceShow',
        data () {
            return {
                place:'江南第一家',
                qyselectlist:{
                    width:'55%',
                    left:'30%',
                    title:'全部',
                    selectStatus:false,
                    place:['全部',
				            '仙华山',
				            '前吴村',
				            '塘波村',
				            '民生村',
				            '罗源村',
				            '白石湾',
				            '江南第一家',
				            '嵩溪村',
				            '宝掌幽谷',
				            '登高村',
				            '神丽峡',
				            '礼张村',
				            '农批市场',
				            '檀溪镇',
				            '冷坞村',
				            '上河村',
				            '汽车客运站',
				            '翠湖',
				            '马岭',
				            '利民村',
				            '下湾村',
				            '新光村',
				            '西山村',
				            '田后蓬',
				            '薛下庄村',
				            '下薛宅',
				            '金狮湖',
				            '高速路',
				            '官岩寺',
				            '上山遗址',
				            '渠南村',
				            '温泉',
				            '水晶城',
				            '水竹湾',
				            '平湖森林果园',
				            '三角潭林场',
				            '罗家村',
				            '白岩山前滑草基地',
				            '里黄宅村',
				            '善庆村',
				            '文化馆',
				            '通济桥水库大坝',
				            '三城山农庄',
				            '塔山宾馆',
				            '月泉书院遗址公园']
                },
                updateData:{
                    turist:'全部',
                },
                topComponents:[
                    {name:'D1',id:'one',index:1,time:100,show:false,title:'景区客流热力图与视频监控'},
                    {name:'D6',id:'two',index:2,time:300,show:false,title:'景区客流'},
                    {name:'D8',id:'three',index:3,time:600,show:false,title:'拥堵指数',isVideo:false},
                    {name:'D3',id:'four',index:4,time:900,show:false,title:'游客评论'},
                ],
                bottomComponents:[
                    {name:'D11',id:'two',index:2,time:600,show:false,title:'关键词'},
                    {name:'B6',id:'three',index:3,time:1200,show:false,title:'实时天气'},
                    {name:'B2',id:'four',index:4,time:1800,show:false,title:'客流预警'},
                ],

            }
        },
    methods: {
    	
        catchmsg1(data){
            this.updateData.turist = data
        },
    },
    components:{
        ...componetstatus,
    },
}
</script>

<style lang="less" scoped>
    @import '../../../assets/style/souceShow.less';
</style>
