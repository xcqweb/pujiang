<template>
    <div class="content">
        <div id="c2"></div>
        <Loading v-show="isloading"></Loading>
    </div>
</template>

<script type="text/javascript">
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts'
import adaptation from '@/common/js/mixin/adaptation.js'
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
export default {
    name:'c2',
    // mixins: [adaptation],
    data(){
    return{
    	isloading:false,
    	series:[]
    }
    },
    methods:{
    	//请求数据
	  	getData(){
	  		api.ageAnalyse(api.params).then( (re) =>{
	  				let reData = re.data.data;
	  				this.series = reData;
					if(re.status===200){
						this.isloading = false;
					}
					this.redom("c2");
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	},
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            let w=this.chart.getWidth();
            let d=this.chart.getDom();
            let option = {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color:['#FF8885','#57ABFE', '#368DF7', '#7E6AF6', '#E39A50','#FFCD38',  '#4EBBFC', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD'],
          tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		   },
          legend:{
                show:true,
                orient: 'vertical',
                top:'30%' ,
                left:'50%',
                width:'26',
                height:'45%',
                itemGap:20,
                itemWidth:15,
                itemHeight:10,
                textStyle:{
                    color:'#fff',
                    fontSize:'82%'
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
                name:'年龄段',
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
                            	color:'#eee',
                            	fontFamily:'Courier New'
                            },
                            formatter: function(params){
                                return Math.round(params.percent) === 0 ? '' : Math.round(params.percent)+"%"  ;
                            },
                        },
                        emphasis:{
                            show: false
                        }
                },
                data:this.series,
      }],
    };
            this.chart.setOption(option);
        }
    },
    created(){
    	this.isloading = true;
    	this.getData();
    },
    mounted() {
        this.$nextTick($sheet.echartRL('c2',this))
    },
    components:{
    	Loading
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
