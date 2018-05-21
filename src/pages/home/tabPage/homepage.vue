<template>
  <div id="apphome">
    <div class="top">
        <div v-for='topItem in topComponents' :class='topItem.id'>
            <h1>{{topItem.title}}</h1>
            </span>
            <div class="border" v-if='!topItem.show'>
                <componet
                :apiName='topItem.apiName'
                :isdate=false
                :is='topItem.name'
                :key="topItem.id"
                ></componet>
            </div>
        </div>
    </div>
    <div class="bottom">
        <div v-for='topItem in bottomComponents' :class='topItem.id'>
            <h1 :class="{a5:topItem.id==='one',a8:topItem.id==='four'}">{{topItem.title}}</h1>
            </span>
            <div class="border" v-if='!topItem.show'>
                <componet
                :is='topItem.name'
                :key="topItem.id"
                :placeName = 'placeName'
                :istitle=false
                :num='topItem.num'
                ></componet>
            </div>
        </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import componetstatus from '@/pages/home/componentstatus.js'
import Bus from '@/common/js/bus.js'
export default {
        props:['placeName',],
        data() {
            return {
                topComponents:[
                    {name:'A1',id:'one',index:1,time:100,show:false,title:'历史客流',apiName:'passenger'},
                    {name:'A2',id:'two',index:2,time:300,show:false,title:'景区概况'},
                    {name:'A3',id:'three',index:3,time:600,show:false,title:''},
                    {name:'A4',id:'four',index:4,time:900,show:false,title:'游客满意度'},
                ],
                bottomComponents:[
                    {name:'A5',id:'one',index:1,time:1200,show:false,title:'实时客流',num:4},
                    {name:'A6',id:'two',index:2,time:1500,show:false,title:'游客来源地'},
                    {name:'A7',id:'three',index:3,time:1800,show:false,title:'游客来源排行'},
                ],
            }
        },
        components: {
                ...componetstatus,
        },
    }
</script>

<style lang="less" type="text/less" scoped >
    @import '../../../assets/style/home.less';
</style>
