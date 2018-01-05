import Vue from 'vue'

const LoadingConstructor = Vue.extend(require('./loading2'))

let instance  = new LoadingConstructor({
    el: document.createElement('div')
});
LoadingConstructor.prototype.alert=(text,id)=>{
    if (instance.visiable) return
    instance.text = text || 'loading...'

    let dom =document.getElementById(id)

    dom.appendChild(instance.$el)
    Vue.nextTick(() => {
        instance.visiable = true

    })
}
LoadingConstructor.prototype.open = (obj) => {
    if (!instance) {
        instance = new LoadingConstructor({
            el: document.createElement('div')
        })
    }
        if (instance.visiable) return;
        instance.reload =obj. reload;
        instance.message = obj.message;
    if(obj.el){
        obj.el.appendChild(instance.$el);
            Vue.nextTick(() => {
            instance.visiable = true
        })
    }
        // pageScroll.lock();
};

LoadingConstructor.prototype.close = function () {
    Vue.nextTick(() => {
    instance.visiable = false
  })
};

window.$loading = instance

// export const toastInstance = (text) => {
//   if (!instance) {
//     instance = new Toast({
//       el: document.createElement('div')
//     })
//   }
//   if (instance.visiable) return
//   instance.text = text || '正在加载'
// console.log(instance.$el);
//   document.body.appendChild(instance.$el)
//   Vue.nextTick(() => {
//     instance.visiable = true
//     setTimeout(() => {
//       instance.visiable = false
//     }, 1000)
//   })
// }

