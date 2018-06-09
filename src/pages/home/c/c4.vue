    <template>
    <div class="c4">
        <div id="c4"></div>
        <div id="c5"></div>
        <span class="men"></span>
        <span class="wemen"></span>
        <font class="menP">{{menPercent}}%</font>
        <font class="womenP">{{womenPercent}}%</font>
        <Loading v-show="isloading"></Loading>
    </div>
</template>

<script>
import Vue from 'vue'
import echarts_resize from '../../../common/js/echarts_resize.js'
import optionProps from '@/common/js/mixin/optionProps.js'
import echarts from 'echarts'

let menE= require('../../../assets/images/home/menE.png')
let womenE= require('../../../assets/images/home/womenE.png')
export default {
  name: 'c4',
  mixins: [optionProps],
  data () {

    return {
        womenPercent:'0',
        menPercent:'0',
        option1:{},
        option2:{},
        symlolSize:[26,36]
    }
  },
  computed: {
  },
  watch:{
  	code:function(){
  		let data={};
		  data.code = this.code;
	      data.monthId = this.yearMonth;
	    this.getData(data)
  	}
  },
  methods: {
  	
  	//请求数据
  	getData(data){
  		api.touristSexRatio(data).then( (re) =>{
  			if(re.data.code===200 || re.data.code==='200'){
				this.isloading = false;
			}
			let reData = re.data.data;
			if(!reData){
				return
			}
			let maleRate = reData.maleRate||49;
			let femaleRate = reData.femaleRate||51;
			let sum = maleRate+femaleRate;
			
			this.menPercent = (reData.maleRate*100/sum).toFixed(2);
			this.womenPercent = (reData.femaleRate*100/sum).toFixed(2);
			this.redom(this.menPercent,this.womenPercent);
	    }).catch( (e) => {
	    	console.log(e);
	    })
  	},
  	
  	redom(data1,data2){
  		this.chart1 = echarts.init(document.getElementById("c4"));
  		this.chart2 = echarts.init(document.getElementById("c5"));
  		let spirit1 = 'path://m254.698872,41.396847c0,-17.21313 17.594091,-31.155783 39.315128,-31.155783c21.72107,0 39.315096,13.942653 39.315096,31.155783c0,17.21313 -17.594025,31.155783 -39.315096,31.155783c-21.72107,0 -39.315128,-13.942653 -39.315128,-31.155783zm132.184172,88.190761l0,-15.734566c0,-16.555072 -16.92578,-29.977718 -37.828542,-29.977718l-110.202797,0c-20.890656,0 -37.828526,13.422648 -37.828526,29.977718l0,15.734566c-0.03653,0.357145 -0.060921,0.723989 -0.060921,1.095621l0,90.628209c0,7.041942 7.199102,12.746912 16.085232,12.746912c8.873975,0 16.091276,-5.704995 16.091276,-12.746912l0,-89.286408l10.786391,0l0,102.042965l0.07917,0l0,144.183638c0,9.373138 9.604869,16.989431 21.444912,16.989431c11.846153,0 21.444912,-7.606634 21.444912,-16.989431l0,-144.183638l14.148408,0l0,144.183638c0,9.373138 9.610816,16.989431 21.444879,16.989431c11.846104,0 21.444863,-7.606634 21.444863,-16.989431l0,-144.183638l0.066999,0l0,-102.042965l10.786408,0l0,89.281554c0,7.041955 7.217285,12.751754 16.091293,12.751754c8.886244,0 16.085232,-5.709799 16.085232,-12.751754l0,-90.628183c-0.006045,-0.376463 -0.04264,-0.733646 -0.079186,-1.090805l0,0.000013l-0.000003,-0.000001z';
  		
  		let spirit2 = 'path://m301.62829,64.2002c21.40828,0 38.78375,-13.79854 38.78375,-30.82102c0,-17.03205 -17.37547,-30.84014 -38.78375,-30.84014c-21.42636,0 -38.80779,13.80809 -38.80779,30.84014c0,17.02248 17.37544,30.82102 38.80779,30.82102zm108.77242,132.92255l-34.80501,-102.58391c-0.32455,-0.93136 -0.78138,-1.81974 -1.33424,-2.64126c-3.95475,-9.60978 -15.30798,-16.56874 -28.71672,-16.56874l-88.09134,0c-13.97971,0 -25.71768,7.556 -29.17349,17.81057c-0.2344,0.44897 -0.42672,0.92182 -0.60101,1.40898l-34.18599,102.57914c-2.27789,6.72491 2.74664,13.63612 11.22096,15.44633c8.46238,1.80063 17.15917,-2.19229 19.43706,-8.9172l26.8475,-80.57982l11.18496,0l-48.72465,145.79448l45.91194,0l0,100.65429c0,7.74228 7.88533,14.01345 17.63989,14.01345c9.7305,0 17.63388,-6.26643 17.63388,-14.01345l0,-100.65429l14.0278,0l0,100.65429c0,7.74228 7.89736,14.01345 17.65195,14.01345c9.73048,0 17.63388,-6.26643 17.63388,-14.01345l0,-100.65429l45.8878,0l-48.90492,-145.79448l11.47949,0l27.3403,80.57982c2.27786,6.72491 10.97466,10.71784 19.43696,8.9172c8.44433,-1.81019 13.46885,-8.72617 11.20301,-15.4511l-0.00002,0z';
  		
		let maxData = 100;
		
		let option1 = {
			color:['#49D9FE','#FF71BB'],
		    tooltip: {
		    	textStyle:{
            		fontSize:'80%',
            	},
		    	show:true,
		    	trigger:'item',
		    	formatter:function(params){
		    		return params.value+"%"
		    	}
		    },
		    xAxis: {
		        max: maxData,
		        splitLine: {show: false},
		        offset: 10,
		        axisLine: {
		            lineStyle: {
		                color: 'none'
		        }
		    },
		    axisLabel: {
		        margin: 10
		    }
		},
		yAxis: {
		    data: [{
		    	
		    }],
		    inverse: true,
		    axisTick: {show: false},
		    axisLine: {show: false},
		    axisLabel: {
		        margin: 10,
		        textStyle: {
		            color: '#999',
		            fontSize: 16
		        }
		    }
		},
		grid: {
		    top: 'center',
		    height: 200,
		    left: 0,
		    right: 0
		},
		series: [{
		    // current data
		    type: 'pictorialBar',
		    symbol: spirit1,
		    symbolRepeat: 10,
		    symbolMargin: '20%',
		    symbolClip: true,
		    symbolSize: this.symlolSize,
		    symbolBoundingData: maxData,
		    data: [{
		    	value:data1
		    }],
		    markLine: {
		        symbol: 'none',
		        label: {
		            
		        },
		        lineStyle: {
		            normal: {
		                color: 'green',
		                type: 'dotted',
		                opacity: 0.6,
		                width: 2
		            }
		        },
		        
		    },
		    z: 10
		}, {
		    // full data
		    type: 'pictorialBar',
		    itemStyle: {
		        normal: {
		            opacity: 0.2,
		            color:'#49D9FE'
		        }
		    },
		    
		    animationDuration: 0,
		    symbolRepeat: 10,
		    symbolMargin: '20%',
		        symbol: spirit1,
		        symbolSize: this.symlolSize,
		        symbolBoundingData: maxData,
		        data: [{
		        	value:data1
		        }],
		        z: 5
		    },
		    
		]
		};
		
		let option2 = {
			color:['#FF71BB'],
		    tooltip: {
		    	show:true,
		    	trigger:'item',
		    	formatter:function(params){
		    		return params.value+"%"
		    	}
		    },
		    xAxis: {
		    	inverse: false,
		        max: maxData,
		        splitLine: {show: false},
		        offset: 10,
		        axisLine: {
		            lineStyle: {
		                color: 'none'
		        }
		    },
		    axisLabel: {
		        margin: 10
		    }
		},
		yAxis: {
		    data: [{
		    	//value:2014,
		    	textStyle:{
		    		align:'right',
		    		color:'#ff0'
		    	}
		    }],
		    inverse: true,
		    axisTick: {show: false},
		    axisLine: {show: false},
		    axisLabel: {
		        margin: 10,
		        textStyle: {
		            color: '#999',
		            fontSize: 16
		        }
		    }
		},
		grid: {
		    top: 'center',
		    height: 200,
		    left: 0,
		    right: 0
		},
		series: [{
		    // current data
		    type: 'pictorialBar',
		    symbol: spirit2,
		    symbolRepeat: 10,
		    symbolMargin: '20%',
		    symbolClip: true,
		    symbolSize: this.symlolSize,
		    symbolBoundingData: maxData,
		    data: [{
		    	value:data2
		    }],
		    markLine: {
		        symbol: 'none',
		        label: {
		            normal: {
		                formatter: 'max: {c}',
		                position: 'start'
		            }
		        },
		        lineStyle: {
		            normal: {
		                color: 'green',
		                type: 'dotted',
		                opacity: 0.6,
		                width: 2
		            }
		        },
		        
		    },
		    z: 10
		}, {
		    // full data
		    type: 'pictorialBar',
		    itemStyle: {
		        normal: {
		            opacity: 0.2,
		            color:'#49D9FE'
		        }
		    },
		    
		    animationDuration: 0,
		    symbolRepeat: 10,
		    symbolClip:false,
		    symbolMargin: '20%',
		        symbol: spirit2,
		        symbolSize: this.symlolSize,
		        symbolBoundingData: maxData,
		        data: [{
		        	value:data2
		        }],
		        z: 5
		    },
		    
		]
		};
		
		this.Option1 = option1
		this.Option2 = option2
		this.chart1.setOption(option1);
		this.chart2.setOption(option2);
  	}
  },
    mounted(){
    	let w = document.body.clientWidth/1920
    	this.symlolSize = [w*26,w*36]
    },
}
</script>

<style lang="less" scoped>
.c4{
    height:100%;
    width:100%;
    #c4{
    	position: absolute;
    	height:40%;
    	width:70%;
    	left: 14%;
    	top: 17%;
    	
    }
    #c5{
    	position: absolute;
    	height:50%;
    	width:70%;
    	bottom: 0%;
    	left: 14%;
    }
    
    .men{
    		display: block;
    		width: 2rem;
    		height: 3.5rem;
    		top: 22%;
    		left: 5%;
    		position: absolute;
    		background: url('../../../assets/images/home/menE.png') no-repeat;
    		background-size: 100% 90%;
    	}
    .wemen{
    		display: block;
    		width: 2rem;
    		height: 3.5rem;
    		bottom: 13%;
    		left: 5%;
    		position: absolute;
    		background: url('../../../assets/images/home/womenE.png') no-repeat;
    		background-size: 100% 90%;
    }
    
    .menP{
    	color: #49D9FE;
    	font-size: 1rem;
    	position: absolute;
    	top: 32%;
    	right: 2.5%;
    }
    .womenP{
    	color: #FF71BB;
    	font-size: 1rem;
    	position: absolute;
    	bottom: 20%;
    	right: 2.5%;
    }
    
}
</style>
