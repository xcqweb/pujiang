<template>
    <div class="b5">
        <div class="box">
            <vcircle class='item'></vcircle>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import vcircle from './vcircle.vue'
export default {
  name: 'b5',
  data () {
    return {
    }
  },
  computed: { 
  },
  methods: {
    getwidth(){

    }
  },
  mounted(){
    
    },
  components:{
    vcircle
  }
}
</script>

<style lang="less" scoped>
.b5{
    height: 100%;
    width: 100%;
    position: relative;
    .box{
        position: absolute;
        width: 132/223*100%;
        height: 132/223*100%;
        top: 69/260*100%;
        left: 45/226*100%;
    }

}
</style>