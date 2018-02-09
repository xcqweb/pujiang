var differ=25
var hm= '';
var date=new Date();
var timeStamp = date.getTime()+'';
var oldDate = new Date(date.getTime()-149*1000) 

var year=date.getFullYear(); //获取当前年份
var mon=date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1; //获取当前月份
var da=date.getDate() < 10 ? '0'+date.getDate() : date.getDate(); //获取当前日
var h=date.getHours()< 10 ? '0'+date.getHours() : date.getHours(); //获取小时
var m=date.getMinutes()< 10 ? '0'+date.getMinutes() : date.getMinutes(); //获取分
var s=date.getSeconds()< 10 ? '0'+date.getSeconds() : date.getSeconds(); //获取秒

var year1=oldDate.getFullYear(); //获取当前年份
var mon1=oldDate.getMonth()+1 < 10 ? '0'+(oldDate.getMonth()+1) : oldDate.getMonth()+1; //获取当前月份
var da1=oldDate.getDate() < 10 ? '0'+oldDate.getDate() : oldDate.getDate(); //获取当前日
var h1=oldDate.getHours()< 10 ? '0'+oldDate.getHours() : oldDate.getHours(); //获取小时
var m1=oldDate.getMinutes()< 10 ? '0'+oldDate.getMinutes() : oldDate.getMinutes(); //获取分
var s1=oldDate.getSeconds()< 10 ? '0'+oldDate.getSeconds() : oldDate.getSeconds(); //获取秒



export var endtime=year+''+mon+''+da+''+h+''+m+''+s;
export var oldtime=year1+''+mon1+''+da1+''+h1+''+m1+''+s1;
export var editTime=year+'/'+mon+'/'+da+' '+h+':'+m+':'+s;

export var enddaytime = year+''+mon+''+da;
var endtDate=endtime.slice(0,4)+'/'+endtime.slice(4,6)+'/'+endtime.slice(6,8)+' '+endtime.slice(8,10)+':'+endtime.slice(10,12)+':'+endtime.slice(12,14);
var dt = new Date(endtDate);
var t_s=dt.getTime()
dt.setTime(t_s-100000*differ*60)
var hm= '';
var dt_year=dt.getFullYear(); //获取当前年份
var dt_mon=dt.getMonth()+1< 10 ? '0'+(dt.getMonth()+1) : dt.getMonth()+1; //获取当前月份
var dt_da=dt.getDate()< 10 ? '0'+dt.getDate() : dt.getDate(); //获取当前日
var dt_h=dt.getHours()< 10 ? '0'+dt.getHours() : dt.getHours(); //获取小时
var dt_m=dt.getMinutes()< 10 ? '0'+dt.getMinutes() : dt.getMinutes(); //获取分
var dt_s=dt.getSeconds()< 10 ? '0'+dt.getSeconds() : dt.getSeconds();; //获取秒

export var begintime= dt_year+dt_mon+dt_da+dt_h+dt_m+dt_s;
export var begindaytime= dt_year+dt_mon+dt_da;
export var  todaybegin=dt_year+dt_mon+dt_da+'000000';

//暴露请求时间对象
//export var params = {begintime:begindaytime,endtime:enddaytime};
let token =window.localStorage.getItem('token');
export var params = {timeStamp:timeStamp,token:token};

