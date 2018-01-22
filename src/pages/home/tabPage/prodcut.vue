<template>
    <div class="box">
        <div class="leftSide" >
            <div class="item"
                v-for='item in leftComponents'
                :class="item.id">
                <h1 :class="{a5:item.id==='three'}">{{item.title}}</h1>
                <span @click='cutover(item,leftComponents)'>
                    <!--切换按钮-->
                    <!--<img :src="cutoverImg"/>-->
                </span>
                <div class="border" v-if='item.show'>
                  <!--<keep-alive>-->
                    <componet
                    :is='item.name'
                    :key="item.id"
                    :placeName = 'placeName'
                    ></componet>
                  <!--</keep-alive>-->
                </div>
            </div>
        </div>
        <div class="rightSide">
            <div class="item"
                v-for='item in rightComponents'
                :class="item.id">
                <h1>{{item.title}}</h1>
               <!--点击切换选中的模块--> 
                <span @click='cutover(item,rightComponents)'>
                    <!--<img :src="cutoverImg"/>-->
                </span>
                <div class="border" v-if='item.show'>
                  <!--<keep-alive>-->
                    <componet
                    :is='item.name'
                    :key="item.id"
                    ></componet>
                  <!--</keep-alive>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import componetstatus from '@/pages/home/componentstatus.js'
import Bus from '@/common/js/bus.js'
export default {
    name: 'barChartOption',
    props:['placeName',],
        data () {
            return {
                cutoverImg:require('../../../assets/切换.png'),
                moudle:[
                    {name:'B16',title:'游客来源地',},
                    {name:'B1',title:'富民指数分析',},
                    {name:'B2',title:'客流预警',},
                    {name:'B3',title:'旅游营销分析',},
                    {name:'B4',title:'路况监控',},
                    {name:'B5',title:'拥堵指数',},
                    {name:'B6',title:'实时天气',},
                    {name:'B7',title:'省内游客来源地',},
                    {name:'B8',title:'村庄收益分析',},
                    {name:'B9',title:'旅游营业分析',},
                    {name:'B10',title:'交通预警',},
                    {name:'B11',title:'1',},
                    {name:'B12',title:'2',},
                    {name:'B13',title:'3',},
                    {name:'B14',title:'4',},
                    {name:'B15',title:'5',},

                ],
                current:[
                    {name:'B16',title:'游客来源地'},
                    {name:'A1',title:'客流人数分析'},
                    {name:'A5',title:'实时客流监测'},
                    {name:'B1',title:'富民指数'},
                    {name:'B6',title:'实时天气'},
                    {name:'B5',title:'拥堵指数'},
                    {name:'B2',title:'客流预警'},
                    {name:'B9',title:'旅游营业分析'},
                    {name:'A9',title:'视频监控'},
                    {name:'B4',title:'路况监控'},
                ],
                cutoverStatus:null,
                leftComponents:[
                    {name:'B16',id:'one',index:1,time:100,show:false,title:'游客来源地'},
                    {name:'A1',id:'two',index:2,time:300,show:false,title:'客流人数分析'},
                    {name:'A5',id:'three',index:3,time:600,show:false,title:'实时客流监测'},
                    {name:'B1',id:'four',index:4,time:900,show:false,title:'富民指数'},
                    // {name:'B6',id:'five',index:5,time:1200,show:false,title:'实时天气'},
                    // {name:'B5',id:'six',index:6,time:1500,show:false,title:'拥堵指数'},
                    // {name:'B2',id:'seven',index:7,time:1800,show:false,title:'客流预警'},
                    {name:'B9',id:'eight',index:8,time:2100,show:false,title:'旅游营业分析'},
                ],
                rightComponents:[
                    // {name:'A9',id:'one',index:1,time:2400,show:false,title:'视频监控'},
                    // {name:'B4',id:'two',index:2,time:2700,show:false,title:'路况监控'},
                ],

            }
        },
    computed: {
    },
    methods: {
        update(){
             this.barChartOption.series[0].data[3]={
                symbolSize:15,
                value:2114,
                itemStyle: {
                 normal: {
                        color: 'white',
                        opacity:1,
                        borderWidth:5,
                        borderColor:'#098DFF',
                        shadowBlur:5,
                        shadowColor:'#098DFF'
                    }
                }
            }
            this.barChartOption = Object.assign({}, this.barChartOption, )
        },
        console(){
        },
        headerEnter(){
            this.headerStatus=true;
        },
        headerLeave(){
            this.headerStatus=false;
        },
        add: function() {
            this.allComponents.push(this.componentName)
            // 重置输入框
            this.componentName = ''
        },
        add (name, text) {
               this.items.push({
                 component: name,
                 text: text
               })
            },
        render: function(h) { // h 为 createElement 函数，接受三个参数
            // tag
            // data
            // children 具体看文档吧
            return h('div',this.allComponents.map(function(componentName) {
                return h(componentName)
            }))
        },
        //切换模块事件
        cutover(item,topOrBottom){
            this.cutoverStatus=topOrBottom;
            Bus.$on('cutoverMoudle', data => {
                let i =data.numb.index-1
                this.cutoverStatus[i].name=data.item.name
                this.cutoverStatus[i].title=data.item.title
            })
            $toast.open(item,this.current,this.moudle);
        },
        cutoverMoudle(moudle){


        },
        setLazy(){
            // console.log(item)
            // window.setTimeout((item) => {

            //         item.show = true;
            //     }, item.time);
        },
        lazy(){

        }

    },
    components:{
        ...componetstatus,
    },
    mounted(){

        let _self=this
        let arr = _self.leftComponents.concat(_self.rightComponents)
        var lentop=arr.length
        for (var j = 0 ; j < lentop; j++) {
            (
                function(){
                    let n=j;
                    window.setTimeout(() => {
                        arr[n].show=true

                    }, arr[n].time);
                }
            )(j)
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../../../assets/style/prodcut.less';
</style>
