<template>
    <transition name="fade">
		<div class="load-box" v-show="loading">
			<div class="loading" v-bind:class="{reload:reload}"  @click.once='reload(reload)'>
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
        //visiable: false,
      }
    },
    props: {
	  loading:Boolean,
	  reloading:Boolean,
	  message:String
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
.fade-enter-active, .fade-leave-active {
    transition: 1s;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
}
</style>
