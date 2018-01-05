<template>
    <!--地图容器-->
    <div id="XSDFXPage" class="XSDFXPage"></div>
</template>
<script>
    export default {
        name:'',
        data () {
            return {

            }
        },
        methods:{
            mapMoveSelf(map){
                console.log(map)
                setTimeout(function(){
                    map.panTo(new BMap.Point(119.906441,29.457793));
                }, 1000);
                setTimeout(function(){
                    map.setZoom(14);
                },4000);
            },
            addIcon(map){
                var points = [
                        [120.018874,29.48683],
                        [119.923671,29.514494],
                        [119.906441,29.457793],
                        [119.965029,29.403953],
                        [119.915029,29.303953],
                        [119.935029,29.203953],
                        [119.945029,29.453953],
                        [119.765029,29.363953]
                    ];
                // 向地图添加标注
                for( var i = 0;i < points.length; i++){
                //定义新图标
                var myIcon = new BMap.Icon(require("../../assets/images/wifi.png"), new BMap.Size(44, 44), {
                // 指定定位位置
                offset: new BMap.Size(10, 25),
                // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置 
                //imageOffset: new BMap.Size(0, 0 - i * 25)  设置图片偏移 
                });
                var point = new BMap.Point(points[i][0],points[i][1]);
                // 创建标注对象并添加到地图 
                var marker = new BMap.Marker(point,{icon: myIcon});
                map.addOverlay(marker);
                };
                //添加新图标的监听事件
                marker.addEventListener('click',function(){
                    var p = marker1.getPosition();//获取位置
                    // alert("点击的位置是：" + p.lng + ',' + p.lat);
                })
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
                map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL}));
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
                var beijingPosition=new BMap.Point(116.432045,39.910683),
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
        },
        mounted() {
            // 百度地图API功能
            // 创建Map实例
            const _self= this;
            var map = new BMap.Map("XSDFXPage",{enableMapClick:true});
            // 初始化地图,设置中心点坐标和地图级别
            map.centerAndZoom(new BMap.Point(119.906441,29.457793), 11);
            // 添加地图类型控件
            map.addControl(new BMap.MapTypeControl());  
            // 设置地图显示的城市 此项是必须设置的
            map.setCurrentCity("浦江");    
            // 开启鼠标滚轮缩放      
            map.enableScrollWheelZoom(true);
            // 设置定时器，对地图进行自动移动
            // this.mapMoveSelf
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
            _self.addControlCityList(map);
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
        } 
    }
</script>
<style lang="less" scoped>
.XSDFXPage{
    width: 100%;
    height: 90%;
    padding-top:8%;
    overflow: hidden;
    margin: 0;
    font-family: "微软雅黑";
}
</style>