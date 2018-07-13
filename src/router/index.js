import Vue from 'vue'
import Router from 'vue-router'
import {getCookie} from '@/common/js/cookie/cookie.js'

const NotFound =resolve => require(['@/pages/404.vue'], resolve);
const Login =resolve => require(['@/pages/login/login.vue'], resolve);
const LoginTwo =resolve => require(['@/pages/login/logintwo.vue'], resolve);
const loginthree =resolve => require(['@/pages/login/loginthree.vue'], resolve);
const loginfour =resolve => require(['@/pages/login/loginfour.vue'], resolve);
const loginfive =resolve => require(['@/pages/login/loginfive.vue'], resolve);
const loginsix =resolve => require(['@/pages/login/loginsix.vue'], resolve);
const loginseven =resolve => require(['@/pages/login/loginseven.vue'], resolve);

const homepage = resolve => {require.ensure(['@/pages/home/tabPage/homepage.vue'], () => {resolve(require('@/pages/home/tabPage/homepage.vue'))})}
const homepage2 = resolve => {require.ensure(['@/pages/home/tabPage/homepage2.vue'], () => {resolve(require('@/pages/home/tabPage/homepage2.vue'))})}

const Video = resolve => {require.ensure(['@/pages/home/tabPage/video.vue'], () => {resolve(require('@/pages/home/tabPage/video.vue'))})}

const Precision = resolve => {require.ensure(['@/pages/home/tabPage/precision.vue'], () => {resolve(require('@/pages/home/tabPage/precision.vue'))})}

const prodcut = resolve => {require.ensure(['@/pages/home/tabPage/prodcut.vue'], () => {resolve(require('@/pages/home/tabPage/prodcut.vue'))})}

const souceShow = resolve => {require.ensure(['@/pages/home/tabPage/souceShow.vue'], () => {resolve(require('@/pages/home/tabPage/souceShow.vue'))})}

const iframeMap = resolve => {require.ensure(['@/pages/home/tabPage/iframeMap.vue'], () => {resolve(require('@/pages/home/tabPage/iframeMap.vue'))})}

const homemain = resolve => {require.ensure(['@/pages/homemain.vue'], () => {resolve(require('@/pages/homemain.vue'))})}

const loginmain = resolve => {require.ensure(['@/pages/loginmain.vue'], () => {resolve(require('@/pages/loginmain.vue'))})}


Vue.use(Router)
const router= new Router({
  //mode:'history',
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
            { path: '/', component: Login, name: 'Login'},
            { path: 'pagetwo', component: LoginTwo, name: 'LoginTwo'},
            { path: 'pagethree', component: loginthree, name: 'loginthree' },
            { path: 'pagefour', component: loginfour, name: 'loginfour' },
            { path: 'pagefive', component: loginfive, name: 'loginfive'},
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
            { path: '/', redirect:'video' ,meta:{requiresAuth:true}},
            { path: 'home', component: homepage, name: 'home' ,meta:{requiresAuth:true}},
            { path: 'video', component: Video, name: 'video' ,meta:{requiresAuth:true}},
            { path: 'prodcut', component: prodcut, name: 'prodcut',meta:{requiresAuth:true} },
            { path: 'precision', component: Precision, name: 'Precision',meta:{requiresAuth:true} },
            { path: 'souceShow', component: souceShow, name: 'souceShow' ,meta:{requiresAuth:true}},
            { path: 'iframeMap', component: iframeMap, name: 'iframeMap' ,meta:{requiresAuth:true}},
        ]
    },
  ]
})
//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  //获取store里面的token
  let token = getCookie('token');
  //判断要去的路由有没有requiresAuth
  if(to.meta.requiresAuth){
    if(token){
      next();
    }else{
    	router.replace('login')
    }
  }else{
    next();//如果无需token,那么随它去吧
  }
});
export default router