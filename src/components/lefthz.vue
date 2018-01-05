<template>
  <div class="lefthz_content">
    <div class="load" v-if='loading'><div class="loading">{{message}}</div></div>
    <div class="reload" v-if='reloading'><div @click='reload' class="reloading">点击重新获取</div></div>
    <div id="lefthz"></div>
  </div>
</template>
<script>
  import echarts_listen_resize from '../common/js/echarts_listen_resize.js'
  import echarts from '../../charts/echarts.js'
  import { mapGetters } from 'vuex'
  import store from '../vuex/store' // import 我们刚刚创建的 store
  import { mapActions } from 'vuex'
  import {endtime,begintime,todaybegin} from '../common/js/gtime.js'
  import axios from 'axios'
  import {API_HZ} from '../api/env.js'
  import To_md5 from '../common/js/md5.js'
  import paramToSign from '../common/js/sign/param_to_sign.js'
  export default {
    data() {
      return {
        chart: null,
        re:null,
        maxData:null,
        reTimer:0,
        loading:true,
        reloading:false,
        message:'正在生成图表....',
        opinion: {
            backgroundColor: 'rgba(0,0,0,0)',
            color: ['#00ffff', '#00ffa2', '#f0e750'],
            grid: {
               show: true,
               left: '10%',
               top: '15%',
               right: '5%',
               bottom: '10%',
               borderWidth: 0,
               borderColor: 'rgba(170,172,178,0.33)',
               backgroundColor: 'rgba(0,0,0,0)',
           },
           calculable: true,
           xAxis: [{
               type: 'category',
               boundaryGap: false,
               //在（type: 'category'）中设置data有效
               splitLine: { //坐标轴在 grid 区域中的分隔线；
                   show: false,
                   lineStyle: { //分割线颜色，可设单个，也可以设置数组。
                       color: 'rgba(170,172,178,0.33)'
                   }
               },
               axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                   show: true,
                   lineStyle: {
                       color: '#05a1cd',
                       shadowBlur:50,
                       shadowColor:'#05a1cd',
                   },
               },
               axisLabel: {
                   textStyle: {
                       color: '#05a1cd',//x坐标轴标签字体颜色
                       fontSize: 15,
                   },
               },
               axisTick:{
                    show:false,
                }
           }],
           yAxis: [{
               type: 'value',
               name:'单位：人',
               nameTextStyle:{
                          color:'#ffffff'
                },
               min: 0,
               max: this.maxData,
               minInterval: 1,
               splitNumber:2,
               splitLine: {
                   show: false,
                   lineStyle: {
                       color: 'rgba(170,172,178,0.33)'
                   }
               },
               axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                   show: false,
                   lineStyle: {
                       color: 'rgba(170,172,178,0.53)'
                   },
               },
               axisLabel: {
                   textStyle: {
                       color: '#ffffff',
                       fontSize: 12,
                   },
               },
               axisTick:{
                    show:false,
                },
                axisPoiner:{
                    label:{
                        show:true,

                    }
                }
               // splitArea: {
               //     show: true,
               //     areaStyle: {
               //         color: ['#112245', 'rgba(34,50,82,0.4)']
               //     }
               // }
           }],
           series: [{
                       type: 'line',
                       smooth: true, //是否平滑曲线显示
                       lineStyle: { //线条样式 
                           normal: {
                               width: 2,
                               color:'#2CC9E2',
                           }
                       },

                       areaStyle: { //区域填充样式
                           normal: {
                               //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                               color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                   offset: 0,
                                   color: 'rgba(0,222,255,0.4)'
                               }, {
                                   offset: 1,
                                   color: 'rgba(0,222,255,0)'
                               }], false),
                               opacity:0.8,
                           }
                       },
                       itemStyle: { //折现拐点标志的样式
                           normal: {
                               color: 'rgba(113,191,255,1)',
                               borderColor:'rgba(113,191,255,1)',
                               borderWidth:10,
                               opacity:0,
                           }
                       },
                   }

               ] //series结束
         },
      
        // isCase:null 
      }
    },
    store:store,
    computed:{
      //下拉框点击展示与点击外边界收起联动
      ...mapGetters({
        allData: 'getAllData',
        fiveMinData: 'getFiveMinData',
        endTime:'getEndTime',
      }),
    },
    //外部点击收起下拉框与点击下拉框展开联动
    methods: {
      ...mapActions({
        hideselect:'selecthidestatus'
      }),
      resize: function () {
      this.chart.resize()
    },
    reload(){
      this.fetch;
    },
    date(endtimea){
          var arrdate=[];
          var endtDate=endtimea.slice(0,4)+'/'+endtimea.slice(4,6)+'/'+endtimea.slice(6,8)+' '+endtimea.slice(8,10)+':'+endtimea.slice(10,12)+':'+endtimea.slice(12,14);
          var dt = new Date(endtDate);
        if (endtimea) {
          for (var i = 0; i < 500; i++) {
              var t_s=dt.getTime()
              dt.setTime(t_s-1000*3)
              var hm= '';
              var year=dt.getFullYear(); //获取当前年份
              var mon=dt.getMonth()+1; //获取当前月份
              var da=dt.getDate(); //获取当前日
              var day=dt.getDay(); //获取当前星期几
              var h=dt.getHours(); //获取小时
              var m=dt.getMinutes(); //获取分
              var s=dt.getSeconds(); //获取秒
              if (m>=5) {
                  var endm =m-5;
                  if (m<15) {
                      if(m<10){
                          m='0'+m;
                      }
                      if(h<10){
                          h='0'+h
                      }
                      hm= h+'0'+endm;
                  }else{
                      if(h<10){
                              h='0'+h
                      }
                      hm= h+''+endm;
                  }
                          
              }else{
                  var beginh= h-1;
                  var beginm =55+m;
                  if(beginh<10){
                      beginh='0'+beginh
                      }
                  m='0'+m
                  hm= beginh+''+beginm;      
              }
              if(mon<10){
                  mon='0'+mon
              }
              if(da<10){
                  da='0'+da
              }
              if(s<10){
                  s='0'+s
              }
              arrdate[i]=+h+':'+m+':'+s;
          }
        } 
      return arrdate 
    },
    getTwo(){
      function getUserAccount(){
        return axios.get('/user/12345');
      }
      function getUserPermissions(){
        return axios.get('/user/12345/permissions');
      }
      axios.all([getUserAccount(),getUserPermissions()])
    .then(axios.spread(function(acct,perms){
      //当这两个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果
    }))
    },
    fetch(){
        var url =API_HZ+"getDataNLS"+'?'+'begintime='+begintime+'&endtime='+endtime+'&type=11';
              let WEB_KEY='AE0ADC3949BA59ABBEW6E057F20F983E'
        let timestamp= Date.parse( new Date())+'';
        var token =window.localStorage.getItem('token')
        var pagram={
          begintime:begintime,
          endtime:endtime,
          timestamp:timestamp,
          type:'11',
          token:token
        }
        var sign=paramToSign(pagram)
          var url =API_HZ+"data/getDataNLS"+'?'+'sign='+sign+'&begintime='+pagram.begintime+'&endtime='+pagram.endtime+'&timestamp='+pagram.timestamp+'&token='+pagram.token+'&type=11';
          var instance = axios.create();
          var bigheader='bigdata_'+timestamp;
          instance.defaults.headers.common['bigdata'] = To_md5(bigheader);
          instance.get(url)
            .then(response => {
            if (response.data.code===200) {
                var re=response.data.data.nub;
                var bigData=this.ndata(re)
                var bigDate=this.date(endtime);
                this.maxData= Math.max(...bigData);
                this.redom('lefthz',bigDate,bigData,true);
            }else{
              if(response.data.code===407){
              this.$router.push({ path: '/login' });
              }else{
                alert(response.data.message);
              }
          }
                
            })
            .catch(error => {
              this.reloading=true;
              console.log(error)
            })
    },
    ndata(mountData){
        const arrdata=[];
        for (var i = 0; i <500; i++) {
            arrdata[i]=0
        }
        for(var i = 0; i < mountData+1; i++) {
            var n=Math.round(Math.random()*500);        
            arrdata[n]++;
            mountData--;
        }
        return arrdata
      },
     addData(shift,i,date,data,bigDate,bigData) {
      
        date.push(bigDate[i]);
        data.push(bigData[i]);
        if (shift) {
            date.shift();
            data.shift();
        }

    },
    redom (id,bigDate,bigData,icase) {
        this.chart = echarts.init(document.getElementById(id))
        this.message='正在生成数据....'
        this.chart.setOption(this.opinion);
        var _self= this;
        var date=[];
        var i=8;
        var data=[];
        if (icase) {
            date=bigDate.reverse().slice(0,8);
            data=bigData.reverse().slice(0,8);
           var rotatorId=this.$store.state.rotatorId;
           //确保循环队列ID不能为undefined会产生多个相同进程
           var b = [];//去除undefined后的结果
            for(var q=0;q<rotatorId.length;q++){
                if(typeof(rotatorId[q])!='undefined'){
                    b.push(rotatorId[q]);
                }
            }
            var rotatorId=b;
            var indexrotatorId=this.$store.state.reTimer;
            if (rotatorId.length > 0) {
               for(var n = 0; n < rotatorId.length+1; n++){
                  window.clearInterval(rotatorId[n]);
                  this.$store.commit('CLEAR_rotatorId',{reTimer:rotatorId[n],index:n })                 
                }
            }
             var reTimer=setInterval(function () {
            i++;
            if (i>490) {
                _self.fetch();
                i=8;
            }
            _self.addData(true,i,date,data,bigDate,bigData);
                _self.opinion.xAxis.data=date;
                _self.opinion.series.data=data;
                _self.loading=false;
                _self.$store.commit('SET_ADD',{count:Number(data[7]) })
                _self.chart.setOption({
                    xAxis: {
                        data: date
                    },
                    series: [{
                        name:'成交',
                        data: data
                    }]
                });
            }, 3000);
 
            this.$store.commit('SET_rotatorId',{count:reTimer,index:indexrotatorId })
            this.$store.commit('SET_reTimer',{count:Number(data[0]) })
        }
      }
    },
    mounted() {
      this.$nextTick(echarts_listen_resize('lefthz',this)) 
      this.fetch();
    },
  }
</script>
<style type="less/text" scoped>
.lefthz_content {
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
    color: '#05a1cd';
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
#lefthz{
  width: 100%;
  height: 90%;

  div{
    width: 100%;
    height: 100%;
    overflow: inherit;
    position: absolute !important;
    top: -300px;
  }
}
</style>