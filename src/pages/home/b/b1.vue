<template>
  <div class="b1">
      <div class="content">
        <div class="header" v-show = 'changeModel' >
            <div class="headerLeft">
                <font>2017年富民指数</font>
                <span>{{currentYearNum}}</span>
            </div>
            <div class="headerRight">
                <font>2016年全年富民指数</font>
                <span>{{preYearNum}}</span>
            </div>
        </div>
        <div class="middle">
          <font>上月</font>
          <span>{{currentMonthNum}}</span>
        </div>
      </div>
      <Loading v-show="isloading"></Loading>
  </div>
</template>

<script>
import Vue from 'vue'
import adaptation from '@/common/js/mixin/adaptation.js'
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name: 'b1',
    mixins: [adaptation,optionProps],
    data () {
    return {
        riaseLeft:'up',
        riaseRight:'down',
        currentYearNum:'',
        preYearNum:'',
        currentMonthNum:'',
    }
    },
    created(){
      	this.getData();
    },
    computed: { 
    },
    
    methods: {
    	//请求数据
	  	getData(){
	  		api.params.code = this.code; 
	  		api.richNum(api.params).then( (re) =>{
	  			//console.log(re)
	    		let reData = re.data.data;
	    		this.currentYearNum = reData.curYear;
	    		this.preYearNum = reData.preYear;
	    		this.currentMonthNum = reData.jjgx;
	    		if(re.status===200){
	    			this.isloading=false;
	    		}
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	},
	  	
    },
    mounted(){
    	
    },
    components:{
    	Loading
    }
}
</script>

<style lang="less" scoped>
.b1{
  width:100%;
  height:100%;
}
    .content{
      width:100%;
      height:100%;
      position: relative;
      /*临时*/
      top:10%;
      list-style: none;
      height:100%;
      border-radius: 4px;
      &:after {
          content: ".";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
      }
      .header{
        position:absolute;
        top:20%;
        width:100%;
        .headerLeft{
          position:absolute;
          left:10%;
        }
        .headerRight{
          position:absolute;
          right:10%;
        }
        &:after {
          content: ".";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
        }
        span{
          font-size: 1.3rem;
          font-weight: 400;
          color:#ffd800;
          font-family:numberFont;
        }
        font{
          display:block;
          font-size: 0.8rem;
          margin-bottom:10px;
          color:white;
        }
      }
      .middle{
        position: absolute;
        top: 187/412*100%;
        left: 50%;
        transform: translateX(-50%);
        span{
          font-size: 2.4rem;
          font-weight: 400;
          color:#ffd800;
          font-family:numberFont;
        }
        font{
          display:block;
          margin-bottom:10px;
          color:white;
        }
      }
      .footer{
        width: 100%;
        position: absolute;
        bottom: 10%;
        text-align: left;
         color:white;
        .footerLeft{
          float: left;
          margin-left: 10%;
          &:after {
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }
          .num{
            .footerRise{
              display: inline-block;
            }
            .footerCotext{
              font-size: 1.2rem;
              font-weight: 400;
              font-family:numberFont;
            }
            .footerUnit{
              font-size: 0.8rem;
            }
          }
        }
        .footerRight{
          position: absolute;
          left: 55%;
          .num{
            .footerRise{
              display: inline-block;
            }
            .footerCotext{
              font-size: 1.2rem;
              font-weight: 400;
              font-family:numberFont;
            }
            .footerUnit{
              font-size: 0.8rem;
            }
          }
        } 
      }
    }

.up{
    background-image: url('../../../assets/images/up.png');
    background-size: 100% 100%;
    width: 8px;
    height: 12.8px;
}
.down{
    background-image: url('../../../assets/images/down.png');
    width: 8px;
    background-size: 100% 100%;
    height: 12.8px;
}
</style>