<template>
    <transition name="fade">
		<div class="load-box" v-show="visiable">
			<div class="loading" v-bind:class="{reload:reload}"  @click.once='reload(reload)'>
        <div class="circle"><div class="roll"></div></div>
				{{message}}
			</div>
		</div>
    </transition>
</template>

<script>
/* $loading.open({el:_self.$el,loading:true,message:'正在加载中...',reloading:false}) */
import Bus from '@/common/js/bus.js'
var _ = require('lodash');
  export default {
    data() {
      return {
        visiable: false,
      }
    },
    props: {
	  loading:Boolean,
	  reloading:Boolean,
	  message:String,
	},

    methods:{
        reload(reload){
			if(reload){
				Bus.$emit('', data);
				// Bus.$on('',data);
				// Bus.$off("")
			}

        },
    },
    mounted(){
    }
  }
</script>

<style lang="less" scoped>
@borderColor:#49d9fe;
@borderLen: 18px;
.load-box{
	position: absolute;
	top: 0;
	left: 0;
	width:100%;
	height:100%;
	display: flex;
    justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, .2);
    z-index: 30;

}
.loading{
	z-index: 399;
}
.reload{
	cursor: pointer;
	color: blue;
	font-size: 16px;
}

.roll{
  position: absolute;
  left: 2px;
  top: 2px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid #fff;
  
}

.circle{
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #000;
}

.fade-enter-active, .fade-leave-active {
    transition: 1s;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
}
</style>
