<style lang="less" scoped>
.b16{
    position:relative;
    height:100%;
    width:100%;
    .text{
        position: absolute;
        top: 10%;
        width: 100%;
        height: 10%;
        div{
            width: 49%;
            height: 100%;
            span{
                display: block;
                color: #43dbff;
                font-size: .8rem;
            }
            font{
                margin-top: 10px;
                display: block;
                color: #ffe200;
                font-size: 1.2rem;
            }
        }
        div:nth-of-type(1){
            float:left;
        }
        div:nth-of-type(2){
            float:right;
        }
    }
    .map{
        position: absolute;
        bottom: 0;
        width: 100% !important;
        height: 80% !important;
    }
}
</style>

<template>
    <div class="b16">
    <div class="text"
     :style="{}"
     v-show = 'changeModel' 
    >
        <div>
            <span>2017年累计接待游客(人)</span>
            <font>{{yearNumb}}</font>
        </div>
        <div>
            <span>6月份持续接待游客(人)</span>
            <font>{{mouthNumb}}</font>
        </div>
    </div>
    <vmap class='map' :placeName = 'placeName'></vmap>
    </div>
</template>

<script>
import Vue from 'vue'
import vmap from '../vcomponent/vchart_map.vue'
import adaptation from '@/common/js/mixin/adaptation.js'
import api from '@/api/index.js'
export default {
    name: 'b16',
    mixins: [adaptation],
    props:['placeName',],
    data () {
        return {
            yearNumb:32603958,
            mouthNumb:11952186,
        }
    },
    components:{
        vmap
    },
    computed: { 

    },
    methods: {
        
    },
    mounted(){
    
    },
}
</script>

