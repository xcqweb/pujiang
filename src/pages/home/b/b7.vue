<template>
    <div class="map_content">
        <div id="b7"></div>
    </div>
</template>

<script>
import Vue from 'vue'
require("echarts/map/js/province/zhejiang.js")
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
import zhejiangJson from 'echarts/map/json/province/zhejiang.json'

export default {
  name: 'b7',
  data () {
    return {
        isActive:true,
        geoCoordMap:{
            '浦江县': [120.105537,29.508488],
            '江山': [118.639502,28.757867],
            '湖州': [120.091557,30.904757],
            '嘉兴': [120.763058,30.761869],
            '宁波': [121.554142,29.89605],
            '绍兴': [120.583685,30.048225],
            '金华': [119.650022,29.095307],
            '丽水':[119.930581,28.483471],
            '台州': [121.425361,28.670242],
            '温州': [120.698668,28.015083],
            '丹山':[122.216445,29.992188],

            '象山县': [121.880694,29.482393],
            '巴厘岛': [119.892769, 29.469171],
            '松月楼农家乐': [119.901907, 29.524226],
            '韩悦温泉酒店':[119.880367,29.465532],
            '国际开元大酒店': [119.896891, 29.457441],
            '湖上民宿': [119.830011, 29.45022],
            "A121": [119.856286, 29.47606],
            "A122": [119.854744, 29.573336],
            "A123": [119.880196, 29.519615],
            "A124": [119.880918, 29.480216],
            "A125": [119.994344, 29.487643],
            "A126": [119.939702, 29.596214],
            "A127": [119.068183, 29.482913],
            "A128": [119.902491, 29.423014],
            "A129": [119.954948, 29.569795],
            "A130": [119.907716, 29.452952],
            "A131": [119.90769, 29.556498],
            "A132": [119.85966, 29.592726],
            "A133": [119.79563, 29.521539],
            "A134": [119.833465, 29.430714],
            "A135": [119.913783, 29.540966],
            "A136": [119.921972, 29.45195],
            "A137": [119.793131, 29.550955],
            "A138": [119.021794, 29.452713],
            "A139": [119.909616, 29.613302],
            "A140": [119.870065, 29.50086],
            "A141": [119.914977, 29.438854],
            "A142": [119.082901, 29.439093],
            "A143": [119.860351, 29.497494],
            "A144": [119.870637, 29.550895],
            "A145": [119.9413, 29.525508],
            "A146": [119.852727, 29.572282],
            "A147": [119.945691, 29.583597],
            "A148": [119.947588, 29.622033],
            "A149": [119.971023, 29.477063],
            "A150": [119.835079, 29.570531],
            "A151": [119.903241, 29.557063],
            "A152": [119.868432, 29.518683],
            "A153": [119.877126, 29.614547],
            "A154": [119.99524, 29.461843],
            "A155": [119.893757, 29.503221],
            "A156": [119.944954, 29.424112],
            "A157": [119.772361, 29.557335],
            "A158": [119.965446, 29.577481],
            "A159": [119.081259, 29.60218],
            "A160": [119.982137, 29.456119],
            "A161": [119.909187, 29.444866],
            "A162": [119.835602, 29.540352],
            "A163": [119.033389, 29.559731],
            "A164": [119.764623, 29.572187],
            "A165": [119.052894, 29.455398],
            "A166": [119.087435, 29.435309],
            "A167": [119.963021, 29.521348],
            "A168": [119.839189, 29.570821],
            "A169": [119.88367, 29.607187],
            "A170": [119.075154, 29.603191],
            "A171": [119.993919, 29.445218],
            "A172": [119.914436, 29.463531],
            "A173": [119.99347, 29.523485],
            "A174": [119.989213, 29.572963],
            "A175": [119.845416, 29.570275],
            "A176": [119.957807, 29.583932],
            "A177": [119.920324, 29.426347],
            "A178": [119.839418, 29.446026],
            "A179": [119.099302, 29.534829],
            "A180": [119.944972, 29.585953],
            "A181": [119.831981, 29.578383],
            "A182": [119.977561, 29.516778],
            "A183": [119.993623, 29.433389],
            "A184": [119.080565, 29.568242],
            "A185": [119.842857, 29.504842],
            "A186": [119.002218, 29.619641],
            "A187": [119.069511, 29.51],
            "A188": [119.899688, 29.586303],
            "A189": [119.944514, 29.52984],
            "A190": [119.76529, 29.518601],
            "A191": [119.92825, 29.600346],
            "A192": [119.954466, 29.575428],
            "A193": [119.802779, 29.468806],
            "A194": [119.994277, 29.437357],
            "A195": [119.938016, 29.570169],
            "A196": [119.001832, 29.539286],
            "A197": [119.933232, 29.55706],
            "A198": [119.961361, 29.496038],
            "A199": [119.831335, 29.556318],
            "A200": [119.972513, 29.499406]
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
        planePath:'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',

    }
  },
  computed: { 
  },
  methods: {
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
                var fromCoord = this.geoCoordMap[dataItem[1].name];
                var toCoord = this.geoCoordMap[dataItem[0].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[1].name,
                        toName: dataItem[0].name,
                        coords: [fromCoord, toCoord]
                    });
                }
            }
            return res;
    },
    redom(id){
        let _self=this
         echarts.registerMap('zhejiang', zhejiangJson);
        var dom = document.getElementById(id);
        this.chart = echarts.init(dom);
        var color =['#5aa7fd', '#5aa7fd', '#5aa7fd','#5aa7fd','#5aa7fd','5aa7fd','5aa7fd'];
        var series = [];
        [['浦江县', _self.BJData], ['浦江县', _self.GUANG],['浦江县', _self.SHData],['浦江县', _self.SHENZHEN],['浦江县', _self.XIAN],['浦江县', _self.FENGD],['浦江县',_self.WENZ]].forEach(function (item, i) {
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
                            color: color[i],
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
                            color: color[i]
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: _self.geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
        });
        var option = {
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
                            borderColor:'white'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
            },
            series: series
        };
        if (option && typeof option === "object") {
           this.chart.setOption(option, true);
        }
    },
   
  },
  mounted(){
    this.$nextTick(echarts_resize('b7',this)) 
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
    #b7{
        width: 100%;
        height: 100%;
    }
}

</style>