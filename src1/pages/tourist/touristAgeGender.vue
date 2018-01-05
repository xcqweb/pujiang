<template>
  <div>
    <div class='ageGender'>
          <h1>游客年龄和性别</h1>
          <vDate class='vueDate' @pageDate='getDate'></vDate>
          <vAgeEchart :optionOut='chartOption.top'></vAgeEchart>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import vDate from '../../components/commonui/vueDate/app.vue'
import vAgeEchart from './vAgeEchart.vue'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: '',
  data () {
    return {
        chartOption:{
            top:{
                id:'ageGender',
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
  components:{vAgeEchart,vDate
  }
}
</script>

<style lang="less" >
.ageGender{
    position:relative;
    height:828px;
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