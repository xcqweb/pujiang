<template>
    <div class="b8">
    <vcircle class='item'></vcircle>
    <vcircle class='item'></vcircle>
    <vcircle class='item'></vcircle>
    </div>
</template>

<script>
import Vue from 'vue'
import vcircle from './vcircle.vue'
export default {
  name: 'b8',
  data () {
    return {
        percent:'80%',
        text:'较为拥堵',
    }
  },
  computed: { 
  },
  methods: {
  },
  components:{
    vcircle
  }
}
</script>

<style lang="less" scoped>
.b8{
    height: 100%;
    width: 100%;
    position: relative;
    .item{
        position: absolute;
        height:30%;
        width:30%;
        top:30%;
    }
    .item:nth-of-type(1){
        left:10px;
    }
    .item:nth-of-type(2){
        left: 50%;
        transform: translateX(-50%);
    }
    .item:nth-of-type(3){
        right:10px;
    }
}
</style>