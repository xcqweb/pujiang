<style lang="less" scoped>
.content{
    width:100%;
    height:100%;
    position:relative;
}
#d7{
    width:100%;
    height:100%;
}
  ul{
    position:absolute;
    right:20px;
    top:40%;
    li{
        margin-top:10px;
        text-align:left;
        .circle{
            display:inline-block;
            height:8px;
            width:8px;
            margin-right:8px;
            border-radius:4px;
            background-color:red;
        }
    }

}
</style>
<template>
<div class="content">
  <div id="d7">
  </div>
  <ul>
      <li v-for='item in items' :style="{color:item.color}"><span class="circle" :style="{backgroundColor: item.color}"></span>{{item.year}}</li>
  </ul>
  <Loading v-show="isloading"></Loading>
</div>  
</template>

<script type="text/javascript">
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
export default {
    name:'d7',
    data(){
    return{
    	isloading:false,
    	currentDat:{},
    	allData:{},
        items:[{
                year:'支付宝',
                color:'#368df7',
            },
            {
                year:'微信',
                color:'#75cf65',
            },
            {
                year:'现金',
                color:'#fe6e40',
            }
            ],
        option:{
          backgroundColor: 'rgba(0,0,0,0)',
          color: ['#368DF7', '#6F5DDA', '#75CF65'],
          series : [
              {
                name:'访问来源',
                type:'pie',
                radius: ['41%', '47%'],
                center: ['35%', '55%'],
                // selecteMode:'single',
                // selectedOffset:30,
                // roseType:"area",
                startAngle:90,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                // animation:false,
                animationType:'expansion',
                data:[
                    {
                        value:20.5, 
                        name:'39%',
                        label:{
                            normal:{
                                show:true,
                                position:'outside',
                                align:'right',
                                textStyle:{
                                    color:'#368df7',
                                    fontSize:"100%"
                                }
                            }
                        },
                        labelLine:{
                            normal:{
                                show:true,
                                length:5,
                                length2:5,
                                lineStyle:{
                                    color:'rgba(0,0,0,0)'
                                }
                            }
                        },
                        itemStyle:{
                            normal:{
                                color:'#368DF7'
                            },
                            emphasis: {
                                color: '#368DF7',
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }

                    },
                    {
                        value:16.0,
                         name:'26%',
                         label:{
                            normal:{
                                show:true,
                                position:'outside',
                                align:'right',
                                textStyle:{
                                    color:'#75cf65',
                                    fontSize:"100%"
                                }
                            }
                        },
                        labelLine:{
                            normal:{
                                show:true,
                                length:5,
                                length2:5,
                                lineStyle:{
                                    color:'rgba(0,0,0,0)'
                                }
                            }
                        },
                         itemStyle:{
                            normal:{
                                color:'#75cf65'
                            },
                        }
                     },
                    {
                        value:19.8,
                         name:'33%',
                         label:{
                            normal:{
                                show:true,
                                position:'outside',
                                textStyle:{
                                    color:'#fe6e40',
                                    fontSize:"100%"
                                }
                            }
                        },
                        labelLine:{
                            normal:{
                                show:true,
                                length:2,
                                length2:2,
                                lineStyle:{
                                    color:'rgba(0,0,0,0)'
                                }
                            }
                        },
                         itemStyle:{
                            normal:{
                                color:'#fe6e40'
                            },
                        }
                     },
                ]
            },
          ]
      },
    }
    },
    props:['place'],
    watch:{
    	place:function(){
    		this.currentData = this.allData[this.place];
    		this.option.series[0].data[0].value = this.currentData['支付宝'].value;
    		this.option.series[0].data[0].name = this.currentData['支付宝'].percent+"%";
    		this.option.series[0].data[1].value = this.currentData['微信'].value;
    		this.option.series[0].data[1].name = this.currentData['微信'].percent+"%";
    		this.option.series[0].data[2].value = this.currentData['现金'].value;
    		this.option.series[0].data[2].name = 100-this.currentData['支付宝'].percent-this.currentData['微信'].percent+"%";
    		
    		this.redom('d7');
    	}
    },
    methods:{
    	//请求数据
	  	getData(){
	  		api.touristPayway(api.params).then( (re) =>{
	  				let reData = re.data.data;
	  				this.allData = reData;
	  				this.currentData = reData[this.place];
	  				this.option.series[0].data[0].value = this.currentData['支付宝'].value;
		    		this.option.series[0].data[0].name = this.currentData['支付宝'].percent+"%";
		    		this.option.series[0].data[1].value = this.currentData['微信'].value;
		    		this.option.series[0].data[1].name = this.currentData['微信'].percent+"%";
		    		this.option.series[0].data[2].value = this.currentData['现金'].value;
		    		this.option.series[0].data[2].name = 100-this.currentData['支付宝'].percent-this.currentData['微信'].percent+"%";
		    		this.redom('d7');
					if(re.status===200){
						this.isloading = false;
					}
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	},
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            this.chart.setOption(this.option);
        }
    },
    created(){
    	this.isloading =true;
    	this.getData();
    },
    mounted() {
          this.$nextTick(echarts_resize('d7',this))
    },
    components:{
    	Loading
    }
}
</script>


