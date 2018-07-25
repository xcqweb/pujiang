

<!--消费偏好-->
<template>
<div class="content">
  <div id="c9"></div>
  <Loading v-show="isloading"></Loading>
  <ul class="legend">
  	<li v-for="(item,i) in series">
  		<p :style="{color:color[i]}">{{percents[i]}}%</p>
  		<p>{{item.name}}</p>
  	</li>
  </ul>
</div>  
</template>

<script type="text/javascript">
import echarts_resize from '@/common/js/echarts_resize.js'
import echarts from 'echarts';
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name:'c9',
    mixins: [optionProps],
    data(){
    return{
    		series:[
    		 {
		      "value": 0,
		      name: '金融'
		    },
		    {
		      "value": 0,
		      name: '汽车服务'
		    },
		     {
		      "value": 0,
		      name: '化妆品'
		    },
    		{
		      "value": 0,
		      name: '服饰鞋帽'
		    },
		     {
		      "value": 0,
		      name: '休闲娱乐'
		    },
		    {
		      "value": 0,
		      name: '生活服务'
		    },
		    {
		      "value": 0,
		      name: '教育培训'
		    },
		     {
		      "value": 0,
		      name: '亲子'
		    },
		    
		    {
		      "value": 0,
		      name: '母婴用品'
		    },
		    {
		      "value": 0,
		      name: '数码'
		    },
		    
		   
		   
		  ],
        color:['#4EBBFC','#57ABFE', '#368DF7', '#7E6AF6', '#FF8885','#FFCD38',  '#E39A50', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD'],
    		
    }
    },
    watch:{
    	code:function(val){
    		 let data={};
	  			  data.code = this.code;
	  		    data.monthId = this.yearMonth;
	  		    this.getData(data)
    	}
    	
    },
    methods:{
    	
    	//请求数据
	  	getData(data){
	  		api.touristAttr(data).then( (re) =>{
	  				let reData = re.data.data;
	  				//console.log(reData)
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
					echarts_resize('c9',this)
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	},
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            let option = {
            color:['#4EBBFC','#57ABFE', '#368DF7', '#7E6AF6', '#FF8885','#FFCD38',  '#E39A50', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD'],
            calculable : true,
            legend:{
            	  show:false,
                orient: 'vertical',
                top:'10%',
                right:'5%',
                width:'26',
                height:'80%',
                itemGap:20,
                itemWidth:10,
                itemHeight:10,
                textStyle:{
                    color:'#fff',
                    fontSize:'82%',
                    lineHeight:36
                    
                },
            		//width:'50%',
            		data:[
            			{name:'亲子',icon:'circle'},
            			{name:'金融',icon:'circle'},
            			{name:'汽车服务',icon:'circle'},
            			{name:'休闲娱乐',icon:'circle'},
            			{name:'化妆品',icon:'circle'},
            			{name:'珠宝手表',icon:'circle'},
            			{name:'数码',icon:'circle'},
            			{name:'母婴用品',icon:'circle'},
            			{name:'生活服务',icon:'circle'},
            			{name:'奢侈品牌',icon:'circle'},
            			{name:'大众品牌',icon:'circle'},
            			{name:'服饰鞋帽',icon:'circle'},
            		],
            	//data:['亲子','金融','汽车服务','休闲娱乐','化妆品','珠宝手表','数码','母婴用品','生活服务','奢侈品牌','大众品牌','服饰鞋帽'],
            	 formatter:function(name){
            	 	
	        	var oa = option.series[0].data;
	        	let num =0;
	        	for(let i=0; i<oa.length; ++i){
	        		num += oa[i].value
	        	}
	        	
	        	for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                    	let text = (oa[i].value/num * 100).toFixed(2) + '%'+ '\n' +  name ;
                    	return text
                    }
	        	}
	        }
            },
            tooltip : {
            	show:true,
            	textStyle:{
            		fontSize:'80%',
            	},
			        formatter: function(params){
			        	let text = params.data.name+"<br>"+params.percent+"%";
			        	return text
			        }
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
                    center : ['26%', '55%'],
                    roseType : 'area',
                 		 label: {
			                normal: {
			                    show: true,
			                    fontSize:'80%',
			                },
			                emphasis: {
			                    show: true,
			                    fontSize:'80%',
			                }
			            },
			            lableLine: {
			                normal: {
			                    show: true,
			                    
			                },
			                emphasis: {
			                    show: false
			                }
			            },
			                    data: this.series,
			                } 
			            ]
			        }
            this.chart.setOption(option);
        }
    },
    
    computed:{
    	percents(){
    		let arr=[];
    		for(let i=0; i<this.series.length; ++i){
    			arr[i] = this.series[i].value;
    		}
    		return arr
    	}
    },
    mounted() {
      this.$nextTick(echarts_resize('c9',this))
    },
}
</script>

<style lang="less" scoped>
#c9{
    width:100%;
    height:100%;
}
.legend{
	width: 36%;
	height: 90%;
	color: #eee;
	font-size: 0.8rem;
	position: absolute;
	top: 2%;
	li{
		width: 33%;
		line-height: 0.3rem;
		margin-top: 1.5rem;
		float: left;
		p:first-child{
			font-size: 0.9rem;
			font-weight: bold;
		}
		p:last-child{
			margin-top: 0.8rem;
		}
	}
}

.content{
    width:100%;
    height:100%;
    position:relative;
}
@media screen and (min-width: 1400px){
  ul{
    position:absolute;
    right:10%;
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
    right:10%;
    top:15%;
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
	.legend{
	width: 36%;
	height: 80%;
	color: #fff;
	font-size: 0.8rem;
	position: absolute;
	top: 10%;
	li{
		width: 33%;
		line-height: 0.8rem;
		margin-top: 0.8rem;
		float: left;
		p:first-child{
			font-size: 0.9rem;
			font-weight: bold;
		}
		p:last-child{
			margin-top: 0.4rem;
		}
	}
}

}
</style>
