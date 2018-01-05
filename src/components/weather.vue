<template>
    <div class="content">          
        <div class="infowin">
            <transition-group name='fade'>
                <div class="life" v-for='(item,index) in lifegroup' v-show="index===currentIndex" v-bind:key="index">
                    <div>
                        <div v-bind:class= 'item.part' class="partimg">       
                        </div>
                        <div style="text-align:left">
                            {{item.text}}：{{life.data[item.part].brief}}
                        </div>
                    </div>     
                </div>
            </transition-group> 
        </div>
        <div v-bind:class='weatherImg' class="weather"></div>
    </div>
</template></template>
<script type="text/javascript">
import Vue from 'vue'
import axios from 'axios'
import vAjax from '../common/js/v-ajax.js'
Vue.use(vAjax);
    export default{
        data(){
            return{
                currentIndex: 0,
                timer:[],
                lifegroup:[
                    {part:'car_washing',text:'洗车',show:true},
                    {part:'dressing',text:'穿衣',show:true},
                    {part:'flu',text:'感冒',show:true},
                    {part:'sport',text:'运动',show:true},
                    {part:'travel',text:'旅游',show:false},
                    {part:'uv',text:'紫外线强度',show:true}
                ],
                apiData:{
                  url:"http://api.seniverse.com/v3/weather/now.json",
                  lifeurl:"https://api.seniverse.com/v3/life/suggestion.json",
                  uid:"U780C8ABAA",
                  key:"s2iqikevs0vffmvy",
                  location:"hangzhou",
                  curPage:1
                },
                weather:{
                    data:{
                        //天气现象代码
                        code:'-1',
                        //温度，单位为c摄氏度或f华氏度
                        temperature:'',
                        //天气现象文字
                        text:'',
                    }   
                },
                life:{
                    data:{
                        car_washing:{
                            brief:'多'
                        },
                        dressing:{
                            brief:'较少'
                        },
                        flu:{
                            brief:'较易发'
                        },
                        sport:{
                            brief:'适宜'
                        },
                        travel:{
                            brief:'适宜'
                        }, 
                        uv:{
                            brief:'最强'
                        },
                    }
                }
                
            }
        },
        computed:{
            weatherImg:function(){
                var s = this.weather.data.code;
                if(s==='-1'){
                    return 'redom'
                }else if(s==='0'||s==='2'){
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
            lifeImg:function(){
                switch(this.life.data.sport){

                }   
            }
        },
        methods:{
            change(item){
                item.show=!item.show;
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
                        _self.life.data = res.results[0].suggestion;
                      });
                    },
                    error:function(err){
                      console.log(err);
                    }
                })
            },
            getWeather(){
                var _self= this
                this.$ajax({
                    type:'GET',
                    url:this.apiData.url,
                    dataType:'jsonp',
                    jsonp:'jsonpcallback',
                    data:{
                      uid : this.apiData.uid,
                      sig : this.apiData.key,
                      location : this.apiData.location,
                    },
                    success:function(res){
                      _self.$nextTick(function () {
                        _self.weather.data = res.results[0].now;
                      });
                    },
                    error:function(err){
                      console.log(err);
                    }
                })
            },
            autoPlay() {
                this.currentIndex++
                if (this.currentIndex > this.lifegroup.length - 1) {
                    this.currentIndex = 0
                }
            },
        },
        mounted() {
            this.getWeather();
            this.getLife();
        },
        created() {
    //在DOM加载完成后，下个tick中开始轮播
            this.$nextTick(() => {
                setInterval(() => {
                    this.autoPlay()
                }, 6000)
            })
        },

    }
    // Vue.component('child',{
    //     props:['message'],
    //     template:'<span>{{message}}</span>'
    // })
</script>

<style lang="less" type="text/less" scoped>
.content{
    width:100%;
    height:100%;
    position:relative;
    &:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    
     @media screen and (min-width: 600px){
    .weather{
        width:35px;
        height:35px;
        margin-left:230px;
        margin-top: 35px;

    }
    .infowin{
        float:right;
        width:200px;
        height: 30px;
        overflow: hidden;
        margin-right:80px;
        .life{   
            width:200px;
            float:left;
            height:30px !important;
            .partimg{
                float:left;
                width:30px;
                height:30px;
            }
        }  
    }
    }

     @media screen and (max-width: 600px){
        .weather{
            width:35px;
            height:35px;
            margin-left:180px;
            margin-top: 25px;
            position: absolute;
            top: 5px;
        }
         .infowin{
            float:left;
            width:180px;
            height: 30px;
            overflow: hidden;
            margin-left:10px;
            margin-top:20px;
            .life{   
                width:200px;
                float:left;
                height:30px !important;
                .partimg{
                    float:left;
                    width:30px;
                    height:30px;
                }
            }  
        }   
    }
}
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-active {
  padding-bottom: 10px;
  opacity: 0;
}

    .car_washing{
        background-image: url(../assets/images/life/xiche.png);
         background-size:100% 100%;
    }
    .dressing{
         background-size:100% 100%;
         background-image: url(../assets/images/life/chuanyi.png);
    }
    .uv{
         background-image: url(../assets/images/life/ziwaixianqiangdu.png);
          background-size:100% 100%;
    }
    .sport{
         background-image: url(../assets/images/life/yundong.png);
          background-size:100% 100%;
    }
    .travel{
         background-image: url(../assets/images/life/lvyou.png);
          background-size:100% 100%;
    }
    .flu{
         background-image: url(../assets/images/life/ganmao.png);
          background-size:100% 100%;
    }
    .baoyu{
        background-image: url(../assets/images/weather/baoyu.png);
         background-size:100% 100%;

    }
    .bingbao{
        background-image: url(../assets/images/weather/bingbao.png);
        background-size:100% 100%;
    }
    .dafeng{
        background-image: url(../assets/images/weather/dafeng.png);
         background-size:100% 100%;
    }
    .daxue{
        background-image: url(../assets/images/weather/daxue.png);
         background-size:100% 100%;
    }
    .dayu{
        background-image: url(../assets/images/weather/dayu.png);
         background-size:100% 100%;
    }
    .leizhenyu{
        background-image: url(../assets/images/weather/leizhenyu.png);
         background-size:100% 100%;
    }
    .qing{
        background-image: url(../assets/images/weather/qing.png);
         background-size:100% 100%;
    }
    .redom{
        background-image: url(../assets/images/weather/redom.png);
         background-size:100% 100%;
    }
    .shachenbao{
        background-image: url(../assets/images/weather/shachenbao.png);
         background-size:100% 100%;
    }
    .taifeng{
         background-size:100% 100%;
        background-image: url(../assets/images/weather/taifeng.png);
    }
    .wait{
        background-image: url(../assets/images/weather/wait.png);
         background-size:100% 100%;
    }
    .weifeng{
        background-image: url(../assets/images/weather/weifeng.png);
         background-size:100% 100%;
    }
    .wu{
        background-image: url(../assets/images/weather/wu.png);
         background-size:100% 100%;
    }
    .wumai{
        background-image: url(../assets/images/weather/wumai.png);
         background-size:100% 100%;
    }
    .xiaoxue{
        background-image: url(../assets/images/weather/xiaoxue.png);
         background-size:100% 100%;
    }
    .xiaoyu{
        background-image: url(../assets/images/weather/xiaoyu.png);
         background-size:100% 100%;
    }
    .yejianqing{
        background-image: url(../assets/images/weather/yejianqing.png);
         background-size:100% 100%;
    }
    .yejianduoyun{
        background-image: url(../assets/images/weather/yejianduoyun.png);
         background-size:100% 100%;
    }
    .duoyun{
        background-image: url(../assets/images/weather/duoyun.png);
         background-size:100% 100%;
    }
    .yin{
        background-image: url(../assets/images/weather/yin.png);
         background-size:100% 100%;
    }
    .yujiaxue{
        background-image: url(../assets/images/weather/yujiaxue.png);
         background-size:100% 100%;
    }
    .zhongxue{
        background-image: url(../assets/images/weather/zhongxue.png);
         background-size:100% 100%;
    }
    .zhongyu{
        background-image: url(../assets/images/weather/zhongyu.png);
         background-size:100% 100%;
    }
</style>