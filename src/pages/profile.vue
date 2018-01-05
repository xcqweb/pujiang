<template>
  <div class="profile">
      <div class="passengerInfo">
        <ul>
          <li v-for= "item in items">
            <div class="title">
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
      <div class="passengeFlow">
        <h1>客流量</h1>
        <passengeFlow></passengeFlow>
      </div>
      <div class="income">
        <div class='villageIncome'>
          <h1>村庄收益分析</h1>
          <villageIncome></villageIncome>
        </div>
        <div class='allIncome'>
          <h1>总消费数据分析</h1>
          <div class="allNow">
            <allNow></allNow>
            <h2>2017年当前消费总额度</h2>
          </div>
          <div class="percent">
            <percent></percent>
            <h2>历史消费占比</h2>
          </div>
        </div>
      </div>
      <div class="passengeWay">
        <div class='way'>
          <h1>游客出行方式分析</h1>
          <way></way>
        </div>
        <div class='age'>
          <h1>各年龄消费营销分析</h1>
          <age></age>
        </div>
      </div>
  </div>
</template>
<script>
import villageIncome from '../components/profile/villageIncome.vue'
import allNow from '../components/profile/allNow.vue'
import passengeFlow from '../components/profile/passengeFlow.vue'
import age from '../components/profile/age.vue'
import way from '../components/profile/way.vue'
import percent from '../components/profile/percent.vue'

  export default {
    data() {
      return {
        hasLogin:true,
        items:[
          {
            title:'富民指数',
            middle:{
              context:'333323',
              unit:''
            },
            footer:{
              left:{
                  context:'+3323',
                  unit:'',
                  title:'月增长',
                  rise:'up'
              },
              right:{
                  context:'13',
                  unit:'%',
                  title:'增长率',
                  rise:'up'
              }
            }
          },
          {
            title:'客流总数',
            middle:{
              context:'39323',
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
            title:'经济贡献',
            middle:{
              context:'323',
              unit:'万元'
            },
            footer:{
              left:{
                  context:'333323',
                  unit:'万元',
                  title:'本月累计',
                  rise:''
              },
              right:{
                  context:'333323',
                  unit:'万元',
                  title:'本年累计',
                  rise:''
              }
            }
          },

        ],
      };
    },
    computed: { 
    },
    methods: {
      },
      components:{villageIncome,allNow,percent,passengeFlow,way,age}
    }
</script>

<style lang="less" scoped>
.profile{
  
}
.passengerInfo{
  width:100%;
  height: 235px;
  ul{
    width:100%;
    height:100%;
    li:nth-of-type(1){
      margin-right: 3%;
      float:left;
    }
    li:nth-of-type(2){
      float:left;
    }
    li:nth-of-type(3){
      margin-right: 0;
      float:right;
    }
    li{
      position: relative;
      list-style: none;
      
      width:31.32%;
      height:100%;
      background-color: #FFFFFF;
      
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
        float: left;
        margin-left: 1.5rem;
        margin-top: 1.5rem;
        &:after {
          content: ".";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
        }
        span{
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
      .middle{
        position: absolute;
        top: 30%;
        left: 10%;
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
            .footerCotext{
              font-size: 1.2rem;
              font-weight: 400;
            }
            .footerUnit{
              font-size: 0.8rem;
            }
          }
          .footertit{
            font-size: 0.9rem;
            color: #5F7078;
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
          .footertit{
            font-size: 0.9rem;
            color: #5F7078;
          }
        } 
      }
    }
  }
}
.up{
  background-image: url('../assets/images/up.png');
  background-size: 100% 100%;
  width: 8px;
  height: 12.8px;
}
.down{
background-image: url('../assets/images/down.png');
width: 8px;
  height: 12.8px;
}
.passengeFlow{
  position: relative;
  width: 100%;
  height: 390px;
  margin-top: 28px;
  background-color: #FFFFFF;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
}
.income{
  width: 100%;
  height: 370px;
  margin-top: 28px;
  .villageIncome{
    position: relative;
    width: 50%;
    height: 100%;
    float: left;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.14);
    border-radius: 4px;
    background-color: #FFFFFF;
  }
  .allIncome{
    position: relative;
    width: 47%;
    height: 100%;
    float: left;
    margin-left: 3%;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.14);
    border-radius: 4px;
    background-color: #FFFFFF;
    .allNow{
      position:relative;
      float:left;
      width:42%;
      height:65%;
      margin-top:15%;
    }
    .percent{
      position:relative;
      float:left;
      width:57%;
      height:65%;
      margin-top:15%;
      border-left:2px solid #EBEBEB;
    }
  }
}
.passengeWay{
  width: 100%;
  height: 330px;
  margin-top: 28px;
  margin-bottom:28px;
  .way{
    position: relative;
    width: 63%;
    height: 100%;
    float: left;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.14);
    border-radius: 4px;
    background-color: #FFFFFF;
  }
  .age{
    position: relative;
    width: 34%;
    height: 100%;
    float: left;
    margin-left: 3%;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.14);
    border-radius: 4px;
    background-color: #FFFFFF;
  }
}
h1{
  position: absolute;
  font-size: 1.5rem;
  left: 40px;
  top: 30px;
}

</style>
