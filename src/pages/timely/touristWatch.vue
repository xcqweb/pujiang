<template>
  <div>
        <ul>
          <li v-for= "item in items">
            <div class="title">
              <font>景区游客数量</font>
              <span>{{item.title}}</span>
            </div>
            <div class="middle">
              <span>{{item.middle.context}}</span><font>{{item.middle.unit}}</font>
            </div>
            <div class="footer">
              <div class='footerLeft'>
                <div class='num'>
                    <span class='footerRise' :class='item.footer.left.rise'></span>
                    <span class='footerCotext'>{{item.footer.left.context}}</span>
                    <span class='footerUnit'>{{item.footer.left.unit}}</span>
                </div>
                <div class='footertit'>{{item.footer.left.title}}</div>
              </div>
              <div class='footerRight'>
                <div class='num'>
                    <span class='footerRise' :class='item.footer.right.rise'></span>
                    <span class='footerCotext'>{{item.footer.right.context}}</span>
                    <span class='footerUnit'>{{item.footer.right.unit}}</span>
                </div>
                <div class='footertit'>{{item.footer.right.title}}</div>
              </div>
            </div>
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
      items:[
          {
            title:'仙华山',
            middle:{
              context:'9832213',
              unit:'人次'
            },
            footer:{
              left:{
                  context:'39323',
                  unit:'人次',
                  title:'本月累计',
                  rise:''
              },
              right:{
                  context:'333323',
                  unit:'人次',
                  title:'本年累计',
                  rise:''
              }
            }
          },{
            title:'神丽峡',
            middle:{
              context:'123923',
              unit:'人次'
            },
            footer:{
              left:{
                  context:'982623',
                  unit:'人次',
                  title:'本月累计',
                  rise:''
              },
              right:{
                  context:'231193',
                  unit:'人次',
                  title:'本年累计',
                  rise:''
              }
            }
          },
          {
            title:'白石湾风景区',
            middle:{
              context:'3933223',
              unit:'人次'
            },
            footer:{
              left:{
                  context:'39323',
                  unit:'人次',
                  title:'本月累计',
                  rise:''
              },
              right:{
                  context:'2632423',
                  unit:'人次',
                  title:'本年累计',
                  rise:''
              }
            }
          },{
            title:'江南第一家',
            middle:{
              context:'37523',
              unit:'人次'
            },
            footer:{
              left:{
                  context:'555323',
                  unit:'人次',
                  title:'本月累计',
                  rise:''
              },
              right:{
                  context:'6432323',
                  unit:'人次',
                  title:'本年累计',
                  rise:''
              }
            }
          },
          {
            title:'金狮湖',
            middle:{
              context:'892323',
              unit:'人次'
            },
            footer:{
              left:{
                  context:'5342323',
                  unit:'人次',
                  title:'本月累计',
                  rise:''
              },
              right:{
                  context:'1642214',
                  unit:'人次',
                  title:'本年累计',
                  rise:''
              }
            }
          },{
            title:'水竹湾',
            middle:{
              context:'433212',
              unit:'人次'
            },
            footer:{
              left:{
                  context:'523212',
                  unit:'人次',
                  title:'本月累计',
                  rise:''
              },
              right:{
                  context:'113423',
                  unit:'人次',
                  title:'本年累计',
                  rise:''
              }
            }
          },

        ]
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
  ul{
    width:100%;
    height:auto;
    li:nth-of-type(2n+1){
      margin-right: 3%;
      float:left;
    }
    li:nth-of-type(2n){
      margin-right: 0;
      float:right;
    }
    li{
      position: relative;
      list-style: none;
      z-index:1999;
      width:48.32%;
      height:358px;
      background-color: #FFFFFF;
      margin-top:30px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.14);
      border-radius: 4px;
      &:after {
          content: ".";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
      }
      .title{
        margin-top: 1.5rem;
        position:relative;
        &:after {
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }
        span{
            position:absolute;
          font-size: 2rem;
          font-weight: 600;
          width:100%;
          height:50px;
          line-height:50px;
          left:0;
        }
        font{
          float:left;
          font-size:1.2rem;
          margin-left:2rem;
          height:50px;
          line-height:50px;
        }
      }
      .middle{
        position: absolute;
        top: 40%;
        left: 30%;
        span{
          font-size: 4rem;
          font-weight: 400;
        }
      }
      .footer{
        width: 100%;
        position: absolute;
        bottom: 10%;
        text-align: left;
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
            //数字正文
            .footerCotext{
              font-size: 2rem;
              font-weight: 400;
            }
            //单位
            .footerUnit{
              font-size: 1.2rem;
            }
          }
          //下标题
          .footertit{
            font-size:  1.5rem;
            color: #5F7078;
            margin-left:20px;
            margin-top:10px;
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
                font-size: 2rem;
              font-weight: 400;
            }
            .footerUnit{
              font-size: 1.2rem;
            }
          }
          .footertit{
            font-size:  1.5rem;
            color: #5F7078;
            margin-left:20px;
            margin-top:10px;
          }
        } 
      }
    }
  }
</style>