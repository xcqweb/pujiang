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
                    color:'black',
                },
                data:[{
                    icon:'circle',
                    name:'0-17'
                }, {
                    icon:'circle',
                    name:'18-24'
                }, {
                    icon:'circle',
                    name:'25-29'
                }, {
                    icon:'circle',
                    name:'30-34'
                }, {
                    icon:'circle',
                    name:'35-39'
                }, {
                    icon:'circle',
                    name:'40-44'
                }, {
                    icon:'circle',
                    name:'45-49'
                }, {
                    icon:'circle',
                    name:'50-54'
                }, {
                    icon:'circle',
                    name:'55以上'
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
                            formatter: function(params){
                                return Math.round(params.percent) === 0 ? '' : Math.round(params.percent)+"%"  ;
                            },
                        },
                        emphasis:{
                            show: false
                        }
                },
                data:[
            {value:335, name:'0-17'},
            {value:231, name:'18-24'},
            {value:174, name:'25-29'},
            {value:135, name:'30-34'},
            {value:237, name:'35-39'},
            {value:432, name:'40-44'},
            {value:135, name:'45-49'},
            {value:93, name:'50-54'},
            {value:111, name:'55以上'},
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
