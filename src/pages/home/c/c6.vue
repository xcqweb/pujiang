<template>
  <div class="main_content">
    <div id="c6"></div>
    <Loading v-show="isloading"></Loading>
  </div>
</template>
<script>
  import echarts_resize from '../../../common/js/echarts_resize.js'
  import echarts from 'echarts';
  import { mapGetters } from 'vuex'
  import store from '../../../vuex/index' 
  import { mapActions } from 'vuex'
  import timeMixin from '@/common/js/mixin/timeMixin.js'
  import Vue from 'vue'
  import api from '@/api/index.js'
  const QuiverItalRegular = require('../../../assets/style/QuiverItalRegular.ttf');
	import Loading from '@/components/commonui/loading/loading.vue'
  export default {
    name:'c6',
    mixins: [timeMixin],
    data() {
      return {
      	isloading:false,
        chart: null,
        isActive:true,
        xnub:null,
        ynub:null,
        loading:true,
        reloading:false,
        oneweekMock:[],
      }
    },
    store:store,
    computed:{
      isCase:{
        get: function(){
          return window.location.hash.length > 3 ? true :false;
        } 
      },
    },
    methods: {
    	//请求数据
	  	getData(){
	  		api.touristFocus(api.params).then( (re) =>{
	  				let reData = re.data.data;
	  				this.oneweekMock = reData;
					if(re.status===200){
						this.isloading = false;
					}
					this.redom7();
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	},
    redom7(){
        if(this.chart){
            this.chart.dispose();
        }
      this.isActive=true;
      let dataY=[];
      let dataX=[];
      for (var i = 0; i < this.oneweekMock.length; i++) {
          dataY.push(this.oneweekMock[i].nub);
          dataX.push(this.oneweekMock[i].date)
      }
      this.$nextTick(echarts_resize('c6',this,dataX,dataY))
    },
    redom (id,xyfonsiz,datax,datay) {
        var _self= this;
        _self.loading=false;
        this.chart = echarts.init(document.getElementById(id))
        let option={
                    backgroundColor: 'rgba(0,0,0,0)',
                    color: ['#1F6ABB','#3897C5','#A4C5E6'],
                    grid: {
                         show: true,
                         left: '15%',
                         top: '20%',
                         right: '5%',
                         bottom: '20%',
                         borderWidth: 0,
                         backgroundColor: 'rgba(0,0,0,0)',
                     },
                    xAxis: [
                        {
                        axisLabel :{  
                            interval:0   
                        }  ,
                        show:true,
                        barGap: 0,
                      //  boundaryGap: false,
                        
                        padding:0,
                        barMaxWidth:6,
                        type: 'category',
                        data: datax,
                        fontSize: '90%',
                        scale: true,
                        lineStyle:2,
                        splitNumber:14,
                        minInterval:7,
                        axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                             show: true,
                                lineStyle: {
                                    color: '#368df7'
                             },
                        },
                         axisLabel: {
                             textStyle: {
                                 color: '#ffffff',//x坐标轴标签字体颜色
                                 fontSize: '85%',
                             },
                        },
                        axisTick:{
                                show:false,
                        },
                        splitLine:{
                            show:false,
                            lineStyle:{
                                color:'#20549f',
                                width:1,
                                type:'solid'
                            },
                        }

                        }
                    ],
                    yAxis:{
                        show:true,
                        nameTextStyle:{
                          color:'#ffffff',
                          fontFamily:QuiverItalRegular,
                        },
                        splitLine:{
                          show:false,
                        },
                        axisLabel:{
                            showMinLabel:true,
                            textStyle:{
                                color:'#ffffff',
                                fontSize: '80%',
                            },
                            formatter: '{value} %'
                        },
                        axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                            show: false,
                            lineStyle: {
                                color: '#368df7'
                            },
                        },
                        axisTick:{
                            show:false,
                        }
                    },
                    series : [
                    {
                        name:'计划',
                        type:'bar',
                        barMaxWidth:'50%',
                        data:datay,
                        itemStyle:{
                            normal: {
                                color: '#57abfe'
                            }
                        },
                        label:{
                        normal:{
                            show:true,
                            position:'top',
                            textStyle:{
                                color:'#2CC9E2',
                                fontSize:"80%",
                            },
                            formatter: '{c}%'
                        }
                       },
                    }
                
                ]
            }//option
            option.series[0].label.normal.textStyle.fontFamily = require('../../../assets/style/QuiverItalRegular.ttf');
        this.chart.setOption(option)
      }
    },
    components:{
    	Loading
    },
    created(){
    	this.isloading = true;
    	this.getData();
    },
    mounted() {
      this.redom7();
    }
  }
</script>
<style lang="less" type="text/less" scoped>
.main_content {
    width: 100%;
    height: 100%;
    position: relative;
    #c6{
        width: 100%;
        height: 100%;
    }
}
</style>