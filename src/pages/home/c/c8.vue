<template>
  <div class="c8">
    <ul>
        <li for='item in items'>
            <div class="cell1 title">
                	地区
            </div>
            <div class="cell2">
                人数
            </div>
            <div class="cell3">
              	  占比
            </div>
        </li>
        <li v-for='(item,index) in items'>
            <div class="cell1">
                {{item.sort}}、{{item._id}}
            </div>
            <div class="cell2">
                {{item.num}}<font>人</font>
            </div>
            <div class="cell3">
                <span class='footerCotext'>{{item.percent}}%</span>
                <!--<span v-show="item.rise" class='footerRise up'></span>-->
                <!--<span v-show="!item.rise" class='footerRise down'></span>-->
            </div>
        </li>
    </ul>
    <Loading v-show="isloading"></Loading>
  </div>
</template>

<script type="text/javascript">
	import api from '@/api/index.js'
    import Loading from '@/components/commonui/loading/loading.vue'
    import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name:'c8',
    mixins: [optionProps],
    data(){
        return{
        msg:'Hello Vue 来自App.vue',
        items:[],
      }
    },
    created(){
    	this.getData();
    },
    watch:{
    	code:function(){
    		this.getData();
    	}
    },
    methods:{
    	//请求数据
	  	getData(){
	  		api.params.code = this.code;
	  		api.touristOriginRanking(api.params).then( (re) =>{
	  				let reData = re.data.data;
	  				this.items = reData;
					if(re.status===200){
						this.isloading = false;
					}
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	}
    },
    mounted(){
    },
    components:{
    	Loading
    }
}
</script>

<style lang="less" scoped>
.c8{
    height:100%;
    width:100%;
    color: white;
    font{
        font-size: 0.6rem;
    }
    .title{
    	margin-left: 8%;
    }
}
ul{
    margin-top:10%;
    height:90%;
    width:100%;
    li{
        height:14%;
        display:flex;
        align-items:center;
        justify-content:center;
        &:after {
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }
    }
}
.cell1{
    float:left;
   	flex: 3;
   	margin-left: 6%;
    text-align: left;
    box-sizing: border-box;
}
.cell2{
    float:left;
    flex: 3;
    /*font-family:numberFont;*/
}
.cell3{
    float:left;
   flex: 3;
   .footerCotext{
   		 /*font-family:numberFont;*/
   }
    .footerRise{
        display: inline-block;
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
background-size: 100% 100%;
width: 8px;
  height: 12.8px;
}
li:nth-of-type(1){
    text-align: center !important;
}
li:nth-of-type(2n){
    background-color:#163387;
}
li:nth-of-type(2n+1){
    background-color:#1f3f9d;
}
</style>
