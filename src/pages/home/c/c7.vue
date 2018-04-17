<template>
  <div class="c7">
    <ul>
        <li for='item in items'>
            <div class="cell1">
                景区
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
                {{item.sort}}. {{item.name}}
            </div>
            <div class="cell2">
                {{item.value}}<font></font>
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
    import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name:'c7',
    mixins: [optionProps],
    props:['placeAttractionsProps'],
    data(){
        return{
        msg:'Hello Vue 来自App.vue',
        items:this.placeAttractionsProps,
      }
    },
    watch:{
    },
    methods:{
    	//请求数据
	  	getData(){
	  		api.params.code = this.code;
	  		api.scenicRanking(api.params).then( (re) =>{
	  				let reData = re.data.data;
	  				//console.log(reData)
	  				this.items = reData;
					if(re.status===200){
						this.isloading = false; 
					}
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	}
    },
    created(){
    },
    mounted(){
    }
}
</script>

<style lang="less" scoped>
.c7{
    height:100%;
    width:100%;
    color: white;
    font{
        font-size: 0.6rem;
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
    width:35%;
    text-align: left;
    margin-left: 6%;
}
.cell2{
    float:left;
    width:31%;
    text-align: center;
    /*font-family:numberFont;*/
}
.cell3{
    float:left;
    width:33%;
    .footerCotext{
    	/*font-family:numberFont;*/
    }
    .footerRise{
        display: inline-block;
         transform: translateY(10%);
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
    .cell1{
        width:31%;
        margin-left:12%;
    }
    .cell2{
        width:22%;
    }
    .cell3{
        width:33%;
    }
}
li:nth-of-type(2n){
    background-color:#163387;
}
li:nth-of-type(2n+1){
    background-color:#1f3f9d;
}
</style>
