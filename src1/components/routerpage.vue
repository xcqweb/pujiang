
<template>
  <div id="routerpage">
  <div class="content1">
        <div class="tobody">
           <router-view></router-view>
        </div>
         
  </div>
  </div>
</template>
<script>
import sidebar from './sidebar.vue'
import left1 from './left1.vue'
export default {
  data() {
    return {
      author: "微信公众号 jinkey-love",
      articles: [],
    }
  },
   components:{ sidebar,left1}
  }
</script>
<style lang="less" type="text/less">
.routerpage{
    background-color:blue;
    height: 800px;
}
</style>