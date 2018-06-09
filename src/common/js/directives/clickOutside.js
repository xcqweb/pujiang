export default {
	bind:function(el,{value}){
		let clickOutside = value
		el.handler = function(e){
			if(el && !el.contains(e.target)){//如果点击事件不在绑定元素里面,执行绑定的表达式
				clickOutside(e)
			}
		}
		document.addEventListener('click',el.handler,false) //监听
	},
	unbind:function(el){
		document.removeEventListener('click',el.handler,false)
		el.handler = null
	}
}