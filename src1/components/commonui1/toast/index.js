import Vue from 'vue'

const LoadingConstructor = Vue.extend(require('./toast'))

let instance  = new LoadingConstructor({
    el: document.createElement('div')
});
LoadingConstructor.prototype.alert=(text)=>{
  if (instance.visiable) return
  instance.text = text || '正在加载'
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visiable = true
    setTimeout(() => {
      instance.visiable = false
    }, 1000)
  })
}
LoadingConstructor.prototype.open = (item,current,moudle) => {
  if (!instance) {
  instance = new Toast({
    el: document.createElement('div')
  })
  }
  if (instance.visiable) return
  instance.numb = item
  instance.current = current
  instance.moudle = moudle
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visiable = true
  })
    // pageScroll.lock();
};

LoadingConstructor.prototype.close = function () {
    Vue.nextTick(() => {
    instance.visiable = false
  })
};

window.$toast = instance 

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

