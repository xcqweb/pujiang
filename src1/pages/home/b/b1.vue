<template>
  <div class="b1">
      <div class="content">
        <div class="header" v-show = 'changeModel' >
            <div class="headerLeft">
                <font>2017年富民指数</font>
                <span>28271</span>
            </div>
            <div class="headerRight">
                <font>2016年全年富民指数</font>
                <span>81871</span>
            </div>
        </div>
        <div class="middle">
          <font>7月当前</font>
          <span>2871</span>
        </div>
        <div class="footer" v-show = 'changeModel' >
          <div class='footerLeft'>
            <div class='num'>
                <span class='footerRise' :class='riaseLeft'></span>
                <span class='footerCotext'>+1320</span>
                <span class='footertit'>月增长</span>
            </div>
          </div>
          <div class='footerRight'>
            <div class='num'>
                <span class='footerRise' :class='riaseRight'></span>
                <span class='footerCotext'>+12</span>
                <span class='footerUnit'>%</span>
                <span class='footertit'>月增长</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import adaptation from '@/common/js/mixin/adaptation.js'
export default {
    name: 'b1',
    mixins: [adaptation],
    data () {
    return {
        riaseLeft:'up',
        riaseRight:'down'
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
.b1{
  width:100%;
  height:100%;
}
    .content{
      width:100%;
      height:100%;
      position: relative;
      list-style: none;
      height:100%;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.14);
      border-radius: 4px;
      &:after {
          content: ".";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
      }
      .header{
        position:absolute;
        top:20%;
        width:100%;
        .headerLeft{
          position:absolute;
          left:10%;
        }
        .headerRight{
          position:absolute;
          right:10%;
        }
        &:after {
          content: ".";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
        }
        span{
          font-size: 1.3rem;
          font-weight: 400;
          color:#ffd800;
        }
        font{
          display:block;
          font-size: 0.8rem;
          margin-bottom:10px;
          color:white;
        }
      }
      .middle{
        position: absolute;
        top: 187/412*100%;
        left: 50%;
        transform: translateX(-50%);
        span{
          font-size: 2.4rem;
          font-weight: 400;
          color:#ffd800;
        }
        font{
          display:block;
          margin-bottom:10px;
          color:white;
        }
      }
      .footer{
        width: 100%;
        position: absolute;
        bottom: 10%;
        text-align: left;
         color:white;
        .footerLeft{
          float: left;
          margin-left: 10%;
          &:after {
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }
          .num{
            .footerRise{
              display: inline-block;
            }
            .footerCotext{
              font-size: 1.2rem;
              font-weight: 400;
            }
            .footerUnit{
              font-size: 0.8rem;
            }
          }
        }
        .footerRight{
          position: absolute;
          left: 55%;
          .num{
            .footerRise{
              display: inline-block;
            }
            .footerCotext{
              font-size: 1.2rem;
              font-weight: 400;
            }
            .footerUnit{
              font-size: 0.8rem;
            }
          }
        } 
      }
    }

.up{
    background-image: url('../../../assets/images/up.png');
    background-size: 100% 100%;
    width: 8px;
    height: 12.8px;
}
.down{
    background-image: url('../../../assets/images/down.png');
    width: 8px;
    background-size: 100% 100%;
    height: 12.8px;
}
</style>