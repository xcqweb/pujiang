
let headerBody = resolve => {require.ensure(['@/pages/home/header.vue'], () => {resolve(require('@/pages/home/header.vue'))})}
let topBody = resolve => {require.ensure(['@/pages/home/topBody.vue'], () => {resolve(require('@/pages/home/topBody.vue'))})}
let bottomBody = resolve => {require.ensure(['@/pages/home/bottomBody.vue'], () => {resolve(require('@/pages/home/bottomBody.vue'))})}
let sleckte = resolve => {require.ensure(['@/components/commonui/dropdown/dropdown-menu.vue'], () => {resolve(require('@/components/commonui/dropdown/dropdown-menu.vue'))})}
let clock = resolve => {require.ensure(['@/components/commonui/clock.vue'], () => {resolve(require('@/components/commonui/clock.vue'))})}

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
//营销推广__pie
let A8 = resolve => {require.ensure(['@/pages/home/vcomponent/vpercenPie.vue'], () => {resolve(require('@/pages/home/vcomponent/vpercenPie.vue'))})}
//视频监控
let A9 = resolve => {require.ensure(['@/pages/home/vcomponent/vvideo.vue'], () => {resolve(require('@/pages/home/vcomponent/vvideo.vue'))})}
//消费属性分析

//富民指数
let B1 = resolve => {require.ensure(['@/pages/home/b/b1.vue'], () => {resolve(require('@/pages/home/b/b1.vue'))})}
//客流预警
let B2 = resolve => {require.ensure(['@/pages/home/b/b2.vue'], () => {resolve(require('@/pages/home/b/b2.vue'))})}
//路况监控
let B4 = resolve => {require.ensure(['@/pages/home/b/b4.vue'], () => {resolve(require('@/pages/home/b/b4.vue'))})}

//拥堵指数
let B5 = resolve => {require.ensure(['@/pages/home/b/b5.vue'], () => {resolve(require('@/pages/home/b/b5.vue'))})}
//实时天气
let B6 = resolve => {require.ensure(['@/pages/home/b/b6.vue'], () => {resolve(require('@/pages/home/b/b6.vue'))})}
//省内游客来源地
let B7 = resolve => {require.ensure(['@/pages/home/b/b7.vue'], () => {resolve(require('@/pages/home/b/b7.vue'))})}
//村庄收益指数
let B8 = resolve => {require.ensure(['@/pages/home/b/b8.vue'], () => {resolve(require('@/pages/home/b/b8.vue'))})}
//游客与景区分布
let B9 = resolve => {require.ensure(['@/pages/home/b/b9.vue'], () => {resolve(require('@/pages/home/b/b9.vue'))})}
//交通预警
let B10 = resolve => {require.ensure(['@/pages/home/b/b10.vue'], () => {resolve(require('@/pages/home/b/b10.vue'))})}
//
let B16 = resolve => {require.ensure(['@/pages/home/b/b16.vue'], () => {resolve(require('@/pages/home/b/b16.vue'))})}
//产业数据
let B17 = resolve => {require.ensure(['@/pages/home/b/b17.vue'], () => {resolve(require('@/pages/home/b/b17.vue'))})}

//出行方式
let C1 = resolve => {require.ensure(['@/pages/home/c/c1.vue'], () => {resolve(require('@/pages/home/c/c1.vue'))})}
//游客年龄分析
let C2 = resolve => {require.ensure(['@/pages/home/c/c2.vue'], () => {resolve(require('@/pages/home/c/c2.vue'))})}
//游客热力图
let C3 = resolve => {require.ensure(['@/pages/home/c/c3.vue'], () => {resolve(require('@/pages/home/c/c3.vue'))})}
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
//热敏图与视频监控
//let D1 =resolve => {require.ensure(['@/pages/home/d/d1.vue'], () => {resolve(require('@/pages/home/d/d1.vue'))})}

let D1 = () => import('@/pages/home/d/d1.vue');

//let D1 = function(resolve){
//	return require.ensure('@/pages/home/d/d1.vue',function(){
//		return resolve(require('@/pages/home/d/d1.vue'))
//	})
//}

//游客餐饮消费分析
let D2 = resolve => {require.ensure(['@/pages/home/d/d2.vue'], () => {resolve(require('@/pages/home/d/d2.vue'))})}
//游客舆论
let D3 = resolve => {require.ensure(['@/pages/home/d/d3.vue'], () => {resolve(require('@/pages/home/d/d3.vue'))})}
//景区收益分析
let D4 = resolve => {require.ensure(['@/pages/home/d/d4.vue'], () => {resolve(require('@/pages/home/d/d4.vue'))})}
//厕所使用率
let D5 = resolve => {require.ensure(['@/pages/home/d/d5.vue'], () => {resolve(require('@/pages/home/d/d5.vue'))})}
//景区当前游客
let D6 = resolve => {require.ensure(['@/pages/home/d/d6.vue'], () => {resolve(require('@/pages/home/d/d6.vue'))})}
//游客支付方式
let D7 = resolve => {require.ensure(['@/pages/home/d/d7.vue'], () => {resolve(require('@/pages/home/d/d7.vue'))})}
//景区周边交通拥堵指数
let D8 = resolve => {require.ensure(['@/pages/home/d/d8.vue'], () => {resolve(require('@/pages/home/d/d8.vue'))})}
//旅游关键字
let D11 = resolve => {require.ensure(['@/pages/home/d/d11.vue'], () => {resolve(require('@/pages/home/d/d11.vue'))})}

//存放当前模块状态，数组字符串
let status =[
    'sleckte',
    'clock',
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'A8',
    'A9',
    'B1',
    'B2',
    'B4',
    'B5',
    'B6',
    'B7',
    'B8',
    'B9',
    'B10',
    'B16',
    'B17',
    'C1',
    'C2',
    'C3',
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
    'D4',
    'D5',
    'D6',
    'D7',
    'D8',
    'D11'
    ]
let conponets={}
//字符串转对象变量
for (var i = 0; i < status.length; i++) {
let index=status[i]
conponets[index]=eval(index)
}
export default conponets;
