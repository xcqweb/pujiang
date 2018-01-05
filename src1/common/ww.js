import CryptoJS from "crypto-js"
import Vue from 'vue'
;(function () {
function json2url(json){
    json.t=Math.random();
    var arr=[];
    for(var name in json){
        arr.push(name+'='+json[name]);
    }
    return arr.join('&');
};
    //json
    // type:'GET',
    // url:this.apiData.url, API
    // dataType:'jsonp',
    // jsonp:'jsonpcallback',
    //data
          // appid : this.apiData.appid, UID
          // sign : this.apiData.sign, KEY
          // type : this.apiData.type, LOCATION
          // page : this.apiData.curPage

    //UID = "U785B76FC9"; // 测试用 用户ID，请更换成您自己的用户ID
     // KEY = "4r9bergjetiv1tsd"; // 测试用key，请更换成您自己的 Key
     // API = "http://api.seniverse.com/v3/weather/now.json"; // 获取天气实况
     // LOCATION = "hangzhou"
    var vAjax = {};

    vAjax.install =function(Vue, options) {
      // 1. 添加全局方法或属性
      Vue.myGlobalMethod ={};
      console.log('Vue的全局方法执行了 myGlobalMethod()')
      // 2. 添加全局资源
      Vue.directive('my-directive', {});

      // 3. 添加实例方法
      Vue.prototype.$ajax = function(json){
            json=json || {};
            if(!json.url){
                console.log('url Not Null');
                return;
            };
            json.data=json.data || {};
            json.type=json.type || 'get';
            if(json.data.key){
                 // 获取当前时间戳
                var ts = Math.floor((new Date()).getTime() / 1000);
                // 构造验证参数字符串
                var str = "ts=" + ts + "&uid=" + json.data.uid;
                // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
                // 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
                var sig = CryptoJS.HmacSHA1(str, json.data.key).toString(CryptoJS.enc.Base64);
                sig = encodeURIComponent(sig);
                json.data.sig = sig;
                json.data['ts']= ts;
                json.data['key'] =null ;
            }
            //jsonp
            if(json.dataType==='jsonp'){
                json.jsonp = json.jsonp || 'callback';

                var fnName='jsonp'+Math.random();
                fnName=fnName.replace('.','');

                json.data[json.jsonp]=fnName;

                var oS=document.createElement('script');
                oS.src=json.url+'?'+json2url(json.data);
                var oHead=document.getElementsByTagName('head')[0];
                oHead.appendChild(oS);

                window[fnName]=function(data){
                    json.success && json.success(data);
                    oHead.removeChild(oS);
                };
                return;
            }

            //ajax
            if(window.XMLHttpRequest){
                var oAjax=new XMLHttpRequest();
            }else{
                var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
            }

            switch(json.type.toLowerCase()){
                case 'get':
                oAjax.open('GET',json.url+'?'+json2url(json.data),true);
                oAjax.send();
                break;
                case 'post':
                oAjax.open('POST',json.url,true);
                oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                oAjax.send(json2url(json.data));
                break;
            }

            // fnLoading()
            json.fnLoading && json.fnLoading();

            oAjax.onreadystatechange=function(){
                if(oAjax.readyState==4){
                    json.complete && json.complete();
                    if(oAjax.status>=200 && oAjax.status<300 || oAjax.status==304){
                        if(json.dataType=='xml'){
                            json.success && json.success(oAjax.responseXML);
                        }else{
                            json.success && json.success(oAjax.responseText);
                        }
                    }else{
                        json.error && json.error(oAjax.status);
                    }
                }
            };
        }
    }

   if (typeof exports == "object") {
    module.exports = vAjax
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return vAjax })
  } else if (window.Vue) {
    window.vAjax = vAjax
    Vue.use(vAjax)
  }

})()

