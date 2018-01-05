<template>
  <div class="side-nav-container"> 
      <ul class="nav-side"> 
            <li class='item' 
            v-for='item in items'>
                <ul>
                    <li :class="item.status" @click='chosse(item)'><router-link v-bind:to={path:item.link}></router-link></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </li>  
      </ul> 
  </div> 
</template>

<script>
import Vue from 'vue'
var _ = require('lodash');
export default {
    name: '',
    data () {
        return {
            items:[
                {name:'总览',link:'/login',status:'default'},
                {name:'大数据，大未来',link:'/login/pagetwo',status:'default'},
                {name:'总览',link:'/login/pagethree',status:'default'},
                {name:'总览',link:'/login/pagefour',status:'default'},
                {name:'总览',link:'/login/pagefive',status:'default'},
                {name:'总览',link:'/login/pagesix',status:'default'},
                {name:'总览',link:'/login/pageseven',status:'default'},
            ],
            
        }
    },
    props:{
        dotStyle: String,
    },
    wacth:{
        dotStyle:function(){
            this.propDotStyle()
        }
    },
    computed: { 
    },
    methods: {
        chosse(item){
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].status='default'
            }
            item.status='chossen'
        },
        propDotStyle(){
            let _self = this
            let currentIndex=_.findIndex(_self.items, function(o) { return o.link == _self.dotStyle; })
            console.log(currentIndex)
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].status='default'
            }
            console.log(this.items[currentIndex+1])
            this.items[currentIndex+1].status='chossen'
        }
    },
    components:{
    },
    mounted(){
    }
}
</script>
<style lang="less" scoped>
a:link { text-decoration: none;}
a:active { text-decoration:none}
a:hover { text-decoration:none;} 
a:visited { text-decoration: none;}
a{
    display:inline-block;
    width:100%;
    height:100%
}
.side-nav-container{
    position:fixed;
    height: 80px;
    width: 20px;
    right: 40px;
    top: 45%;
    z-index: 66;
    transform: translateY(-50%);
    .nav-side{
        width: 100%;
        height: 100%;
        .item{
            width: 100%;
            height: 30px;
            margin-bottom: 4px;
            &:nth-of-type(7){
                ul{
                    width: 100%;
                    height: 100%;
                    li:nth-of-type(2){
                        visibility: hidden;
                    }
                    li:nth-of-type(3){
                        visibility: hidden;
                    }
                    li:nth-of-type(4){
                        visibility: hidden;
                    }
                }
            }
            ul{
                width: 100%;
                height: 100%;
                li{
                    width: 2px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: #5595ff;
                    margin-top: 4px;
                }
                .chossen{
                    width: 8px;
                    height: 8px;
                    border-radius: 4px;
                    background-color: #ffd800;
                    transform: translateX(-35%);
                }
                .default{
                    width: 8px;
                    height: 8px;
                    border-radius: 4px;
                    background-color: #5595ff;
                    transform: translateX(-35%);
                    &:hover{
                        width: 10px;
                        height: 10px;
                        border-radius: 5px;
                        background-color: #ffd800;
                    }
                }

            }
        }
    }  
}

</style>