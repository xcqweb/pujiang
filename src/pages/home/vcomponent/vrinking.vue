<template>
  <div>
    <ul>
        <li for='item in items'>
            <div class="cell1">
               	 地区
            </div>
            <div class="cell3">
                	占比
            </div>
        </li>
        <li v-for='(item,index) in items'>
            <div class="cell1">
                {{index+1}}、{{item.place}}
            </div>
            <div class="cell3">
               <font>{{item.percent}}%</font>
            </div>
        </li>
    </ul>
    <Loading class='loading' v-show="isloading"></Loading>
  </div>
</template>

<script>
import Vue from 'vue'
import Loading from '@/components/commonui/loading/loading.vue'
import api from '@/api/index.js'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
  name: 'a7',
  mixins: [optionProps],
  data () {
    return {
        items:[]
    }
  },
  created(){
  	this.getData();
  },
  mounted(){
  	
  },
  methods: {
  	//请求数据
  	getData(){
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
  components:{
  	Loading
  }
}
</script>

<style lang="less" scoped>
div{
    height:100%;
    width:100%;
    position:relative;
}

ul{
    margin-top:20%;
    height:90%;
    width:100%;
    li{
        height:13.8%;
        display:flex;
        align-items:center;
        justify-content:center;
        color: white;
        &:after {
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
        }
        div{
            
        }
        font{
             /*font-family:numberFont;*/
        }
    }
}
.cell1{
    float:left;
    width:48%;
    text-align: left;
    margin-left: 1%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
}
.cell2{
    float:left;
    width:31%;
    text-align: center;
}
.cell3{
    float:left;
    width:40%;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    /*font-family:numberFont;*/
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
li:nth-of-type(2n){
    background-color:#163387;
}
li:nth-of-type(2n+1){
    background-color:#1f3f9d;
}
</style>