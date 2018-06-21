/**
 * Created by zhuzhiyang on 2016/12/29
 * 全局公用组件store
 */
import { } from '../mutation_types'

const state = {
  token:'',
  //浦江
   stateB:{
        title:'浦江县全域旅游大数据中心',
        data:{
            name:'浦江县',
            inItems:[
                {outProvince:80,name:'杭州',},
                {outProvince:60,name:'金华',},
                {outProvince:50,name:'宁波',},
                {outProvince:30,name:'台州',},
                {outProvince:20,name:'温州',},
                {outProvince:10,name:'义马',},
                {outProvince:10,name:'绍兴',},
                {outProvince:10,name:'温岭',}
            ],
            placeAttractions:[
                {numb:'2001',place:'江南第一家',rise:'up',percent:'423'},
                {numb:'902',place:'仙华山',rise:'down',percent:'423'},
                {numb:'1003',place:'神丽峡',rise:'up',percent:'423'},
                {numb:'2304',place:'官岩山',rise:'up',percent:'423'},
                {numb:'1405',place:'白石洲风景区',rise:'up',percent:'423'},
                {numb:'1326',place:'金狮湖',rise:'up',percent:'423'}
            ],
            comment:{
                name:'静静',
                place:'北京',
                context:'...位于历史文化古城连州以北26公里处的东陂镇大洞村境内，是一处巧夺天工的亚热带喀斯特地貌的典型巨型天然石灰岩溶洞，因为洞口广阔，仿佛一个大嘴巴，所以当地居民称之为大口岩。'
            }
        }
  },
  //清远
    stateA:{
        title:'浦江县旅游大数据应用和应急管理指挥平台',
        data :{
            name:'浦江',
            inItems:[
                {outProvince:80,name:'广州',},
                {outProvince:60,name:'深圳',},
                {outProvince:50,name:'珠海',},
                {outProvince:30,name:'东莞',},
                {outProvince:20,name:'汕头',},
                {outProvince:10,name:'惠州',},
                {outProvince:10,name:'汕尾',},
                {outProvince:10,name:'中山',},
            ],
            placeAttractions:[
                {numb:'1,2001',place:'连州地下河 ',rise:'up',percent:'423',},
                {numb:'9,012',place:'古龙峡漂流 ',rise:'down',percent:'423',},
                {numb:'8,003',place:'宝晶宫 ',rise:'up',percent:'423',},
                {numb:'6,304',place:'笔架山',rise:'up',percent:'423',},
                {numb:'6,105',place:'千年瑶寨',rise:'up',percent:'423',},
                {numb:'4,326',place:'洞天仙境 ',rise:'up',percent:'423',}
            ],
            comment:{
                name:'雯雯',
                place:'上海',
                context:'...位于历史文化古城连州以北26公里处的东陂镇大洞村境内，是一处巧夺天工的亚热带喀斯特地貌的典型巨型天然石灰岩溶洞，因为洞口广阔，仿佛一个大嘴巴，所以当地居民称之为大口岩。'
            }
        }
    }
}

const getters = {
  title: state => state.stateB.title,
  name : state => state.stateB.data.name,
  inItems : state => state.stateB.data.inItems,
  placeAttractions : state => state.stateB.data.placeAttractions,
  comment : state => state.stateB.data.comment,
}
export default{
  state,
  getters,
}
