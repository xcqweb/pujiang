<template>
  <div class="overlay">
    <div class="cutover">
        <ul>
            <li></li>
        </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: '',
  data () {
    return {
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
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,.5);
  z-index:2200;
  .cutover{
    position:absolute;
    top:20%;
    left:20%;
    height:50%;
    width:60%;
    z-index:1400;
    background-color:#658df4;
  }
}
</style>