<template>
  <div id="apphome">
    <div class="top">
        <div v-for='topItem in topComponents' :class='topItem.id'>
            <h1>{{topItem.title}}</h1>
            <span @click='cutover(topItem,topComponents)'>
                <img :src="cutoverImg"/>
            </span>
            <div class="border" v-if='topItem.show'>
                <componet 
                :is='topItem.name'  
                :key="topItem.id" 
                :chosemMoudle='cutoverMoudle' 
                :lazyLoad='setLazy'
                ></componet>    
            </div>
        </div>
    </div>
    <div class="bottom">
        <div v-for='topItem in bottomComponents' :class='topItem.id'>
            <h1>{{topItem.title}}</h1>
            <span @click='cutover(topItem,bottomComponents)'>
                <img :src="cutoverImg"/>
            </span>
            <div class="border" v-if='topItem.show'>
                <componet
                :is='topItem.name' 
                :key="topItem.id" 
                :chosemMoudle='cutoverMoudle' 
                :lazyLoad='setLazy'
                :placeName = 'placeName'
                ></componet>
            </div>
        </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import echarts from 'echarts';
import vmask from '@/components/commonui/mask.vue'
import componetstatus from '@/pages/home/componentstatus.js'
import headerBody from '@/pages/home/header.vue'
import Bus from '@/common/js/bus.js'
export default {
        props:['placeName',],
        data() {
            return {
                cutoverImg:require('../../../assets/切换.png'),
                headerStatus:false,
                allComponents: [],
                componentName: '',
                moudle:[
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
                    
                    {name:'C1',title:'出行方式分析',},
                    {name:'C2',title:'年龄分析',},
                    {name:'C3',title:'浦江客流热地图',},
                    {name:'C4',title:'游客男女比例',},
                    {name:'C5',title:'游客详细客源地分布',},
                    {name:'C6',title:'游客关注点',},
                    {name:'C7',title:'景区游客排行',},
                    {name:'C8',title:'游客来源排行',},
                    {name:'C9',title:'游客属性分析',},
                    {name:'C10',title:'粉丝关注渠道分析',},
                    {name:'C15',title:'餐饮排行',},
                    
                    
                    

                    {name:'D1',styleDlass:'游客餐饮消费分析',},
                    {name:'D2',styleDlass:'游客餐饮消费分析',},
                    {name:'D3',styleDlass:'',},
                    {name:'D4',title:'景区收益分析',},
                    {name:'D5',styleDlass:'厕所使用率',},
                    {name:'D6',styleDlass:'景区当前客流',},
                    {name:'D7',styleDlass:'游客支付方式',},
                    {name:'D8',styleDlass:'拥堵指数',},

                    {name:'B11',title:'1',},
                    {name:'B12',title:'2',},
                    {name:'B13',title:'3',},
                    {name:'B14',title:'4',},
                    {name:'B15',title:'5',},
            
                    {name:'C10',title:'10',},
                    {name:'C11',title:'1',},
                    {name:'C12',title:'2',},
                    {name:'C13',title:'3',},
                    {name:'C14',title:'4',},
                    {name:'C15',title:'5',},
                    {name:'C16',title:'6',},
                    {name:'C17',title:'7',},
                    {name:'C18',title:'8',},
                    
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
                current:[
                    {name:'A1',title:`${this.placeName}客流人数分析`},
                    {name:'A2',title:'景区概况'},
                    {name:'A3',title:''},
                    {name:'A4',title:'游客满意度'},
                    {name:'A5',title:'客流实时监测'},
                    {name:'A6',title:'国内游客来源地'},
                    {name:'A7',title:'游客来源排行榜'},
                    {name:'A8',title:'营销推广'},
                    {name:'A9',title:'视频监控'},
                    {name:'',title:'视频监控'},
                    {name:'',title:'视频监控'},
                ],
                topComponents:[
                    {name:'A1',id:'one',index:1,time:100,show:false,title:`${this.placeName}客流人数分析`},
                    {name:'A2',id:'two',index:2,time:300,show:false,title:'景区概况'},
                    {name:'A3',id:'three',index:3,time:600,show:false,title:''},
                    {name:'A4',id:'four',index:4,time:900,show:false,title:'游客满意度'},
                ],
                bottomComponents:[
                    {name:'A5',id:'one',index:1,time:1200,show:false,title:'客流实时监测'},
                    {name:'A6',id:'two',index:2,time:1500,show:false,title:'国内游客来源地'},
                    {name:'A7',id:'three',index:3,time:1800,show:false,title:'游客来源排行榜'},
                    {name:'A8',id:'four',index:4,time:2100,show:false,title:'营销推广'},
                    {name:'A9',id:'five',index:5,time:2400,show:false,title:'视频监控'},
                ],
                text:'headerBody',
                cutoverStatus:null,
            }
        },

        components: {
                vmask,
                headerBody,
                ...componetstatus,
        },
        methods: {
            console(){
                console.log(this.components)
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
        mounted() {
            // var els = document.getElementsByTagName('canvas');
            // els.setAttribute('display', 'none');
            let _self=this
            var lentop=_self.topComponents.length
            for (var j = 0 ; j < lentop; j++) {
                (
                    function(){
                        let n=j
                        window.setTimeout(() => {        
                            _self.topComponents[n].show=true
                        }, _self.topComponents[n].time); 
                    }
                )()  
            }
            var len=_self.bottomComponents.length
            for (var i = 0 ; i < len; i++) {
                (
                    function(){
                        let n=i
                        window.setTimeout(() => {             
                            _self.bottomComponents[n].show=true
                        }, _self.bottomComponents[n].time)
                    }
                )()  
            }
        }
    }
</script>

<style lang="less" type="text/less" scoped >
    @import '../../../assets/style/home.less';

</style>
