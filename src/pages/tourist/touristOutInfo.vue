<template>
  <div>
    <div class='outInfoUnil'>
          <h1>旅游出行交通工具</h1>
          <vDate class='vueDate' @pageDate='getDate'></vDate>
          <vOutEchart :optionOut='chartOption.top'></vOutEchart>
    </div>
    <div class='outInfoWay'>
          <h1>旅游出现方式</h1>
          <vDate class='vueDate' @pageDate='getDate'></vDate>
          <vOutEchart :optionOut='chartOption.bot'></vOutEchart>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import vDate from '../../components/commonui/vueDate/app.vue'
import vOutEchart from './vOutEchart.vue'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: '',
  data () {
    return {
        chartOption:{
            top:{
                id:'outInfoUnil',
                lenData:[{name:'江南第一家',icon:'circle',},
                {name:'白石湾风景区',icon:'circle',},
                {name:'官岩山',icon:'circle',},
                {name:'神丽峡',icon:'circle',},
                {name:'水竹湾森林公园',icon:'circle',},
                {name:'仙华山',icon:'circle',}],
                xData:['汽车','自驾','公交车','徒步'],
                series:[
                    [320, 332, 301, 334, 390, 330, 320],
                    [120, 132, 101, 134, 90, 230, 210],
                    [120, 232, 301, 134, 190, 110, 120],
                    [62, 82, 91, 84, 109, 110, 120],
                    [62, 118, 64, 106, 179, 160, 150],
                    [120, 232, 301, 234, 190, 130, 120],
                ]
            },
            bot:{
                id:'outInfoWay',
                lenData:[{name:'江南第一家',icon:'circle',},
                        {name:'白石湾风景区',icon:'circle',},
                        {name:'官岩山',icon:'circle',},
                        {name:'神丽峡',icon:'circle',},
                        {name:'水竹湾森林公园',icon:'circle',},
                        {name:'仙华山',icon:'circle',}],
                xData:['商旅','散客','团体','本地'],
                series:[
                    [120, 232, 301, 234, 190, 130, 120],
                    [120, 132, 101, 134, 290, 230, 220],
                    [62, 118, 64, 106, 179, 160, 150],
                    [150, 232, 201, 154, 190, 130, 210],
                    [120, 232, 301, 134, 190, 110, 120],
                    [320, 332, 301, 334, 390, 330, 320],
                ]
            }
        }
    }
  },
  computed: { 
  },
  methods: {
    getDate(value){
            console.log(value);
        },
  },
  components:{vOutEchart,vDate
  }
}
</script>

<style lang="less" >
.outInfoUnil,
.outInfoWay{
    position:relative;
    height:635px;
    width:100%;
    margin-bottom:30px;
    background-color:#FFFFFF;
    h1{
      position: absolute;
      font-size: 1.5rem;
      left: 40px;
      top: 30px;
      z-index:999;
    }
    .vueDate{
    right:0;
    top:6%;
    position:absolute;
    z-index:999;
}
    .calendar-dialog-body{
    transform: translate(0,22%) !important;
    top:-20%;
}
}



</style>