<template>
  <div>
    <div class="riceTop">
      <h1>富民指数</h1>
      <div class="context">
        <span class="numb">{{richData}}</span>
        <span class="rise"><span :class='riseStatus'></span><font>+{{rise}}</font>月增长</span>
        <span class="rise"><span :class='riseStatus'></span><font>+{{risePersent}}</font>增长率</span>
      </div>
    </div>
    <div class="riceTitle">
        <ul>
            <li v-for='item in items' @click='chose(item)'>
                <span :class='item.status'></span>
                <font>{{item.text}}</font>
            </li>
        </ul>
      <vDate class='vueDate' @pageDate='getDate'></vDate>
    </div>
    <div class="riceBottom">
      <ul>
          <li>
              <vrichEchart></vrichEchart>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import vDate from '../../components/commonui/vueDate/app.vue'
import vrichEchart from './vrichEchart.vue'
export default {
  name: '',
  data () {
    return {
        richData:'28719',
        rise:'1320',
        risePersent:'12%',
        riseStatus:'up',
        items:[
            {text:'马墅村',status:'chosed'},
            {text:'红旗村',status:'chosed'},
            {text:'山头村',status:'chosed'},
            {text:'水丽村',status:'unchosed'},
            {text:'后江村',status:'chosed'},
        ],
        lists:[

        ]
    }
  },
  computed: { 
  },
  methods: {
     getDate(value){
            console.log(value);
    },
    chose(item){
         switch(item.status){
            case 'chosed':
            item.status='unchosed'
            break;
            case 'unchosed':
            item.status='chosed'
            break
         }
    },
  },
  components:{vDate,vrichEchart
  }
}
</script>

<style lang="less">
.riceTop{
    position:relative;
    height:288px;
    background-color:#FFFFFF;
    h1{
        position: absolute;
        font-size: 1.5rem;
        left: 40px;
        top: 30px;
      }
    .context{
        position: absolute;
        left: 60px;
        top: 40%;
        .numb{
            font-size:6rem;
        }
        .rise{
            font-size:2rem;
            margin-left:8rem;
        }
        font{
            font-size:3rem;
        }
    }
    .up{
        background-image: url('../../assets/images/up.png');
        background-size: 100% 100%;
        width: 34px;
        height: 54.8px;
        display: inline-block;
        margin-bottom:-10px;
    }
    .down{
        background-image: url('../../assets/images/down.png');
        width: 34px;
        height: 54.8px;
        display: inline-block;
        margin-bottom:-10px;
    }
}
.riceTitle{
    position:relative;
    margin-top:20px;
    height:400px;
    overflow:hidden;
    .vueDate{
        float:right;
        background-color:#FFFFFF;
        margin-top:-20px;
    }
    .calendar-dialog-body{
        transform: translate(0,22%) !important;
        top:0;
    }
    ul{
        position:absolute;
        height:40px;
        width:70%;
        background-color:#FFFFFF;
        li{
            float:left;
            margin-left:39px;
        }
    }
    .unchosed{
        background-image: url('../../assets/images/vunchosed.png');
        background-size: 100% 100%;
        width: 30px;
        height: 30px;
        display: inline-block;
        margin-bottom:-10px;
        background-size:100% 100%;
    }
    .chosed{
        background-image: url('../../assets/images/vchosed.png');
        width: 30px;
        height: 30px;
        display: inline-block;
        margin-bottom:-10px;
        background-size:100% 100%;
    }
}
.riceBottom{
    position:absolute;
    top:390px;
    width:100%;
    bottom:50px;
    ul{
        width:100%;
        li{
            height:385px;
            width:30%;
        }
    }
}
</style>