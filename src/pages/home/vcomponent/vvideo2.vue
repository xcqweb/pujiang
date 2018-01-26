<template>
    <div class="video">
        <!--<video controls="controls"  src="../../../assets/video/kaiyuan.mp4"  autoplay="autoplay"  loop="loop" style="">
            您的浏览器不支持 video 标签。
        </video>
        <video controls="controls" poster="" autoplay="autoplay"  loop="loop" style="">
            您的浏览器不支持 video 标签。
            视频接口
            http://192.168.1.75:10800/play2.html?channel=3
            <source src="../../../assets/video/kaiyuan.mp4" type="audio/mp4"/>
        </video>-->
        <section>
        	<!--<span class="time1">2018-01-25 10:26:45</span>-->
        	<img src="../../../assets/images/videoImg/video1.jpg"/>
        	<!--<iframe src="http://192.168.1.75:10800/play2.html?channel=3" width="" height=""></iframe>-->
        </video>-->
        	<Loading class='video' v-show='true'></Loading>
        	<span>景区摄像头1</span>
        </section>
        <section>
        	<!--<span class="time2">2018-01-25 10:26:45</span>-->
        	<img src="../../../assets/images/videoImg/video2.jpg"/>
        	<Loading class='video' v-show='true'></Loading>
        	<span>景区摄像头2</span>
        </section>
        <section>
        	<!--<span class="time2">2018-01-25 10:26:45</span>-->
        	<img src="../../../assets/images/videoImg/video2.jpg"/>
        	<Loading class='video' v-show='true'></Loading>
        	<span>景区摄像头3</span>
        </section>
        <section>
        	<!--<span class="time2">2018-01-25 10:26:45</span>-->
        	<img src="../../../assets/images/videoImg/video2.jpg"/>
        	<Loading class='video' v-show='true'></Loading>
        	<span>景区摄像头4</span>
        </section>
    </div>
</template>

<script>
import Vue from 'vue'
import optionProps from '@/common/js/mixin/optionProps.js'
import Loading from '@/components/commonui/loading/loading.vue'
export default {
    name: 'a9',
    mixins: [optionProps],
    data () {
      return {
      }
    },
    methods: {
    },
    components:{
    	Loading
    }
}
</script>

<style lang="less" scoped>
.video{
    width:100%;
    height:100%;
    /*padding-top:12%;*/
    video{
        width:95%;
        height:100%;
        margin-top:7px;
    }
    video:nth-of-type(1){
      margin-left:5px;
    }
    video:nth-of-type(1){
    }
    
    
     section{
        width:45%;
        height:30%;
        margin-top:12px;
        margin-left: 8px;
        position: absolute;
        img{
        	width: 100%;
        	height: 100%;
        }
        span{
        	color:#fff;
        	font-size: 1rem;
        	position: absolute;
        	bottom: -20%;
        	left: 38%;
        }
        .time2{
        	color:#fff;
        	font-size: 12px;
        	position: absolute;
        	top: 10px;
        }
        .time1{
        	color:#fff;
        	font-size: 12px;
        	position: absolute;
        	text-align: right;
        	top: 10px;
        	right: 10px;
        }
    }
    
    section:nth-of-type(1){
      top:3rem;
      left:1rem;
    }
    section:nth-of-type(2){
      top:3rem;
      right:1rem;
    }
    section:nth-of-type(3){
      bottom:5rem;
      left:1rem;
    }
    section:nth-of-type(4){
      bottom:5rem;
      right:1rem;
    }
    
}
</style>
