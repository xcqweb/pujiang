<style lang="less" scoped>
.d11{
    height:100%;
    width:100%;
    color: white;
}
#chartId{
    width:100%;
    height:90%;
    margin-top: 10%;
}
</style>
<template>
    <div class="d11">
        <div id="chartId"></div>
    </div>
</template>

<script>
import echarts_resize from '../../../common/js/echarts_resize.js'
// import d11sJson from '@/pages/home/showMore/bigComponent/json/d11s.json'
import echarts from 'echarts'
require('echarts-wordcloud');
import optionProps from '@/common/js/mixin/optionProps.js'
  export default {
    name:'d11',
    mixins: [optionProps],
    data() {
        return {
            chart:null,
            yunData:[
                {
                    "name": "浦江",
                    "value": 8
                },
                {
                    "name": "旅游",
                    "value": 6
                },
                {
                    "name": "位于",
                    "value": 6
                },
                {
                    "name": "禅院",
                    "value": 5
                },
                {
                    "name": "仙华山",
                    "value": 5
                },
                {
                    "name": "汽车站",
                    "value": 4
                },
                {
                    "name": "风景",
                    "value": 4
                },
                {
                    "name": "体验",
                    "value": 3
                },
                {
                    "name": "景区",
                    "value": 3
                },
                {
                    "name": "长湖",
                    "value": 3
                },
                {
                    "name": "溶洞",
                    "value": 3
                },
                {
                    "name": "风光",
                    "value": 2
                },
                {
                    "name": "山水",
                    "value": 2
                },
                {
                    "name": "之中",
                    "value": 2
                },
                {
                    "name": "中心",
                    "value": 2
                },
                {
                    "name": "三峡",
                    "value": 2
                },
                {
                    "name": "石刻",
                    "value": 2
                },
                {
                    "name": "特色",
                    "value": 2
                },
                {
                    "name": "新兴",
                    "value": 2
                },
                {
                    "name": "打造",
                    "value": 2
                },
                {
                    "name": "锋林",
                    "value": 2
                },
                {
                    "name": "便是",
                    "value": 2
                },
                {
                    "name": "趣园",
                    "value": 2
                },
                {
                    "name": "群山",
                    "value": 2
                },
                {
                    "name": "燕子",
                    "value": 2
                },
                {
                    "name": "凤城",
                    "value": 2
                },
                {
                    "name": "旅游",
                    "value": 2
                },
                {
                    "name": "成为",
                    "value": 2
                },
                {
                    "name": "通天",
                    "value": 2
                },
                {
                    "name": "山洞",
                    "value": 2
                },
                {
                    "name": "三大",
                    "value": 2
                },
                {
                    "name": "风光",
                    "value": 2
                },
                {
                    "name": "一洞",
                    "value": 2
                },
                {
                    "name": "5A",
                    "value": 2
                }

            ],
            option : {
                tooltip: {},
                series: [{
                    name: '旅游关键词',
                    type: 'wordCloud',
                    gridSize: 20,
                    sizeRange: [12, 50],
                    rotationRange: [0, 0],
                    shape: 'circle',
                    textStyle: {
                        normal: {
                            color: function() {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 260),
                                    Math.round(Math.random() * 260),
                                    Math.round(Math.random() * 260)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [ ]
                }]
            }
        }
    },
    // props: {
    //     mainContent: {
    //         type: String,
    //         default: function () {
    //                 return 'D2S'
    //         }
    //     },
    // },
    components: {

    },
    methods:{
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            // let maskImage = new Image();
            // maskImage =  require("../../../assets/images/wifi.png");
            // this.option.series[0].maskImage = maskImage;
            var JosnList = [];
            JosnList.push(...this.yunData);
            
            this.option.series[0].data = JosnList;
            this.chart.setOption(this.option);
        },
        getResponse(paramsObj){
            this.$axios.get(API_URL+'/qy/api/command/getKeWords',{params:paramsObj}).then(r => {

                if(r.data.code ==="200"||r.data.code ===200){
                    this.yunData = r.data.data;
                     this.$nextTick(echarts_resize('chartId',this))
                }
            })
        }
    },
    created () {
        var paramsObj = {
                area:"全部",
                name:"全部",
            }
    //    this.getResponse(paramsObj);
    },
    mounted(){
       this.$nextTick(echarts_resize('chartId',this))
    }
  }
</script>

