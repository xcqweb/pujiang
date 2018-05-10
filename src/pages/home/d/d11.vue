<style lang="less" scoped>
.d11{
    height:100%;
    width:100%;
    color: white;
}
#chartId{
    width:100%;
    height:90%;
    margin-top: 3%;
}
</style>
<template>
    <div class="d11">
        <div id="chartId"></div>
        <Loading v-show="isloading"></Loading>
    </div>
</template>

<script>
import echarts_resize from '../../../common/js/echarts_resize.js'
// import d11sJson from '@/pages/home/showMore/bigComponent/json/d11s.json'
import echarts from 'echarts'
require('echarts-wordcloud');
import optionProps from '@/common/js/mixin/optionProps.js'
  export default {
    name:'d11',
    mixins: [optionProps],
    data() {
        return {
            chart:null,
            yunData:[],
            option : {
                tooltip: {},
                series: [{
                    name: '旅游关键词',
                    type: 'wordCloud',
                    gridSize: 20,
                    sizeRange: [12, 50],
                    rotationRange: [0, 0],
                    shape: 'circle',
                    textStyle: {
                        normal: {
                            color: function() {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 260),
                                    Math.round(Math.random() * 260),
                                    Math.round(Math.random() * 260)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [ ]
                }]
            }
        }
    },
    watch:{
    	code:function(val){
    		this.getData()
    	}
    },
    methods:{
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            var JosnList = [];
            JosnList.push(...this.yunData);
            
            this.option.series[0].data = JosnList;
            this.chart.setOption(this.option);
        },
        getData(){
        	api.params.code = this.code;
            api.getKeywords(api.params).then(re => {
            	let reData = re.data.data;
				//console.log(reData)
				let _self = this;
				reData.forEach( (item,index) => {
					
					_self.yunData[index]={name:item.word,value:item.num};
				})
				this.redom('chartId');
                if(re.status===200){
	    			this.isloading=false;
	    		}
            }).catch( (e) => {
		    	console.log(e);
		    })
        }
    },
    created () {
    },
    mounted(){
       this.$nextTick(echarts_resize('chartId',this))
    }
  }
</script>

