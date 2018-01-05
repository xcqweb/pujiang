/**
引入
import Bus from '@/common/js/bus.js'
监听
Bus.$on('cutoverMoudle', data => {
})
激活
Bus.$emit('cutoverMoudle', data);

**/
// bus.js
import Vue from 'vue'
export default new Vue();
/** 

cutoverMoudle:homepage.vue bettwen toast use 
nextLink :loginmain bettwen componments
**/