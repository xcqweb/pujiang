<template>
    <div class="b2">
        <div id="pieB2"></div>
        <div class="circle">
            <img :src="imgacircle"/>
        </div>
        <span>87.3%</span>
        <div class="text"><font>预警客流</font><font>12000</font></div>
    </div>
</template>

<script>
import Vue from 'vue'
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
export default {
  name: 'b2',
  data () {
    return {
        imgacircle:require('../../../assets/images/home/b/circle.png'),
        option:{
            backgroundColor: 'rgba(0,0,0,0)',
            series: [
                {
                    name: '消费情况',
                    type: 'pie',
                    radius:  ['50%', '58%'],
                    center: ['50%', '55%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        
                        {
                        value:335,
                        name:'',
                        itemStyle:{
                            normal:{
                                color:'#1da7fe',
                                

                            }
                        }
                    },
                        {
                        value:40, 
                        name:'',
                        itemStyle:{
                            normal:{
                                color:'rgba(0,0,0,0)',
                                // borderColor:'#1da7fe',
                                // borderWidth:1,
                            }
                        }
                    },
                    ]
                }
            ]
        }
    }
  },
  computed: { 
  },
  methods:{
      redom(id){
          this.chart = echarts.init(document.getElementById(id));
          this.chart.setOption(this.option);
      }
  },
  mounted() {
        this.$nextTick(echarts_resize('pieB2',this))
  },
  components:{
  }
}
</script>

<style lang="less" scoped>
.b2{
    height:100%;
    width:100%;
    position:relative;
    span{
        position:absolute;
        top:55%;
        left:50%;
        color:#1da7fe;
        transform: translate(-50%,-50%);
        font-size:.8rem;
    }
    #pieB2{
        height:100%;
        width:100%;
        position:absolute;
    }
    .circle{
        height: auto;
        width:110/223*100%;
        text-align: center;
        position:absolute;
        top:55%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .text{
        width:80%;
        position:absolute;
        bottom:5px;
        left:50%;
        transform: translateX(-50%);
        font{
            margin-left:10%;
            color:#1da7fe;
            font-size:1rem;
        }
    }
    img{                  
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    } 
}

</style>