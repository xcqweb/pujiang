<template>
    <div class="logintwo" @mousewheel='scroll'>
        <transition name="fadeimg">
            <div class='mapimg' v-show='mapimg'>
                <img :src="imgmap"/>
            </div>
        </transition>
        <transition name="fadeimg">
            <div class='bigdata' v-show='bigdata'>
                <img :src="imgdata"/>
            </div>
        </transition>
        <transition name="fadeimg">
            <div class='bigfurture' v-show='bigfurture'>
                <img :src="imgfurture"/>
            </div>
        </transition>
        <transition name="fadeimg">
            <div class='text' v-show='text'>
                <img :src="imgtext"/>
            </div>
        </transition>
    </div>
</template>

<script>
import Vue from 'vue'
import Bus from '@/common/js/bus.js'
export default {
  name: '',
  data () {
    return {
        imgmap:require('../../assets/images/login/login2/map.png'),
        imgdata:require('../../assets/images/login/login2/data.png'),
        imgfurture:require('../../assets/images/login/login2/furture.png'),
        imgtext:require('../../assets/images/login/login2/text.png'),
        mapimg:false,
        bigdata:false,
        bigfurture:false,
        text:false,
        busData:{
            home:true,
            down:{link:'/login/pagethree',show:true}
        },
        initialized:false,
    }
  },
  computed: { 
  },
  methods: {
    scroll(event){
        let _self=this
            window.setTimeout(() => {
                _self.initialized = true;
            }, 100);
            this.mousewheelDetal(event)
            
    },
    mousewheelDetal(event){
        if (this.initialized) {
                if (event.wheelDeltaY < 0) {
                    this.$router.push({ path: '/login/pagethree' });
                    this.initialized = false
                 }else{
                    this.$router.go(-1 );
                 }
            }
    },
  },
  created(){
  },
  mounted(){
        
        window.setTimeout(() => {
            this.mapimg=true;
        }, 200);
        window.setTimeout(() => {
            this.bigdata=true;
        }, 700);
        window.setTimeout(() => {
            this.bigfurture=true;
        }, 1200);
         window.setTimeout(() => {
            this.text=true;
        }, 1700);
    },
  components:{
  }
}
</script>

<style lang="less" scoped>
.logintwo{
    width:100%;
    height:100%;
    position: relative;
    img{                  
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
    .mapimg{
        position: absolute;
        height: auto;
        width: 1109/1920*100%;
        top: 230/1080*100%;
        transform: translateX(-50%);
        left: 50%;
        text-align: center;
        border: 1px solid rgba(0,0,0,0);
        
    }
    .bigdata{
        position: absolute;
        left: 45%;
        bottom: 15%;
        height: auto;
        width: 170/1920*100%;
        text-align: center;
        transform: translateX(-50%);
        z-index: 88;
    }
    .bigfurture{
        position: absolute;
        bottom: 15%;
        left: 55%;
        width: 170/1920*100%;
        transform: translateX(-50%);
        text-align: center;
        z-index: 88;
    }
    .text{
        position: absolute;
        bottom: 10%;
        left: 50%;
        width: 557/1920*100%;
        transform: translateX(-50%);
        text-align: center;
        z-index: 88;
    }

}
.fadeimg-enter-active, .fadeimg-leave-active {
  transition: all .8s linear
}
.fadeimg-enter, .fadeimg-leave-to /* .fadeimg-leave-active in below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>