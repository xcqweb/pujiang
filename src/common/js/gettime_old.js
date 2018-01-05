
    var hm= '';
    var date=new Date();
    var year=date.getFullYear(); //获取当前年份
    var mon=date.getMonth()+1; //获取当前月份
    var da=date.getDate(); //获取当前日
    var day=date.getDay(); //获取当前星期几
    var h=date.getHours(); //获取小时
    var m=date.getMinutes(); //获取分
    var s=date.getSeconds(); //获取秒
    var changetime=25;
    var changem= changetime+10
    if (m>=changetime) {
        var endm =m-changem;
        if (m<changem) {
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
        var beginm =60-changetime+m;
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
   export  var begintime= year+''+mon+''+da+''+hm+''+s;
   export  var endtime=year+''+mon+''+da+''+h+''+m+''+s;
   export var  todaybegin=year+''+mon+''+da+'00'+'00'+'00';

