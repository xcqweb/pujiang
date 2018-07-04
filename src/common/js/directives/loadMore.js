import _ from 'lodash'
export default {
    // 指令的定义
    update: function (el,binding,vnode) {
    	//默认值
    	var props={
    		event:'scroll'
    	}
    	
    	//注册事件
    	 el.addEventListener(props.event, function(event) {
            loadMore(event, el,vnode);
        });
        
       var num=1;
       var  loadMore =  _.debounce( (e,el,vnode) => {//去抖函数
       	
       	var scrollT = Math.ceil(e.target.scrollTop+e.target.clientHeight),
		    offsetT = e.target.getElementsByClassName('msg')[0].offsetHeight;
        	if(offsetT-scrollT<=20){
    				
	       			let paramsObj = {
		                code:vnode.context.code,
		                limit:20,
		                curPage:num++,
		            }
		       		vnode.context.request(paramsObj)
        	}
       },300)
    },
    unbind:function(el){
    }
    
}