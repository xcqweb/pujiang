<template>
    <div class="content">
        <div id="c2"></div>
        <Loading v-show="isloading"></Loading>
    </div>
</template>

<script type="text/javascript">
import echarts_resize from '@/common/js/echarts_resize.js'
import echarts from 'echarts'
//import adaptation from '@/common/js/mixin/adaptation.js'
import optionProps from '@/common/js/mixin/optionProps.js'
let w = document.body.clientWidth/1920
export default {
    name:'c2',
    mixins: [optionProps],
    data(){
    return{
    	ws:20,
    	lefts:'15%',
    	wd:20,
    	series: [{
		      "value": 0,
		      name: '19岁以下'
		    },
		    {
		      "value": 0,
		      name: '19-25'
		    },
		    {
		      "value": 0,
		      name: '26-35'
		    },
		    {
		      "value": 0,
		      name: '36-45'
		    },
		    {
		      "value": 0,
		      name: '46-55'
		    },
		    {
		      "value": 0,
		      name: '55岁以上'
		    }
		  ]
    }
    },
    watch:{
    	code:function(){
    		let data={};
	  			  data.code = this.code;
	  		    data.monthId = this.yearMonth;
	  		    this.getData(data)
    	}
    },
    methods:{
    	init(){
    		
    		
	    	if(w===2){
	    		this.lefts='20%'
	    		this.ws = w*22
	    		this.wd = 20
	    	}else{
	    		this.ws = w*18
	    		this.wd = 10
	    	}
    	},
    	//请求数据
	  	getData(data){
	  		//api.params.code = this.code;
	  		api.ageAnalyse(data).then( (re) =>{
	  				let reData = re.data.data;
	  				let arrData = [];
	  				for(let i in reData){
	  					arrData.push(reData[i])
	  				}
	  				for(let i=0; i<this.series.length; ++i){
	  					this.series[i].value = arrData[i]
	  				}
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
          		textStyle:{
            		fontSize:'80%',
            	},
		        trigger: 'item',
		        formatter: function(params){
		        	let text = params.seriesName+" : "+params.name+"<br>"+params.percent.toFixed(2)+"%";
		        	return text
		        }
		   },
          legend:{
                show:true,
                orient: 'vertical',
                top:'25%' ,
                right:this.lefts,
                width:'60%',
                height:'60%',
                itemGap:this.ws*2,
                itemWidth:this.wd,
                itemHeight:this.wd,
                textStyle:{
                    color:'#fff',
                    fontSize:'75%',
                    lineHeight:20
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
                radius : '55%',
                center: ['27%', '55%'],
                selecteMode:'single',
                selectedOffset:30,
                startAngle:90,
                labelLine: {
                    normal: {
                        show: false,
                    }
                },
                animationType:'expansion',
                labelLine:{
                	show:true,
                	smmooth:1,
                },
                label:{
                    normal:{
                            show: true,
                            textStyle:{
                            	fontSize:"60%",
                            	fontFamily:'Courier New'
                            },
                            formatter: function(params){
                                return params.percent === 0 ? '' : params.percent+"%"  ;
                            },
                        },
                        emphasis:{
                            show: false
                        }
                },
                data:this.series,
      }],
    };
    		let isIE = window.navigator.userAgent.indexOf('Trident')
         	 if(isIE>-1){ 
            	option.legend.width = 60;
            	option.legend.top = '10%';
            	option.legend.left = '60%';
            	option.legend.itemWidth = 36;
            	option.legend.itemGap = 20;
            	option.legend.orient = 'horizontal';
            	option.legend.textStyle.fontSize = '100%';
			}
            this.chart.setOption(option);
        }
    },
    created(){
    	this.init()
    },
    mounted() {
        this.$nextTick($sheet.echartRL('c2',this))
    },
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
