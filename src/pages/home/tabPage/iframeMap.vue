<style lang="less" scoped>
div{
	width: 100%;
    height: 100%;
    iframe{
        width: 100%;
        height: 100%;
    }
}

</style>

<template>
    <div>
        <iframe src="http://daoyou.worldmaipu.com/upload_resource/mpweb/pujiang/map.html" sandbox="allow-scripts allow-same-origin"></iframe>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'iframeMap',
    data () {
        return {

        }
    },
}
</script>

