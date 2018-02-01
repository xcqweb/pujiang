//import Set_arr_class from '@/common/js/set_arr_class.js'
//let set_arr = new Set_arr(20,arr)
//super.getEndTime()
//super.getStartTime()
import Start_end_class from '@/common/js/star_end_class.js'
export default class Set_arr_class  {
    constructor(differ,times) {
        //differ时间间隔，times分割成多少段
        this.differ = differ;
        this.times = times;
        return this;
    }
    getDateDataArr (response) {
        var arr={
            date:[],
            data:[],
            contrast:[],
        };
        var resobj={};
        if(!response){
            console.log('response is undefine');
            return
        }
        //let endtimea = response.config.params.endtime;
        let nub = response.data;
        let currentNum = nub.data.num;
        let endtimea = nub.data.endTime.replace(/[-:" "]+/g,"");
		
        //兼容IE,需'/'连接
        var endtDate=endtimea.slice(0,4)+'/'+endtimea.slice(4,6)+'/'+endtimea.slice(6,8)+' '+endtimea.slice(8,10)+':'+endtimea.slice(10,12)+':'+endtimea.slice(12,14);
        var dt = new Date(endtDate);
            //console.log(new Date().getTime()-new Date(endtDate).getTime())
        var interval = Math.round((this.differ*60) / this.times);
        if (endtimea) {
            for (var i = 0; i < this.times; i++) {
                var t_s=dt.getTime()
                dt.setTime(t_s+1000*5)
                var hm= '';
                var year=dt.getFullYear(); //获取当前年份
                var mon=dt.getMonth()+1; //获取当前月份
                var da=dt.getDate(); //获取当前日
                var day=dt.getDay(); //获取当前星期几
                var h=dt.getHours(); //获取小时
                var m=dt.getMinutes(); //获取分
                var s=dt.getSeconds(); //获取秒
                
                
                //处理时间格式00:00:01
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
                arr.date[i] = '';
                
                let rangeNum = (currentNum*2/3+Math.random()*currentNum/3)
                
                arr.data[i]= Math.ceil(rangeNum);
                arr.contrast[i] =parseInt(h+''+m+''+s);
                arr.date[i]= +h+':'+m+':'+s;
				
            }
            resobj.code = nub.code;
        }

        this.random(arr,nub,this.times)

//      for(name in arr){
//          arr[name] = arr[name].reverse()
//      }
        resobj.arr = arr;
        return resobj
     }
     //随机分配数据
     random(arr,nub,times){

        for(var i = 0; i < nub; i++) {

            var n=Math.round(Math.random()*times);
            if(n === times){
                n = times - 1 ;
            }
            arr.data[n]++;
            nub--;
        }
        return arr
     }
}
