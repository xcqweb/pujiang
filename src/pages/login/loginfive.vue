<template>
    <div class="logintwo" @mousewheel='scroll'>
        <transition name="fadeimg">
            <div class='mapimg' v-show='mapimg'>
                 <img :src="imgmap"/>
            </div>
        </transition>
        <transition name="fadeimg">
            <div class='text1' v-show='bigdata'>
                 <img :src="imgtext1"/>
            </div>
        </transition>
        <transition name="fadeimg">
            <div class='text2' v-show='bigfurture'>
                 <img :src="imgtext2"/>
            </div>
        </transition>
        <transition name="fadeimg">
            <div class='text3' v-show='text'>
                 <img :src="imgtext3"/>
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
        imgmap:require('../../assets/images/login/login5/map.png'),
        imgtext1:require('../../assets/images/login/login5/text1.png'),
        imgtext2:require('../../assets/images/login/login5/text2.png'),
        imgtext3:require('../../assets/images/login/login5/text3.png'),
        mapimg:false,
        bigdata:false,
        bigfurture:false,
        text:false,
        busData:{
            home:true,
            down:{link:'/login/pagesix',show:true}
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
                    this.$router.push({ path: '/login/pagesix' });
                    this.initialized = false
                 }else{
                    this.$router.go(-1 );
                 }
            }
    },
  },
  created(){
        Bus.$emit('nextLink', this.busData);
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
        top: 256/1080*100%;
        left: 1143/1920*100%;
        height: auto;
        width: 553/1920*100%;
        text-align: center;
        z-index: 88;
    }
    .text1{
        position: absolute;
        top: 330/1080*100%;
        left: 211/1920*100%;
        height: auto;
        width: 85/1920*100%;
        text-align: center;
        z-index: 88;
    }
    .text2{
        position: absolute;
        top: 336/1080*100%;
        left: 358/1920*100%;
        height: auto;
        width: 232/1920*100%;
        text-align: center;
        z-index: 88;
    }
    .text3{
        position: absolute;
        top: 411/1080*100%;
        left: 358/1920*100%;
        height: auto;
        width: 628/1920*100%;
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