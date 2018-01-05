<template>
    <div class="content">
        <div id="c10"></div>
    </div>  
</template>

<script type="text/javascript">
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
export default {
    name:'c10',
    data(){
    return{
        option:{
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color: ['#f18790', '#75c774', '#5aa7fd','#f1c54b','#c184ff','6792fb'],
          series : [
              {
                name:'访问来源',
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
                                    color:'#f18790'
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
                                    color:'#75c774'
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
                                    color:'#5aa7fd'
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
                                    color:'#c184ff'
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

        }
    },
    mounted() {
          this.$nextTick($sheet.echartRL('c10',this))
    }
}
</script>

<style lang="less" scoped>
.content{
    width:100%;
    height:100%;
    position:relative;
}
#c10{
    width:100%;
    height:100%;
}
</style>
