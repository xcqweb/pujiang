<style lang="less" scoped>
    @import '../../../common/js/baidumap/TrafficControl_min.css';
.d1{
    position:relative;
    width: 100%;
    height: 100%;
    h1{
        position:absolute;
        top:1.3rem;
        font-size: 1.1rem;
        color:white;
    }
    .toast-video{
        position:absolute;
        top:8%;
        right:2.5%;
        width:40%;
        height:50%;
        overflow: hidden;
        background-color:#363eaa;
        box-shadow: 0 2px 42px rgba(6,19,80,14);
        h2{
            padding-left: 1rem;
            padding-top: .2rem;
            padding-bottom: .2rem;
            width:100%;
            height: 8%;
            font-size:1.1rem;
            color: white;
            line-height: 1.5rem;
            text-align: left;
            letter-spacing:.2rem;
            background-color:#363eaa;
            box-shadow: 0 1px 10px rgba(25,24,47,0.4);
        }
        video{
            height: 92%;
            width: 100%;
            z-index: 200;
        }
    }
    .lineVideo{
        position:absolute;
        width: 95%;
        height: 85%;
        overflow: hidden;
        top:12%;
        left:2.5%; 
        pointer-events:none;
    }
}
.XSDFXPage{
    position:absolute;
    width: 95%;
    height: 85%;
    overflow: hidden;
    top:12%;
    left:2.5%;
    font-family: "微软雅黑";
}
.anchorBL{ 
display:none !important; 
}

</style>
<template>
    <div class="d1">
        <div id="XSDFXPages" class="XSDFXPage"></div>
        <canvas class="lineVideo" v-show='videoToast'></canvas>
        <div class="toast-video" v-if='videoToast'>
            <h2>{{videoName}}</h2>
            <video controls="controls" src="../../../assets/video/xhs.mp4" autoplay="autoplay"  loop="loop" style="">
                您的浏览器不支持 video 标签。
            </video>
        </div>
        <Loading v-show="isloading"></Loading>
    </div>
    
</template>

 
<script>
import echarts from 'echarts'
import optionProps from '@/common/js/mixin/optionProps.js'
import sciencePoints from './points.json'
   require('../../../common/js/baidumap/heatmap.js?fdwe')
    export default {
        name:'d1',
        mixins: [optionProps],
        data () {
            return {
                videoName:'摄像头',
                videoToast:false,
                vsrc:"",
                videoSrc:[
                	"../../../assets/video/xhs.mp4",
                	"../../../assets/video/gys.mp4",
                	"../../../assets/video/slx.mp4",
                	"../../../assets/video/xhs.mp4",
                	"../../../assets/video/yjms.mp4",
                	"../../../assets/video/bld.mp4",
                	"../../../assets/video/hsms.mp4"
                ],
                points:[]
            }
        },
        props:[
            'place'
        ],
        watch:{
        	touristProp:function(val){
        		 this.addScript(val);
        	}
        },
        methods:{
        	
            addLineVideo(){
                var canvas = document.getElementsByClassName('lineVideo')[0];
                //简单地检测当前浏览器是否支持Canvas对象，以免在一些不支持html5的浏览器中提示语法错误
                const width = canvas.width;
                const height = canvas.height;
                
                if(canvas.getContext){  
                    //获取对应的CanvasRenderingContext2D对象(画笔)
                        var ctx = canvas.getContext("2d");  
                        ctx.imageSmoothingEnabled = true;
                        //开始一个新的绘制路径
                        ctx.beginPath();
                        //设置线条颜色为蓝色
                        ctx.strokeStyle = "#363eaa";
                        ctx.lineWidth = 2.5;
                        ctx.shadowOffsetX = 0;
                        ctx.shadowOffsetY = 10;
                        ctx.shadowBlur    = 4;
                        ctx.shadowColor   = "rgba(14,32,113,0.4)";  //or use rgb(red, green, blue)
                        //设置路径起点坐标
                        ctx.moveTo(122.5, 100.5);
                        //定义中间点坐标1
                        ctx.lineTo(140.5, 50.5);
                        //定义中间点坐标2
                        ctx.lineTo(180, 30);
                        //定义中间点坐标3(这是最后一个中间点，也就是终点)
                        //按照绘制路径顺序连接各个坐标点
                        ctx.stroke();
                        //关闭绘制路径
                        ctx.closePath();
                }
            },
            mapMoveSelf(map){
                //console.log(map)
                setTimeout(function(){
                    map.panTo(new BMap.Point(119.906441,29.457793));
                }, 1000);
                setTimeout(function(){
                    map.setZoom(12);
                },4000);
            },
            addIcon(map){
                let _self = this
                let lenY = 29.518155 - 29.510533;
                let lenX = 119.913692 - 119.932808;
//              var points = [
//                      [119.923671,29.513494],
//                      [119.919621,29.516494],
//                      [119.930621,29.518494],
//                      [119.925621,29.512494],
//                      [119.931621,29.511494],
//                      [119.924621,29.514494],
//                      [119.912621,29.515494]
//                  ];
                var points = sciencePoints;
                //console.log(points)
                // 向地图添加标注
                for( let i = 0;i < points.length; i++){
                    //定义新图标
                    var myIcon = new BMap.Icon(require("../../../assets/images/labler.png"), new BMap.Size(30, 30), {
                    // 指定定位位置
                    offset: new BMap.Size(10, 25),
                    // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置 
                    //imageOffset: new BMap.Size(0, 0 - i * 25)  设置图片偏移 
                    });
                    var point = new BMap.Point(points[i].points[0],points[i].points[1]);
                        // 创建标注对象并添加到地图 
                        var marker = new BMap.Marker(point,{icon: myIcon});
                        map.addOverlay(marker);
                        //点跳动
                    	marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                    	//设置标签
                     var label = new BMap.Label(points[i].label,{offset:new BMap.Size(20,-50)});
	                    label.setStyle({
	                        color : "#153081",
	                        border:"1px solid #153081",
	                        fontSize : "12px",
	                        height : "20px",
	                        lineHeight : "20px",
	                        fontFamily:"微软雅黑",
	                        borderRadius:"4px",
	                    });
		                marker.setLabel(label);
		                
		                
                    (function() {
                        
                        //添加新图标的监听事件
                        marker.addEventListener("click",
                            function(event) {
                            var p = marker.getPosition();       //获取marker的位置
                            map.centerAndZoom(new BMap.Point(p.lng+lenY*0.25,p.lat+lenY*0.25), 16);
                            _self.videoToast=true;
                            
                            let len = points.length;
                            for(let i=0; i<len; ++i){
                            	let point = points[i][0];
                            	if(p.lng === point){
                            		//console.log(_self.vsrc)
                              		_self.vsrc = _self.videoSrc[i];
                            		//console.log(_self.vsrc)
                            	}
                            }
                            window.event?window.event.cancelBubble=true:event.stopPropagation();
                        },false);
                    })(i);
                };
            },
            addMenu(map){
                var menu = new BMap.ContextMenu();

                var txtMenuItem = [
                    {
                        text:'放大',
                        callback:function(){map.zoomIn()}
                    },
                    {
                        text:'缩小',
                        callback:function(){map.zoomOut()}
                    }
                ];
                for(var i=0; i < txtMenuItem.length; i++){
                    menu.addItem(new BMap.MenuItem(txtMenuItem[i].text,txtMenuItem[i].callback,100));
                }
                map.addContextMenu(menu);
            },
            addLocaPosition(map){
                //添加定位组件
                var geolocationControl = new BMap.GeolocationControl();
                geolocationControl.addEventListener("locationSuccess", function(e){
                // 定位成功事件
                var address = '';
                address += e.addressComponent.province;
                address += e.addressComponent.city;
                address += e.addressComponent.district;
                address += e.addressComponent.street;
                address += e.addressComponent.streetNumber;
                alert("当前定位地址为：" + address);
                });
                geolocationControl.addEventListener("locationError",function(e){
                // 定位失败事件
                alert(e.message);
                });
                map.addControl(geolocationControl)
            },
            addControl(map){
                //添加工具条、比例尺控件
                map.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT}));
                map.addControl(new BMap.NavigationControl());
                map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT,type: BMAP_NAVIGATION_CONTROL_SMALL}));
                map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT,type: BMAP_NAVIGATION_CONTROL_LARGE,enableGeolocation: true}));
            },
            addControlCityList(map){
                //创建城市下拉列表控件；
                map.addControl(new BMap.CityListControl({
                    anchor:BMAP_ANCHOR_BOTTOM_RIGHT,
                    offset:new BMap.Size(130,23),
                    //切换城市之间事件
                    onChangeBefore: function(){
                       alert('before');
                    },
                    //切换城市之后事件
                    onChangeAfter:function(){
                      alert('after');
                    }
                }));
            },
            addLine(map){
                //添加曲线
                var beijingPosition=new BMap.Point(119.932045,29.4510683),
                hangzhouPosition=new BMap.Point(120.129721,30.314429),
                taiwanPosition=new BMap.Point(121.491121,25.127053);
                var point = [beijingPosition,hangzhouPosition,taiwanPosition];

                var curve = new BMapLib.CurveLine(point, {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.5});//创建弧线
                map.addOverlay(curve);//添加到地图上
                curve.enableEditing();//开启编辑功能
            },
            addCustControl(map){
                //创建自定义放大缩小悬浮控件
                function ZoomControl() {
                //默认停靠位置和偏移量
                this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
                this.defaultOffset = new BMap.Size(50,23);
                }
                //通过JavaScript的prototype属性继承于BMap.Control
                ZoomControl.prototype = new BMap.Control();
                //自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回
                //在本方法中创建div容器，并将其添加到地图容器中
                ZoomControl.prototype.initialize = function(map) {
                    //创建一个DOM元素
                    var div = document.createElement('div');
                    //添加文字说明
                    div.appendChild(document.createTextNode('放大两级'));
                    //添加样式
                    div.style.color = '#40C5CC'; 
                    div.style.cursor = 'pointer';
                    div.style.border = '3px solid gray';
                    div.style.backgroundColor = '#eee';
                    //绑定事件，点击触发
                    div.onclick = function(e) {
                        map.setZoom(map.getZoom() + 2);
                    }
                    //添加DOM元素到地图上
                    map.getContainer().appendChild(div);
                    //将DOM元素返回
                    return div;
                }
                //创建控件
                var myZoomCtrl = new ZoomControl();
                map.addControl(myZoomCtrl)
            },
            addLoad(map){
                //实时路况
                var ctrl = new BMapLib.TrafficControl({
                    showPanel: true //是否显示路况提示面板
                });      
                map.addControl(ctrl);
                ctrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);  
            },
            addHot(map){
                     var points =[];
					 
                    map.enableScrollWheelZoom(); // 允许滚轮缩放
                   
                    if(!isSupportCanvas()){
                        alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
                    }
                    //详细的参数,可以查看heatmap.js的文档 https://github.com/pa7/heatmap.js/blob/master/README.md
                    //参数说明如下:
                    /* visible 热力图是否显示,默认为true
                     * opacity 热力的透明度,1-100
                     * radius 势力图的每个点的半径大小   
                     * gradient  {JSON} 热力图的渐变区间 . gradient如下所示
                     *  {
                            .2:'rgb(0, 255, 255)',
                            .5:'rgb(0, 110, 255)',
                            .8:'rgb(100, 0, 255)'
                        }
                        其中 key 表示插值的位置, 0~1. 
                            value 为颜色值. 
                     */
                      let heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":36});
                      map.addOverlay(heatmapOverlay);
                         points = this.points;
                      //设置热力图数据
                      heatmapOverlay.setDataSet({data:points,max:180});
                      
                      
                    //是否显示热力图
                       heatmapOverlay.show();
                    function closeHeatmap(){
                        heatmapOverlay.hide();
                    }
                   
                    function setGradient(){
                        /*格式如下所示:
                        {
                            0:'rgb(102, 255, 0)',
                            .5:'rgb(255, 170, 0)',
                            1:'rgb(255, 0, 0)'
                        }*/
                        var gradient = {};
                        var colors = document.querySelectorAll("input[type='color']");
                        colors = [].slice.call(colors,0);
                        colors.forEach(function(ele){
                            gradient[ele.getAttribute("data-key")] = ele.value; 
                        });
                        heatmapOverlay.setOptions({"gradient":gradient});
                    }
                    //判断浏览区是否支持canvas
                    function isSupportCanvas(){
                        var elem = document.createElement('canvas');
                        return !!(elem.getContext && elem.getContext('2d'));
                    }
            },
            //请求数据
		  	getData(){
		  		api.params.code = this.code;
		  		api.scenicHot(api.params).then( (re) =>{
	  				let reData = re.data.data;
	  				for(let i=0; i<reData.length; ++i){
	  					this.points[i] = {"count":reData[i].count,"lat":reData[i].latitude,"lng":reData[i].longitude};
	  				}
	  				this.addScript('全部');
	  				//console.log(reData);
					if(re.status===200){
						this.isloading = false;
					}
			    }).catch( (e) => {
			    	console.log(e);
			    })
		  	},
		  	//多个地方使用会造成冲突,需动态添加热力图,且需在地图构建前将热力图引入进来
		  	addScript(val){
                let _self = this;
                var oS=document.createElement('script');
                oS.src='https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js?'+Math.random();
                this.$el.appendChild(oS)
                oS.onload=function(){
                    _self.rodomMap(val);
                }
                this.$el.removeChild(oS);
            },
            moveTo(map,lon,lat,zoom,val,lenObj){
                    if(lon){
                         map.setZoom(zoom);
                         map.centerAndZoom(new BMap.Point(lon,lat), zoom);
                    }
                   
            },
            rodomMap(val){
            	const _self= this;
            	let lenObj = {
            		 '全部':{lng:119.923671,lat:29.506494,zoom:12},
		            '仙华山':{lng:119.923732,lat:29.514781,zoom:14},
		            '前吴村':{lng:119.829429,lat:29.449887,zoom:14},
		            '塘波村':{lng:119.752984,lat:29.454116,zoom:14},
		            '民生村':{lng:119.850035,lat:29.426906,zoom:14},
		            '罗源村':{lng:119.833439,lat:29.425386,zoom:14},
		            '白石湾':{lng:119.922777,lat:29.41095,zoom:14},
		            '江南第一家':{lng:120.018874,lat:29.48683,zoom:14},
		            '嵩溪村':{lng:120.016897,lat:29.539369,zoom:14},
		            '宝掌幽谷':{lng:119.92727,lat:29.505704,zoom:14},
		            '登高村':{lng:119.916398,lat:29.534356,zoom:14},
		            '神丽峡':{lng:119.964819,lat:29.403722,zoom:14},
		            '礼张村':{lng:119.961903,lat:29.527846,zoom:14},
		            '农批市场':{lng:119.894968,lat:29.439944,zoom:14},
		            '檀溪镇':{lng:119.953443,lat:29.631301,zoom:14},
		            '冷坞村':{lng:119.981621,lat:29.592997,zoom:14},
		            '上河村':{lng:120.063783,lat:29.372501,zoom:14},
		            '汽车客运站':{lng:119.905884,lat:29.451243,zoom:14},
		            '翠湖':{lng:119.879563,lat:29.460438,zoom:14},
		            '马岭':{lng:119.778974,lat:29.5674,zoom:14},
		            '利民村':{lng:119.852974,lat:29.570912,zoom:14},
		            '下湾村':{lng:119.842452,lat:29.569144,zoom:14},
		            '新光村':{lng:119.826415,lat:29.571845,zoom:14},
		            '西山村':{lng:119.884387,lat:29.463871,zoom:14},
		            '田后蓬':{lng:119.797108,lat:29.617633,zoom:14},
		            '薛下庄村':{lng:119.86882,lat:29.542146,zoom:14},
		            '下薛宅':{lng:119.867063,lat:29.532904,zoom:14},
		            '金狮湖':{lng:119.91158,lat:29.459057,zoom:14},
		            '高速路':{lng:119.91158,lat:29.459057,zoom:14},
		            '官岩寺':{lng:120.037393,lat:29.457562,zoom:14},
		            '上山遗址':{lng:119.982268,lat:29.459398,zoom:14},
		            '渠南村':{lng:119.981877,lat:29.454304,zoom:14},
		            '温泉':{lng:119.904378,lat:29.496666,zoom:14},
		            '水晶城':{lng:119.919845,lat:29.44109,zoom:14},
		            '水竹湾':{lng:119.854398,lat:29.659571,zoom:14},
		            '平湖森林果园':{lng:119.930433,lat:29.626957,zoom:14},
		            '三角潭林场':{lng:119.87587,lat:29.462863,zoom:14},
		            '罗家村':{lng:119.869459,lat:29.662849,zoom:14},
		            '白岩山前滑草基地':{lng:119.882467,lat:29.59094,zoom:14},
		            '里黄宅村':{lng:119.797415,lat:29.441304,zoom:14},
		            '善庆村':{lng:119.855531,lat:29.498886,zoom:14},
		            '文化馆':{lng:119.902428,lat:29.459172,zoom:14},
		            '通济桥水库大坝':{lng:119.836162,lat:29.449859,zoom:14},
		            '三城山农庄':{lng:120.00538,lat:29.477826,zoom:14},
		            '塔山宾馆':{lng:119.902281,lat:29.460145,zoom:14},
		            '月泉书院遗址公园':{lng:119.892902,lat:29.471208,zoom:14}
            	}
            	
            	
            	
            //绘制牵引线
            _self.addLineVideo();
            var map = new BMap.Map("XSDFXPages",{enableMapClick:true});
            map.addEventListener("mousedown",function(e){
                _self.videoToast=false;
            },false)
            // 初始化地图,设置中心点坐标和地图级别
            map.centerAndZoom(new BMap.Point(119.923671,29.506494),12);
            // 添加地图类型控件
            // map.addControl(new BMap.MapTypeControl());  
            // 设置地图显示的城市 此项是必须设置的
            map.setCurrentCity("浦江");    
            // 开启鼠标滚轮缩放      
            map.enableScrollWheelZoom(true);
            // 设置定时器，对地图进行自动移动
             //this.mapMoveSelf
            /************************************************
            添加折线
            *************************************************/

            var pointGZ = new BMap.Point(119.923671,29.514494);
            var pointHK = new BMap.Point(110.35,20.02);
            // setTimeout(function(){
            //     var polyline = new BMap.Polyline([pointGZ,pointHK],{strokeColor:"blue",strokeWeight:5,strokeOpacity:0.5});
            //     map.addOverlay(polyline);
            // },6000);
            
            // _self.addControl(map);
            _self.addLocaPosition(map);
            /************************************************
            添加自定义控件类，放大ZoomControl
            *************************************************/

            /************************************************
            添加添加城市列表控件
            *************************************************/
            // _self.addControlCityList(map);
            /************************************************
            添加新图标
            *************************************************/
            _self.addIcon(map);
            /************************************************
            添加曲线
            *************************************************/
        
            /************************************************
            给地图添加右键菜单
            *************************************************/
           
          	 
          	 _self.addMenu(map);
          	 _self.addHot(map);
           // _self.addLoad(map);
            //})
            
             if(!lenObj[val]){
               	//alert(21212)
               	return
               }
                _self.moveTo(map,lenObj[val  ===  undefined ?"全部": val].lng,lenObj[val  ===  undefined ?"全部": val].lat,lenObj[val  ===  undefined ?"全部": val].zoom,val,lenObj);
            
            }
        },
        created(){
        },
        mounted() {
          	this.$nextTick( () => {
            	//console.log(this.points)
          		
        	})
        	
        	
            // 百度地图API功能
            // 创建Map实例
        },
    }
</script>
