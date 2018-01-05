let echarts_id= '';
let _self =null;
let sheet={
    
    //将获取到的一个时间段的总数分割成若干小时间的的数组
    //封装echarts随容器自适应
    echartRL:function(echart_id,_self,redom=false){
        var resizeTimer = null;
        if (_self.redom) {
            if(_self.chart){
                _self.chart.dispose();
            }
            _self.redom(echart_id);
        }
        //同一页面多个resize事件，如果用window.resize容易冲突
        window.addEventListener('resize',function() {
            //解决resize,触发两次，使用setTimeout
            if (resizeTimer) clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(function() {
            if(_self.chart){
                _self.chart.dispose();
            }
            _self.redom(echart_id);
            }, 330);
        },false);
    },
    echartL:function(echart_id,_self,redom=false){
        var resizeTimer = null;
        //同一页面多个resize事件，如果用window.resize容易冲突
        window.addEventListener('resize',function() {
            //解决resize,触发两次，使用setTimeout
            if (resizeTimer) clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(function() {
            if(_self.chart){
                _self.chart.dispose();
            }
            _self.redom(echart_id);
            }, 330);
        },false);
    },
    $ev:function(){
        var $ev = function(el) {
            return new _$(el);    
        };
        var _$ = function(el) {
            this.el = (el && el.nodeType == 1)? el: document;
        };
        _$.prototype = {
            constructor: _$,
            addEvent: function(type, fn, capture) {
                var el = this.el;
                
                if (window.addEventListener) {
                    el.addEventListener(type, fn, capture);
        
                    var ev = document.createEvent("HTMLEvents");
                    ev.initEvent(type, capture || false, false);
                    // 在元素上存储创建的事件，方便自定义触发
                    if (!el["ev" + type]) {
                        el["ev" + type] = ev;
                    }
                    
                } else if (window.attachEvent) {
                    el.attachEvent("on" + type, fn);    
                    if (isNaN(el["cu" + type])) {
                        // 自定义属性，触发事件用
                        el["cu" + type] = 0; 
                    }
                    
                    var fnEv = function(event) {
                        if (event.propertyName == "cu" + type) {
                            fn.call(el);
                        }
                    };
                    
                    el.attachEvent("onpropertychange", fnEv);
                    
                    // 在元素上存储绑定的propertychange事件，方便删除
                    if (!el["ev" + type]) {
                        el["ev" + type] = [fnEv];
                    } else {
                        el["ev" + type].push(fnEv);    
                    }
                }
                
                return this;
            },
            fireEvent: function(type) {
                var el = this.el;
                if (typeof type === "string") {
                    if (document.dispatchEvent) {
                        if (el["ev" + type]) {
                            el.dispatchEvent(el["ev" + type]);
                        }
                    } else if (document.attachEvent) {
                        // 改变对应自定义属性，触发自定义事件
                        el["cu" + type]++;
                    }    
                }    
                return this;
            },
            removeEvent: function(type, fn, capture) {
                var el = this.el;
                if (window.removeEventListener) {
                    el.removeEventListener(type, fn, capture || false);
                } else if (document.attachEvent) {
                    el.detachEvent("on" + type, fn);
                    var arrEv = el["ev" + type];
                    if (arrEv instanceof Array) {
                        for (var i=0; i<arrEv.length; i+=1) {
                            // 删除该方法名下所有绑定的propertychange事件
                            el.detachEvent("onpropertychange", arrEv[i]);
                        }
                    }
                }
                return this;    
            }
        };
        return $ev
    }
    
}
export default sheet