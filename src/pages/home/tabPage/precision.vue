<template>
    <div class="box">
        <div class="leftSide" >
            <div class="tabList item">
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
                	<span class='title'>时间筛选 : </span>
                    <dateSelect 
                    	:isStart=true
                    	@turistDate='getDate'
                    ></dateselect>
                </div>
            </div>
            <div class="item"
                v-for='item in leftComponents'
                :class="item.id">
                <h1>{{item.title}}</h1>
                </span>
                <div class="border" v-if='!item.show'>
                    <componet
                    :is='item.name'
                    :key="item.id"
                    :touristProp = "updateData.turist"
                    :yearMonth='dateMonth'
                    ></componet>
                </div>
            </div>
        </div>
        <div class="rightSide">
            <div class="item"
                v-for='item in rightComponents'
                :class="item.id">
                <h1>{{item.title}}</h1>
                </span>
                <div class="border" v-if='!item.show'>
                    <componet
                    :yearMonth='dateMonth'
                    :is='item.name'
                    :key="item.id"
                    :placeAttractionsProps = 'placeAttractions'
                    :touristProp = "updateData.turist"
                    ></componet>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import componetstatus from '@/pages/home/componentstatus.js'
export default {
    props:['placeName','placeAttractions'],
    name: 'barChartOption',
        data () {
            return {
            	dateMonth:'',
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
                	{name:'C9',id:'one',index:5,time:1200,show:false,title:'消费偏好'},
                    {name:'D2',id:'two',index:2,time:300,show:false,title:`餐饮偏好`},
                    {name:'C2',id:'three',index:3,time:600,show:false,title:'年龄'},
                    {name:'C6',id:'four',index:4,time:900,show:false,title:'关注点'},
                    {name:'C1',id:'five',index:1,time:100,show:false,title:'出行方式'},
                    {name:'C4',id:'six',index:6,time:1500,show:false,title:'性别'},
                    {name:'C5',id:'seven',index:7,time:1800,show:false,title:'游客来源城市'},
                ],
                rightComponents:[
                    {name:'C7',id:'one',index:1,time:2100,show:false,title:'景区游客排行'},
                    {name:'C8',id:'two',index:2,time:2400,show:false,title:'游客来源省份'},
                ],

            }
        },
    computed: {
    },
    methods: {
        catchmsg1(data){
            this.updateData.turist = data
        },
        getDate(val){
        	this.dateMonth = val[0]+''+val[1]
        },
    },
    components:{
        ...componetstatus,
    },
    beforeDestroy(){
  		this.$off()
    },
}
</script>

<style lang="less" scoped>
    @import '../../../assets/style/precision.less';
</style>
