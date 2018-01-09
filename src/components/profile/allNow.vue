<template>
  <div class="content">
    <div id="allNow">
    </div>
    <span>614</span><font>万元</font>
  </div>
</template>

<script type="text/javascript">
import echarts_resize from '../../common/js/echarts_resize.js'
import echarts from 'echarts';
export default {
  data(){
    return{
        option:{
          backgroundColor: 'rgba(0,0,0,0)',
          series: [{
              name: '饼图二',
              
              type: 'pie',
              radius: ['70%', '80%'],
              label: {
                  normal: {
                      position: 'center'
                  }
              },
              animationType:'expansion',
              animation:false,
              hoverAnimation:false,
              data: [{
                  value:60 ,
                  name: '',
                  label: {
                      normal: {
                          textStyle: {
                              color: '#999999',
                              fontSize: "280%"
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
              }, {
                  value: 120,
                  label: {
                      normal: {
                          textStyle: {
                              color: '#7460EE',
                              fontSize: "220%"
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
              }]
          },
          {
              name: '饼图二',
              type: 'pie',
              radius: ['60%', '70%'],
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
                              fontSize: "220%"
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
          }
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
      this.$nextTick(echarts_resize('allNow',this))
}
}
</script>

<style lang="less" scoped>
.content{
    width:100%;
    height:100%;
    position:relative;
}
#allNow{
    width:100%;
    height:100%;
}
span{
    display:inline-block;
    position:absolute;
    color:#6347ED;
    width:100%;
    left:0;
    top:32%;
}
font{
    display:inline-block;
    position:absolute;
    color:#6347ED;
    width:100%;
    left:0;
    
}
span{
    font-size:1.5rem;
  }
  font{
    font-size:.8rem;
    top:55%;
  }
</style>
