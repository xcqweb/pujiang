//import Set_arr_class from '@/common/js/set_arr_class.js'
//let set_arr = new Set_arr(20,arr)
//super.getEndTime()
//super.getStartTime()
import Start_end_class from '@/common/js/star_end_class.js'
import {oldtime} from '@/common/js/gtime.js'
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
            console.log('response is undefined');
            return
        }
        let nub = response.data;
        let currentNum = nub.data.num;
		
        		
            for (var i = 0; i < this.times; i++) {
                
                let rangeNum = (currentNum*7/8+Math.random()*currentNum/8)
                
                arr.data[i]= Math.ceil(rangeNum);
				
            }
            resobj.code = nub.code;

        this.random(arr,nub,this.times)

        for(name in arr){
            arr[name] = arr[name].reverse()
        }
        resobj.arr = arr;
        return resobj
     }
     //随机分配数据
     random(arr,nub,times){
		var n=Math.round(Math.random()*times);
        for(var i = 0; i < nub; i++) {
            if(n === times){
                n = times - 1 ;
            }
            arr.data[n]++;
            nub--;
        }
        return arr
     }
}
