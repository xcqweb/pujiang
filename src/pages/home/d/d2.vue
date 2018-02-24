<style lang="less" type="text/less" scoped>
.main_content {
    width: 100%;
    height: 100%;
    position: relative;
    #d2{
        width: 100%;
        height: 100%;
        margin-top: 2%;
    }
    h1{
        position:absolute;
        top: 0.8rem;
        left:1rem !important;
        font-size: 1.1rem;
        color:white;
    }
}

</style>
<template>
    <div class="main_content">
        <div id="d2"></div>
        <Loading v-show="isloading"></Loading>
    </div>
</template>
<script>
  import echarts_resize from '../../../common/js/echarts_resize.js'
  import echarts from 'echarts';
  import { mapGetters,mapActions } from 'vuex'
  import store from '../../../vuex/index'
  import Vue from 'vue'
  import optionProps from '@/common/js/mixin/optionProps.js'
  export default {
    name:'d2',
    mixins: [optionProps],
    data() {
      return {
        chart: null,
        isActive:true,
        xnub:null,
        ynub:null,
        loading:true,
        reloading:false,
        oneweekMock: [{
	        "nub": 0,
	        "date": "川菜"
	      },
	      {
	        "nub": 0,
	        "date": "湘菜"
	      },
	      {
	        "nub": 0,
	        "date": "鲁菜"
	      },
	      {
	        "nub": 0,
	        "date": "粤菜"
	      },
	      {
	        "nub": 0,
	        "date": "浙菜"
	      },
	      {
	        "nub": 0,
	        "date": "苏菜"
	      },
	      {
	        "nub": 0,
	        "date": "闽菜"
	      },
	      {
	        "nub": 0,
	        "date": "徽菜"
	      }
	    ],
        allData:{}
      }
    },
    store:store,
    props:[
         'place'
    ],
    watch:{
    	code:function(){
    		this.getData();
    	}
    },
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
	  		api.params.code = this.code;
	  		api.touristCustom(api.params).then( (re) =>{
	  				let reData = re.data.data;
	  				//this.allData = reData;
	  				//console.log(reData)
	  				let arrData = [];
	  				for(let i in reData){
	  					arrData.push(reData[i])
	  				}
	  				for(let i=0; i<this.oneweekMock.length; ++i){
	  					this.oneweekMock[i].nub = arrData[i]
	  				}
					//console.log(arrData)
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
	      this.$nextTick(echarts_resize('d2',this,dataX,dataY))
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
                        boundaryGap: true,

                        padding:0,
                        barMaxWidth:6,
                        type: 'category',
                        data: datax,
                        fontSize: 6,
                        scale: true,
                        lineStyle:2,
                        splitNumber:14,
                        minInterval:7,
                        axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                             show: true,
                             margin:20,
                                lineStyle: {
                                    color: '#368df7'
                             },
                        },
                         axisLabel: {
                             textStyle: {
                                 color: '#ffffff',//x坐标轴标签字体颜色
                                 fontSize: "80%",
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
                          color:'#ffffff'
                        },
                        splitLine:{
                          show:false,
                        },
                        axisLabel:{
                            showMinLabel:true,
                            textStyle:{
                                color:'#ffffff',
                                fontSize: '85%',
                            },
                            formatter: '{value}%'
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
                        barMaxWidth:'20%',
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
                                fontSize:"80%"
                            },
                            formatter: '{c}%'
                        }
                       },
                    }

                ]
            }//option
            let isIE = window.navigator.userAgent.indexOf('Trident')
          if(isIE>-1){ 
            	option.series[0].label.normal.distance = 10;
						}
        this.chart.setOption(option)
      }
    },
    components:{},
    created(){
    },
    mounted() {
      this.redom7();
    },
  }
</script>
