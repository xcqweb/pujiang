<template>
  <div class="content">
    <div id="d5">
    </div>
    <!--<span>{{currentData.percent}}%</span>-->
    <Loading v-show="isloading"></Loading>
  </div>
</template>

<script type="text/javascript">
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name:'d5',
    mixins: [optionProps],
    data(){
    return{
    	currentData:{},
    	allData:{},
    	percent:0,
    	isloading:false,
        option:{
        	title: {
		        "text": '',
		        "x": '48%',
		        "y": '38%',
		        textAlign: "center",
		        "textStyle": {
		            "fontWeight": 'normal',
		            "fontSize": 26,
		             color:"#fff"
		        }
		    },
          backgroundColor: 'rgba(0,0,0,0)',
           series: [ 
       			 {
            "name": '正面',
            "type": 'pie',
            "radius": ['52%', '68%'],
            "avoidLabelOverlap": false,
            "startAngle": 225,
            "color": ["#7460EE", "transparent"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": '30',
                        "fontWeight": 'bold'
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 75,
                //"name": '1'
            }, {
                "value": 25,
                //"name": '2'
            }]
        }, 
     				 {
            "name": '反面',
            "type": 'pie',
            "radius": ['52%', '68%'],
            "avoidLabelOverlap": false,
            "startAngle": 317,
            "color": ["#fff", "transparent"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "clockwise": false,
            "itemStyle":{
                "normal":{
                    "borderColor":"transparent",
                    "borderWidth":"20"
                },
                "emphasis":{
                    "borderColor":"transparent",
                    "borderWidth":"20"
                }
            }
            ,
            "z":10,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": '30',
                        "fontWeight": 'bold'
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "name": ''
            }, {
                "name": ''
            }
            ]
        }

    ]
      },
    }
    },
    props:['place'],
    watch:{
    	//筛选时
    	place:function(){
    		this.currentData = this.allData[this.place];
    		let value_ = (100 - this.currentData.front ) * 266 / 360;
    		this.option.title.text = this.currentData.front + "%";
    		this.option.series[1].data[0].value = value_;
   		 	this.option.series[1].data[1].value = 100-value_;
   		 	//console.log(this.currentData)
    		this.redom('d5');
    	}
    },
    methods:{
    	//请求数据
	  	getData(){
	  		api.toiletUseRatio(api.params).then( (re) =>{
	  				let reData = re.data.data;
	  				this.allData = reData;
	  				this.currentData = reData[this.place];
	  				//初始化数据
	  				let value_ = (100 - reData[this.place].front ) * 266 / 360;
		    		this.option.title.text = this.currentData.front + "%";
		    		this.option.series[1].data[0].value = value_;
		   		 	this.option.series[1].data[1].value = 100-value_;
	  				this.redom('d5');
					if(re.status===200){
						this.isloading = false;
					}
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	},
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            this.chart.setOption(this.option);
        }
    },
    created(){
    	this.isloading = true;
    	this.getData();
    },
    mounted() {
          this.$nextTick(echarts_resize('d5',this))
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
#d5{
    width:100%;
    height:100%;
    margin-top: 1.3rem;
}
span{
    display:inline-block;
    position:absolute;
    width:100%;
    left:0;
    top:55%;
    color:#6347ED;
    font-size:1.6rem;
}


</style>
