<template>
    <div class="content">
        <div id="c2"></div>
    </div>  
</template>

<script type="text/javascript">
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts'
import adaptation from '@/common/js/mixin/adaptation.js'
export default {
    name:'c2',
    // mixins: [adaptation],
    data(){
    return{
        option:{
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color:['#FF8885','#57ABFE', '#368DF7', '#7E6AF6', '#E39A50','#FFCD38',  '#4EBBFC', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD'],
          legend:{
                show:true,
                orient: 'vertical',
                top:'40%' ,
                left:'53%',
                width:'20%',
                height:'45%',
                itemGap:10,
                itemWidth:15,
                itemHeight:10,
                textStyle:{
                    color:'#fff',
                    fontSize:'90%'
                },
                data:[{
                    icon:'circle',
                    name:'19岁以下'
                }, {
                    icon:'circle',
                    name:'19-25'
                }, {
                    icon:'circle',
                    name:'26-35'
                }, {
                    icon:'circle',
                    name:'36-45'
                }, {
                    icon:'circle',
                    name:'46-55'
                }, {
                    icon:'circle',
                    name:'55岁以上'
                }],
            },
          series : [
              {
                name:'访问来源',
                type:'pie',
                radius : '70%',
                center: ['27%', '60%'],
                // selecteMode:'single',
                // selectedOffset:30,
                // roseType:"area",
                startAngle:90,
                labelLine: {
                    normal: {
                        show: false,
                    }
                },
                // animation:false,
                animationType:'expansion',
                label:{
                    normal:{
                            show: true,
                            position: 'inner',
                            textStyle:{
                            	fontSize:"90%",
                            	color:'#eee'
                            },
                            formatter: function(params){
                                return Math.round(params.percent) === 0 ? '' : Math.round(params.percent)+"%"  ;
                            },
                        },
                        emphasis:{
                            show: false
                        }
                },
                data:[
            {value:335, name:'19岁以下'},
            {value:231, name:'19-25'},
            {value:174, name:'26-35'},
            {value:135, name:'36-45'},
            {value:237, name:'46-55'},
            {value:111, name:'55岁以上'}
        ],
      }],
    }
    }
    },
    methods:{
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            let w=this.chart.getWidth()
            let d=this.chart.getDom()
            this.chart.setOption(this.option);

        }
    },
    mounted() {
          this.$nextTick($sheet.echartRL('c2',this))
    }
}
</script>

<style lang="less" scoped>
.content{
    width:100%;
    height:100%;
    position:relative;
}
#c2{
    width:100%;
    height:100%;
}

</style>
