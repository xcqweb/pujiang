<template>
    <div class="video">
        <section>
        	<span class="time1">2018-01-25 10:26:45</span>
        	<img src="../../../assets/images/videoImg/video1.jpg"/>
        	<Loading class='video' v-show='true'></Loading>
        	<span>仙华山监控1</span>
        </section>
        <section>
        	<span class="time2">2018-01-25 10:26:45</span>
        	<img src="../../../assets/images/videoImg/video2.jpg"/>
        	<Loading class='video' v-show='true'></Loading>
        	<span>仙华山监控2</span>
        </section>
    </div>
</template>

<script>
import Vue from 'vue'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name: 'a9',
//  mixins: [optionProps],
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
    height:80%;
    padding-top:12%;
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
    
    
     section{
        width:95%;
        height:50%;
        margin-top:12px;
        margin-left: 8px;
        position: relative;
        img{
        	width: 100%;
        	height: 100%;
        }
        span{
        	color:#fff;
        	font-size: 12px;
        	position: absolute;
        	bottom: 10px;
        	left: 10px;
        }
        .time2{
        	color:#fff;
        	font-size: 12px;
        	position: absolute;
        	top: 10px;
        	right: -200px;
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
    
}
</style>
