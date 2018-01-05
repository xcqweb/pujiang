<template>
  <div class="c15">
    <ul>
        <li for='item in items'>
            <div class="cell1">
                餐饮
            </div>
            <div class="cell2">
                收入
            </div>
            <div class="cell3">
                同比
            </div>
        </li>
        <li v-for='(item,index) in items'>
            <div class="cell1">
                {{index+1}}、{{item.place}}
            </div>
            <div class="cell2">
                {{item.numb}}<font>人</font>
            </div>
            <div class="cell3">
                <span class='footerCotext'>{{item.percent}}</span>
                <span class='footerRise' :class='item.rise'></span>
            </div>
        </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
    name:'c15',
    data(){
        return{
        msg:'Hello Vue 来自App.vue',
        items:[
                {
                numb:'2001',place:'江南第一家',rise:'up',percent:'423',
                },
                {
                numb:'902',place:'东明牛清汤',rise:'down',percent:'423',
                },
                {
                numb:'1003',place:'神丽峡',rise:'up',percent:'423',
                },
                {
                numb:'2304',place:'官岩山',rise:'up',percent:'423',
                },
                {
                numb:'1405',place:'白石洲风景区',rise:'up',percent:'423',
                },
                {
                numb:'1326',place:'金狮湖',rise:'up',percent:'423',
                }
            ],
      }
    },
    components:{}
}
</script>

<style lang="less" scoped>
.c15{
    height:100%;
    width:100%;
    color: white;
    font{
        font-size: 0.6rem;
    }
}
ul{
    margin-top:10%;
    height:90%;
    width:100%;
    li{
        height:14%;
        display:flex;
        align-items:center;
        justify-content:center;
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
    width:35%;
    text-align: left;
    margin-left: 6%;
}
.cell2{
    float:left;
    width:31%;
    text-align: center;
}
.cell3{
    float:left;
    width:33%;
    .footerRise{
        display: inline-block;
         transform: translateY(10%);
    }
}

.up{
  background-image: url('../../../assets/images/up.png');
  background-size: 100% 100%;
  width: 8px;
  height: 12.8px;
}
.down{
background-image: url('../../../assets/images/down.png');
background-size: 100% 100%;
width: 8px;
  height: 12.8px;
}
li:nth-of-type(1){
    text-align: center !important;
    .cell1{
        width:31%;
        margin-left:12%;
    }
    .cell2{
        width:22%;
    }
    .cell3{
        width:33%;
    }
}
li:nth-of-type(2n){
    background-color:#163387;
}
li:nth-of-type(2n+1){
    background-color:#1f3f9d;
}
</style>
