<style lang="less" scoped>
.d8{
    height: 100%;
    width: 100%;
    position: relative;
    .box{
        position: absolute;
        width: 80/223*100%;
        height: 132/223*100%;
        top: 69/260*100%;
        left: 25/226*100%;
        
    }
    span{
        position: absolute;
        top: 50%;
        right:1%;
        display: inline-block;
        width: 50%;
        height: 10%;
        font-size: 2rem;
        color: #c7c8f9;
        
    }

}
</style>
<template>
    <div class="d8">
        <div class="box">
            <vcircle class='item'></vcircle>     
        </div>
        <span>{{text}}</span>
    </div>
</template>

<script>
import Vue from 'vue'
import vcircle from '../b/vcircle.vue'
export default {
    name: 'd8',
    data () {
    return {
        text:'一般'
    }
    },
    computed: { 
    },
    methods: {
    getwidth(){

    }
    },
    mounted(){

    },
    components:{
    vcircle
    }
}
</script>

