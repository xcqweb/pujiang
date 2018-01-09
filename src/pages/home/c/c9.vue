<template>
<div class="content">
  <div id="c9"></div>
</div>  
</template>

<script type="text/javascript">
import echarts_resize from '@/common/js/echarts_resize.js'
import echarts from 'echarts';
export default {
    name:'c9',
    data(){
    return{
        option: {
            color:['#4EBBFC','#57ABFE', '#368DF7', '#7E6AF6', '#FF8885','#FFCD38',  '#E39A50', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD'],
            calculable : true,
            grid: {
                left: '15%',
                right: '20%',
                bottom: '5%',
                top:'28%',
                containLabel: true
            },
            series : [
                {
                    name:'面积模式',
                    type:'pie',
                    radius : ['0%', '50%'],
                    center : ['50%', '55%'],
                    roseType : 'area',
                    lableLine:{
                        normal:{
                            show:true,
                            length:1,
                            length2:1,
                        }
                    },
                    lable:{
                        normal:{
                            show:false,
                            textStyle:{
                                fontStyle:'italic',
                                fontSize:"100%",
                            }
                        },
                        emphasis:{
                            textStyle:{
                                fontStyle:'italic',
                                fontSize:"100%",
                            }
                        },

                    },
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
                    ],
                } 
            ]
        },
    }
    },
    methods:{
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            this.chart.setOption(this.option);
        }
    },
    mounted() {
          this.$nextTick(echarts_resize('c9',this))
    }
}
</script>

<style lang="less" scoped>
#c9{
    width:100%;
    height:100%;
}
.content{
    width:100%;
    height:100%;
    position:relative;
}
#percent{
    width:100%;
    height:100%;
}
@media screen and (min-width: 1400px){
  ul{
    position:absolute;
    right:30px;
    top:30%;
    li{
        margin-top:10px;
        .circle{
            display:inline-block;
            height:8px;
            width:8px;
            margin-right:8px;
            border-radius:4px;
            background-color:red;
        }
    }

}
}
@media screen and (max-width: 1400px){
  ul{
    position:absolute;
    left:30px;
    top:5%;
    li{
        float:left;
        display:inline-block;
        font-size:.8rem;
        .circle{
            display:inline-block;
            height:8px;
            width:8px;
            margin-right:8px;
            border-radius:4px;
            background-color:red;
        }
    }

}
}
</style>
