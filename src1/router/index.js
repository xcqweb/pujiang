import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/index.js'
import Axios from 'axios'
const NotFound =resolve => require(['@/pages/404.vue'], resolve);
const Login =resolve => require(['@/pages/login/login.vue'], resolve);
const LoginTwo =resolve => require(['@/pages/login/logintwo.vue'], resolve);
const loginthree =resolve => require(['@/pages/login/loginthree.vue'], resolve);
const loginfour =resolve => require(['@/pages/login/loginfour.vue'], resolve);
const loginfive =resolve => require(['@/pages/login/loginfive.vue'], resolve);
const loginsix =resolve => require(['@/pages/login/loginsix.vue'], resolve);
const loginseven =resolve => require(['@/pages/login/loginseven.vue'], resolve);
// const homepage = resolve => {require.ensure(['@/pages/homepage.vue'], () => {resolve(require('@/pages/homepage.vue'))})}
const homepage = resolve => {require.ensure(['@/pages/home/tabPage/homepage.vue'], () => {resolve(require('@/pages/home/tabPage/homepage.vue'))})}
const Precision = resolve => {require.ensure(['@/pages/home/tabPage/precision.vue'], () => {resolve(require('@/pages/home/tabPage/precision.vue'))})}
const prodcut = resolve => {require.ensure(['@/pages/home/tabPage/prodcut.vue'], () => {resolve(require('@/pages/home/tabPage/prodcut.vue'))})}
const souceShow = resolve => {require.ensure(['@/pages/home/tabPage/souceShow.vue'], () => {resolve(require('@/pages/home/tabPage/souceShow.vue'))})}
const homemain = resolve => {require.ensure(['@/pages/homemain.vue'], () => {resolve(require('@/pages/homemain.vue'))})}
const loginmain = resolve => {require.ensure(['@/pages/loginmain.vue'], () => {resolve(require('@/pages/loginmain.vue'))})}

const test =resolve => require(['@/pages/test.vue'], resolve);

Vue.use(Router)
const router= new Router({
  routes: [
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/login',
        component: loginmain,
        name: '',
        children: [
            { path: '', component: Login, name: 'Login' },
            { path: 'pagetwo', component: LoginTwo, name: 'LoginTwo' },
            { path: 'pagethree', component: loginthree, name: 'loginthree' },
            { path: 'pagefour', component: loginfour, name: 'loginfour' },
            { path: 'pagefive', component: loginfive, name: 'loginfive' },
            { path: 'pagesix', component: loginsix, name: 'loginsix' },
            { path: 'pageseven', component: loginseven, name: 'loginseven' },
        ]
    },
     {
        path: '/',
        component: homemain,
        name: '',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '', component: homepage, name: 'homepage' },
            { path: 'prodcut', component: prodcut, name: 'prodcut' },
            { path: 'precision', component: Precision, name: 'Precision' },
            { path: 'souceShow', component: souceShow, name: 'souceShow' },
        ]
    },
  ]
})
//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  //获取store里面的token
  let token = window.localStorage.getItem('token');
  
  //判断要去的路由有没有requiresAuth
  if(to.meta.requiresAuth){
    if(token){
      next();
    }else{
      next({
        path: '/login',
        // query: {redirect: to.fullPath}   将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  }else{
    next();//如果无需token,那么随它去吧
  }
});
export default router