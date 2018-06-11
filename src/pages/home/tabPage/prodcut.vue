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
                    <clock></clock>
                </div>
            </div>
            <div class="item"
                v-for='item in leftComponents'
                :class="item.id">
                <h1 :class="{a5:item.id==='three'}">{{item.title}}</h1>
                <span @click='cutover(item,leftComponents)'>
                    <!--切换按钮-->
                    <!--<img :src="cutoverImg"/>-->
                </span>
                <div class="border" v-if='!item.show'>
                    <componet
                    :apiName='item.apiName'
                    :isdate=true
                    :is='item.name'
                    :key="item.id"
                    :classo=true
                    :classt=true
                    :num='item.num'
                    :placeName = 'placeName'
                    :touristProp = "updateData.turist"
                    :istitle=true
                    ></componet>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import componetstatus from '@/pages/home/componentstatus.js'
export default {
    name: 'barChartOption',
    props:['placeName'],
        data () {
            return {
                qyselectlist:{
                    width:'55%',
                    left:'30%',
                    title:'全部',
                    selectStatus:false,
                    place:[
				             '全部',
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
                leftComponents:[
                    {name:'B17',id:'one',index:1,time:100,show:false,title:'产业数据'},
                    {name:'A6',id:'two',index:2,time:600,show:false,title:'游客来源地'},
                    {name:'A5',id:'three',index:3,time:900,show:false,title:'实时客流',num:8},
                    {name:'A1',id:'four',index:4,time:1200,show:false,title:'历史客流',apiName:'passengers'},
                ],

            }
        },
    computed: {
    },
    methods: {
        catchMsg(data){
           this.updateData.turist = data
        },
    },
    components:{
        ...componetstatus,
    },
}
</script>

<style lang="less" scoped>
    @import '../../../assets/style/prodcut.less';
</style>
