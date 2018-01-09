<template>
    <div class="box">
        <div class="tabList">
            <ul>
                <li v-for='item in tablistCom' @click='chose(item)' :class='item.status'>
                    <font>{{item.name}}</font>
                </li>
            </ul>
        </div>
        <div class="topSide" >
            <div class="item"
                v-for='item in topComponents'
                :class="item.id">
                <h1>{{item.title}}</h1>
                <span @click='cutover(item,topComponents)'>
                    <img :src="cutoverImg"/>
                </span>
                <div class="border" v-if='item.show'>
                  <!--<keep-alive>-->
                    <componet
                    :is='item.name'
                    :key="item.id"
                    :place='place'
                    :commentProp = 'comment'
                    ></componet>
                  <!--</keep-alive>-->
                </div>
            </div>
        </div>
        <div class="bottomSide">
            <div class="item"
                v-for='item in bottomComponents'
                :class="item.id">
                <h1 :class="{a8:item.id==='one'}">{{item.title}}</h1>
                <span @click='cutover(item,bottomComponents)'>
                    <img :src="cutoverImg"/>
                </span>
                <div class="border" v-if='item.show'>
                  <!--<keep-alive>-->
                    <componet
                    :is='item.name'
                    :key="item.id"
                    :place='place'
                    :commentProp = 'comment'
                    ></componet>
                  <!--</keep-alive>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import echarts from 'echarts';
import componetstatus from '@/pages/home/componentstatus.js'
import headerBody from '@/pages/home/header.vue'
import Bus from '@/common/js/bus.js'
import _ from 'lodash'
import { mapGetters } from 'vuex'
export default {
    props:['placeName','placeAttractions'],
    name: 'souceShow',
        data () {
            return {
                place:'连州地下河',
                cutoverImg:require('../../../assets/切换.png'),
                moudle:[
                    {name:'D1',styleDlass:'游客餐饮消费分析',},
                    {name:'D3',styleDlass:'',},
                    {name:'D4',title:'景区收益分析',},
                    {name:'D5',styleDlass:'厕所使用率',},
                    {name:'D6',styleDlass:'景区当前客流',},
                    {name:'D7',styleDlass:'游客支付方式',},
                    {name:'D8',styleDlass:'拥堵指数',},
                    {name:'D9',styleDlass:'9',},
                    {name:'D10',styleDlass:'10',},
                    {name:'D11',styleDlass:'1',},
                    {name:'D12',styleDlass:'2',},
                    {name:'D13',styleDlass:'3',},
                    {name:'D14',styleDlass:'4',},
                    {name:'D15',styleDlass:'5',},
                    {name:'D16',styleDlass:'6',},
                    {name:'D17',styleDlass:'7',},
                    {name:'D18',styleDlass:'8',},
                ],
                tablist:this.tablistCom,
                current:[
                    {name:'D1',title:'景区客流热力图与视频监控'},
                    {name:'D6',title:'景区当前客流'},
                    {name:'D8',title:'拥堵指数'},
                    {name:'D3',title:''},
                    {name:'D2',title:'游客餐饮消费分析'},
                    {name:'D4',title:'总消费数据分析'},
                    {name:'D5',title:'厕所使用率'},
                    {name:'D7',title:'游客支付方式'},
                ],
                cutoverStatus:null,
                topComponents:[
                    {name:'D1',id:'one',index:1,time:100,show:false,title:'景区客流热力图与视频监控'},
                    {name:'D6',id:'two',index:2,time:300,show:false,title:'景区当前客流'},
                    {name:'D8',id:'three',index:3,time:600,show:false,title:'拥堵指数'},
                    {name:'D3',id:'four',index:4,time:900,show:false,title:'满意度'},
                ],
                bottomComponents:[
                    {name:'D2',id:'one',index:1,time:1200,show:false,title:'游客餐饮消费分析'},
                    {name:'D4',id:'two',index:2,time:1500,show:false,title:'总消费数据分析'},
                    {name:'D5',id:'three',index:3,time:1800,show:false,title:'厕所使用率'},
                    {name:'D7',id:'four',index:4,time:2100,show:false,title:'游客支付方式'},
                ],

            }
        },
    computed: {
        ...mapGetters({
            comment:'version/comment',
          }),
        tablistCom:function(){
            let arrb = [];
            _.forEach(this.placeAttractions,function(value,key){
                let items = {
                    name:value.place,
                    status: key === 0 ? 'chose' : 'unchose'
                }
                arrb.push(items)
            })
            return arrb
        }
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
                        console.log(this.components)
        },
        chose(item){
            this.tablistCom.forEach(function(list){
                list.status='unchose'
            })
            item.status='chose'
            this.place=item.name
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
        cutover(item,topOrBottom){
            this.cutoverStatus=topOrBottom;
            Bus.$on('cutoverMoudle', data => {
                 let _self = this;
                    let toast_chosed_index =data.numb.index-1;
                    //去除相同模块
                    for (var i=0 ,len = _self.topComponents.length; i<len ;i++){
                        //如果切换过来的Item 和当前模块有重复的，则互换模块
                       (function(){
                            if(_self.topComponents[i].name === data.item.name){
                                _self.topComponents[i].name = item.name;
                                _self.topComponents[i].title = item.title;
                        }
                       })(i)
                    }
                    for (var i=0 ,len = _self.bottomComponents.length; i<len ;i++){
                        //如果切换过来的Item 和当前模块有重复的，则互换模块
                       (function(){
                            if(_self.bottomComponents[i].name === data.item.name){
                                _self.bottomComponents[i].name = item.name;
                                _self.bottomComponents[i].title = item.title;
                        }
                       })(i)
                    }
                    this.cutoverStatus[toast_chosed_index].name=data.item.name
                    this.cutoverStatus[toast_chosed_index].title=data.item.title
                    Bus.$off("cutoverMoudle")
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
        let _self=this;
        console.log(this.comment)
        let arr = _self.topComponents.concat(_self.bottomComponents)
        var lentop=arr.length
        for (var j = 0 ; j < lentop; j++) {
            (
                function(){
                    let n=j
                    window.setTimeout(() => {
                        arr[n].show=true
                    }, arr[n].time);
                }
            )()
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../../../assets/style/souceShow.less';
</style>
