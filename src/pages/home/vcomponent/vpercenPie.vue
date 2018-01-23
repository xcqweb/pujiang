
<!--y营销推广-->
<template>
    <div class="content">
        <div id="percentA"></div>
        <Loading class='loading' v-show="isloading"></Loading>
    </div>
</template>

<script type="text/javascript">
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
export default {
    name:'a8',
    data(){
        return{
        	isloading:false,
            option:{
              backgroundColor: 'rgba(0, 0, 0, 0)',
              color: ['#f18790', '#75c774', '#5aa7fd','#f1c54b','#c184ff','6792fb'],
              tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		      },
              series : [
                  {
                    name:'营销渠道',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '55%'],
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
                            name:'微信',
                            label:{
                                normal:{
                                    show:true,
                                    position:'outside',
                                    textStyle:{
                                        color:'#f18790',
                                        fontSize:'100%'
                                    }
                                }
                            },
                            labelLine:{
                                normal:{
                                    show:true,
                                    lineStyle:{
                                        color:'#f18790'

                                    },
                                }
                            },
                            itemStyle:{
                                normal:{
                                    color:'#f18790'
                                },
                                emphasis: {
                                    color: '#f18790',
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }

                        },
                        {
                            value:16.0,
                             name:'微博',
                             label:{
                                normal:{
                                    show:true,
                                    position:'outside',
                                    textStyle:{
                                        color:'#75c774',
                                        fontSize:'100%'
                                    }
                                }
                            },
                            labelLine:{
                                normal:{
                                    show:true,
                                    lineStyle:{
                                        color:'#75c774'

                                    },
                                }
                            },
                             itemStyle:{
                                normal:{
                                    color:'#75c774'
                                },
                            }
                         },
                        {
                            value:19.8,
                             name:'公众号',
                             label:{
                                normal:{
                                    show:true,
                                    position:'outside',
                                    textStyle:{
                                        color:'#5aa7fd',
                                        fontSize:'100%'
                                    }
                                }
                            },
                            labelLine:{
                                normal:{
                                    show:true,
                                    lineStyle:{
                                        color:'#5aa7fd'

                                    },
                                }
                            },
                             itemStyle:{
                                normal:{
                                    color:'#5aa7fd'
                                },
                            }
                         },
                        {
                            value:5.5,
                            name:'其他',
                            label:{
                                normal:{
                                    show:true,
                                    position:'outside',
                                    textStyle:{
                                        color:'#c184ff',
                                        fontSize:'100%'
                                    }
                                }
                            },
                            labelLine:{
                                normal:{
                                    show:true,
                                    lineStyle:{
                                        color:'#c184ff'

                                    },
                                }
                            },
                            itemStyle:{
                                normal:{
                                    color:'#c184ff'
                                },
                                emphasis: {
                                    color: '#c184ff',
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }

                        },
                    ]
                },
              ]
          },
        }
    },
    methods:{
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            let w=this.chart.getWidth()
            let d=this.chart.getDom()
            this.chart.setOption(this.option);
        },
        //请求数据
	  	getData(){
	  		api.marketing(api.params).then( (re) =>{
	    		let reData = re.data.data;
	    		if(re.status){
	    			this.isloading = false;
	    		}
				reData.forEach( (item,index) => {
					this.option.series[0].data[index].value = item.value;
					this.option.series[0].data[index].name = item.name;
				});
				 this.redom('percentA');
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	}
    },
    created(){
    	this.isloading = true;
    	this.getData();
    },
    mounted() {
        this.$nextTick($sheet.echartRL('percentA',this))
    },
    components:{
    	Loading
    }
}
</script>

<style lang="less" scoped>
.content{
    width:100%;
    height:100%;
    position:relative;
}
#percentA{
    width:100%;
    height:100%;
}
</style>
