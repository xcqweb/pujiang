<template>
    <div class="video">
        <video controls="controls"  src="../../../assets/video/baishizhou.mp4"  autoplay="autoplay"  loop="loop" style="">
            您的浏览器不支持 video 标签。
        </video>
        <video controls="controls"  src="../../../assets/video/kaiyuan.mp4"  autoplay="autoplay"  loop="loop" style="">
            您的浏览器不支持 video 标签。
        </video>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'a9',
    data () {
      return {
      }
    },
    methods: {
    },
    components:{
    }
}
</script>

<style lang="less" scoped>
.video{
    width:100%;
    height:80%;
    margin-top:10%;
    video{
        width:95%;
        height:50%;
        margin-top:7px;
    }
    video:nth-of-type(1){
      margin-left:5px;
    }
    video:nth-of-type(1){
    }
}
</style>
