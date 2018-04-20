<style lang="less" scoped>
.c1,#c1{
    width: 100%;
    height: 100%;
}

.week{
	z-index: 200;
    height: 1.5rem !important;
    width: 7rem !important;
    position: absolute;
    top: 5%;
    right: 10%;
    font-size:0.8rem;
    &:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
        line-height: 25px;
     }
    .oneweek{
      cursor: pointer;
      float: left;
      height: 1.5rem;
      line-height:1.5rem;
      width: 47%;
      color: #abb5d3;
      background-image:url('../../../assets/images/home/透明框—14日.png');
      background-size: 100% 100%;
      &.chose{
        background-image:url('../../../assets/images/home/透明框—7日.png');
          background-size: 100% 100%;
          color:#d3ddf9;
      }
    }
    .twoweek{
      cursor: pointer;
      float: right;
      height: 1.5rem;
      line-height:1.5rem;
      width: 47%;
      color: #abb5d3;
      background-image:url('../../../assets/images/home/透明框—14日.png');
      background-size: 100% 100%;
      &.chose{
        background-image:url('../../../assets/images/home/透明框—7日.png');
          background-size: 100% 100%;
          color:#d3ddf9;
      }
    }
  }
      .chose{
          background-image:url('../../../assets/images/home/透明框—7日.png');
          background-size: 100% 100%;
      }
</style>

<template>
<div class="c1">
    <!--<div class="week">-->
        <!--<span class="oneweek " v-bind:class="{ chose: isActive }" @click='redom("c1",0)'>7日</span>-->
        <!--<span class="twoweek" v-bind:class="{ chose: !isActive }" @click='redom("c1",1)'>14日</span>-->
    <!--</div>-->
    <div id="c1">
    </div>
    <Loading v-show="isloading"></Loading>
</div>  
</template>

<script type="text/javascript">
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts'
import adaptation from '@/common/js/mixin/adaptation.js'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    mixins: [adaptation,optionProps],
    name:'c1',
    data(){
        return{
            isActive:true,
           series:[{
	        	"nub": 24,
		        "date": "自驾游"
		      },
		      {
		        "nub": 36,
		        "date": "公共交通"
		      },
		      {
		        "nub": 40,
		        "date": "团队游"
		      },
	   	 ],
        }
      },
      computed: {
		
      },
      created(){
      },
       watch:{
    	code:function(){
    		let data={};
  			  data.code = this.code;
  		    data.monthId = this.yearMonth;
  		    this.getData(data)
    	}
    },
    methods:{
    	
    	//请求数据
	  	getData(data){
	  		//api.params.code = this.code;
	  		api.tripMode(data).then( (re) =>{
	  			//console.log(re)
	    		let reData= re.data.data;
	    		//console.log(reData)
	    			let arrData = [];
	  				for(let i in reData){
	  					arrData.push(reData[i])
	  				}
	  				for(let i=0; i<this.series.length; ++i){
	  					this.series[i].nub = arrData[i]
	  				}
	    		
					if(re.status===200){
						this.isloading = false;
					}
					this.redom("c1");
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	},
        redom(id,i){
        		//let series=[];
        		this.isActive = true;
	        	let dataY=[];
	     		 let dataX=[];
		      for (var i = 0; i < this.series.length; i++) {
		          dataY.push(this.series[i].nub);
		          dataX.push(this.series[i].date)
		      }
		      //console.log(this.responseData7.series)
            this.chart = echarts.init(document.getElementById(id));
            let option = {
            	tooltip: {
	                trigger: 'item',
	                position: 'right',
	                formatter:function(params){
	                	return params.name+' : '+params.data+'%';
	                }
	            },
                color:['#FB7C7D','#7460EE','#6AEDD9','#438AFF ','#02C753','#FC6ACB '],
                grid: {
                      left: '3%',
                      right: '5%',
                   	  bottom: '5%',
                      top:'28%',
                      containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : dataX,
                        axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                                show: true,
                                lineStyle: {
                                    color: '#368df7'
                                },
                        },
                        axisLabel: {
                        	margin:10,
                                 textStyle: {
                                     color: '#ffffff',//x坐标轴标签字体颜色
                                     fontSize: '80%',
                                 },
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
                yAxis : [
                    {
                        type : 'value',
                        axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                            show: false,
                            lineStyle: {
                                color: 'white'
                            },
                                
                        },
                        axisLabel:{
                            showMinLabel:true,
                            textStyle:{
                                color:'#ffffff',
                                fontSize: "80%",
                            },
                            formatter: '{value}%'
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
                series : [
                	{
                        name:'计划',
                        type:'bar',
                        barMaxWidth:'30%',
                        data:dataY,
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
                                fontSize:"70%",
                            },
                            formatter: '{c}%'
                        }
                       },
                    }
                ]
            };
            let isIE = window.navigator.userAgent.indexOf('Trident')
          if(isIE>-1){ 
            	option.series[0].label.normal.distance = 10;
            	option.grid.left = '13%';
						}
            this.chart.setOption(option);
        }
    },
    mounted() {
        this.$nextTick(echarts_resize('c1',this));
    },
}
</script>

