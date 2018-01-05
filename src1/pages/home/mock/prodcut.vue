<template>
  <div class="prodcut" :style="{backgroundImage: 'url(' + img + ')'}">
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: '',
  data () {
    return {
      img: require('../../../assets/images/home/625718138548771820.jpg'),
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
@media screen and (max-width:1340px){
    .prodcut{
        height:95vh;
        width:100vw;
        background-size: contain;
        background-repeat:no-repeat;
    }
}
@media screen and (min-width:1341px){
    .prodcut{
        height:95vh;
        width:100vw;
        background-size: 100% 100%;
        background-repeat:no-repeat;
    }
}
</style>