<style lang="less" scoped>
.b6{
    position: relative;
    height: 100%;
    width: 100%;
    span{
        margin-bottom:5%;
        display:block;
        color:#ffd800;
        font-size:2rem;
        font-family: numberFont;
        font{
            margin-left: .3rem;
            display: inline-block;
            color:#ffd800;
            font-size: 1.2rem;
        }   
    }
    font{
        display:block;
        color:#43dbff;
        font-size:1.5rem;
        letter-spacing: .2rem;
    }
    .b6__top{
        position:absolute;
        top:20%;
        width:100%;
        height:40%;
    }
    .b6__bottom{
        position:absolute;
        bottom:0;
        width:100%;
        height:40%;
    }
}

.b6v{
    position: relative;
    height: 100%;
    width: 100%;
    span{
        margin-bottom:5%;
        display:block;
        color:#ffd800;
        font-size:2rem;
        font-family: numberFont;
        font{
            margin-left: .3rem;
            display: inline-block;
            color:#ffd800;
            font-size: 1.2rem;
        }   
    }
    font{
        display:block;
        color:#43dbff;
        font-size: 1.2rem;
        letter-spacing: .2rem;
    }
    .b6__top{
    	width: 250px;
        position:absolute;
        top:32%;
        left: 0;
        height:90px;
    }
    .b6__bottom{
    	width: 250px;
        position:absolute;
        top: 32%;
        right: 0;
        height:90px;
    }
}
</style>

<template>
    <div :class="comStyle">
        <div class="b6__top">
            <span>{{currentNums}}<font></font></span>
            <font>当前客流总人数</font>
        </div>
        <div class="b6__bottom">
            <span>{{yestodayNums}}<font></font></span>
            <font>昨日客流总人数</font>
        </div>
        <Loading v-show="isloading"></Loading>
    </div>
</template>

<script>
import Vue from 'vue'
import until from '@/common/js/until/index.js'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name:'d6',
    mixins: [optionProps],
    data () {
        return {
			currentNum:0,
			yestodayNum:0,
        }
    },
    props:{
    	place:String,
    	isVideo:Boolean
    },
    computed: { 
    	//给数据加上分隔符
		yestodayNums(){
			return until.string_until.addPoint(this.yestodayNum);
		},
		currentNums(){
			return until.string_until.addPoint(this.currentNum);
		},
		comStyle(){
			if(this.isVideo){
				return 'b6v'
			}else{
				return 'b6'
			}
		}
    },
    //观察景点的变化来响应数据
    watch:{
    	code:function(){
	  		 this.getData();
    	}
    },
    methods: {
		//请求数据
	  	getData(){
	  		api.params.code = this.code;
	  		api.getScenicKeliu(api.params).then( (re) =>{
	  			//console.log(re.data.data)
  				let reData = re.data.data;
  				this.currentNum = reData.curSum;
				this.yestodayNum = reData.yesterdaySum;
				if(re.data.code===200){
					this.isloading = false;
				}
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	}
    },
    created(){
    },
}
</script>

