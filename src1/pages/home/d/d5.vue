<template>
  <div class="content">
    <div id="d5">
    </div>
    <span>60%</span>
  </div>
</template>

<script type="text/javascript">
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
export default {
    name:'d5',
    data(){
    return{
        option:{
          backgroundColor: 'rgba(0,0,0,0)',
          series: [{
              name: '饼图二',
              
              type: 'pie',
              radius: ['50%', '60%'],
              center: ['50%', '60%'],
              label: {
                  normal: {
                      position: 'center'
                  }
              },
              animationType:'expansion',
              animation:false,
              hoverAnimation:false,
              data: [
              {
                  value:180 ,
                  name: '',
                  label: {
                      normal: {
                          textStyle: {
                              color: '#999999',
                              fontSize: 38
                          },
                          position: 'center'
                      }
                  },
                  itemStyle:{
                      normal:{
                          color:'#7460EE'
                      },
                      emphasis:{
                          color:'#7460EE'
                      }
                  }
              },
              {
                  value: 80,
                  label: {
                      normal: {
                          textStyle: {
                              color: '#7460EE',
                              fontSize: 30
                          }
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: 'rgba(0,0,0,0)'
                      },
                      emphasis: {
                          color: 'rgba(0,0,0,0)'
                      }
                  },
                  hoverAnimation: false
              }, {
                  value: 180,
                  label: {
                      normal: {
                          textStyle: {
                              color: '#7460EE',
                              fontSize: 30
                          }
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: '#f2f2f2'
                      },
                      emphasis: {
                          color: '#f2f2f2'
                      }
                  },
                  hoverAnimation: false
              },
              ]
          },
          {
              name: '饼图二',
              type: 'pie',
              radius: ['50%', '60%'],
              label: {
                  normal: {
                      position: 'center'
                  }
              },

              center:['50%','55%'],
              hoverAnimation:false,
              data: [ {
                  value: 80,
                  label: {
                      normal: {
                          textStyle: {
                              color: 'rgba(0,0,0,0)',
                              fontSize: 30
                          }
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: 'rgba(0,0,0,0)'
                      },
                      emphasis: {
                          color: 'rgba(0,0,0,0)'
                      }
                  },
                  hoverAnimation: false
              }]
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
          this.$nextTick(echarts_resize('d5',this))
    }
}
</script>

<style lang="less" scoped>
.content{
    width:100%;
    height:100%;
    position:relative;
}
#d5{
    width:100%;
    height:100%;
}
span{
    display:inline-block;
    position:absolute;
    width:100%;
    left:0;
    top:55%;
    color:#6347ED;
    font-size:1.6rem;
}


</style>
