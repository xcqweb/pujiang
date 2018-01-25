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
</style>

<template>
    <div class="b6">
        <div class="b6__top">
            <span>{{currentNums}}<font>人次</font></span>
            <font>当前客流人数</font>
        </div>
        <div class="b6__bottom">
            <span>{{yestodayNums}}<font>人次</font></span>
            <font>昨日客流总数</font>
        </div>
        <Loading v-show="isloading"></Loading>
    </div>
</template>

<script>
import Vue from 'vue'
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
import until from '@/common/js/until/index.js'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name:'d6',
    mixins: [optionProps],
    data () {
        return {
			currentNum:0,
			yestodayNum:0,
			allData:{}
        }
    },
    props:{
    	place:String
    },
    components:{
		Loading
    },
    computed: { 
    	//给数据加上分隔符
		yestodayNums(){
			return until.string_until.addPoint(this.yestodayNum);
		},
		currentNums(){
			return until.string_until.addPoint(this.currentNum);
		}
    },
    //观察景点的变化来响应数据
    watch:{
    	place:function(){
    		this.currentNum = this.allData[this.place].currentNum;
	  		this.yestodayNum = this.allData[this.place].yestodayNum;
    	}
    },
    methods: {
		//请求数据
	  	getData(){
	  		api.currentTourist(api.params).then( (re) =>{
	  				let reData = re.data.data;
	  				this.allData = reData;
	  				this.currentNum = reData[this.place].currentNum;
	  				this.yestodayNum = reData[this.place].yestodayNum;
					if(re.status===200){
						this.isloading = false;
					}
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	}
    },
    created(){
    	this.getData();
    },
}
</script>

