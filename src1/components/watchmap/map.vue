<template>
    <baidu-map class="bm-view">
         <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
         <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
    </baidu-map>
</template>

<script>
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'DdUwbTsTA3norx7pmj7lUTQkydE6HbUx'
})
export default {
    name: '',
        data () {
            return {
        }
    },
    computed: { 
    },
    methods: {

    },
    components:{
    }
}
</script>

<style lang="less" scoped>
  .bm-view {
    width: 100%;
    height: 100%;
  }
</style>