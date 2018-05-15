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
                    <componet
                    :isVideo=true
                    :is='item.name'
                    :key="item.id"
                    :placeName = 'placeName'
                    :touristProp = "updateData.turist"
                    ></componet>
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
    props:['placeName','turistArr'],
        data () {
            return {
                cutoverImg:require('../../../assets/切换.png'),
                qyselectlist:{
                    width:'55%',
                    left:'30%',
                    title:'全部',
                    selectStatus:false,
                    place:this.turistArr
                },

                updateData:{
                    turist:'全部',
                },
                leftComponents:[
                    {name:'D6',id:'one',index:3,time:900,show:false,title:'景区客流'},
                    {name:'D9',id:'two',index:3,time:900,show:false,title:''},
                    {name:'A5',id:'three',index:3,time:900,show:false,title:'历史客流'},
                    {name:'A10',id:'four',index:4,time:1200,show:false,title:''},
                    
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
        catchMsg(data){
           this.updateData.turist = data
        },
        headerEnter(){
            this.headerStatus=true;
        },
        headerLeave(){
            this.headerStatus=false;
        },
          
    },
    components:{
        ...componetstatus,
    },
    mounted(){
    }
}
</script>

<style lang="less" scoped>
    @import '../../../assets/style/video.less';
</style>
