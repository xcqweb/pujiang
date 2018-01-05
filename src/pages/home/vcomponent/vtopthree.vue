<template>
  <div class="vtopThree">
    <ul>
        <li v-for="item in items">
            <p>{{item.title}}</p>
            <div><p>{{item.nub}}</p></div>
            <p :style="{ 'color': item.color }">{{item.font}}</p>
            <p :style="{ 'background-color': item.color }"></p>
        </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'a3',
  data () {
    return {
        items:[
            {title:'客流总数',nub:'6902',font:'万人',color:'#6dffeb'},
            {title:'经济贡献',nub:'15,801',font:'万元',color:'#ffe86e'},
            {title:'富民指数',nub:'32986',font:'万点',color:'#ff719c'},
        ],
    }
  },
  computed: { 
  },
  methods: {
  },
  components:{
  }
}
</script>

<style lang="less" scoped>
.vtopThree{
    width:100%;
    height:100%;
}
ul{
    width:397/464*100%;
    height:174/216*100%;
    margin-top:8/216*100%;
    margin-left:33/464*100%;
    li{
        float:left;
        height:100%;
        width:132/464*100%;
        margin-left:4%;

        p:nth-of-type(1){
            font-size: 1.1rem;
            color: white;
        }
        div{
            display:table;
            height:65%;
            width:100%;
            
            p{
                color: white;
                height:100%;
                width:100%;
                font-size: 1.6rem !important;
                display: table-cell;
                vertical-align:middle;
                text-align:center;
            }
        }
        p:nth-of-type(2){
            font-size: 1rem;
            margin-bottom:6px;
        }
        p:nth-of-type(3){
            height:5px;
            width:100%;
        }
    }
}
</style>