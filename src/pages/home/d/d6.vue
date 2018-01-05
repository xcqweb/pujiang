<style lang="less" scoped>
.b6{
    position: relative;
    height: 100%;
    width: 100%;
    span{
        margin-bottom:5%;
        display:block;
        color:#ffd800;
        font-size:2rem;
        font{
            margin-left: .3rem;
            display: inline-block;
            color:#ffd800;
            font-size: 1.2rem;
        }   
    }
    font{
        display:block;
        color:#43dbff;
        font-size:1.5rem;
        letter-spacing: .2rem;
    }
    .b6__top{
        position:absolute;
        top:20%;
        width:100%;
        height:40%;
    }
    .b6__bottom{
        position:absolute;
        bottom:0;
        width:100%;
        height:40%;
    }
}
</style>

<template>
    <div class="b6">
        <div class="b6__top">
            <span>68，288<font>人次</font></span>
            <font>当前客流总数</font>
        </div>
        <div class="b6__bottom">
            <span>86，188<font>人次</font></span>
            <font>昨日客流总数</font>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name:'d6',
    name: '',
    data () {
        return {

        }
    },
    components:{

    },
    computed: { 

    },
    methods: {

    },
    mounted(){
    
    },
}
</script>

