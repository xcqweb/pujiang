<template>
  <div id="loginmain" :style="{backgroundImage: 'url(' + img + ')'}">
        <h1>浦江县旅游大数据应用和应急管理指挥平台</h1>
        <h2><span></span><font>国人智慧提供技术支持</font></h2>
        <router-link to="/login" v-show='homelogo' @click='changelink'>
            <div class='backlogin'>
                <span></span>
                <font>返回登录页</font>
            </div>
        </router-link>
        <router-view class='mockrouter'></router-view>
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
        <router-link v-bind:to={path:link} v-show='down' >
            <div class="next" @click='changelink'>
                <div class="dot1"></div>
                <div class="dot2"></div>
                <div class="dot3"></div>
                <div class="down"></div>
            </div>
        </router-link>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import Nest from '../common/js/plugin/canvas-nest.js'
import dotside from '../components/commonui/nav-side/dotside.vue'
import Bus from '@/common/js/bus.js'
var _ = require('lodash');
export default {
        data() {
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
                img: require('../assets/images/login/login_home.png'),
                link:'/login/pagetwo',
                homelogo:false,
                down:true,
                hash:'',
                now:'',
            }
        },
        components: {
            dotside
        },
        watch:{
            hash:function (val) {
                    this.changelink()
                },
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
                let currentIndex=_.findIndex(_self.items, function(o) { return o.link == _self.now; })
                for (var i = 0; i < this.items.length; i++) {
                    this.items[i].status='default'
                }
                this.items[currentIndex].status='chossen'
            },
            headerEnter(){
                this.headerStatus=true;
            },
            headerLeave(){
                this.headerStatus=false;
            },
            changelink(){
                switch(location.hash){
                case '#/login' :
                this.homelogo=false;
                this.down=true;
                this.now='/login'
                this.link='/login/pagetwo'
                break;
                case '#/login/pagetwo' :
                this.homelogo=true;
                this.down=true;
                this.now='/login/pagetwo'
                this.link='/login/pagethree'
                break;
                case '#/login/pagethree' :
                this.homelogo=true;
                this.down=true;
                this.now='/login/pagethree'
                this.link='/login/pagefour'
                break;
                case '#/login/pagefour' :
                this.homelogo=true;
                this.down=true;
                this.now='/login/pagefour'
                this.link='/login/pagefive'
                break;
                case '#/login/pagefive' :
                this.homelogo=true;
                this.down=true;
                this.now='/login/pagefive'
                this.link='/login/pagesix'
                break;
                case '#/login/pagesix' :
                this.homelogo=true;
                this.down=true;
                this.now='/login/pagesix'
                this.link='/login/pageseven'
                break;
                case '#/login/pageseven' :
                this.homelogo=true;
                this.down=false;
                this.now='/login/pageseven'
                this.link='/login/pageseven'
                break;
            }

            this.propDotStyle()
            },
            
        },
        mounted() {
            Nest()
            location.hash = '#/login'
            this.changelink()
            let _self= this
            window.addEventListener('hashchange', function(e) {
                _self.hash=location.hash;
            }, false);
        }
    }
</script>

<style lang="less" type="text/less" scoped >
@keyframes mymove
{
    0% {bottom:0px;}
    25% {bottom:1px;}
    50% {bottom:-2px;}
    75% {bottom:-1px;}
    100% {bottom:0px;}
}

@-webkit-keyframes mydot1 /* Safari and Chrome */
{
    0% {bottom:0px;}
    25% {bottom:1px;}
    50% {bottom:-2px;}
    75% {bottom:-1px;}
    100% {bottom:0px;}
}

@keyframes mydot1
{
    from {opacity:0.5}
    to {opacity:1;}
}

@-webkit-keyframes mydot1 /* Safari and Chrome */
{
    from {opacity:0.5}
    to {opacity:1;}
}
@keyframes mydot2
{
    from {opacity:0.5}
    to {opacity:1;}
}

@-webkit-keyframes mydot2 /* Safari and Chrome */
{
    from {opacity:0.5}
    to {opacity:1;}
}
@keyframes home
{
    0% {bottom:0px;}
    25% {bottom:0.5px;}
    50% {bottom:-1px;}
    75% {bottom:-0.5px;}
    100% {bottom:0px;}
}

@-webkit-keyframes home /* Safari and Chrome */
{
    0% {bottom:0px;}
    25% {bottom:3px;}
    50% {bottom:-4px;}
    75% {bottom:-3px;}
    100% {bottom:0px;}
}
#loginmain{
    height:100%;
    width:100%;
    position:fixed;
    z-index:22;
    background-size:100% 100%;
    .mockrouter{
        z-index:33;
        height:100%;
        width:100%;
        position:fixed;
        top:0;
        left:0;
    }
    .next{
        position:absolute;
        bottom:15px;
        height:50px;
        width:39px;
        left:50%;
        cursor: pointer;
        transform: translateX(-50%);
        z-index: 99;
        .dot1{
            position:absolute;
            top: 30%;
            left: 50%;
            width: 2px;
            height: 2px;
            border-radius: 1px;
            background-color: #ffffff;
            transform: translateX(-50%);
            animation:mydot1 2s linear infinite;
       -webkit-animation:mydot1 2s linear infinite;
        }
        .dot2{
            position:absolute;
            top: 45%;
            left: 50%;
            width: 3px;
            height: 3px;
            border-radius: 1.5px;
            background-color: #ffffff;
            transform: translateX(-50%);
            animation:mydot2 2s infinite;
       -webkit-animation:mydot2 2s infinite;
        }
        .dot3{
            position:absolute;
            top: 65%;
            left: 50%;
            width: 4px;
            height: 4px;
            border-radius: 2px;
            background-color: #ffffff;
            transform: translateX(-50%);
            animation:mydot2 2s infinite;
       -webkit-animation:mydot2 2s infinite;
        }
        .down{
            position:absolute;
            height:15px;
            width:28px;
            bottom:15px;
            left: 50%;
            background:url('../assets/images/login/down.png') no-repeat  center;
            background-size: 100% 100%;
            transform: translateX(-50%);
            animation:mymove 2s linear infinite;
       -webkit-animation:mymove 2s linear infinite;
        }
    }
    canvas{
            z-index:22 !important;
            pointer-events:none !important;
        }
    h1{
        top:30/1080*100% ;
        left:250/1920*100% ;
        color:#ffffff;
        font-size:1.4rem;
        position:absolute;
        z-index:77;
        &:after {
                content: ".";
                display: block;
                height: 0;
                clear: both;
                visibility: hidden;
            }
    }
    h2{
        position:absolute;
        height: 17/1080*100% ;
        left: 15px;
        bottom: 20px;
        z-index:77;
        span{
            display: inline-block;
            height: 140%;
            width: 44/1920*100vh;
            
            transform: translateY(25%);
            background:url('../assets/images/login/logo.png') no-repeat  center;
            background-size: 100% 100%;
        }
        font{
            font-size: .8rem;
            color: white;
            margin-left: 4px;
        }
    }
    .backlogin{
        position:absolute;
        height: 40px ;
        right: 25px;
        bottom: 2px;
        z-index:77;
        cursor: pointer;
        
        span{
            position:absolute;
            display: block;
            height: 42px;
            width: 42px;
            top: -50px;
            left: 50%;
            transform: translateX(-50%);
            background:url('../assets/images/login/homeico.png') no-repeat  center;
            background-size: 100% 100%;
            animation:home 2s easeOutElastic infinite;
       -webkit-animation:home 2s easeOutElastic infinite;
        }
        font{
            font-size: .8rem;
            color: white;
            margin-left: 4px;
            margin-bottom: 5px;
        }
    }
}
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
    right: 18/1920*100%;
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
                li:nth-of-type(1){
                    a{
                        width: 20px;
                        height: 20px;
                        margin-left: -8px;
                        margin-top: -8px;
                    }
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
