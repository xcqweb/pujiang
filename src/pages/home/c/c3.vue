<template>
    <div class="map_content">
        <div id="c3"></div>
        <Loading v-show="isloading"></Loading>
    </div>
</template>

<script>
import Vue from 'vue'
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
import pujiangJson from '../../../common/echarts/map/pujiang.json'
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
export default {
  name: 'c3',
  data () {
    return {
    	isloading:false,
        isActive:true,
        geoCoordMap:{
            '江南第一家': [120.018874, 29.486721],
            '白石湾风景区': [119.922777, 29.410951],
            '仙华山': [119.923671, 29.514494],
            '神丽峡': [119.965029, 29.403954],
            '泡泡水上乐园': [119.903816, 29.49662],
            '官岩山': [120.046933, 29.459189],
            '水竹湾森林公园': [119.84861, 29.659487],
            // '浦江美术馆':[119.904034,29.459079],
            '浦江火车站': [120.104605, 29.507732],
            '汽运中心客运总站': [119.906168, 29.451798],
            // '客运西站':[119.8808,29.471834],

            '逸境民宿': [119.831697, 29.45634],
            '巴厘岛': [119.892769, 29.469171],
            '松月楼农家乐': [119.901907, 29.524226],
            // '韩悦温泉酒店':[119.880367,29.465532],
            '国际开元大酒店': [119.896891, 29.457441],
            '湖上民宿': [119.830011, 29.45022],
        },
        BJData:[
            [{name: '浦江县'}, {name: '江山', value: 95}],
            
        ],
        GUANG:[
            [{name: '浦江县'}, {name: '湖州', value: 40}],
            
        ],
        SHData:[
            [{name: '浦江县'}, {name: '嘉兴', value: 10}],
            
        ],
        SHENZHEN:[
            [{name: '浦江县'}, {name: '宁波', value: 10}],
        ],
        XIAN:[
            [{name: '浦江县'}, {name: '台州', value: 95}],
        ],
        FENGD:[
            [{name: '浦江县'}, {name: '丹山', value: 20}]
        ],
        WENZ:[
            [{name: '浦江县'}, {name: '温州', value: 20}]
        ],
        seriesData:[],
        planePath:'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',

    }
  },
  computed: { 
  },
  methods: {
  	//请求数据
  	getData(){
  		api.thermalMap(api.params).then( (re) =>{
  				let reData = re.data.data;
  				
  				this.BJData = reData.BJData;
  				this.GUANG = reData.GUANG;
  				this.SHData = reData.SHData;
  				this.SHENZHEN = reData.SHENZHEN;
  				this.XIAN = reData.XIAN;
  				this.FENGD = reData.FENGD;
  				this.WENZ = reData.WENZ;
  				this.seriesData = reData.seriesData;
  				
  				this.redom("c3");
    			//console.log(reData,this.seriesData);
				if(re.status===200){
					this.isloading = false;
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
                var geoCoord = this.geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push(geoCoord.concat(data[i].value));
                }
            }
            return res;
    },
    redom(id){
        let _self=this
         echarts.registerMap('pujiang', pujiangJson);
        var dom = document.getElementById(id);
        this.chart = echarts.init(dom);
        var color =['#5aa7fd', '#5aa7fd', '#5aa7fd','#5aa7fd','#5aa7fd','5aa7fd','5aa7fd'];
        var option = {
            backgroundColor: 'rgba(0,0,0,0)',
            visualMap: {
                min: 0,
                max: 1500,
                left: 10,
                //top: 'bottom',
                bottom:10,
                itemHeight:'80%',
                itemWidth:'15%',
                text: ['高','低'],           // 文本，默认为数值文本
                calculable: true,
                realtime:true,
                textStyle:{
                    color:'white',
                    fontSize:'100%'
                }
            },
            geo: {
                map: 'pujiang',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#7d3e70',
                        borderColor: '#111'
                    },
                    emphasis: {
                        areaColor: '#7d3e70'
                    }
                }
            },
            series: [{
                    name: 'AQI',
                    type: 'heatmap',
                    coordinateSystem: 'geo',
                    data: this.convertData(this.seriesData)
                }]
        };
        if (option && typeof option === "object") {
           this.chart.setOption(option, true);
        }
    },
   
  },
  created(){
  	this.isloading = true;
  },
  mounted(){
  	this.getData();
    this.$nextTick(echarts_resize('c3',this)) 
  },
  components:{
  	Loading
  }
}
</script>

<style lang="less" scoped>
.map_content {
    width: 100%;
    height: 100%;
    position: relative;
    #c3{
        width: 100%;
        height: 100%;
    }
}

</style>