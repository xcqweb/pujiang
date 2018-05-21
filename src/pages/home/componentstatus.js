
let sleckte = resolve => {require.ensure(['@/components/commonui/dropdown/dropdown-menu.vue'], () => {resolve(require('@/components/commonui/dropdown/dropdown-menu.vue'))})}

let clock = resolve => {require.ensure(['@/components/commonui/clock.vue'], () => {resolve(require('@/components/commonui/clock.vue'))})}

let vdate = resolve => {require.ensure(['@/components/commonui/vueDate/app.vue'], () => {resolve(require('@/components/commonui/vueDate/app.vue'))})}

let dateSelect = resolve => {require.ensure(['@/components/commonui/vueDate/dateSelect.vue'], () => {resolve(require('@/components/commonui/vueDate/dateSelect.vue'))})}

//客流分析__bar
let A1 = resolve => {require.ensure(['@/pages/home/vcomponent/vtopOne.vue'], () => {resolve(require('@/pages/home/vcomponent/vtopOne.vue'))})}

//概况
let A2 = resolve => {require.ensure(['@/pages/home/vcomponent/vprofies.vue'], () => {resolve(require('@/pages/home/vcomponent/vprofies.vue'))})}

//客流总数，经济分析，富民指数
let A3 = resolve => {require.ensure(['@/pages/home/vcomponent/vtopThree.vue'], () => {resolve(require('@/pages/home/vcomponent/vtopThree.vue'))})}

//客户满意度
let A4 = resolve => {require.ensure(['@/pages/home/vcomponent/vcontentment.vue'], () => {resolve(require('@/pages/home/vcomponent/vcontentment.vue'))})}

//实时监控
let A5 = resolve => {require.ensure(['@/pages/home/vcomponent/vtimeOn.vue'], () => {resolve(require('@/pages/home/vcomponent/vtimeOn.vue'))})}

//map国内游客来源地
let A6 = resolve => {require.ensure(['@/pages/home/vcomponent/vchart_map.vue'], () => {resolve(require('@/pages/home/vcomponent/vchart_map.vue'))})}

//游客来源排行
let A7 = resolve => {require.ensure(['@/pages/home/vcomponent/vrinking.vue'], () => {resolve(require('@/pages/home/vcomponent/vrinking.vue'))})}






//客流预警
let B2 = resolve => {require.ensure(['@/pages/home/b/b2.vue'], () => {resolve(require('@/pages/home/b/b2.vue'))})}

//实时天气
let B6 = resolve => {require.ensure(['@/pages/home/b/b6.vue'], () => {resolve(require('@/pages/home/b/b6.vue'))})}

//产业数据
let B17 = resolve => {require.ensure(['@/pages/home/b/b17.vue'], () => {resolve(require('@/pages/home/b/b17.vue'))})}

//出行方式
let C1 = resolve => {require.ensure(['@/pages/home/c/c1.vue'], () => {resolve(require('@/pages/home/c/c1.vue'))})}
//游客年龄分析
let C2 = resolve => {require.ensure(['@/pages/home/c/c2.vue'], () => {resolve(require('@/pages/home/c/c2.vue'))})}

//游客男女比率
let C4 = resolve => {require.ensure(['@/pages/home/c/c4.vue'], () => {resolve(require('@/pages/home/c/c4.vue'))})}
//游客详细客源地分析
let C5 = resolve => {require.ensure(['@/pages/home/c/c5.vue'], () => {resolve(require('@/pages/home/c/c5.vue'))})}
//游客关注点
let C6 = resolve => {require.ensure(['@/pages/home/c/c6.vue'], () => {resolve(require('@/pages/home/c/c6.vue'))})}
//景区游客排行
let C7 = resolve => {require.ensure(['@/pages/home/c/c7.vue'], () => {resolve(require('@/pages/home/c/c7.vue'))})}
//游客来源排行
let C8 = resolve => {require.ensure(['@/pages/home/c/c8.vue'], () => {resolve(require('@/pages/home/c/c8.vue'))})}
//游客属性分析
let C9 = resolve => {require.ensure(['@/pages/home/c/c9.vue'], () => {resolve(require('@/pages/home/c/c9.vue'))})}
//分析关注渠道
let C10 = resolve => {require.ensure(['@/pages/home/c/c10.vue'], () => {resolve(require('@/pages/home/c/c10.vue'))})}
//餐饮排行
let C15 = resolve => {require.ensure(['@/pages/home/c/c15.vue'], () => {resolve(require('@/pages/home/c/c15.vue'))})}

let D1 = () => import('@/pages/home/d/d1.vue');


//游客餐饮消费分析
let D2 = resolve => {require.ensure(['@/pages/home/d/d2.vue'], () => {resolve(require('@/pages/home/d/d2.vue'))})}
//游客舆论
let D3 = resolve => {require.ensure(['@/pages/home/d/d3.vue'], () => {resolve(require('@/pages/home/d/d3.vue'))})}

//景区当前游客
let D6 = resolve => {require.ensure(['@/pages/home/d/d6.vue'], () => {resolve(require('@/pages/home/d/d6.vue'))})}

//景区周边交通拥堵指数
let D8 = resolve => {require.ensure(['@/pages/home/d/d8.vue'], () => {resolve(require('@/pages/home/d/d8.vue'))})}

//视频监控客流预警和拥堵指数
let D9 = resolve => {require.ensure(['@/pages/home/d/d9.vue'], () => {resolve(require('@/pages/home/d/d9.vue'))})}
let D10 = resolve => {require.ensure(['@/pages/home/d/d10.vue'], () => {resolve(require('@/pages/home/d/d10.vue'))})}
//旅游关键字
let D11 = resolve => {require.ensure(['@/pages/home/d/d11.vue'], () => {resolve(require('@/pages/home/d/d11.vue'))})}

//存放当前模块状态，数组字符串
let status =[
    'sleckte',
    'vdate',
    'clock',
    'dateSelect',
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'B2',
    'B6',
    'B17',
    'C1',
    'C2',
    'C4',
    'C5',
    'C6',
    'C7',
    'C8',
    'C9',
    'C10',
    'C15',
    'D1',
    'D2',
    'D3',
    'D6',
    'D8',
    'D9',
    'D10',
    'D11'
    ]
let conponets={}
//字符串转对象变量
for (var i = 0; i < status.length; i++) {
let index=status[i]
conponets[index]=eval(index)
}
export default conponets;
