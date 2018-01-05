<template>
    <div class="like">
        <div class="choose">
            <vSelect class='vSelect' 
            :selectList="selectlist" 
            @click = 'showselect'
            ></vSelect>
            <vDate class='vueDate' @pageDate='getDate'></vDate>
        </div>
        <div class='vconsumeLike'>
          <h1>消费偏好</h1>
          <vFlowerEchart :optionLike='chartOption.top'></vFlowerEchart>
        </div>
        <div class='vuseLike'>
          <h1>应用兴趣</h1>
            <vFlowerEchart :optionLike='chartOption.mid'></vFlowerEchart>
        </div>
        <div class='vgameLike'>
          <h1>游戏偏好</h1>
            <vFlowerEchart :optionLike='chartOption.bot'></vFlowerEchart>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import vDate from '../../components/commonui/vueDate/app.vue'
import vSelect from '../../components/commonui/dropdown/dropdown-menu.vue'
import vFlowerEchart from './vFlowerEchart.vue'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: '',
  data () {
    return {
        selectlist:{
            title:'请选择',
            place:[
                {
                    name:'仙华山',value:'仙华山'
                },
                {
                    name:'张家界',value:'张家界'
                },
                {
                    name:'五架山',value:'五架山'
                }
            ]
        },
        chartOption:{
            top:{
                id:'vconsumeLike',
                data: [
                    {value: 22, name: '服饰鞋帽'},
                    {value: 29, name: '大众品牌'},
                    {value: 16, name: '奢侈品牌'},
                    {value: 46, name: '生活服务'},
                    {value: 20, name: '母婴用品'},
                    {value: 35, name: '数码'},
                    {value: 17, name: '珠宝手表'},
                    {value: 31, name: '化妆品'},
                    {value: 42, name: '休闲娱乐'},
                    {value: 23, name: '汽车服务'},
                    {value: 18, name: '金融'},
                    {value: 24, name: '亲子'}
                ]

            },
            mid:{
                id:'vuseLike',
                data:[
                    {value: 28, name: '网购'},
                    {value: 25, name: '教育'},
                    {value: 15, name: '阅读'},
                    {value: 25, name: '资讯'},
                    {value: 20, name: '社交'},
                    {value: 35, name: '娱乐'},
                    {value: 20, name: '影音'},
                    {value: 19, name: '家居'},
                    {value: 30, name: '健康'},
                    {value: 18, name: '金融理财'},
                    {value: 23, name: '房产'}
                ]
            },
            bot:{
                id:'vgameLike',
                data:
                [
                    {value: 16, name: '休闲时间'},
                    {value: 11, name: '跑酷竞速'},
                    {value: 15, name: '宝石消除'},
                    {value: 25, name: '网络游戏'},
                    {value: 20, name: '动作射击'},
                    {value: 35, name: '扑克棋牌'},
                    {value: 30, name: '儿童益智'},
                    {value: 38, name: '体育格斗'},
                    {value: 42, name: '角色扮演'},
                    {value: 29, name: '经营策略'},
                    {value: 17, name: '养成类'}
                ]
            }
        }
        
    }
  },
  computed: {
        ...mapGetters({
                selectstatus:'global/getSelectStatus'
        }) 
  },
  methods: {
        ...mapActions({
            showselect:'global/toggelSelect'
          }),
        getDate(value){
            console.log(value);
        },
  },
  components:{vDate,vFlowerEchart,vSelect
  }
}
</script>

<style lang="less" scoped>
.vconsumeLike,
.vuseLike,
.vgameLike{
    position:relative;
    margin-top:30px;
    height:420px;
    background:#FFFFFF;
}
h1{
  position: absolute;
  font-size: 1.5rem;
  left: 40px;
  top: 30px;
  z-index:999;
}
.choose{
    height:55px;
}
.vueDate{
    float:right;
    z-index:1888;
}
</style>