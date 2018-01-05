<template>
<div class="content">
  <div id="percent">
  </div>
  <ul>
      <li v-for='item in items'><span class="circle" :style="{backgroundColor: item.color}"></span>{{item.year}}</li>
  </ul>
</div>  
</template>

<script type="text/javascript">
import echarts_resize from '../../common/js/echarts_resize.js'
import echarts from 'echarts';
export default {
  data(){
    return{
        items:[{
                year:'2014年',
                color:'#368DF7',
            },
            {
                year:'2015年',
                color:'#6F5DDA',
            },
            {
                year:'2016年',
                color:'#75CF65',
            }
            ],
        option:{
          backgroundColor: 'rgba(0,0,0,0)',
          color: ['#368DF7', '#6F5DDA', '#75CF65'],
          series : [
              {
                name:'访问来源',
                type:'pie',
                radius : '75%',
                center: ['35%', '50%'],
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
                                position:'inside',
                                textStyle:{
                                    color:'#FFFFFF'
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
                                position:'inside',
                                textStyle:{
                                    color:'#FFFFFF'
                                }
                            }
                        },
                         itemStyle:{
                            normal:{
                                color:'#6F5DDA'
                            },
                        }
                     },
                    {
                        value:19.8,
                         name:'33%',
                         label:{
                            normal:{
                                show:true,
                                position:'inside',
                                textStyle:{
                                    color:'#FFFFFF'
                                }
                            }
                        },
                         itemStyle:{
                            normal:{
                                color:'#75CF65'
                            },
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
        this.chart.setOption(this.option);
    }
},
mounted() {
      this.$nextTick(echarts_resize('percent',this))
}
}
</script>

<style lang="less" scoped>
.content{
    width:100%;
    height:100%;
    position:relative;
}
#percent{
    width:100%;
    height:100%;
}
ul{
    position:absolute;
    right:30px;
    top:20%;
    li{
        margin-top:10px;
        color:white;
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
