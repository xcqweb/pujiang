<template>
    <div class="flex">
        <div class='left-body'>
            <div class='list-column1 list'>
                <div class='item1-row item'><img :src="imgatbs"/></div>
                <div class='item2-row item'><img :src="imgatbs"/></div>
            </div>
            <div class='list-column2 list'>
                <div class='item1-row item'><img :src="imgatbs"/></div>
                <div class='item2-row item'><img :src="imgatbs"/></div>
                <div class='item2-row item'><img :src="imgatbs"/></div>
            </div>
            <div class='list-column3 list'>
                <div class='item1-row item'><img :src="imgatbs"/></div>
                <div class='item2-row item'><img :src="imgatbs"/></div>
            </div>
        </div>
        <div class='right-body'>

        </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'barChartOption',
        data () {
            return {
                barChartOption: {},
                imgatbs:require('../assets/images/login/ATBS.png'),
            }
        },
    computed: { 
    },
    methods: {
    },
    components:{
    },
    mounted(){
    }
}
</script>

<style lang="less" scoped>
@screen-xs:                  480px;
@screen-xs-min:              @screen-xs;
@screen-sm:                  768px;
@screen-sm-min:              @screen-sm;
@screen-md:                  992px;
@screen-md-min:              @screen-md;
@screen-lg:                  1200px;
@screen-lg-min:              @screen-lg;
@screen-xl:                  1400px;
@screen-xl-min:              @screen-xl;
@screen-xs-max:              (@screen-sm-min - 1);
@screen-sm-max:              (@screen-md-min - 1);
@screen-md-max:              (@screen-lg-min - 1);
.flex{
    max-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    img{                  
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
    @media screen and(min-width: 801px){
        .left-body{
            width: 69%;
            max-height: 90%;
            background-color: red;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .list{
                display: flex;
                flex-direction:row;
                justify-content: space-between;
            }
            .item{
                height: auto;
                text-align: center;
            }
            .list-column1{
                height: 39%;
                background-color: #5595ff;
                
                .item1-row{
                    width: 61%;
                    background-color: pink;
                }
                .item2-row{
                    width: 38%;
                }
            }
            .list-column2{
                height: 28%;
                background-color: grey;
                    div{
                        min-width: 32%;
                    }
            }
            .list-column3{
                height: 29%;
                background-color: #ffd800;
                .item1-row{
                    width: 35%;
                    background-color: pink;
                }
                .item2-row{
                    width: 64%;
                }
            }
        }
        .right-body{
            width:28%; 
            max-height: 90%;
            background-color: blue;
        }
        

    }
    @media screen and(max-width: 800px){
        .left-body{
            flex: 100%;
            min-height: 300vh;
            background-color: red;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .list{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }
            .item{
                width: 100%;
                height: 50%;
            }
            .list-column1{
                height: 100%;
                background-color: #5595ff;
            }
            .list-column2{
                height: 100%;
                background-color: grey;
            }
            .list-column3{
                height: 100%;
                background-color: #ffd800;
            }
        }
        .right-body{
            flex: 100%;
            height: 400px;
            background-color: blue;
        }
    }
}
</style>