<template>
    <section class="content">
    <h1>天气查询</h1>

    <button @click="getweather">天气</button>
    <button @click="getlife">生活</button>
    <button @click="jsonpo">jsonp</button>
  </section>
</template></template>

<script type="text/javascript">
var KEY = 's2iqikevs0vffmvy';
// var sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
import Vue from 'vue'
import axios from 'axios'
import CryptoJS from "crypto-js"

    export default{
        data(){
            return{
                repeater: 'https://crossorigin.me/',
                key : "4r9bergjetiv1tsd",
                location:'hangzhou',
                weather:{
                    url:'/api/weather/now.json?key=s2iqikevs0vffmvy&location=hangzhou&language=zh-Hans&unit=c',
                    data:{
                        //天气现象代码
                        code:'',
                        //温度，单位为c摄氏度或f华氏度
                        temperature:'',
                        //天气现象文字
                        text:'',
                    }   
                },
                life:{
                    url:'/api/life/suggestion.json?key=s2iqikevs0vffmvy&location=hangzhou&language=zh-Hans',
                    data:{
                        //洗车
                        car_washing:{
                            brief:''
                        },
                        //穿衣
                        dressing:{
                            brief:''
                        },
                        //感冒，多发，少发，较易发
                        flu:{
                            brief:''
                        },
                        //运动
                        sport:{
                            brief:''
                        },
                        //旅游
                        travel:{
                            brief:''
                        },
                        //紫外线 最弱 
                        uv:{
                            brief:''
                        },
                    }
                }
                
            }
        },
        computed:{
            URL:function(){
                  const UID = "U785B76FC9"; // 测试用 用户ID，请更换成您自己的用户ID
                  const KEY = "4r9bergjetiv1tsd"; // 测试用key，请更换成您自己的 Key
                  const API = "http://api.seniverse.com/v3/weather/now.json"; // 获取天气实况
                  const LOCATION = "beijing"; // 除拼音外，还可以使用 v3 id、汉语等形式
                  // 获取当前时间戳
                  const ts = Math.floor((new Date()).getTime() / 1000);
                  // 构造验证参数字符串
                  const str = "ts=" + ts + "&uid=" + UID;
                  // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
                  // 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
                  // const sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
                  // sig = encodeURIComponent(sig);
                  // str = str + "&sig=" + sig;
                  // 构造最终请求的 url
                  const url = API + "?location=" + LOCATION + "&" + str + "&callback=foo";
            }
        },
        methods:{
            getweather(){
                const _this = this;
                axios.get(_this.weather.url)
                .then(function(re) {
                    if (re.status=200) {
                    _this.weather.data = re.data.results[0].now
                    }else{

                    }
                }).catch(function(eeror){
                    console.log(eeror)
                });
            },
            getlife(){
                const _this = this;
                axios.get(_this.life.url)
                .then(function(re) {
                    if (re.status=200) {
                        _this.life.data = re.data.results[0].suggestion
                    }else{

                    }
                    
                }).catch(function(eeror){
                    console.log(eeror)
                });
            },
            jsonp(){
                const url =this.repeater + 'https://api.thinkpage.cn/v3/weather/now.json?key=' + this.key + '&location=' + this.location + '&language=zh-Hans&unit=c';
                this.$jsonp(url, null).then(json => {
                console.log(json)
              }).catch(err => {
                // Failed.
              })
            },
            jsonpo(){
                const _self = this;
                var UID = "U785B76FC9"; // 测试用 用户ID，请更换成您自己的用户ID
                var KEY = "4r9bergjetiv1tsd"; // 测试用key，请更换成您自己的 Key
                var API = "http://api.seniverse.com/v3/weather/now.json"; // 获取天气实况
                var LOCATION = "hangzhou"; // 除拼音外，还可以使用 v3 id、汉语等形式
                function getUrl(){
                    // 获取当前时间戳
                    var ts = Math.floor((new Date()).getTime() / 1000);
                    // 构造验证参数字符串
                    var str = "ts=" + ts + "&uid=" + UID;
                    // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
                    // 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
                    var sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
                    sig = encodeURIComponent(sig);
                    str = str + "&sig=" + sig;
                    var url = API + "?location=" + LOCATION + "&" + str + "&callback=jsonpCallback";
                    return url
                }
                getUrl();
                window.jsonpCallback= function(data) {
                    console.log(data.results[0].now);
                    console.log(_self);
                  _self.weather.data = data.results[0].now;
                }
                // 构造最终请求的 url
                
                // 向 HTML 中动态插入 script 标签，通过 JSONP 的方式进行调用
                var newScript = document.createElement('script');
                newScript.type = 'text/javascript';
                newScript.src = url;
                var Body =document.getElementsByTagName('body')
                console.log(Body);
                document.getElementsByTagName("body")[0].appendChild(newScript);
                //判断是否加载完成
                // if (callback && typeof callback === 'function') {
                //     if (window.attachEvent) {//ie
                //         newScript.onreadystatechange = function () {
                //             if (newScript && (newScript.readyState == "loaded" || newScript.readyState == "complete")) {
                //                 newScript.onreadystatechange = null;
                //                 callback();
                //             }
                //         }
                //     } else {
                //         newScript.onload = function () {
                //             newScript.onload = null;
                //             callback();
                //         }
                //     }
                // }
            }
        },
        // created(){

        // }

    }
    // Vue.component('child',{
    //     props:['message'],
    //     template:'<span>{{message}}</span>'
    // })
</script>

<style lang="less" type="text/less"></style>