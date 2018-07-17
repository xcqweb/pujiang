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
        color:#fff;
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
            color: #fff;
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
                points:[]
            }
        },
        watch:{
        	touristProp:{
        		handler:function(val){
        		 this.getDatas(val);
        		},
        		immediate:true
        	}
        },
        methods:{
        	addIconAnimation(map,lon,lat,val){
        		var myIcon = new BMap.Icon(require("../../../assets/images/labler.png"), new BMap.Size(30, 30), {
                    // 指定定位位置
                    offset: new BMap.Size(10, 25),
                    // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置 
                    //imageOffset: new BMap.Size(0, 0 - i * 25)  设置图片偏移 
                    });
        		 var point = new BMap.Point(lon,lat);
                        // 创建标注对象并添加到地图 
                        var marker = new BMap.Marker(point,{icon: myIcon});
                        map.addOverlay(marker);
                        //点跳动
                        marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                      		//设置标签
	                     var label = new BMap.Label(val,{offset:new BMap.Size(20,-50)});
		                    label.setStyle({
		                        color : "#153081",
		                        border:"1px solid #153081",
		                        fontSize : "0.6rem",
		                        height : "1rem",
		                        padding:'0 0.5rem',
		                        lineHeight : "1rem",
		                        fontFamily:"微软雅黑",
		                        borderRadius:"4px",
		                    });
			                marker.setLabel(label);
        	},
        	
            addIcon(map,lon,lat){
                let _self = this
                var points = sciencePoints;
                // 向地图添加标注
                for( let i = 0;i < points.length; i++){
                	if(this.touristProp==='全部' || points[i].points[0]!==lon && points[i].points[1]!=lat){
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
	                        if(this.touristProp==='全部'){
	                        	marker.setAnimation(BMAP_ANIMATION_BOUNCE);
	                        }
	                    	
	                    	//设置标签
	                     var label = new BMap.Label(points[i].label,{offset:new BMap.Size(20,-50)});
		                    label.setStyle({
		                        color : "#153081",
		                        border:"1px solid #153081",
		                        fontSize : "0.6rem",
		                        height : "1rem",
		                        padding:'0 0.5rem',
		                        lineHeight : "1rem",
		                        fontFamily:"微软雅黑",
		                        borderRadius:"4px",
		                    });
			                marker.setLabel(label);
			                
	                    (function() {
	                        //添加新图标的监听事件
	                        marker.addEventListener("click",
	                            function(event) {
	                            var p = event.target.getPosition();       //获取marker的位置
	                              map.centerAndZoom(new BMap.Point(p.lng,p.lat), 15);
	                            window.event?window.event.cancelBubble=true:event.stopPropagation();
	                        },false);
	                    })(i);
	                };
                }
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
            
            currentNum(map){ //热力图关联当前客流人数
            	let _self = this
            	let coords = sciencePoints;
            	api.params.code = this.code;
		  		api.getScenicKeliu(api.params).then( (re) =>{
		  			let reData = re.data.data
		  			let arr = reData.arr
					if(re.data.code===200){
						if(_self.code!==0){
							for(let item of coords){
								if(_self.transformScience(_self.code) === item.label){
									item.num = reData.curSum
								}
							}
						}else{
							for(let item of coords){
								for(let v of arr){
									if(_self.transformScience(v.code) === item.label){
										item.num = v.curSum 
									}
								}
							}
						}
						this.initPoints(coords,map)
						this.isloading = false;
						//console.log(coords)
					}
			    }).catch( (e) => {
			    	console.log(e);
			    })
            },
            transformScience(code){
            	let place = ['全部','仙华山','前吴村', '塘波村','民生村','罗源村','白石湾','江南第一家','嵩溪村','宝掌幽谷','登高村','神丽峡','礼张村','农批市场','檀溪镇','冷坞村','上河村','汽车客运站','翠湖','马岭','利民村',	'下湾村', '新光村','西山村','田后蓬','薛下庄村','金狮湖','高速路','官岩寺','上山遗址',	'渠南村','温泉','下薛宅','水晶城','水竹湾','平湖森林果园',	'三角潭林场','罗家村','白岩山前滑草基地',	'里黄宅村','善庆村','文化馆','通济桥水库大坝','三城山农庄','','塔山宾馆','月泉书院遗址公园']
            	return place[code]
            },
            
            initPoints(coords,map){
            	this.points = []
            	for(let item of coords){
                	if(item.label==='仙华山'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.020445,0.019313,0.027131,-0.018862,item.num))
                	}else if(item.label==='前吴村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.005445,0.006313,0.010131,-0.006862,item.num))
                	}else if(item.label==='塘波村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.020445,0.019313,0.027131,-0.018862,item.num))
                	}else if(item.label==='民生村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.010445,0.012313,0.020131,-0.012862,item.num))
                	}else if(item.label==='罗源村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.010445,0.012313,0.020131,-0.012862,item.num))
                	}else if(item.label==='白石湾'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.009313,0.007131,-0.004862,item.num))
                	}else if(item.label==='江南第一家'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.000313,0.000131,-0.000862,item.num))
                	}else if(item.label==='嵩溪村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.010445,0.012313,0.020131,-0.012862,item.num))
                	}else if(item.label==='宝掌幽谷'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.009313,0.007131,-0.008862,item.num))
                	}else if(item.label==='登高村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.009313,0.007131,-0.008862,item.num))
                	}else if(item.label==='神丽峡'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.010445,0.012313,0.020131,-0.012862,item.num))
                	}else if(item.label==='礼张村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.009313,0.007131,-0.008862,item.num))
                	}else if(item.label==='农批市场'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.000313,0.000131,-0.000862,item.num))
                	}else if(item.label==='檀溪镇'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.010445,0.012313,0.020131,-0.012862,item.num))
                	}else if(item.label==='冷坞村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.010445,0.012313,0.020131,-0.012862,item.num))
                	}else if(item.label==='上河村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.010445,0.012313,0.020131,-0.012862,item.num))
                	}else if(item.label==='汽车客运站'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000045,0.000013,0.000031,-0.000062,item.num))
                	}else if(item.label==='翠湖'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.001445,0.000513,0.001931,-0.000862,item.num))
                	}else if(item.label==='马岭'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.008445,0.010313,0.015131,-0.010862,item.num))
                	}else if(item.label==='利民村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.009313,0.007131,-0.008862,item.num))
                	}else if(item.label==='下湾村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.009313,0.007131,-0.008862,item.num))
                	}else if(item.label==='新光村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.009313,0.007131,-0.008862,item.num))
                	}else if(item.label==='西山村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000645,0.003213,0.005001,-0.003862,item.num))
                	}else if(item.label==='田后蓬'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.009313,0.007131,-0.008862,item.num))
                	}else if(item.label==='薛下庄村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.009313,0.007131,-0.008862,item.num))
                	}else if(item.label==='下薛宅'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.000313,0.000131,-0.000862,item.num))
                	}else if(item.label==='金狮湖'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.003445,0.004313,0.006131,-0.006862,item.num))
                	}else if(item.label==='高速路'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.000313,0.007131,-0.008862,item.num))
                	}else if(item.label==='官岩寺'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.009313,0.007131,-0.008862,item.num))
                	}else if(item.label==='上山遗址'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.010445,0.012313,0.020131,-0.012862,item.num))
                	}else if(item.label==='渠南村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.006445,0.008313,0.012131,-0.006862,item.num))
                	}else if(item.label==='温泉'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.000313,0.000131,-0.000862,item.num))
                	}else if(item.label==='水晶城'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.002313,0.003131,-0.003862,item.num))
                	}else if(item.label==='水竹湾'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.009313,0.007131,-0.008862,item.num))
                	}else if(item.label==='平湖森林果园'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.020445,0.019313,0.027131,-0.018862,item.num))
                	}else if(item.label==='三角潭林场'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.002313,0.003131,-0.002862,item.num))
                	}else if(item.label==='罗家村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.009313,0.007131,-0.008862,item.num))
                	}else if(item.label==='白岩山前滑草基地'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.009313,0.007131,-0.008862,item.num))
                	}else if(item.label==='里黄宅村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.006445,0.006313,0.012131,-0.006862,item.num))
                	}else if(item.label==='善庆村'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.006445,0.006313,0.012131,-0.006862,item.num))
                	}else if(item.label==='文化馆'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.00045,0.000013,0.000031,-0.000062,item.num))
                	}else if(item.label==='通济桥水库大坝'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.009313,0.007131,-0.008862,item.num))
                	}else if(item.label==='三城山农庄'){
                		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.00445,0.000313,0.000131,-0.000862,item.num))
                	}else if(item.label==='塔山宾馆'){
                		
               		this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.00045,0.000013,0.000031,-0.000062,item.num))
                	}else if(item.label==='月泉书院遗址公园'){
                this.points.push.apply(this.points,this.calcCoord(map,item.points[0],item.points[1],-0.000445,0.000313,0.000131,-0.000862,item.num))
                	}
                }
            	
            	this.addHot(map);
            },
            calcCoord(map,lats,lngs,ny,sy,wx,ex,num=0){//lat ,lng 景点坐标 n,s,w,e 各个方向的延伸基值
            	function fixed(n){
            		return n.toFixed(9)
            	}
            	
            	let points = [];
            	for(let i=0; i<num; i++){
            		let lat,
	            		lng,
	            		count,
            			r = Math.random();
            		if(r<0.25){
            			if(Math.random()<0.5){
            				lat = fixed(lngs+Math.random()*ny)
            				lng = fixed(lats+Math.random()*wx)
            			}else{
            				lat = fixed(lngs+Math.random()*ny)
            				lng = fixed(lats+Math.random()*ex)
            			}
            		}else if(r>=0.25 && r<0.5){
            			if(Math.random()<0.5){
            				lat = fixed(lngs+Math.random()*sy)
            				lng = fixed(lats+Math.random()*wx)
            			}else{
            				lat = fixed(lngs+Math.random()*sy)
            				lng = fixed(lats+Math.random()*ex)
            			}
            		}else if(r>=0.50 && r<0.75){
            			if(Math.random()<0.5){
            				lat = fixed(lngs+Math.random()*sy)
            				lng = fixed(lats+Math.random()*wx)
            			}else{
            				lat = fixed(lngs+Math.random()*ny)
            				lng = fixed(lats+Math.random()*wx)
            			}
            		}else{
            			if(Math.random()<0.5){
            				lat = fixed(lngs+Math.random()*sy)
            				lng = fixed(lats+Math.random()*ex)
            			}else{
            				lat = fixed(lngs+Math.random()*ny)
            				lng = fixed(lats+Math.random()*ex)
            			}
            		}
            		count = Math.round(Math.random()*1)
            		//count = 1
            		
            		points[i] = {'count':count,'lat':lat,'lng':lng}
            	}
            	return points
            },
            addHot(map){
				let points = this.points;   
                map.enableScrollWheelZoom(); // 允许滚轮缩放
               
                if(!isSupportCanvas()){
                    alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
                }
                
                let heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":36});
                map.addOverlay(heatmapOverlay);
                 
                //设置热力图数据
                heatmapOverlay.setDataSet({data:points,max:36});
                  
                  
                //是否显示热力图
                heatmapOverlay.show();
                function closeHeatmap(){
                    heatmapOverlay.hide();
                }
               
                //监听地图缩放事件
	            map.addEventListener('zoomend',function(){
	            	let zoom = map.getZoom()
	            	
	            	if(zoom===14){//放大级别在14时关闭热力图
	            		 //closeHeatmap()
	            	}
	            })
               
                function setGradient(){
                   
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
            getData(){},
            //请求数据
		  	getDatas(val){
		  		api.params.code = this.code;
		  		api.scenicHot(api.params).then( (re) =>{
	  				let reData = re.data.data;
	  				for(let i=0; i<reData.length; ++i){
	  					//this.points[i] = {"count":reData[i].count,"lat":reData[i].latitude,"lng":reData[i].longitude};
	  				}
	  				this.addScript(val,'https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js');
	  				//console.log(reData);
					if(re.data.code===200){
						this.isloading = false;
					}
			    }).catch( (e) => {
			    	console.log(e);
			    })
		  	},
		  	//多个地方使用会造成冲突,需动态添加热力图,且需在地图构建前将热力图引入进来
		  	addScript(val,src){
                let _self = this;
                var oS=document.createElement('script');
                //oS.src='https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js';
                oS.src=src;
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
                         this.addIconAnimation(map,lon,lat,val)
                    }
            },
            rodomMap(val){
            	const _self= this;
            	let lenObj = {
            		 '全部':{lng:119.923671,lat:29.506494,zoom:13},
		            '仙华山':{lng:119.923732,lat:29.514781,zoom:14},
		            '前吴村':{lng:119.831585,lat:29.461901,zoom:14},
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
		            '翠湖':{lng:119.879563,lat:29.460438,zoom:15},
		            '马岭':{lng:119.778974,lat:29.5674,zoom:14},
		            '利民村':{lng:119.852974,lat:29.570912,zoom:14},
		            '下湾村':{lng:119.842452,lat:29.569144,zoom:14},
		            '新光村':{lng:119.826415,lat:29.571845,zoom:14},
		            '西山村':{lng:119.884387,lat:29.463871,zoom:14},
		            '田后蓬':{lng:119.797108,lat:29.617633,zoom:14},
		            '薛下庄村':{lng:119.86882,lat:29.542146,zoom:14},
		            '下薛宅':{lng:119.867063,lat:29.532904,zoom:14},
		            '金狮湖':{lng:119.91158,lat:29.459057,zoom:14},
		            '高速路':{lng:120.035609,lat:29.445624,zoom:14},
		            '官岩寺':{lng:120.037393,lat:29.457562,zoom:14},
		            '上山遗址':{lng:119.982268,lat:29.459398,zoom:14},
		            '渠南村':{lng:119.981877,lat:29.454304,zoom:14},
		            '温泉':{lng:119.904378,lat:29.496666,zoom:14},
		            '水晶城':{lng:119.919845,lat:29.44109,zoom:14},
		            '水竹湾':{lng:119.854398,lat:29.659571,zoom:14},
		            '平湖森林果园':{lng:119.930433,lat:29.626957,zoom:14},
		            '三角潭林场':{lng:119.87587,lat:29.462863,zoom:15},
		            '罗家村':{lng:119.869459,lat:29.662849,zoom:14},
		            '白岩山前滑草基地':{lng:119.882467,lat:29.59094,zoom:14},
		            '里黄宅村':{lng:119.797415,lat:29.441304,zoom:14},
		            '善庆村':{lng:119.855531,lat:29.498886,zoom:14},
		            '文化馆':{lng:119.902428,lat:29.459172,zoom:15},
		            '通济桥水库大坝':{lng:119.848248,lat:29.44639,zoom:14},
		            '三城山农庄':{lng:120.00538,lat:29.477826,zoom:15},
		            '塔山宾馆':{lng:119.902281,lat:29.460145,zoom:15},
		            '月泉书院遗址公园':{lng:119.892902,lat:29.471208,zoom:15}
            	}
            	
            	
            	
            //绘制牵引线
            var map = new BMap.Map("XSDFXPages",{enableMapClick:true});
            map.addEventListener("mousedown",function(e){
                _self.videoToast=false;
            },false)
            
            // 初始化地图,设置中心点坐标和地图级别
            map.centerAndZoom(new BMap.Point(119.923671,29.506494),12);
            // 添加地图类型控件
             map.addControl(new BMap.MapTypeControl());  
            // 设置地图显示的城市 此项是必须设置的
            map.setCurrentCity("浦江");    
            // 开启鼠标滚轮缩放      
            map.enableScrollWheelZoom(true);
             _self.addControl(map);
            _self.addIcon(map,lenObj[val  ===  undefined ?"全部": val].lng,lenObj[val  ===  undefined ?"全部": val].lat,val);
          	 _self.addMenu(map);
          	_self.currentNum(map);
             if(!lenObj[val]){
               	return
               }
                _self.moveTo(map,lenObj[val  ===  undefined ?"全部": val].lng,lenObj[val  ===  undefined ?"全部": val].lat,lenObj[val  ===  undefined ?"全部": val].zoom,val,lenObj);
            
            }
        },
    }
</script>
