 //封装echarts随容器自适应
 const echarts_id= '';
 const _self =null;
 const echarts_resize=function a(echart_id,_self,datax,datay) {

	if (document.body.clientWidth < 420) {
		_self.redom(echart_id,12,datax,datay);
	} else {
		_self.redom(echart_id,15,datax,datay);
	}
	var resizeTimer = null;
	//同一页面多个resize事件，如果用window.resize容易冲突
	window.addEventListener('resize',function() {
	//解决resize,触发两次，使用setTimeout
	if (resizeTimer) clearTimeout(resizeTimer);
		resizeTimer = window.setTimeout(function() {
			//销毁已挂载的echart实例
			if(_self.chart){
				_self.chart.dispose();
			}
			_self.redom(echart_id,12,datax,datay);
		}, 330);
	},false);
	}

export default echarts_resize
