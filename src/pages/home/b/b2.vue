<template>
    <div class="b2">
        <div id="pieB2"></div>
        <div class="circle">
            <img :src="imgacircle"/>
        </div>
        <span>{{persent}}</span>
        <div class="text"><font>预警客流</font><font>{{this.set_config}}人</font></div>
      <Loading v-show="isloading"></Loading>
    </div>
</template>

<script>
import Vue from 'vue'
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
import Start_end_class from '@/common/js/star_end_class.js'
import {begindaytime} from '@/common/js/gtime.js'
import Loading from '@/components/commonui/loading/loading.vue'
export default {
  name: 'b2',
  data () {
    return {
        isloading:false,
        imgacircle:require('../../../assets/images/home/b/circle.png'),
        nub:'',
        set_config:''
    }
  },
  computed: {
    persent(){
      let nub = parseInt(this.nub);
      let setconfig = parseInt(this.set_config);
      if(!nub && !setconfig){
        return "";
      }else{
        return (nub*100/setconfig).toFixed(0)+"%";
      }
    }
  },
  methods:{
      redom(id){
          this.chart = echarts.init(document.getElementById(id));
          this.chart.setOption(this.option);
      },
  request(){
    this.isloading = true;
    let start_end_instance =  new Start_end_class('passengerwarning',begindaytime);
    start_end_instance.get_response().then(re => {
      //设置默认值
      this.nub = re.data.data.nub;
      this.set_config = re.data.data.set_config;
      this.isloading=false;
      let nub = ((this.nub/this.set_config)*100).toFixed(0);
      let setconfig = 100-nub;
      console.log(nub)
      
      let option={
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
                value:nub,
                name:'',
                itemStyle:{
                  normal:{
                    color:'#1da7fe',


                  }
                }
              },
              {
                value:setconfig,
                name:'',
                itemStyle:{
                  normal:{
                    color:'rgba(0,0,0,0)',
                  }
                }
              },
              ]
          }
          ]
      };
      this.option = option;
      this.redom("pieB2");
      this.$nextTick(echarts_resize('pieB2',this));
    }).catch( e =>{
      console.log(e);
    })
  }
  },
  created() {
    this.request();
  },
  components:{
    Loading
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
        font-size: 1rem;
        font-family: numberFont;
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
            font-family: numberFont;
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
