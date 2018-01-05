<template>
    <div class="c5">
        <ul>
            <div class="title"></div>
            <div class="line"></div>
            <li v-for='item in outItems' v-bind:style="{ marginLeft: marginLeft +'%'}">
                <span v-bind:style="{  bottom:10+item.outProvince +'%'}">{{item.outProvince}}%</span>
                <div v-bind:style="{  height: item.outProvince +'%'}"></div>
                <font>{{item.name}}</font>
            </li>
        </ul>
        <ul>
            <div class="title"></div>
            <div class="line"></div>
            <li v-for='item in outItems' v-bind:style="{ marginLeft: marginLeft +'%'}">
                <span v-bind:style="{  bottom:10+item.outProvince +'%'}">{{item.outProvince}}%</span>
                <div v-bind:style="{  height: item.outProvince +'%'}"></div>
                <font>{{item.name}}</font>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: '',
    data () {
    return {
        marginLeft:3,
        outItems:[
            {outProvince:80,name:'杭州',},
            {outProvince:60,name:'杭州',},
            {outProvince:50,name:'杭州',},
            {outProvince:30,name:'杭州',},
            {outProvince:20,name:'杭州',},
            {outProvince:10,name:'杭州',},
            {outProvince:10,name:'杭州',},
            {outProvince:10,name:'杭州',},
        ],
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
.c5{
    position:absolute;
    height:90%;
    width:100%;
    top:26%;
    ul{
        position:absolute;
        left:5%;
        width:90%;
        height:29%;
        .line{
            position:absolute;
            width:90%;
            height:1px;
            left:80/700*100%;
            bottom:0;
            background-color:#368df7;
        }
        .title{
            position:absolute;
            left:0;
            top:0;
            height:120%;
            width:50/700*100%;
            background-color:#6792fb;
        }
        li:nth-of-type(1){
            margin-left:80/700*100% !important;
        }
        li{
            float:left;
            height:100%;
            width:30px;
            color:white;
            font-size:10px;
            position:relative;
            span{
                display:inline-block;
                position:absolute;
                left:10%;
            }
            div{
                background-color:#6792fb;
                position:absolute;
                bottom:0;
                width:20px;

            }
            font{
                display:inline-block;
                position:absolute;
                bottom:-13px;
                left:10%;
            }
        }
    }
    ul:nth-of-type(2){
        position:absolute;
        left:5%;
        top:39%;
        width:90%;
        height:29%;
        .title{
            background-color:#606bff;
        }
        .line{
            background-color:#606bff;
        }
        li{
            div{
                background-color:#606bff;
            }
        }
        
    }
}
</style>