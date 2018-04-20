<template>
    <div class="b2">
        <div id="pieB2"></div>
        <div class="circle">
            <!--<img :src="imgacircle"/>-->
        </div>
        <span>{{percent}}%</span>
        <div class="text"><font>预警客流</font><font></font></div>
        <p class="configBtn" @click="passagerConfig">设置</p>
      <Loading v-show="isloading"></Loading>
    </div>
</template>

<script>
import Vue from 'vue'
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
//import Start_end_class from '@/common/js/star_end_class.js'
import {begindaytime} from '@/common/js/gtime.js'
import optionProps from '@/common/js/mixin/optionProps.js'
import axios from 'axios'
export default {
  name: 'b2',
  mixins: [optionProps],
  data () {
    return {
    	code:0,
    	percent:0,
        imgacircle:require('../../../assets/images/home/b/circle.png'),
        nub:'',
        set_config:'',
        configNumber:''
    }
  },
  computed: {
  },
  watch:{
  	code:function(){
  		this.request();
  		this.$store.state.currentCode = this.code;
  	}
  },
  methods:{
  	
  	//获取数据
	getData(){
		api.params.code= 0;
		api.getPassengerWarnSetList(api.params).then( (re) => {
			//console.log(re)
			let reData = re.data.data;
			//this.$store.state.dataList = reData;
		}).catch( e =>{
		      console.log(e);
		    })
	},
  	
  	//客流设置
  	passagerConfig(){
  		this.$store.state.showToast = true;
  		this.$store.state.currentCode = this.code;
  		
  		//console.log(this.$store.state.currentCode,this.code);
  	},
      redom(id){
          this.chart = echarts.init(document.getElementById(id));
          this.chart.setOption(this.option);
      },
  request(){
	  api.params.code= this.code;
      api.passengerwarning(api.params).then( (re) => {
//  	axios.get('https://www.easy-mock.com/mock/5a55b07fde90b06840dd913f/example/passengerwarning').then( (re) => {
      //设置默认值
      this.nub = re.data.data.count;
      this.set_config = 100000;
      this.percent = re.data.data.warnPercent;
      this.configNumber = re.data.data.count;
      this.isloading=false;
      let nub = this.nub;
  	  let setconfig = this.nub*100/this.percent;
      	let Ratio = this.percent/100
	      let setColor = '';
	      if(Ratio<0.3){
	      	setColor='#1da7fe'
	      }else if(Ratio<0.5){
	      	setColor='#7460EE'
	      }else if(Ratio<0.7){
	      	setColor='#eee716'
	      }else if(Ratio<0.9){
	      	setColor='#cb1f1f'
	      }else{
	      	setColor='#f00'
	      }

      //this.option.color[0] = setColor;
      let option={
          backgroundColor: 'rgba(0,0,0,0)',
          color:["#fff"],
          series: [
			    {
		            name: '',
		            type: 'pie',
		            clockWise: false,
		            radius:  ['50%', '56%'],
        			center: ['50%', '55%'],
		            itemStyle:  {
					    normal: {
					        label: {
					            show: false
					        },
					        labelLine: {
					            show: false
					        },
					        shadowBlur: 60,
					        shadowColor: 'rgba(40, 40, 40, 1)',
					    }
					},
		            hoverAnimation: false,

		            data: [
		                {
		                    value: setconfig,
		                    name: '剩余占比',
		                    itemStyle: {
							    normal: {
							        color: 'rgba(200,200,200,0.3)',//未完成的圆环的颜色
							        label: {
							            show: false
							        },
							    },
							}
		                },
		                {
		                    value: nub,
		                    name: '客流占最大客流比率'
		                }

			            ]
			        },
			    ]
      };
      option.color[0] = setColor
      this.option = option;
      this.redom("pieB2");
      this.$nextTick(echarts_resize('pieB2',this));
    }).catch( e =>{
      console.log(e);
    })
  }
  },
  created() {
    this.request();
  },
}
</script>

<style lang="less" scoped>
.b2{
    height:100%;
    width:100%;
    position:relative;
    span{
        position:absolute;
        top:55%;
        left:50%;
        color:#1da7fe;
        transform: translate(-50%,-50%);
        font-size: 1.3rem;
        font-family: numberFont;
    }
    .configBtn{
    	position: absolute;
    	right: 5%;
    	top: 5%;
    	color: #5798CC;
    	font-weight: bold;
    	border: 0.2rem solid #50A6D5;
    	border-radius: 0.4rem;
    	padding: 0.2rem 0.8rem;
    	cursor: pointer;
    }
    #pieB2{
        height:100%;
        width:100%;
        position:absolute;
    }
    .circle{
        height: auto;
        width:110/223*100%;
        text-align: center;
        position:absolute;
        top:55%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .text{
        width:80%;
        position:absolute;
        bottom:1rem;
        left:50%;
        transform: translateX(-50%);
        font{
            margin-left:10%;
            color:#1da7fe;
            font-size:1rem;
            /*font-family: numberFont;*/
        }
    }
    img{
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
}

</style>
