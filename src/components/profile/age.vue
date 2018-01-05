<template>
  <div>
    <ul>
        <li for='item in items'>
            <div class="cell1">
                年龄
            </div>
            <div class="cell2">
                昨日消费
            </div>
            <div class="cell3">
                同比
            </div>
        </li>
        <li v-for='item in info'>
            <div class="cell1">
                {{item.range}}
            </div>
            <div class="cell2">
                {{item.cons}}
            </div>
            <div class="cell3">
                <span class='footerRise' :class='item.rise'></span>
                <span class='footerCotext'>{{item.percent}}</span>
                <span>%</span>
            </div>
        </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  data(){
        return{
        msg:'Hello Vue 来自App.vue',
        info:[
            {
                range:'01-19',
                cons:'23.5万',
                rise:'up',
                percent:'1.2'
            },
            {
                range:'20-29',
                cons:'21.5万',
                rise:'up',
                percent:'7.2'
            },
            {
                range:'30-39',
                cons:'31.3万',
                rise:'up',
                percent:'5.2'
            },
            {
                range:'40-49',
                cons:'43.2万',
                rise:'down',
                percent:'1.1'
            },
            {
                range:'50-59',
                cons:'27.3万',
                rise:'up',
                percent:'3.2'
            },
            {
                range:'50以上',
                cons:'17.3万',
                rise:'up',
                percent:'3.2'
            }
        ]
      }
  },
  components:{}
}
</script>

<style lang="less" scoped>
ul{
    margin-top:70px;
    li{
        &:after {
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }
    }
}
.cell1{
    float:left;
    width:33%;
}
.cell2{
    float:left;
    width:33%;
}
.cell3{
    float:left;
    width:33%;
}
.footerRise{
              display: inline-block;
            }
.up{
  background-image: url('../../assets/images/up.png');
  background-size: 100% 100%;
  width: 8px;
  height: 12.8px;
}
.down{
background-image: url('../../assets/images/down.png');
background-size: 100% 100%;
width: 8px;
  height: 12.8px;
}
li:nth-of-type(2n){
    background-color:#F7F7F7;
    height:33px;
    line-height:33px;
}
li:nth-of-type(2n+1){
    background-color:#FFFFFF;
        height:45px;
    line-height:45px;
}
</style>
