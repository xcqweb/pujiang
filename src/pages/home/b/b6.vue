<template>
    <div class="b6">
        <div class="img">
            <img :src="changeImg"/>
        </div>
        <div class="weather">{{state}}</div>
        <div class="temperature" v-show='temperature'>{{temperature}}&#8451;</div>
         <Loading v-show="isloading"></Loading>
    </div>
</template>

<script>
import Vue from 'vue'
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
//晴天
import img1 from '../../../assets/images/weather-blue/qing.png'
//阴天
import img2 from '../../../assets/images/weather-blue/yin.png'
import img3 from '../../../assets/images/weather-blue/baoyu.png'
import img4 from '../../../assets/images/weather-blue/bingbao.png'
import img5 from '../../../assets/images/weather-blue/dafeng.png'
import img6 from '../../../assets/images/weather-blue/daxue.png'
import img7 from '../../../assets/images/weather-blue/dayu.png'
import img8 from '../../../assets/images/weather-blue/duoyun.png'
import img9 from '../../../assets/images/weather-blue/leizhenyu.png'
import img10 from '../../../assets/images/weather-blue/shachenbao.png'
import img11 from '../../../assets/images/weather-blue/weifeng.png'
import img12 from '../../../assets/images/weather-blue/taifeng.png'
import img13 from '../../../assets/images/weather-blue/wu.png'
import img14 from '../../../assets/images/weather-blue/wumai.png'
import img15 from '../../../assets/images/weather-blue/xiaoxue.png'
import img16 from '../../../assets/images/weather-blue/xiaoyu.png'
import img17 from '../../../assets/images/weather-blue/yejianduoyun.png'
import img18 from '../../../assets/images/weather-blue/yejianqing.png'
import img19 from '../../../assets/images/weather-blue/yujiaxue.png'
import img20 from '../../../assets/images/weather-blue/zhongxue.png'
import img21 from '../../../assets/images/weather-blue/zhongyu.png'
export default {
  name: 'b6',
  data () {
    return {
    	isloading:false,
    	//天气图片
        img1:"",
        state:"",
        temperature:0,
        status:0
    }
  },
  created(){
  	this.isloading = true;
  	this.getData();
  },
  computed: { 
  	//根据状态转换图片
  	changeImg(){
  		switch(this.status)
		{
		case 1:
		   return img1;
		  break;
		case 2:
		  return img2
		  break;
		case 3:
		  return img3
		  break;
		case 4:
		  return img4
		  break;
		case 5:
		  return img5
		  break;
		case 6:
		  return img6
		  break;
		case 7:
		  return img7
		  break;
		case 8:
		  return img8
		  break;
		case 9:
		  return img9
		  break;		  
		case 10:
		  return img10
		  break;
		case 11:
		  return img11
		  break;
		case 12:
		  return img12
		  break;	  
		case 13:
		  return img13
		  break;
		case 14:
		  return img14
		  break;
		case 15:
		  return img15
		  break;
		case 16:
		  return img16
		  break;
		case 17:
		  return img17
		  break;	  
		case 18:
		  return img18
		  break;
		case 19:
		  return img19
		  break;
		case 20:
		  return img20
		  break;
		case 21:
		  return img21
		  break;
		case 22:
		  return img22
		  break;		
		default:
		}
  	}
  },
  methods: {
  	//请求数据
  	getData(){
  		api.weather(api.params).then( (re) =>{
    		let reData = re.data.data;
    		this.temperature = reData.temperature;
    		this.state = reData.state;
    		this.status = reData.status;
    		if(re.status===200){
    			this.isloading = false;
    		}
	    }).catch( (e) => {
	    	console.log(e);
	    })
  	}
  },
  mounted(){
  	
  },
  components:{
  	Loading
  }
}
</script>

<style lang="less" scoped>
.b6{
    
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    color:#1da7fe;
    div{
        position: absolute;
        /*transform: translate(-50%,-50%);*/
        /*top: 60%;*/
        /*width: 30%;*/
    }
    .img{
        width:20%;
        text-align: center;
        height: auto;   
        left: 10%;
        top: 45%;
    }
    .weather{
        left: 40%;
        top: 50%;
    }
    .temperature{
        right: 8%;
        top: 50%;
    }
    img{                  
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    } 
}

</style>