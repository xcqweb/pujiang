//import Start_end_class from '@/common/js/star_end_class.js'
//let get_time = new Start_end_class(20)
//get_time.getEndTime()
//get_time.getStartTime()
//调用方式
// let start_end_instance =  new Start_end_class('timeline',20,10);
// start_end_instance.get_response().then(re =>{
//     _self.data_arr = re ;
// })
import Set_arr_class from '@/common/js/set_arr_class.js'
import api from '@/api/moudles/tanzhenData'
import {setCookie,getCookie} from '@/common/js/cookie/cookie.js'
export default  class Start_end_class extends  Set_arr_class {
    constructor(apiName,differ,times,code) {
        //apiName 接口属性名，differ时间间隔，times分割成多少段
        super(differ,times);
        this.differ = differ;
        this.apiName = apiName;
        this.code = code;
        return this;
    }
    getBeginTime(){
        let endtime = this.getEndTime().endTime;
        let endtDate=endtime.slice(0,4)+'/'+endtime.slice(4,6)+'/'+endtime.slice(6,8)+' '+endtime.slice(8,10)+':'+endtime.slice(10,12)+':'+endtime.slice(12,14);
        let dt = new Date(endtDate);
        let t_s=dt.getTime()
        let differ = this.differ;
        //计算differ前的时间对象
        dt.setTime(t_s-1000*differ*60)
        let hm= '';
        let dt_year=dt.getFullYear(); //获取当前年份
        let dt_mon=dt.getMonth()+1< 10 ? '0'+(dt.getMonth()+1) : dt.getMonth()+1; //获取当前月份
        let dt_da=dt.getDate()< 10 ? '0'+dt.getDate() : dt.getDate(); //获取当前日
        let dt_h=dt.getHours()< 10 ? '0'+dt.getHours() : dt.getHours(); //获取小时
        let dt_m=dt.getMinutes()< 10 ? '0'+dt.getMinutes() : dt.getMinutes(); //获取分
        let dt_s=dt.getSeconds()< 10 ? '0'+dt.getSeconds() : dt.getSeconds();; //获取秒
        let beginTime= dt_year+''+dt_mon+''+dt_da+''+dt_h+''+dt_m+''+dt_s;
        let beginDay=dt_year+''+dt_mon+''+dt_da;
        let timeData = {
            beginTime:beginTime,
            beginDay:beginDay,
        }
        return timeData
    }
    getEndTime(){
        let date=new Date();
        
        let year=date.getFullYear(); //获取当前年份
        let mon=date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1; //获取当前月份
        let da=date.getDate() < 10 ? '0'+date.getDate() : date.getDate(); //获取当前日
        let h=date.getHours()< 10 ? '0'+date.getHours() : date.getHours(); //获取小时
        let m=date.getMinutes()< 10 ? '0'+date.getMinutes() : date.getMinutes(); //获取分
        let s=date.getSeconds()< 10 ? '0'+date.getSeconds() : date.getSeconds(); //获取秒
        let endTime=year+''+mon+''+da+''+h+''+m+''+s;
        let endDay = year+''+mon+''+da;
        let timeData = {
            endTime:endTime,
            endDay:endDay,
        }
        return timeData
    }
    
    //转换post 请求参数
	tansParm(){
		let token =getCookie('token');
        let timeing = new Date().getTime()+'';
		let params = new URLSearchParams();
	    params.append('token', token);
	    params.append('code', this.code);
	    params.append('timeStamp',timeing);
	    return params;
	}
    
    to_arr(re){//继承父类的获取随机数字的方法 
        return super.getDateDataArr(re)
    }
    get_timeline(){
        let _self = this;
        let params = this.tansParm();
        let promise  = api[this.apiName](params).then(function(re){
            if(re ===undefined){
                return Promise.reject(re)
            }
            //console.log(re)
            //获取含有date,data，contrast（比例尺）三个数组的对象
            let date_data_arr = _self.to_arr(re);//返回随机数
            //返回Promise继续.then链式调用
            return Promise.resolve(date_data_arr)
        }).catch(e => {
            console.log(e);
        });
        return promise
    }
    get_response(){
        let _self = this;
        let params = this.tansParm();
        let promise  = api[this.apiName](params).then(function(re){
            if(re ===undefined){
                return Promise.reject(re)
            }
            //获取含有date,data，contrast（比例尺）三个数组的对象
            //返回Promise继续.then链式调用

            return Promise.resolve(re)
        }).catch(e => {
            console.log(e);
        });
        return promise
    }
}
