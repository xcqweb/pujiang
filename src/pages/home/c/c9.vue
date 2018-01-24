<template>
<div class="content">
  <div id="c9"></div>
  <Loading v-show="isloading"></Loading>
</div>  
</template>

<script type="text/javascript">
import echarts_resize from '@/common/js/echarts_resize.js'
import echarts from 'echarts';
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
export default {
    name:'c9',
    data(){
    return{
    		isloading:false,
    		series:[]
    }
    },
    methods:{
    	//请求数据
	  	getData(){
	  		api.touristAttr(api.params).then( (re) =>{
	  				let reData = re.data.data;
	  				this.series = reData;
					if(re.status===200){
						this.isloading = false;
					}
					this.redom("c9");
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	},
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            let option = {
            color:['#4EBBFC','#57ABFE', '#368DF7', '#7E6AF6', '#FF8885','#FFCD38',  '#E39A50', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD'],
            calculable : true,
            tooltip : {
		        trigger: 'item',
		        	formatter: "{a} <br/>{b} : {c} ({d}%)"
		        },
            grid: {
                left: '15%',
                right: '20%',
                bottom: '5%',
                top:'28%',
                containLabel: true
            },
            series : [
                {
                    name:'消费偏好',
                    type:'pie',
                    radius : ['0%', '55%'],
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
                                fontSize:"85%",
                            }
                        },
                        emphasis:{
                            textStyle:{
                                fontStyle:'italic',
                                fontSize:"85%",
                            }
                        },

                    },
                    data: this.series,
                } 
            ]
        };
            this.chart.setOption(option);
        }
    },
    created(){
    	this.isloading = true;
    	this.getData();
    },
    mounted() {
      this.$nextTick(echarts_resize('c9',this))
    },
    components:{
    	Loading
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
