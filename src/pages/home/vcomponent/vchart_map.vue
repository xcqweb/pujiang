 <template>
    <div class="map_content">
    	<div class="topTitle">
            <span>{{nowYear}}年累计接待游客(人)</span>
            <font>{{yearNumb}}</font>
        </div>
        <div class='topTitle'>
            <span>{{mowMonth}}月份持续接待游客(人)</span>
            <font>{{mouthNumb}}</font>
        </div>
        <div id="fromEchart"></div>

        <div class="week">
             <span class="oneweek " v-bind:class="{ chose: isActive }" @click='redomaaData'>省内</span> 
             <span class="twoweek" v-bind:class="{ chose: !isActive }" @click='redomData'>国内</span> 
        </div>
        
    </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import echarts from 'echarts';
import Loading from '@/components/commonui/loading/loading.vue'

import api from '@/api/index.js'
import echarts_resize from '../../../common/js/echarts_resize.js'

//import 'echarts/lib/chart/map';
import 'echarts/map/js/china.js';
import zhejiangJson from 'echarts/map/json/province/zhejiang.json'
import optionProps from '@/common/js/mixin/optionProps.js'

let date = new Date()
let nowYear = date.getFullYear()
let mowMonth = date.getMonth()+1

export default {
    name: 'a6',
    props:['placeName'],
    mixins: ['optionProps'],
    data () {
    return {
    	range:1,
        yearNumb:1727227,
        mouthNumb:1727227,
        nowYear:nowYear,
        mowMonth:mowMonth,
        topCity:[],
        chart:null,
        isActive:false,
        color:['#f18790', '#75c774', '#5aa7fd','#f1c54b','#c184ff','6792fb', '#4BCEDD', '#FF8885','#FFCD38',  '#E39A50', '#58E5E1',],
       //color:['#4EBBFC','#57ABFE', '#368DF7''#B8E986', '#86E9E8', '#58E5E1','#4BCEDD'],
        option : {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                trigger: 'item'
            },
            geo: {
                map: 'zhejiang',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                        normal: {
                            color:'#163387',
                            areaColor: '#163387',
                            borderColor:'white',
                            borderWidth:0.5,
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur:10,
                            opacity:0.3,
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
            },

        },
        geoCoordLocal:{
            '浦江县': [120.105537,29.508488],
            '清远市': [113.064193,23.68823],
            '江山市': [118.639502,28.757867],
            '湖州市': [120.091557,30.904757],
            '嘉兴市': [120.763058,30.761869],
            '宁波市': [121.554142,29.89605],
            '绍兴市': [120.583685,30.048225],
            '金华市': [119.650022,29.095307],
            '丽水市':[119.930581,28.483471],
            '台州市': [121.425361,28.670242],
            '温州市': [120.698668,28.015083],
            '舟山市':[122.216445,29.992188],
            '杭州市': [119.5313, 29.8773],
            '衢州市':[118.906032, 28.945182]
        },
        zhejiang:[],
        allData:[],
        optionChina : {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                trigger: 'item'
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                        normal: {
                            color:'#163387',
                            areaColor: '#163387',
                            borderColor:'white',
                            borderWidth:0.5,
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur:10,
                            opacity:0.3,
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
            },
            series: []
        },
        geoCoordMap:{
            '上海市': [121.4648, 31.2891],
            '浦江县': [120.105537,29.508488],
            '金华市': [119.650022,29.095307],
            '嘉兴市': [120.763058,30.761869],
            '衢州市':[118.906032, 28.945182],
            '开封市':[114.334304, 34.78857],
            '台州市': [121.425361,28.670242],
            '中山市': [113.4229, 22.478],
            '丽水市': [119.5642, 28.1854],
            '乌鲁木齐市': [87.9236, 43.5883],
            '佛山市': [112.8955, 23.1097],
            '兰州市': [103.5901, 36.3043],
            '包头市': [110.3467, 41.4899],
            '北京市': [116.4551, 40.2539],
            '南京市': [118.8062, 31.9208],
            '厦门市': [118.1689, 24.6478],
            '合肥市': [117.29, 32.0581],
            '呼和浩特市': [111.4124, 40.4901],
            '哈尔滨市': [127.9688, 45.368],
            '大连市': [122.2229, 39.4409],
            '天津市': [117.4219, 39.4189],
            '太原市': [112.3352, 37.9413],
            '宁波市': [121.5967, 29.6466],
            '广州市': [113.5107, 23.2196],
            '徐州市': [117.5208, 34.3268],
            '惠州市': [114.6204, 23.1647],
            '成都市': [103.9526, 30.7617],
            '拉萨市': [91.1865, 30.1465],
            '无锡市': [120.3442, 31.5527],
            '杭州市': [119.5313, 29.8773],
            '武汉市': [114.3896, 30.6628],
            '汕头市': [117.1692, 23.3405],
            '江门市': [112.6318, 22.1484],
            '济南市': [117.1582, 36.8701],
            '济宁市': [116.8286, 35.3375],
            '海口市': [110.3893, 19.8516],
            '深圳市': [114.5435, 22.5439],
            '清远市': [112.9175, 24.3292],
            '温州市': [120.498, 27.8119],
            '渭南市': [109.7864, 35.0299],
            '滨州市': [117.8174, 37.4963],
            '玉溪市': [101.9312, 23.8898],
            '珠海市': [113.7305, 22.1155],
            '石家庄市': [114.4995, 38.1006],
            '秦皇岛市': [119.2126, 40.0232],
            '绍兴市': [120.564, 29.7565],
            '肇庆市': [112.1265, 23.5822],
            '苏州市': [120.6519, 31.3989],
            '西安市': [109.1162, 34.2004],
            '连云港市': [119.1248, 34.552],
            '郑州市': [113.4668, 34.6234],
            '鄂尔多斯市': [108.9734, 39.2487],
            '重庆市': [107.7539, 30.1904],
            '长春市': [125.8154, 44.2584],
            '长沙市': [113.0823, 28.2568],
            '韶关市': [113.7964, 24.7028]
        },
        BJData:[
            [{name: this.placeName}, {name: '北京', value: 95}],
//          [{name: this.placeName}, {name: this.placeName, value: 95}],
        ],
        GUANG:[
            [{name: this.placeName}, {name: '长春', value: 40}],

        ],
        SHData:[
            [{name: this.placeName}, {name: '深圳', value: 10}],

        ],
        SHENZHEN:[
            [{name: this.placeName}, {name: '成都', value: 10}],
        ],
        XIAN:[
            [{name: this.placeName}, {name: '上海', value: 95}],
        ],
        FENGD:[
            [{name: this.placeName}, {name: '重庆', value: 20}]
        ],
        planePath:'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',

    }
    },
    computed: {
    },
    watch:{
    	range:function(){
    		this.getData();
    	}
    },
    methods: {
  	
  	getData(){
			api.params.code = this.code;
			api.params.range = this.range;
	  		api.touristSum(api.params).then( (re) =>{
	    		let reData = re.data.data;
	    		this.yearNumb = reData.yearSum;
	    		this.mouthNumb = reData.monthSum;
	    		let topCity = reData.topCity;
	    		
	    		//console.log(topCity)
		  		
				for(let i=0; i<topCity.length; ++i){
					if(this.range===1){
						this.allData[i]=["浦江县", [[{name: "浦江县"}, {name: topCity[i]._id, value: topCity[i].sum/200}]]]
					}else{
						this.zhejiang[i]=["浦江县", [[{name: "浦江县"}, {name: topCity[i]._id, value: topCity[i].sum/200}]]]
					}
				}
				
	    		if(re.status===200){
	    			this.isloading=false;
	    			delete api.params.range;
	    		}
	    		if(this.range===1){
	    			this.redomData();
	    		}else{
	    			this.redomaaData();
	    		}
				
				
		    }).catch( (e) => {
		    	console.log(e);
		    })
		
  	},
    redom7(){
        this.isActive=true;
    },
    redom14(){
        this.isActive=false;
    },
    convertData(data){
         var res = [];
	    for (var i = 0; i < data.length; i++) {
	        var dataItem = data[i];
	        var fromCoord = this.geoCoordMap[dataItem[0].name];
	        var toCoord = this.geoCoordMap[dataItem[1].name];
	        if (fromCoord && toCoord) {
	            res.push({
	                fromName: dataItem[0].name,
	                toName: dataItem[1].name,
	                coords: [fromCoord, toCoord]
	            });
	        }
	    }
	    return res;
    },
    redom(){
            if(this.chart){
                this.chart.dispose();
            }
            let _self=this
            this.isActive = true;
            this.$nextTick(()=>{
                var dom = document.getElementById("fromEchart");
                this.chart = echarts.init(dom);
                if (this.optionChina && typeof this.optionChina === "object") {
                this.chart.setOption(this.optionChina, true);
                }
            }
            )
            
        
        },
        redomaa(){
            if(this.chart){
                this.chart.dispose();
            }
            let _self=this
            echarts.registerMap('zhejiang', zhejiangJson);
            this.isActive = true;
            this.$nextTick(()=>{
                var dom = document.getElementById("fromEchart");
                this.chart = echarts.init(dom);
                if (this.option && typeof this.option === "object") {
                this.chart.setOption(this.option, true);
                }
            }
            )
            this.redomaaData();
        
        },
    //国内游客来源
    redomData(){
    	this.range = 1;
    	this.isActive=true;
        let _self=this;
        const target = this.placeName;
        if(this.chart){
            this.chart.dispose();
        }
        var dom = document.getElementById("fromEchart");
        this.chart = echarts.init(dom);
        var color =['#f18790', '#75c774', '#5aa7fd','#f1c54b','#c184ff','6792fb'];
        var series = [];
         
        this.allData.forEach(function (item, i) {
            series.push(
                {
                    name: item[0],
                    type: 'lines',
                    zlevel: 1,
                    symbol:'circle',
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        color: '#0d1f6d',
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 0,
                            //迁徙轨迹弧度
                            curveness: 0.2
                        }
                    },
                    progressiveThreshold: 500,
                    progressive: 200,
                    data: _self.convertData(item[1])
                },
                {
                    //name: item[0],
                    type: 'lines',
                    zlevel: 2,
                    symbol: ['none', 'arrow'],
                    //箭头大小
                    symbolSize: 2,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        //小飞机
                        //symbol: planePath,
                        //移动点大小
                        symbolSize: 1
                    },
                    lineStyle: {
                        normal: {
                            color: _self.color[i],
                            width: 2,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    progressiveThreshold: 500,
                    progressive: 200,
                    data: _self.convertData(item[1])
                },
                {
                    name: item[0],
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true ,
                            position: 'right',
                            formatter: '{b}',
                            textStyle: {
                                fontSize: 12
                            }
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: _self.color[i]
                        }
                    },
                    progressiveThreshold: 500,
                    progressive: 200,
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: _self.geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
        });
        this.optionChina.series = series;
        if (this.optionChina && typeof this.optionChina === "object") {
           this.chart.setOption(this.optionChina, true);
        }
    },
    //省内游客来源
    redomaaData(){
    	this.range = 2;
    	this.isActive=false;
        if(this.chart){
            this.chart.dispose();
        }
        let _self=this
        this.isActive=false;
         echarts.registerMap('zhejiang', zhejiangJson);
        var dom = document.getElementById('fromEchart');
        this.chart = echarts.init(dom);
        var color =['#5aa7fd', '#5aa7fd', '#5aa7fd','#5aa7fd','#5aa7fd','5aa7fd','5aa7fd'];
        var series = [];
        var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
        this.zhejiang.forEach(function (item, i) {
            series.push(
                {
                    name: item[0],
                    type: 'lines',
                    zlevel: 1,
                    symbol:'circle',
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        color: '#0d1f6d',
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 0,
                            //迁徙轨迹弧度
                            curveness: 0.2
                        }
                    },
                    progressiveThreshold: 500,
                    progressive: 200,
                    data: _self.convertData(item[1])
                },
                {
                    name: item[0],
                    type: 'lines',
                    zlevel: 2,
                    symbol: ['none', 'arrow'],
                    //箭头大小
                    symbolSize: 2,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        //小飞机
                        //symbol: planePath,
                        //移动点大小
                        symbolSize: 5
                    },
                    progressiveThreshold: 500,
                    progressive: 200,
                    lineStyle: {
                        normal: {
                            color: _self.color[i],
                            width: 2,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    data: _self.convertData(item[1])
                },
                {
                    name: item[0],
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true ,
                            position: 'right',
                            formatter: '{b}',
                            textStyle: {
                                fontSize: 12
                            }
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: _self.color[i]
                        }
                    },
                    progressiveThreshold: 500,
                    progressive: 200,
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: _self.geoCoordLocal[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
        });
        this.option.series = series;
        if (this.option && typeof this.option === "object") {
           this.chart.setOption(this.option, true);
        }

    }
    },
    created(){
    	this.$nextTick(this.getData());
    },
    mounted(){
        this.$nextTick(echarts_resize('fromEchart',this))
        setTimeout(()=>{
              //this.redom()
        },500)
    },
    
    components:{
    	
    }
}
</script>

<style lang="less" scoped>
.map_content {
  width: 100%;
  height: 100%;
  position: relative;
  top: 5%;
  .topTitle{
            position: absolute;
            span{
                //display: block;
                color: #43dbff;
                font-size: .8rem;
            }
            font{
                margin-top: 10px;
                display: block;
                color: #ffe200;
                font-size: 1.2rem;
                font-family: numberFont;
            }
        }
        
        .topTitle:nth-child(2){
        	right: 30%;
        	span{
                color: #43dbff;
                font-size: .8rem;
                
            }
        }
        
        .topTitle:nth-child(1){
        	left: 30%;
        	span{
                color: #43dbff;
                font-size: .8rem;
                
            }
        }
}
#fromEchart{
    width:100%;
    height:100%;
    transform: scale(0.8);
}
.week{
    height: 1.5rem !important;
    width: 7rem !important;
    position: absolute;
    bottom: 10%;
    right: 40%;
    font-size:.8rem;
    &:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
        line-height: 25px;
     }
    .oneweek{
      cursor: pointer;
      float: left;
      height: 1.5rem;
      line-height:1.5rem;
      width: 47%;
      color: #abb5d3;
      background-image:url('../../../assets/images/home/透明框—国内.png');
      background-size: 100% 100%;
      &.chose{
        background-image:url('../../../assets/images/home/透明框—省内.png');
          background-size: 100% 100%;
          color:#d3ddf9;
      }
    }
    .twoweek{
      cursor: pointer;
      float: right;
      height: 1.5rem;
      line-height:1.5rem;
      width: 47%;
      color: #abb5d3;
      background-image:url('../../../assets/images/home/透明框—国内.png');
      background-size: 100% 100%;
      &.chose{
        background-image:url('../../../assets/images/home/透明框—省内.png');
          background-size: 100% 100%;
          color:#d3ddf9;
      }
    }
  }
</style>
