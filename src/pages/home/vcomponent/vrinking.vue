<template>
  <div>
    <ul>
        <li v-for='(item, index) in items'>{{index+1}}、{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'a7',
  data () {
    return {
        items:[
            {name:'广东省'},
            {name:'上海'},
            {name:'北京'},
            {name:'湖北省'},
            {name:'陕西省'},
            {name:'江西省'},
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
div{
    height:100%;
    width:100%;
    position:relative;
}
ul{
    height:80%;
    width:80%;
    top:35%;
    left:12%;
    position:absolute;
    color:#b6baec;
    li{
        position:absolute;
    }
    li:nth-of-type(1){

    }
    li:nth-of-type(2){
        top:25%;
    }
    li:nth-of-type(3){
         top:50%;
    }
    li:nth-of-type(4){
        right:10%;
    }
    li:nth-of-type(5){
        right:10%;
        top:25%;
    }
    li:nth-of-type(6){
        right:10%;
        top:50%;
    }
}


</style>