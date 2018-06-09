 <template>
    <div class="map_content">
    	<div class="topTitle" v-show='istitle'>
            <span>{{nowYear}}年累计接待游客总人数</span>
            <font>{{yearNumbs}}</font>
        </div>
        <div class='topTitle' v-show='istitle'>
            <span>{{mowMonth}}月份持续接待游客总人数</span>
            <font>{{mouthNumbs}}</font>
        </div>
        <div id="fromEchart"></div>

        <div class="week">
             <span class="oneweek " v-bind:class="{ chose: isActive }" @click='redom7' title="省内">省内</span> 
             <span class="twoweek" v-bind:class="{ chose: !isActive }" @click='redom14' title="省外">省外</span> 
        </div>
        <Loading v-show='isloading' class='loading'></Loading>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import echarts from 'echarts';
import Rw from '@/common/js/until/index'

import echarts_resize from '../../../common/js/echarts_resize.js'
import 'echarts/map/js/china.js';
import zhejiangJson from 'echarts/map/json/province/zhejiang.json'
import optionProps from '@/common/js/mixin/optionProps.js'
import vAjax from '@/common/js/v-ajax.js'
Vue.use(vAjax);
let date = new Date()
let nowYear = date.getFullYear()
let mowMonth = date.getMonth()+1
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
let w = document.body.clientWidth/1920;
export default {
    name: 'a6',
    mixins: [optionProps],
    props:['placeName','istitle'],
    
    data () {
    return {
    	num1:0,
    	num2:0,
    	isloading:true,
    	code:'',
    	range:1,
        yearNumb:0,
        mouthNumb:0,
        nowYear:nowYear,
        mowMonth:mowMonth,
        topCity:[],
        chart:null,
        isActive:false,
        color:['#f18790', '#75c774', '#5aa7fd','#f1c54b','#c184ff','6792fb', '#4BCEDD', '#FF8885','#FFCD38',  '#E39A50', '#58E5E1',],
        option : {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                trigger: 'item',
                formatter:function(params){
                	if(params.seriesType==="effectScatter"){
                    		return params.data.name+" "+params.data.value[2]
                	}else{
                    		//return params.data.fromName+":"+params.data.coords[2]
                    		return 
                	}
                }
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
                trigger: 'item',
                formatter:function(params){
                	if(params.seriesType==="effectScatter"){
                    		return params.data.name+" "+params.data.value[2]
                	}else{
                    		//return params.data.fromName+":"+params.data.coords[2]
                    		return
                	}
                }
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
            '衢州市':[118.906032, 28.945182],
            '开封市':[114.334304, 34.78857],
            '中山市': [113.4229, 22.478],
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
            '广州市': [113.5107, 23.2196],
            '徐州市': [117.5208, 34.3268],
            '惠州市': [114.6204, 23.1647],
            '成都市': [103.9526, 30.7617],
            '拉萨市': [91.1865, 30.1465],
            '无锡市': [120.3442, 31.5527],
            '杭州市': [119.5313, 29.8773],
            '武汉市': [114.3896, 30.6628],
            '南昌市': [116.0046,28.6633],  
            '汕头市': [117.1692, 23.3405],
            '江门市': [112.6318, 22.1484],
            '济南市': [117.1582, 36.8701],
            '上饶市': [117.949478, 28.460729],
            '宣城市':[118.765534, 30.946718],
            '商丘市':[115.662458, 34.420299],
            '安阳市':[114.3995, 36.105985],
            '阜阳市':[115.820427, 32.896107],
            '济宁市': [116.8286, 35.3375],
            '海口市': [110.3893, 19.8516],
            '深圳市': [114.5435, 22.5439],
            '清远市': [112.9175, 24.3292],
            '渭南市': [109.7864, 35.0299],
            '滨州市': [117.8174, 37.4963],
            '玉溪市': [101.9312, 23.8898],
            '珠海市': [113.7305, 22.1155],
            '石家庄市': [114.4995, 38.1006],
            '秦皇岛市': [119.2126, 40.0232],
            '肇庆市': [112.1265, 23.5822],
            '苏州市': [120.6519, 31.3989],
            '西安市': [109.1162, 34.2004],
            '连云港市': [119.1248, 34.552],
            '郑州市': [113.4668, 34.6234],
            '鄂尔多斯市': [108.9734, 39.2487],
            '重庆市': [107.7539, 30.1904],
            '长春市': [125.8154, 44.2584],
            '长沙市': [113.0823, 28.2568],
            '韶关市': [113.7964, 24.7028],
            '曲靖市':[103.807034, 25.479708],
            '鄂州市':[114.910806, 30.376634],
            '玉林市':[110.197652, 22.634215],
            '咸阳市':[108.711973, 34.333091],
            '芜湖市':[118.427358, 31.356563],
            '临沂市':[118.361808, 35.107364],
            '焦作市':[113.247973, 35.218604],
            '莱芜市':[117.681825, 36.217608],
            '潍坊市':[119.168953, 36.707097],
            '锦州市':[121.130871, 41.102671],
            '衡水市':[115.677131, 37.747474],
            '滁州市':[118.333082, 32.285694],
            '毕节市':[105.321355, 27.288686],
            '抚顺市':[123.96265, 41.88554],
            '南阳市':[112.527027, 32.995109],
            '安顺市':[105.886577, 26.217253],
            '扬州市':[119.369976, 32.395311],
            '淮安市':[119.032407, 33.615333],
            '桂林市':[110.20297, 25.240271],
            '通化市':[125.945456, 41.731663],
            '铁岭市':[123.73179, 42.227811],
            '鹰潭市':[117.069251, 28.263751],
            '盐城市':[120.164669, 33.354619],
            '郴州市':[112.98754, 25.738675],
            '泰州市':[119.911744, 32.510381],
            '衡阳市':[112.59167, 26.893905],
            '常州市':[119.976311, 31.814814],
            '昭通市':[103.725237, 27.336382],
            '定西市':[104.628396, 35.585894],
            '菏泽市':[115.472022, 35.237992],
            '新乡市':[113.913478, 35.301156],
            '东莞市':[113.762444, 23.025712],
            '漳州市':[117.656451, 24.514196],
            '宿州市':[116.975718, 33.652095],
            '贵阳市':[106.641751, 26.652808],
            '亳州市':[115.779289, 33.848724],
            '吕梁市':[111.141826, 37.522208],
            '襄阳市':[112.130262, 32.012348],
            '福州市':[119.302895, 26.077314],
            '黔西南布依族苗族自治州':[104.947562, 25.145265],
            '周口市':[114.704633,33.631829],
            '黔南布依族苗族自治州':[107.516905,26.251284],
            '宁德市':[119.543874,26.67999],
            '晋中市':[112.748957,37.694668],
            '南平市':[118.095428,27.326056],
            '南通市':[120.896129,31.989979],
            '荆州市':[112.25558,30.340843],
            '黄冈市':[114.884526,30.460355],
            '聊城市':[115.995325,36.459972],
            '湛江市':[110.366991,21.277802],
            '淄博市':[118.065192,36.820009],
            '双鸭山市':[131.16448,46.652393],
            '伊犁哈萨克自治州':[131.16448,46.652393],
            '南宁市':[108.376616,22.817277],
            '阿克苏地区':[80.268376,41.17416],
            '鹤岗市':[130.301271,47.354494],
            '孝感市':[113.9205,30.931185],
            '黔东南苗族侗族自治州':[107.98801,26.586603],
            '十堰市':[110.805966,32.637009],
            '晋城市':[112.859727,35.497694],
            '铜仁市':[109.202186,27.739832],
            '恩施土家族苗族自治州':[109.479645,30.351266],
            '吉安市':[114.999939,27.118184],
            '荆门市':[114.999939,27.118184],
            '六盘水市':[104.841002,26.595733],
            '文山壮族苗族自治州':[104.220273,23.409709],
            '平顶山市':[104.220273,23.409709],
            '许昌市':[113.898141,34.055312],
            '乌海市':[106.817642,39.674447],
            '怀化市':[109.988967,27.561327],
            '海东市':[102.098368,36.513617],
            '漯河市':[114.01652,33.586267],
            '娄底市':[112.007827,27.707813],
            '毕节市':[105.29514,27.290214],
            '延安市':[109.634559,36.675447],
            '遵义市':[106.929977,27.735282],
            '泉州市':[118.621503,24.921379],
            '六安市':[116.520663,31.740469],
            '淮南市':[117.008686,32.629415],
            '景德镇市':[117.222518,29.342781],
            '广安市':[106.638404,30.463739],
            '九江市':[116.015582,29.713849],
            '岳阳市':[113.138363,29.365695],
            '马鞍山市':[118.518755,31.679707],
            '湘西土家族苗族自治州':[109.730632,28.297014],
            '襄阳市':[112.129683,32.018226],
            '陵水黎族自治县':[110.041015,18.542497],
            '陇南市':[104.927428,33.405657],
            '淮北市':[116.805111,33.960699],
            '安庆市':[117.067058,30.533943],
            '甘南藏族自治州':[102.911263,34.988666],
            '赣州市':[114.949707,25.838298],
            '鄂尔多斯市':[109.896675,39.627378],
            '葫芦岛市':[120.849723,40.716926],
            '乐山市':[103.786913,29.55794],
            '运城市':[111.009935,35.033179],
            '忻州市':[112.731421,38.424644],
            '随州市':[113.400946,31.69455],
            '濮阳市':[115.039042,35.769936]
        },
        BJData:[
            [{name: this.placeName}, {name: '北京', value: 95}],
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

    }
    },
    computed: {
    	yearNumbs(){
			return Rw.string_until.addPoint(this.yearNumb)
		},
		mouthNumbs(){
			return Rw.string_until.addPoint(this.mouthNumb)
		},
    },
    watch:{
    	range:function(){
    		this.getData();
    	},
    	code:function(){
    		this.getData();
    	}
    },
    methods: {
  	getData(){
			api.params.code = this.code;
			//console.log(this.code)
			api.params.range = this.range;
	  		api.touristSum(api.params).then( (re) =>{
	    		let reData = re.data.data;
	    		this.yearNumb = reData.yearSum;
	    		this.mouthNumb = reData.monthSum;
	    		let topCity = reData.topCity;
	    		this.allData=[];
	    		this.zhejiang=[];
	    		
				for(let i=0; i<topCity.length; ++i){
					if(topCity[i]._id!=="missing" &&　topCity[i]._id!=="总计"){
						//alert(topCity[i]._id!=="missing")
						if(this.range===1){
							this.allData[i]=["浦江县", [[{name: "浦江县"}, {name: topCity[i]._id, value: topCity[i].sum}]]]
						}else{
							this.zhejiang[i]=["浦江县", [[{name: "浦江县"}, {name: topCity[i]._id, value: topCity[i].sum}]]]
						}
					}
					
				}
				
				this.allData.push(["浦江县", [[{name: "浦江县"}, {name: "浦江县", value: ''}]]])
				this.zhejiang.push(["浦江县", [[{name: "浦江县"}, {name: "浦江县", value: ''}]]])
				
	    		if(re.data.code===200 || re.data.code==='200'){
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
        this.range = 2;
    },
    redom14(){
        this.range = 1;
    },
    convertData(data){
         var res = [];
	    for (var i = 0; i < data.length; i++) {
	        var dataItem = data[i];
	        var fromCoord = this.geoCoordMap[dataItem[1].name];
            var toCoord = this.geoCoordMap[dataItem[0].name];
	        var val = dataItem[1].value;
	        if (fromCoord && toCoord) {
	            res.push({
	                fromName: dataItem[1].name,
	                toName: dataItem[0].name,
	                coords: [fromCoord, toCoord,val]
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
            //this.redomaaData();
        
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
                    name: item[0],
                    type: 'lines',
                    zlevel: 2,
                    largeThreshold:200,
                    large:true,
                    symbol: ['none', 'arrow'],
                    //箭头大小
                    symbolSize: 2,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        //小飞机
                        symbol: planePath,
                        //移动点大小
                        symbolSize: 15*w
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
                                fontSize: '70%'
                            }
                        }
                    },
                    symbolSize: function (val) {
                        return 10*w;
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
        
        this.zhejiang.forEach(function (item, i) {
            series.push(
                {
//                  name: item[0],
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
//                  name: item[0],
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
                        symbol: planePath,
                        //移动点大小
                        symbolSize: 15*w
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
                                fontSize: '70%'
                            }
                        }
                    },
                    symbolSize: function (val) {
                    	return 10*w
//                  	if(val>=0&&val[2]<=20){
//                  		return val[2]
//                  	}else if(val[2]>20&&val[2]<=1000){
//                  		return val[2]/50
//                  	}else if(val[2]>1000 && val[2]<10000){
//                  		return val[2]/600
//                  	}else if(val[2]>=10000&&val[2]<70000){
//                  		return val[2]/3000
//                  	}else if(val[2]>=70000&&val[2]<100000){
//                  		return val[2]/5000
//                  	}else{
//                  		return val[2]/8000
//                  	}
                        
                    },
                    itemStyle: {
                        normal: {
                            color: _self.color[i]
                        }
                    },
                    progressiveThreshold: 50,
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
    },
    mounted(){
        this.$nextTick(echarts_resize('fromEchart',this))
        setTimeout(()=>{
              //this.redom()
        },500)
    },
}
</script>

<style lang="less" scoped>
.map_content {
  width: 100%;
  height: 100%;
  position: relative;
  top: 5%;
  .loading{
  	top: -5%;
  }
  .topTitle{
            position: absolute;
            top:-6px;
            span{
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
        	right: 26%;
        	span{
                color: #43dbff;
                font-size: .8rem;
                
            }
        }
        
        .topTitle:nth-child(1){
        	left: 26%;
        	span{
                color: #43dbff;
                font-size: .8rem;
                
            }
        }
}
#fromEchart{
    width:100%;
    height:100%;
    top: -5%;
}
.week{
    height: 1.5rem !important;
    width: 7rem !important;
    position: absolute;
    bottom: 8%;
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
      -webkit-user-select: none;
      -ms-user-select: none;
      -moz-user-select: none;
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
      -webkit-user-select: none;
      -ms-user-select: none;
      -moz-user-select: none;
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
