<template>
  <div class="souceShow" :style="{backgroundImage: 'url(' + img + ')'}">
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: '',
  data () {
    return {
      img: require('../../../assets/images/home/35451325252064647.jpg'),
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
    .souceShow{
        height:95vh;
        width:100vw;
        background-size: contain;
        background-repeat:no-repeat;
    }
}
@media screen and (min-width:1341px){
    .souceShow{
        height:95vh;
        width:100vw;
        background-size: 100% 100%;
        background-repeat:no-repeat;
    }
}
</style>