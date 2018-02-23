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
  import optionProps from '@/common/js/mixin/optionProps.js'
  import api from '@/api/index.js'
  const QuiverItalRegular = require('../../../assets/style/QuiverItalRegular.ttf');
	import Loading from '@/components/commonui/loading/loading.vue'
  export default {
    name:'c6',
    mixins: [timeMixin,optionProps],
    data() {
      return {
        chart: null,
        isActive:true,
        xnub:null,
        ynub:null,
        loading:true,
        reloading:false,
        oneweekMock:[
		    {
		      "nub": 0,
		      "date": "游玩"
		    },
		    {
		      "nub": 0,
		      "date": "住宿"
		    },
		    {
		      "nub": 0,
		      "date": "环境"
		    },
		     {
		      "nub": 0,
		      "date": "餐饮"
		    },
		    {
		      "nub": 0,
		      "date": "交通"
		    },
		    {
		      "nub": 0,
		      "date": "消费"
		    }
		  ],
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
    watch:{
    	code:function(){
    		this.getData();
    	}
    },
    methods: {
    	
    	//请求数据
	  	getData(){
	  		api.params.code = this.code;
	  		api.touristFocus(api.params).then( (re) =>{
	  				let reData = re.data.data;
	  				//console.log(reData)
	  				//this.oneweekMock = reData;
	  				
	  				let arrData = [];
	  				for(let i in reData){
	  					arrData.push(reData[i])
	  				}
	  				for(let i=0; i<this.oneweekMock.length; ++i){
	  					this.oneweekMock[i].nub = arrData[i]
	  				}
	  				
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
                    tooltip: {
			                trigger: 'item',
			                position: 'right',
			                formatter:function(params){
			                	return params.name+' : '+params.data+'%';
			                }
			            	},
                    grid: {
                         show: true,
                         left: '15%',
                         top: '26%',
                         right: '5%',
                         bottom: '20%',
                         borderWidth: 0,
                         backgroundColor: 'rgba(0,0,0,0)',
                     },
                    xAxis: [
                        {
                        	label:{
                        	},
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
                         	//magin:50,
                             textStyle: {
                                 color: '#ffffff',//x坐标轴标签字体颜色
                                 fontSize: '70%',
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
          let isIE = window.navigator.userAgent.indexOf('Trident')
          if(isIE>-1){ 
            	option.series[0].label.normal.distance = 10;
						}
        this.chart.setOption(option)
      }
    },
    components:{
    	Loading
    },
    created(){
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
        margin-top: 3%;
    }
}
</style>