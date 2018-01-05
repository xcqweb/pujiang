<template>
  <div class="main_content">
    <div class="load" v-if='loading'><div class="loading">{{message}}</div></div>
    <div class="reload" v-if='reloading'><div @click='getRequest' class="reloading">点击重新获取</div></div>
    <div id="righthz"></div>
    <div class="week">
        <p class="oneweek " v-bind:class="{ chose: isActive }" @click='redom7'>7日</p>
        <p class="twoweek" v-bind:class="{ chose: !isActive }" @click='redom14'>14日</p>
    </div>
  </div>
</template>
<script>
  import echarts_resize from '../common/js/echarts_resize.js'
  import echarts from 'echarts';
  import { mapGetters } from 'vuex'
  import store from '../vuex/store' 
  import { mapActions } from 'vuex'
  import axios from 'axios'
  import Vue from 'vue'
  import vAjax from '../common/js/v-ajax.js'
  import To_md5 from '../common/js/md5.js'
  import {endtime,begintime,todaybegin} from '../common/js/gtime.js'
  import {API_HZ} from '../api/env.js'
  Vue.use(vAjax)
  export default {
    data() {
      return {
        chart: null,
        isActive:true,
        xnub:null,
        ynub:null,
        loading:true,
        reloading:false,
        message:'正在生成图表....',
        oneweekMock:[
            {"nub":"1293","date":"20170612"},
            {"nub":"2331","date":"20170613"},
            {"nub":"1012","date":"20170614"},
            {"nub":"999","date":"20170615"},
            {"nub":"2458","date":"20170616"},
            {"nub":"2122","date":"20170617"},
            {"nub":"1789","date":"20170618"}
        ],
        opinion: ['学习氛围差', '学习氛围一般', '学习氛围很好'],
        opinionData1: [

        ],
        opinionData2: this.$store.state.data,
        opinionData: [
            {value:26, name:'学习氛围差'},
            {value:31, name:'学习氛围一般'},
            {value:8, name:'学习氛围很好'}
          ],
      }
    },
    store:store,
    computed:{
      ...mapGetters({
        oneWeekData:'getOneWeekData',
        twoWeekData:'getTwoWeekData'
      }),
      //x轴的日期
      
      xData14(){
        var data =[];
        for (var i = 0; i < this.twoWeekData.length; i++) {
          data[i]=this.twoWeekData[i].date.slice(4,6)+'/'+this.twoWeekData[i].date.slice(6,8);
        }
        return data
      },
      yData14(){
        var data =[];
        for (var i = 0; i < this.twoWeekData.length; i++) {
          data[i]=this.twoWeekData[i].nub;
        }
        return data
      },
      isCase:{
        get: function(){
          return window.location.hash.length > 3 ? true :false;
        } 
      },
    },
    watch:{
      // oneWeekData:function(newoneWeekData){
      //   // console.log(newoneWeekData);
      //   this.$nextTick(echarts_resize('righthz',this))
      // },
      // twoWeekData:function(newoneWeekData){
      //   // console.log(newoneWeekData);
      //   this.$nextTick(echarts_resize('righthz',this))
      // },
    },
    //外部点击收起下拉框与点击下拉框展开联动
    methods: {
      ...mapActions({
        hideselect:'selecthidestatus'
      }),
      xData7(oneWeekData){
        var data =[];
        for (var i = 0; i < oneWeekData.length; i++) {
          data[i]=oneWeekData[i].date.slice(4,6)+'/'+oneWeekData[i].date.slice(6,8);
        }
        return data
      },
      yData7(oneWeekData){
        var data =[];
        for (var i = 0; i <oneWeekData.length; i++) {
          data[i]=oneWeekData[i].nub;
        }
        return data
      },
      resize: function () {
      this.chart.resize()
    },
    getRequest(){
      let WEB_KEY='AE0ADC3949BA59ABBEW6E057F20F983E'
      let timestamp= Date.parse( new Date())+'';
      var token =window.localStorage.getItem('token')
      var pagram={
        begintime:todaybegin,
        endtime:endtime,
        timestamp:timestamp,
        type:'11',
        token:token
      }
      var sign_key=function(json){
          return To_md5('begintime='+todaybegin+'&endtime='+json.endtime+'&timestamp='+timestamp+'&token='+json.token+'&type='+json.type
            +WEB_KEY)
      }

      var sign=sign_key(pagram);

      var url =API_HZ+"data/lastFewDaysDataNLS"+'?'+'sign='+sign+'&begintime='+todaybegin+'&endtime='+pagram.endtime+'&timestamp='+pagram.timestamp+'&token='+pagram.token+'&type=11';
      var instance = axios.create();
      var bigheader='bigdata_'+timestamp;
      instance.defaults.headers.common['bigdata'] = To_md5(bigheader);
      instance.get(url)
        .then(response => {
            if (response.data.code===200) {
              var oneWeekData=response.data.data;
              this.xnub=this.xData7(oneWeekData);
              this.ynub=this.yData7(oneWeekData);
              this.redom7(this.xnub,this.ynub);
              this.$store.commit('SET_ONEWEEKDATA', oneWeekData)
            }else{
              if(response.data.code===407){
                this.$router.push({ path: '/login' });
              }else{
                alert(response.data.message);
              }
          }
        })
        .catch(error => {
          var fail = 'fail';
          this.$store.commit('SET_ONEWEEKDATA', fail)
          this.reloading=true;
          console.log(error)
        })
    },
    redom7(xnub,ynub){
      this.isActive=true;
      this.$nextTick(echarts_resize('righthz',this,this.xnub,this.ynub))
    },
    redom14(){
    this.isActive=false;
      this.$nextTick(echarts_resize('righthz',this,this.xData14,this.yData14))
    },
      redom (id,xyfonsiz,datax,datay) {
        var _self= this;
        _self.loading=false;
        this.chart = echarts.init(document.getElementById(id))
        this.chart.setOption(
            {
                    backgroundColor: 'rgba(0,0,0,0)',
                    color: ['#1F6ABB','#3897C5','#A4C5E6'],
                    grid: {
                         show: true,
                         left: '15%',
                         top: '15%',
                         right: '10%',
                         bottom: '15%',
                         borderWidth: 0,
                         borderColor: 'rgba(170,172,178,0.33)',
                         backgroundColor: 'rgba(0,0,0,0)',
                     },
                    xAxis: [
                        {
                            axisLabel :{  
                                interval:0   
                            }  ,
                            show:true,
                            barGap: 0,
                          //  boundaryGap: false,
                            
                            padding:0,
                            barMaxWidth:1,
                            type: 'category',
                            data: datax,
                            fontSize: 6,
                            scale: true,
                            lineStyle:2,
                            axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                             show: true,
                             lineStyle: {
                                 color: 'rgba(170,172,178,0.53)'
                             },
                         },
                         axisLabel: {
                             textStyle: {
                                 color: '#ffffff',//x坐标轴标签字体颜色
                                 fontSize: xyfonsiz,
                             },
                         },
                         axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                               show: true,
                               lineStyle: {
                                   color: '#05a1cd'
                               },
                           },
                        axisTick:{
                                show:false,
                            }

                        }
                    ],
                    yAxis:{
                        show:true,
                        name:'单位：人',
                        nameTextStyle:{
                          color:'#ffffff'
                        },
                        splitLine:{
                          show:false,
                        },
                        axisLabel:{
                          textStyle:{
                            color:'#ffffff',
                            fontSize: xyfonsiz,
                          }
                        },
                        axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                            show: false,
                            lineStyle: {
                                color: 'rgba(170,172,178,0.53)'
                            },
                        },
                        axisTick:{
                            show:false,
                        }
                    },
                series : [
                    {
                        name:'计划',
                        type:'bar',
                        barMaxWidth:'25%',
                        data:datay,
                        itemStyle:{
                            normal:{
                                color:'#05a1cd'
                            }
                        },
                        label:{
                        normal:{
                            show:true,
                            position:'top',
                            textStyle:{
                                color:'#2CC9E2',
                            }
                        }
                       },
                    }
                
                ]
            }
          );
      }
    },
    components:{},
    mounted() {
      this.getRequest()
      this.$store.dispatch('twoWeekData')
    }
  }
</script>
<style lang="less" type="text/less" scoped>
.main_content {
  width: 100%;
  height: 100%;
  position: relative;
}
.load{
  width: 100%;
  height: 100%;
  position: absolute;
  
}
.loading{
    margin-top: 30%;
    height: 50px;
    color: #05a1cd;
     font-size: 30px;
  }
  .reload{
  width: 100%;
  height: 100%;
  position: absolute;
  
}
.reloading{
    margin-top: 30%;
    height: 150px;
    width: 200px;
    margin-left: 37%;
    font-size: 30px;
  }
#righthz{
  width: 100%;
  height: 90%;
  div{
    width: 100%;
    height: 100%;
  }
}
.week{
    height: 1.5rem !important;
    width: 5rem !important;
    position: absolute;
    top: 10%;
    right: 10%;
    &:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
        line-height: 25px;
     }
    .oneweek{
      cursor: pointer;
      float: left;
      height: 1.5rem;
      width: 48%;
      background-image: url(../assets/images/unchose.png);
      background-size:100% 100%;
      &.chose{
        background-image: url(../assets/images/chose.png);
        background-size:100% 100%;
      }
    }
    .twoweek{
      cursor: pointer;
      float: left;
      height: 1.5rem;
      margin-left: 1px;
      width: 48%;
      background-image: url(../assets/images/unchose.png);
      background-size:100% 100%;
      &.chose{
        background-image: url(../assets/images/chose.png);
        background-size:100% 100%;
      }
    }
  }

</style>