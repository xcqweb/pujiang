<template>
    <div class="logintwo" @mousewheel='scroll'>
        <transition name="fadeimg">
            <div class='title' v-show='title'>
                <img :src="imgtitle"/>
            </div>
        </transition>
        <transition name="fadeimg">
            <div class='img1' v-show='img1'>
                <img :src="imgtext1"/>
            </div>
        </transition>
        <transition name="fadeimg">
            <div class='img2' v-show='img2'>
                <img :src="imgtext2"/>
            </div>
        </transition>
        <transition name="fadeimg">
            <div class='img3' v-show='img3'>
                <img :src="imgtext3"/>
            </div>
        </transition>
        <transition name="fadeimg">
            <div class='img4' v-show='img4'>
                <img :src="imgtext4"/>
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
        imgtitle:require('../../assets/images/login/login7/title.png'),
        imgtext1:require('../../assets/images/login/login7/1.png'),
        imgtext2:require('../../assets/images/login/login7/2.png'),
        imgtext3:require('../../assets/images/login/login7/3.png'),
        imgtext4:require('../../assets/images/login/login7/4.png'),
        title:false,
        img1:false,
        img2:false,
        img3:false,
        img4:false,
        busData:{
            home:true,
            down:{link:'/',show:false}
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
                    this.$router.push({ path: '/login' });
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
            this.title=true;
        }, 700);
        window.setTimeout(() => {
            this.img1=true;
        }, 1200);
        window.setTimeout(() => {
            this.img2=true;
        }, 1700);
         window.setTimeout(() => {
            this.img3=true;
        }, 2200);
         window.setTimeout(() => {
            this.img4=true;
        }, 2700);
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
    .title{
        position: absolute;
        top: 212/1080*100%;
        left: 833/1920*100%;
        width: 255/1920*100%;
        height: auto;
        text-align: center;
        z-index: 88;
    }
    .img1{
        position: absolute;
        top: 393/1080*100%;
        left: 82/1920*100%;
        width: 400/1920*100%;
        height: auto;
        text-align: center;
        z-index: 88;
    }
    .img2{
        position: absolute;
        top: 393/1080*100%;
        left: 533/1920*100%;
        width: 400/1920*100%;
        height: auto;
        text-align: center;
        z-index: 88;
    }
    .img3{
        position: absolute;
        top: 393/1080*100%;
        left: 982/1920*100%;
        width: 400/1920*100%;
        height: auto;
        text-align: center;
        z-index: 88;
    }
    .img4{
        position: absolute;
        top: 393/1080*100%;
        left: 1424/1920*100%;
        width: 400/1920*100%;
        height: auto;
        text-align: center;
        z-index: 88;
    }

}
.fadeimg-enter-active, .fadeimg-leave-active {
  transition: all .8s linear
}
.fadeimg-enter, .fadeimg-leave-to /* .fadeimg-leave-active in below version 2.1.8  */{
  transform: translateY(10px);
  opacity: 0;
}
</style>