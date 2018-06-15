<template>
    <div class="b6">
        <div v-bind:class='weaImg' class="weatherImg"></div>
        <div class="weather">{{nowRes.text}}</div>
        <div class="temperature">{{nowRes.temperature}}℃</div>
        <Loading v-show="isloading"></Loading>
    </div>
</template>

<script>
import Vue from 'vue'
import vAjax from '@/common/js/v-ajax.js'
Vue.use(vAjax);

export default {
  name: 'b6',
  data () {
    return {
        currentIndex: 0,
                timer:[],
                isloading:true,
                lifegroup:[
                    {part:'car_washing',text:'洗车',show:true},
                    {part:'dressing',text:'穿衣',show:true},
                    {part:'flu',text:'感冒',show:true},
                    {part:'sport',text:'运动',show:true},
                    {part:'travel',text:'旅游',show:false},
                    {part:'uv',text:'紫外线强度',show:true}
                ],
                apiData:{
                  nowurl:"http://api.seniverse.com/v3/weather/now.json",
                  lifeurl:"https://api.seniverse.com/v3/life/suggestion.json",
                  dailyurl:"https://api.seniverse.com/v3/weather/daily.json",
                  uid:"UE435A3710",
                  key:"sgqbslepggqd6dgg",
                  location:"jinhua",
                  curPage:1
                },
                nowRes:{
                     code:"13",
                    temperature:"...",
                    text:"...",
                },
                lifeRes:{
                    
                },
                dailyRes:{}
              
    }
  },
  computed: { 
      weaImg:function(){
            return  this.switchWea(this.nowRes.code);
        },
  },
  methods: {
      switchWea(s){
            if(s==='-1'){
                    return 'redom'
                }else if(s==='0'){
                	return 'qing'
                }else if(s==='2'){
                    return 'yejianqing'
                }else if(s==='1'||s==='3'){
                    return 'yejianqing'
                }else if(s==='4'){
                    return 'duoyun'
                }else if(s==='5'||s==='8'||s==='9'){
                    return 'yin'
                }else if(s=== '5'||s==='7'){
                    return 'yejianduoyun'
                }else if(s==='10'||s==='11'||s==='12'){
                    return 'leizhenyu'
                }else if(s==='13'||s==='14'){
                    return 'xiaoyu'
                }else if(s==='15'||s==='16'){
                    return 'zhongyu'
                }else if(s==='17'||s==='18'){
                    return 'dayu'
                }else if(s==='19'||s==='20'){
                    return 'yujiaxue'
                }else if(s==='21'||s==='22'){
                    return 'xiaoxue'
                }else if(s==='23'||s==='24'){
                    return 'zhongxue'
                }else if(s==='25'||s==='14'){
                    return 'daxue'
                }else if(s==='26'||s==='27'||s==='28'||s==='29'){
                    return 'shachenbao'
                }else if(s==='30'){
                    return 'wu'
                }else if(s==='31'){
                    return 'wumai'
                }
                else if(s==='32'){
                    return 'weifeng'
                }else if(s==='33'||s==='34'){
                    return 'dafeng'
                }else if(s==='35'||s==='36'){
                    return 'taifeng'
                }
        },
      getLife(){
                var _self= this
                this.$ajax({
                    type:'GET',
                    url:this.apiData.lifeurl,
                    dataType:'jsonp',
                    jsonp:'jsonpcallback',
                    data:{
                      uid : this.apiData.uid,
                      sig : this.apiData.key,
                      location : this.apiData.location,
                    },
                    success:function(res){
                      _self.$nextTick(function () {
                          //console.log(res)
                        _self.lifeRes = res.results[0].suggestion;
                      });
                    },
                    error:function(err){
                      console.log(err);
                    }
                })
            },
            getNow(){
                var _self= this
                this.$ajax({
                    type:'GET',
                    url:this.apiData.nowurl,
                    dataType:'jsonp',
                    jsonp:'jsonpcallback',
                    data:{
                      uid : this.apiData.uid,
                      sig : this.apiData.key,
                      location : this.apiData.location,
                    },
                    success:function(res){
						_self.isloading = false
                      _self.$nextTick(function () {
                        _self.nowRes = res.results[0].now;
                      });
                    },
                    error:function(err){
                      console.log(err);
                    }
                })
            },
            getDaily(){
                var _self= this
                this.$ajax({
                    type:'GET',
                    url:this.apiData.dailyurl,
                    dataType:'jsonp',
                    jsonp:'jsonpcallback',
                    data:{
                      uid : this.apiData.uid,
                      sig : this.apiData.key,
                      location : this.apiData.location,
                    },
                    success:function(res){
                      _self.$nextTick(function () {
                        _self.dailyRes = res.results[0].daily;
                      });
                    },
                    error:function(err){
                      console.log(err);
                    }
                })
            },
  },
  mounted(){
     this.getNow()
  },
  components:{
  	Loading
  }
}
</script>

<style lang="less" scoped>
.b6{
    .weatherImg{
        width:4rem;
        height:4rem;
        left: 50%;
        position: absolute;
        transform: translate(-50%,-50%);
        top: 50%;
        width: 30%;
    }
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    color:#1da7fe;
    .img{
        width:20%;
        text-align: center;
        height: auto;   
        left: 20%;
    }
    .weather{
        left: 30%;
        position: absolute;
        transform: translate(-50%,-50%);
        top: 80%;
        width: 30%;
    }
    .temperature{
        right: 10%;
        position: absolute;
        transform: translate(-50%,-50%);
        top: 80%;
        width: 30%;
    }
    img{                  
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    } 
}
.car_washing{
        background-image: url(../../../assets/images/life/xiche.png);
         background-size:100% 100%;
    }
    .dressing{
         background-size:100% 100%;
         background-image: url(../../../assets/images/life/chuanyi.png);
    }
    .uv{
         background-image: url(../../../assets/images/life/ziwaixianqiangdu.png);
          background-size:100% 100%;
    }
    .sport{
         background-image: url(../../../assets/images/life/yundong.png);
          background-size:100% 100%;
    }
    .travel{
         background-image: url(../../../assets/images/life/lvyou.png);
          background-size:100% 100%;
    }
    .flu{
         background-image: url(../../../assets/images/life/ganmao.png);
          background-size:100% 100%;
    }
    .baoyu{
        background-image: url(../../../assets/images/weather-blue/baoyu.png);
         background-size:100% 100%;

    }
    .bingbao{
        background-image: url(../../../assets/images/weather-blue/bingbao.png);
        background-size:100% 100%;
    }
    .dafeng{
        background-image: url(../../../assets/images/weather-blue/dafeng.png);
         background-size:100% 100%;
    }
    .daxue{
        background-image: url(../../../assets/images/weather-blue/daxue.png);
         background-size:100% 100%;
    }
    .dayu{
        background-image: url(../../../assets/images/weather-blue/dayu.png);
         background-size:100% 100%;
    }
    .leizhenyu{
        background-image: url(../../../assets/images/weather-blue/leizhenyu.png);
         background-size:100% 100%;
    }
    .qing{
        background-image: url(../../../assets/images/weather-blue/qing.png);
         background-size:100% 100%;
    }
    .redom{
        background-image: url(../../../assets/images/weather-blue/redom.png);
         background-size:100% 100%;
    }
    .shachenbao{
        background-image: url(../../../assets/images/weather-blue/shachenbao.png);
         background-size:100% 100%;
    }
    .taifeng{
         background-size:100% 100%;
        background-image: url(../../../assets/images/weather-blue/taifeng.png);
    }
    .wait{
        background-image: url(../../../assets/images/weather-blue/wait.png);
         background-size:100% 100%;
    }
    .weifeng{
        background-image: url(../../../assets/images/weather-blue/weifeng.png);
         background-size:100% 100%;
    }
    .wu{
        background-image: url(../../../assets/images/weather-blue/wu.png);
         background-size:100% 100%;
    }
    .wumai{
        background-image: url(../../../assets/images/weather-blue/wumai.png);
         background-size:100% 100%;
    }
    .xiaoxue{
        background-image: url(../../../assets/images/weather-blue/xiaoxue.png);
         background-size:100% 100%;
    }
    .xiaoyu{
        background-image: url(../../../assets/images/weather-blue/xiaoyu.png);
         background-size:100% 100%;
    }
    .yejianqing{
        background-image: url(../../../assets/images/weather-blue/yejianqing.png);
         background-size:100% 100%;
    }
    .yejianduoyun{
        background-image: url(../../../assets/images/weather-blue/yejianduoyun.png);
         background-size:100% 100%;
    }
    .duoyun{
        background-image: url(../../../assets/images/weather-blue/duoyun.png);
         background-size:100% 100%;
    }
    .yin{
        background-image: url(../../../assets/images/weather-blue/yin.png);
         background-size:100% 100%;
    }
    .yujiaxue{
        background-image: url(../../../assets/images/weather-blue/yujiaxue.png);
         background-size:100% 100%;
    }
    .zhongxue{
        background-image: url(../../../assets/images/weather-blue/zhongxue.png);
         background-size:100% 100%;
    }
    .zhongyu{
        background-image: url(../../../assets/images/weather-blue/zhongyu.png);
         background-size:100% 100%;
    }
</style>