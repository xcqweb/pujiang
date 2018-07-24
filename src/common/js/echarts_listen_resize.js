 //封装echarts随容器自适应
 const echarts_id= '';
 const _self =null;
 const echarts_listen_resize=function a(echart_id,_self) {
        var resizeTimer = null;
        //同一页面多个resize事件，如果用window.resize容易冲突
        window.addEventListener('resize',function() {
            //解决resize,触发两次，使用setTimeout
          if (resizeTimer) clearTimeout(resizeTimer);
          resizeTimer = window.setTimeout(function() {
            _self.redom(echart_id);
          }, 330);
        },false);
      }

export default echarts_listen_resize