<template>
  <transition name="fade">
    <div class="toast-box" v-show="visiable">
        <span class="close" @click='close'></span>
        <div class="toast" v-text="text"/>
        <div class="cutover">
        <div class='hiddenLine'></div>
            <div class="current">
                <h1>当前模块：</h1>
                <ul>
                    <li v-for='item in current' :class='item.name'></li>
                </ul>
            </div>
            <div class='line'></div>
            <div class="moudle">
                <h1>可选模块：</h1>
                <ul>
                    <li v-for='item in moudle'  v-on:click = 'choose(item)' :class='item.name'></li>
                </ul>
            </div>
        </div>
    </div>
  </transition>
</template>

<script>
import Bus from '@/common/js/bus.js'
var _ = require('lodash');
  export default {
    data() {
      return {
        visiable: false,
        
      }
    },
    props: {
      text: String,
      test:'',
      numb:'',
      topOrBottom:null,
      current:null,
      moudle:Array,
    },
    methods:{
        close(){
            this.visiable=false;
        },
        choose:function(item){
            this.visiable=false;
            var _self=this;
            //点击切换前的两个数据保存下来，切换前的
            let jItem=JSON.stringify(item);
            let jNumb=JSON.stringify(this.numb);
            let data ={
                item:JSON.parse(jItem),
                numb:this.numb
            }
            let currentIndex=_.findIndex(_self.current, function(o) { return o.name == JSON.parse(jNumb).name; })
            //将之前的数据录入当前的状态
            _self.current[currentIndex].name = JSON.parse(jItem).name;
            _self.current[currentIndex].title = JSON.parse(jItem).title;

            item.name=this.numb.name;
            item.title=this.numb.title;
						//bus传递选中,模块的数据 给homepage product .. 等模块
            Bus.$emit('cutoverMoudle', data);
            
        }
    },
    mounted(){
    }
  }
</script>

<style lang="less" scoped>
@borderColor:#49d9fe;
@borderLen: 18px;
img{                  
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}
  .toast-box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .7);
    z-index: 30;
    .close {
        position: absolute;
        top: 3rem;
        right: 5.5rem;
        width: 3rem;
        height: 3rem;
        background-image: url("../../../assets/images/back.png");
        -webkit-background-size: 100%;
        background-size: 100% 100%;
        background-position: center;
        z-index: 33;
        cursor: pointer;
    }
    .cutover{
        position:absolute;
        top:5%;
        left:5%;
        height:90%;
        width:90%;
        z-index:31;
        background-color:#153081;
        .hiddenLine{
            position:absolute;
            height: 100%;
            width: 30px;
            top: 0;
            right:0;
            background-color: #153081;
            z-index: 32;
        }
        .current{
            position:absolute;
            height:100%;
            width:31%;
            left:0;
            overflow: hidden;
            h1{
                position:absolute;
                top:5%;
                color:white;
                margin-left:40px;
            }
            ul{
                margin-top: 17%;
                height: 83%;
                width: 100%;
                margin-left:30px;
                overflow-y: scroll;
                li{
                    display:inline-block;
                    width: 47%;
                    height: 21%;
                    background-size: 100% 100%;
                    cursor: pointer;
                }
                li:nth-of-type(10){
                    visibility: hidden;
                }   
                li:nth-of-type(11){
                    visibility: hidden;
                }
            }
            &:before {
                position:absolute;
                bottom: 0 ;
                left: 0 ;
                width: @borderLen;
                height: @borderLen;
                border-bottom:2px solid @borderColor ;
                border-left:2px solid @borderColor ;
                content: " ";
            }
            &:after {
                position:absolute;
                top: 0;
                left: 0;
                width: @borderLen;
                height: @borderLen;
                border-top:2px solid @borderColor;
                border-left:2px solid @borderColor;
                content: " ";
            }
            
        }
        .moudle{
            position:absolute;
            height:100%;
            width:65%;
            right:0;
            overflow: hidden;
            h1{
                position:absolute;
                top:5%;
                color:white;
                left:20px;
            }
            ul{
                margin-top: 8%;
                height: 92%;
                width: 100%;
                overflow-y: scroll;
                li{
                    display:inline-block;
                    width: 30%;
                    height: 24%;
                    background-size: 100% 100%;
                    cursor: pointer;
                } 
            }
            &:before {
                position:absolute;
                bottom: 0 ;
                right: 0 ;
                width: @borderLen;
                height: @borderLen;
                border-bottom:2px solid @borderColor ;
                border-right:2px solid @borderColor ;
                content: " ";
            }
            &:after {
                position:absolute;
                top: 0;
                right: 0;
                width: @borderLen;
                height: @borderLen;
                border-top:2px solid @borderColor;
                border-right:2px solid @borderColor;
                content: " ";
            }
        }
        .line{
            position:absolute;
            height: 83%;
            width: 5px;
            top: 10%;
            left: 33%;
            background-color: white;
        }
    }
        .A1{
            background-image:url('../../../assets/images/home/a/a1.png')
        }
        .A2{
            background-image:url('../../../assets/images/home/a/a2.png')
        }
        .A3{
            background-image:url('../../../assets/images/home/a/a3.png')
        }
        .A4{
            background-image:url('../../../assets/images/home/a/a4.png')
        }
        .A5{
            background-image:url('../../../assets/images/home/a/a5.png')
        }
        .A6{
            background-image:url('../../../assets/images/home/a/a6.png')
        }
        .A7{
            background-image:url('../../../assets/images/home/a/a7.png')
        }
        .A8{
            background-image:url('../../../assets/images/home/a/a8.png')
        }
        .A9{
            background-image:url('../../../assets/images/home/a/a9.png')
        }
        .B1{
            background-image:url(../../../assets/images/home/b/b1.png)
        }
        .B2{
            background-image:url(../../../assets/images/home/b/b2.png)
        }
        .B3{
            background-image:url(../../../assets/images/home/b/b3.png)
        }
        .B4{
            background-image:url(../../../assets/images/home/b/b4.png)
        }
        .B5{
            background-image:url(../../../assets/images/home/b/b5.png)
        }
        .B6{
            background-image:url(../../../assets/images/home/b/b6.png)
        }
        .B7{
            background-image:url(../../../assets/images/home/b/b7.png)
        }
        .B8{
            background-image:url(../../../assets/images/home/b/b8.png)
        }
        .B9{
            background-image:url(../../../assets/images/home/b/b9.png)
        }
        .B10{
            background-image:url(../../../assets/images/home/b/b10.png)
        }
        .B11{
            background-image:url(../../../assets/images/home/b/b11.png)
        }
        .B12{
            background-image:url(../../../assets/images/home/b/b12.png)
        }
        .B13{
            background-image:url(../../../assets/images/home/b/b13.png)
        }
        .B14{
            background-image:url(../../../assets/images/home/b/b14.png)
        }
        .B15{
            background-image:url(../../../assets/images/home/b/b15.png)
        }
        .B16{
            background-image:url(../../../assets/images/home/b/a6.png)
        }
        .C1{
            background-image:url(../../../assets/images/home/c/c1.png)
        }
        .C2{
            background-image:url(../../../assets/images/home/c/c2.png)
        }
        .C3{
            background-image:url(../../../assets/images/home/c/c3.png)
        }
        .C4{
            background-image:url(../../../assets/images/home/c/c4.png)
        }
        .C5{
            background-image:url(../../../assets/images/home/c/c5.png)
        }
        .C6{
            background-image:url(../../../assets/images/home/c/c6.png)
        }
        .C7{
            background-image:url(../../../assets/images/home/c/c7.png)
        }
        .C8{
            background-image:url(../../../assets/images/home/c/c8.png)
        }
        .C9{
            background-image:url(../../../assets/images/home/c/c9.png)
        }
        .C10{
            background-image:url(../../../assets/images/home/c/c10.png)
        }
        .C11{
            background-image:url(../../../assets/images/home/c/c11.png)
        }
        .C12{
            background-image:url(../../../assets/images/home/c/c12.png)
        }
        .C13{
            background-image:url(../../../assets/images/home/c/c13.png)
        }
        .C14{
            background-image:url(../../../assets/images/home/c/c14.png)
        }
        .C15{
            background-image:url(../../../assets/images/home/c/c15.png)
        }
        .C16{
            background-image:url(../../../assets/images/home/c/c16.png)
        }
        .C17{
            background-image:url(../../../assets/images/home/c/c17.png)
        }
        .C18{
            background-image:url(../../../assets/images/home/c/c18.png)
        }
        .D1{
            background-image:url(../../../assets/images/home/d/d1.png)
        }
        .D2{
            background-image:url(../../../assets/images/home/d/d2.png)
        }
        .D3{
            background-image:url(../../../assets/images/home/d/d3.png)
        }
        .D4{
            background-image:url(../../../assets/images/home/d/d4.png)
        }
        .D5{
            background-image:url(../../../assets/images/home/d/d5.png)
        }
        .D6{
            background-image:url(../../../assets/images/home/d/d6.png)
        }
        .D7{
            background-image:url(../../../assets/images/home/d/d7.png)
        }
        .D8{
            background-image:url(../../../assets/images/home/d/d8.png)
        }
        .D9{
            background-image:url(../../../assets/images/home/d/d9.png)
        }
        .D10{
            background-image:url(../../../assets/images/home/d/d10.png)
        }
        .D11{
            background-image:url(../../../assets/images/home/d/d11.png)
        }
        .D12{
            background-image:url(../../../assets/images/home/d/d12.png)
        }
        .D13{
            background-image:url(../../../assets/images/home/d/d13.png)
        }
        .D14{
            background-image:url(../../../assets/images/home/d/d14.png)
        }
        .D15{
            background-image:url(../../../assets/images/home/d/d15.png)
        }
        .D16{
            background-image:url(../../../assets/images/home/d/d16.png)
        }
  }
  .toast {
    padding: .3rem;
    background: #333;
    border-radius: 3px;
    color: #fff;
  }
  .fade-enter-active, .fade-leave-active {
    transition: .4s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>