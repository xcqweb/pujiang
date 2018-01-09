<template>
<div class="content" v-bind:class="{ fullScreen: full }">
    <div class="text" v-show = 'changeModel' >
        <font>2017</font>年，<font>3月</font>消费最高，年度酒店占<font>18%</font>，景区占<font>51%</font>，民宿占<font>16%</font>，餐饮占<font>15%</font>
    </div>
    <div id="b9" style="width:100%;height:100%">
    </div>
    <Loading class='loading' v-show="isloading"></Loading>
</div>  
</template>

<script type="text/javascript">
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
import adaptation from '@/common/js/mixin/adaptation.js'
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
export default {
	changeModel:true,
	isloading:false,
    name:'b9',
    mixins: [adaptation],
    data(){
        var aageZeroTsev=[182, 202, 154, 254, 320];
        var aageEightTtwinF=[122, 202, 182, 122,122];
        var aageTwinTtwinni=[254, 254, 390, 380, 286];
        var aageThrTthrfour=[268, 254, 254, 410, 286];
        var aageThrTthrni=[268, 160, 80, 160, 368];
        var aageFourTfourf=[366, 202, 290, 365, 354];
        var aageFourfTfourni=[386, 367, 376, 342, 330];
        var aageFiveTfivef=[256, 309, 158, 324, 311];
        var aageFiveFive=[287, 372, 254, 378, 202];

        var aconsume=[
                {value: 950000, name: '酒店', selected: true},
                {value: 2790000, name: '景区'},
                {value: 848000, name: '民宿'},
                {value: 748000, name: '餐饮'}
            ];

        var amonth=[{value: 2600000, name: '1月'},
              {value: 3700000, name: '2月'},
              {value: 3850000, name: '3月'},
              {value: 1850000, name: '4月'}]
        return{
            option:{
                color: ['#4bcedd', '#368df7', '#7e6af6','#ff8885','#ffcd38','#e39a50','#75cf65','#b8e986','#86e9e8'],
                backgroundColor: 'rgba(0,0,0,0)',
                textStyle: {
                    fontSize: 12
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend:{
                    show:this.changeModel,
                    top:'50%',
                    right:'5%',
                    width:'70%',
                    itemWidth:12,
                    itemHeight:10,
                    textStyle:{
                        color:'white',
                    },
                    data:['0-17', '18-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55以上'],
                }
                ,
                grid: {
                    top: '55%',
                    left: '3%',
                    right: '5%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['2016年', '2015年', '2014年', '2013年', '2012年', ],
                    axisTick: {
                         alignWithLabel: true
                    },
                    axisLabel:{
                        textStyle:{
                            fontSize: '100%',
                            color:'white'
                        }
                    },
                    axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                        show: true,
                        lineStyle: {
                            color: '#368df7'
                        },
                    },
                },
                yAxis: {
                    name: '(万)',
                    type: 'value',
                    nameTextStyle:{
                   		color:'#ffffff',
                   		fontSize:'100%'
                	},
                    axisLabel:{
                        textStyle: {
                            fontSize: '100%',
                            color:'white'
                        }
                    },
                    axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                        show: false,
                        lineStyle: {
                            color: 'white'
                        },
                    },
                    splitLine:{
                        //show:false,
                        lineStyle:{
                            color:'#20549f',
                            width:1,
                            type:'solid'
                        },
                    }
                },
                series: [
                    {
                        name: '0-17',
                        type: 'bar', 
                        data: aageZeroTsev
                    },
                    {
                        name: '18-24',
                        type: 'bar', 
                        data: aageEightTtwinF
                    },
                    {
                        name: '25-29',
                        type: 'bar', 
                        data: aageTwinTtwinni
                    },
                    {
                        name: '30-34',
                        type: 'bar', 
                        data: aageThrTthrfour
                    },
                    {
                        name: '35-39',
                        type: 'bar', 
                        data: aageThrTthrni
                    },
                    {
                        name: '40-44',
                        type: 'bar', 
                        data: aageFourTfourf
                    },
                    {
                        name: '45-49',
                        type: 'bar', 
                        data: aageFourfTfourni
                    },
                    {
                        name: '50-54',
                        type: 'bar', 
                        data: aageFiveTfivef
                    },
                    {
                        name: '55以上',
                        type: 'bar', 
                        data: aageFiveFive
                    },
                    {
                        name: '支付方式',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: this.changeModel === true ? [0, '23%'] :[0, 0],
                        center: ['23%', '30%'],
                        label: {
                            normal: {
                                show:this.changeModel,
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: aconsume
                    },
                    {
                        name: '消费情况',
                        type: 'pie',
                        radius: this.changeModel === true ? ['27%', '31%'] :[0, 0], 
                        center: ['23%', '30%'],
                        label: {
                            normal: {
                                show:this.changeModel,
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: amonth
                    }
                ]
            },
        }
      },
      computed: {

      },
      created(){
      	this.isloading = true;
      },
    methods:{
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            this.chart.setOption(this.option);
        },
        //请求数据
	  	getData(){
	  		api.congestion(api.params).then( (re) =>{
	    		let reData = re;
				this.percents = reData.data.num;
					this.isloading = false;
				//console.log(re.data)
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	}
    },
    mounted() {
    	this.getData();
        this.$nextTick(echarts_resize('b9',this))
    },
    components:{
    	Loading
    }
}
</script>

<style lang="less" scoped>
div{
    width: 100%;
    height: 100%;
    position:relative;
    #b9{
        width: 100%;
        height: 100%;  
    }
    .text{
        font-size:1.5rem;
        text-align: left;
        letter-spacing:.4rem;
        line-height:2.3rem;
        color:#05a1cd;
        position:absolute;
        width:389/736*100%;
        right:3%;
        top:17%;
        font{
            color:white;
        }
    }
}
</style>
