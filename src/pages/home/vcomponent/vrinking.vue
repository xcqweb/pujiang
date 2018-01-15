<template>
  <div>
    <ul>
        <li v-for='(item, index) in items'>{{index+1}}、{{item.province}}</li>
    </ul>
    <Loading class='loading' v-show="isloading"></Loading>
  </div>
</template>

<script>
import Vue from 'vue'
import Loading from '@/components/commonui/loading/loading.vue'
import api from '@/api/index.js'
export default {
  name: 'a7',
  data () {
    return {
    	isloading:false,
        items:[]
    }
  },
  created(){
  	this.isloading = true;
  	this.getData();
  },
  mounted(){
  	
  },
  methods: {
  	//请求数据
  	getData(){
  		api.originList(api.params).then( (re) =>{
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
    height:80%;
    width:85%;
    top:35%;
    left:12%;
    position:absolute;
    color:#b6baec;
    li{
        position:absolute;
    }
    li:nth-of-type(1){

    }
    li:nth-of-type(2){
        top:25%;
    }
    li:nth-of-type(3){
         top:50%;
    }
    li:nth-of-type(4){
        right:10%;
    }
    li:nth-of-type(5){
        right:10%;
        top:25%;
    }
    li:nth-of-type(6){
        right:10%;
        top:50%;
    }
}


</style>