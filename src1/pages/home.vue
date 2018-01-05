<template>
    <div id="wrapper">
        <div class="header">
            <div class="title">
                <p>杭州市东方文化园客流监测系统</p>
            </div>
            <div class="info">
                <p class="year">{{year}}</p>
                <p class="time">{{time}}</p>
                <p class="week">{{week}}</p>
                <div class="weathera"><weather></weather></div>
            </div>
            <div class="signout" @click='signout'>
                <div class="imgout"></div>
                <span>退出登录</span>
            </div>
        </div>
        <div class="num_now">
            <p>客流实时监测</p>
            <lefthz></lefthz>
        </div>
        <div class="right_info">
            <div class="info_num">
                <div class="num_title">
                    <div class=""><span>今日客流总数</span></div>
                    <div class=""><span>昨日客流总数</span></div>
                    <div class=""><span>客流总数</span></div>
                </div>
                <div class="num_data">
                    <div class="">
                        <span v-if="nowAddData ">
                            {{nowAddData}}
                            <font v-if="nowAddData!='获取中...'">人次</font></span>
                        <span @click='nowshuaxin' 
                                class="shuaxin" 
                                v-if="todayshow">
                                {{getting}}
                            <div v-if="todayshow" class="imgg">         
                            </div>
                        </span>
                    </div>
                    <div class="">
                        <span v-if="nowNub ">
                            {{nowNub}}
                            <font v-if="nowNub!='获取中...'">人次</font>
                        </span>
                        <span class="shuaxin"
                                @click='yesetdayshuaxin' 
                                v-if="yesetodayshow">
                                {{getting}}
                            <div class="imgg"
                                 v-if='yesetodayshow'       
                            ></div>
                        </span>
                    </div>
                    <div class="">
                        <span v-if="!allshow">
                            {{allAddData}}
                            <font v-if="allAddData!='获取中...'">人次</font>
                        </span>
                        <span class="shuaxin" 
                                @click.once='alldayshuaxin' 
                                v-if="allshow">
                                {{getting}}
                            <div class="imgg" 
                                v-if="allshow" >
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div class="num_week">
                <p>客流人数分析</p>
                
                <righthz></righthz>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import lefthz from '../components/lefthz.vue'
import weather from '../components/weather.vue'
import righthz from '../components/righthz.vue'
import { mapGetters } from 'vuex'
import store from '../vuex/store' 
new Vue();
    export default{
        data(){
            return{
                msg:'欢迎光临',
                weather:null,
                year:'',
                time:'',
                week:'',
                alld:'',
                yesd:'',
                tod:'',
                getting:'重新获取'
            }
        },
        methods:{
            nowshuaxin:function(){
                this.$store.dispatch('todayNumb')
            },
            yesetdayshuaxin:function(){
                this.$store.dispatch('righthz')
            },
            alldayshuaxin:function(){
                this.$store.dispatch('allNumb')
            },
            settime:function(){
                    var hm= '';
                    var date=new Date();
                    var year=date.getFullYear(); //获取当前年份
                    var mon=date.getMonth()+1; //获取当前月份
                    var da=date.getDate(); //获取当前日
                    var day=date.getDay(); //获取当前星期几
                    var h=date.getHours(); //获取小时
                    var m=date.getMinutes(); //获取分
                    var s=date.getSeconds(); //获取秒
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
                    this.year= year+'/'+mon+'/'+da;
                    this.time=h+':'+m;
                    var xingqi='';
                    switch(day) 
                        { 
                        case 0:xingqi="星期日";break; 
                        case 1:xingqi="星期一";break; 
                        case 2:xingqi="星期二";break; 
                        case 3:xingqi="星期三";break; 
                        case 4:xingqi="星期四";break; 
                        case 5:xingqi="星期五";break; 
                        case 6:xingqi="星期六";break; 
                        default:xingqi="系统错误！" 
                        } 
                    this.week=xingqi
            },
            signout(){
                this.$store.commit('LOGOUT');
                this.$router.push({ path: '/login' });
            }
        },
        store:store,
        computed:{
            ...mapGetters({
                oneWeekData:'getOneWeekData',
                todayData:'getTodayData',
                allData:'getAllData',
                addData:'getAddData'
              }),
            //接口加载失败显显示
            allshow(){
                return this.allData==='fail'? true : false;
            },
            todayshow(){
                return this.todayData==='fail'? true : false;
            },
            yesetodayshow(){
                return this.oneWeekData==='fail'? true : false;
            },
            //管理接口加载中到加载成功
            nowAddData(){
                if(this.todayData===null||this.todayData===undefined){
                    return '获取中...'
                }else{
                var n= Number(this.todayData)+this.addData
                var m =n +'',
                   len= m.length
                   if (len>3) {
                    var aa=len-3
                   var bb=m.slice(aa,len)
                   var cc=m.slice(0,aa)
                   m=cc+','+bb
                   }
                    return m
            }
            },
            allAddData(){
                if(this.allData===null||this.allData===undefined){
                    return '获取中...'
                }else{
                   var n=Number(this.allData)+this.addData
                   var m =n +'',
                   len= m.length
                   if (len>3) {
                    var aa=len-3
                   var bb=m.slice(aa,len)
                   var cc=m.slice(0,aa)
                   m=cc+','+bb
                   }
                    return m
                }
                
            },
            nowNub(){
                if (this.oneWeekData===null||this.oneWeekData[6]===undefined) {
                    return '获取中...'
                }else{
                   var n= this.oneWeekData[6].nub;
                   var m =n +'',
                   len= m.length
                   if (len>3) {
                    var aa=len-3
                   var bb=m.slice(aa,len)
                   var cc=m.slice(0,aa)
                   m=cc+','+bb
                   }
                   return m
                }
                
            },
            fonSize:{
                get: function(){
                  const clientW = document.body.clientWidth 
                  if (clientW>1601) {
                    return '36px !important';
                  }else if(clientW>1396){
                    return '24px !important';
                  }else if(clientW>800){
                    return '16px !important' ;
                  }
                } 
              },
              
        },
        components:{ lefthz ,righthz,weather},
        created(){
            // this.getuser();
            this.settime();
            setInterval(() =>{
                this.settime();
              }, 50000);
            
            if (this.$store.state.fiveMinData === null) {
              // this.$store.dispatch('nowNumb')
              this.$store.dispatch('allNumb')
              this.$store.dispatch('todayNumb')
            }
        }
    }
</script>

<style lang="less" type="text/less" scoped >
    @import '../assets/style/homemock.less';

</style>