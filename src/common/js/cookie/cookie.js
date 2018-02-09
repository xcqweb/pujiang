//封装设置cookie

let date = new Date();
date.setDate(date.getDate()+30)

 export function setCookie(name,value,expires=date,path,domain,secure){
var cookieName = encodeURIComponent(name)+"="+encodeURIComponent(value);
//失效时间 
if(expires instanceof Date){
	cookieName+=';expires='+expires;
}
//路径 存在 加入
if(path){
	cookieName+=';path='+path;
}
//限制域名访问
if(domain){
	cookieName+=';domain';
}
//设置安全访问
if(secure){
	cookieName+=';secure';
} 
//总体设置cookie
    document.cookie = cookieName;
}

//得到cookie
 export function getCookie(name){
	//得到cookiename和=
	var cookieName = encodeURIComponent(name)+"=";
	//得到cookie起始位置
	var cookieStart = document.cookie.indexOf(cookieName);
	var cookieValue = null;
	if(cookieStart>-1){
		var cookieEnd = document.cookie.indexOf(';',cookieStart);
		if(cookieEnd==-1){
			cookieEnd = document.cookie.length;
		}
		//cookie值
		cookieValue = decodeURIComponent(document.cookie.substring(cookieStart,cookieEnd)).split('=')[1];
	}
	return cookieValue;
}
//封装过期时间
//function setcookieDay(day){
//	date = null;   	 
//	if(typeof day == 'number' && day>0){//设置七天后过期
//	    date = new Date();
//		date.setDate(date.getDate()+day)
//	} else{
//		//抛出一个错误
//		throw new Error("您传递的天数不合法");
//	}
//	return date;
//}