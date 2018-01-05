<template>
    <div class="flex">
        <div class='left-body'>
            <div class='top list'>
                <div v-for='topItem in leftTop' :class='topItem.id' class='item'>
                    <h1>{{topItem.title}}</h1>
                    <span @click='cutover(topItem,topComponents)'></span>
                    <div class="border" v-if='topItem.show'>
                        <componet 
                        :is='topItem.name'  
                        :key="topItem.id" 
                        :chosemMoudle='cutoverMoudle' 
                        :lazyLoad='setLazy'
                        ></componet>
                    </div>
                </div>
                <div class='item2-row item'></div>
            </div>
            <div class='list-column2 list'>
                <div class='item1-row item'></div>
                <div class='item2-row item'></div>
                <div class='item3-row item'></div>
            </div>
            <div class='list-column3 list'>
                <div class='item1-row item'></div>
                <div class='item2-row item'></div>
            </div>
        </div>
        <div class='right-body'>
            <div class="item"></div>
            <div class="item"></div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import echarts from 'echarts';
import A3 from '@/pages/home/vcomponent/vpercenPie.vue'
export default {
    name: 'barChartOption',
        data () {
            return {
                leftTop:[
                    {name:'A1',id:'one',index:1,time:100,show:false,title:'浦江客流人数分析'},
                    {name:'A2',id:'two',index:2,time:1000,show:false,title:'景区概况'},
                ],
                leftMid:[
                    {name:'A1',id:'one',index:1,time:100,show:false,title:'浦江客流人数分析'},
                    {name:'A2',id:'two',index:2,time:1000,show:false,title:'景区概况'},
                ],
                leftBottom:[
                    {name:'A1',id:'one',index:1,time:100,show:false,title:'浦江客流人数分析'},
                    {name:'A2',id:'two',index:2,time:1000,show:false,title:'景区概况'},
                ],
                right:[
                    {name:'A5',id:'one',index:1,time:5000,show:false,title:'客流实时监测'},
                    {name:'A6',id:'two',index:2,time:6000,show:false,title:'国内游客来源地'},
                ],
                barChartOption: {
                       color: ['#00ffff', '#00ffa2', '#f0e750'],
                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        //在（type: 'category'）中设置data有效
                        data: ['1月', '2月', '3月', '4月', '5月'
                        ],

                        splitLine: { //坐标轴在 grid 区域中的分隔线；
                            show: false,
                            lineStyle: { //分割线颜色，可设单个，也可以设置数组。
                                color: 'rgba(170,172,178,0.33)'
                            }
                        },
                        axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                            show: true,
                            lineStyle: {
                                color: 'rgba(170,172,178,0.53)'
                            },
                        },
                        axisLabel: {
                        },
                    }],
                    yAxis: [{
                        type: 'value',
                        min: 0,
                        max: 4000,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(170,172,178,0.33)'
                            }
                        },
                        axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                            show: false,
                            lineStyle: {
                                color: 'rgba(170,172,178,0.53)'
                            },
                        },
                        axisLabel: {
                            
                        },
                        // splitArea: {
                        //     show: true,
                        //     areaStyle: {
                        //         color: ['#112245', 'rgba(34,50,82,0.4)']
                        //     }
                        // }
                    }],
                    series: [{
                                name: '高危',
                                type: 'line',
                                smooth: false, //是否平滑曲线显示
                                lineStyle: { //线条样式 
                                    normal: {
                                        width: 2,
                                        color:'#2CC9E2',
                                    }
                                },
                                areaStyle: { //区域填充样式
                                    normal: {
                                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#098DFF'
                                        }, {
                                            offset: 1,
                                            color: '#098DFF'
                                        }], false),
                                        opacity:0.8,
                                    }
                                },
                                itemStyle: { //折现拐点标志的样式
                                    normal: {
                                        color: 'rgba(113,191,255,1)',
                                        borderColor:'rgba(113,191,255,1)',
                                        borderWidth:10,
                                        opacity:0,
                                    }
                                },
                                data: [0, 1900, 2100, 2954,3560]
                            }

                        ] //series结束
                },
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
        }
    },
    components:{
        A3
    },
    mounted(){
        
    }
}
</script>

<style lang="less" scoped>
@screen-xs:                  480px;
@screen-sm:                  768px;
@screen-md:                  992px;
@screen-lg:                  1200px;
@screen-xl:                  1400px;
.flex{
    min-height: 96vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    .item{
        height: auto;
        text-align: center;
        background-color: #163387;
        position: relative;
        h1{
            position:absolute;
            top: 1.3rem;
            left: 2rem;
            z-index: 2;
            color:#efeefd;
            font-size: 1.1rem;
            font-weight: 590;
            
        }
        span{
            position:absolute;
            top: 8px;
            right:8px;
            height: 18px;
            width: 18px;
            display: inline-block;
            background-image: url('../切换.png');
            background-size: 100% 100%;
            z-index: 2;
            cursor: pointer;
        }
    }
    @media screen and(min-width: 801px){
        .left-body{
            width: 71.2%;
            max-height: 90%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .list{
                display: flex;
                flex-direction:row;
                justify-content: space-between;
            }
            
            .top{
                height: 39%;
                .item1-row{
                    width: 61%;
                }
                .item2-row{
                    width: 38%;
                }
            }
            .list-column2{
                height: 28%;
                    .item1-row{
                        min-width: 35%;
                    }
                    .item2-row{
                        min-width: 31.5%;
                    }
                    .item3-row{
                        min-width: 31.2%;
                    }
            }
            .list-column3{
                height: 29%;
                .item1-row{
                    width: 35%;
                }
                .item2-row{
                    width: 64%;
                }
            }
        }
        .right-body{
            display: flex;
            flex-direction:column;
            justify-content: space-between;
            width:516/1920*100%; 
            max-height: 90%;
            div{
                min-height: 49%;
            }
        }
        

    }
    @media screen and(max-width: 800px){
        .left-body{
            flex: 100%;
            min-height: 300vh;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .list{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }
            .item{
                width: 100%;
                height: 50%;
            }
            .top{
                height: 100%;
            }
            .list-column2{
                height: 100%;
            }
            .list-column3{
                height: 100%;
            }
        }
        .right-body{
            flex: 100%;
            height: 820px;
            display: flex;
            flex-direction:column;
            justify-content: space-between;
            div{
                height: 400px;
            }
        }
    }
}
</style>