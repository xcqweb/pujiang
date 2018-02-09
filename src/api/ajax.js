//封装ajax
;(function(){
	window.ajax = function(opt){
		var ajax = new XMLHttpRequest();
		opt.type = opt.type || "get";
		if(opt.type=="get" && opt.data){
			ajax.open(opt.type,opt.url+'?'+opt.data);
		}else{
			ajax.open(opt.type,opt.url);
		}
		
		if(opt.type=='post'){
			ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		}
		ajax.onreadystatechange = function(){
			if(ajax.readyState==4 && ajax.status==200){
				var data = ajax.responseText;
				if(opt.dataType=="json"){
					data = JSON.parse(data);
				}
				opt.ok(data);
			}
		}
		if(opt.type=="post" && opt.data){
			ajax.send(opt.data);
		}else{
			ajax.send();
		}
	}
})();  