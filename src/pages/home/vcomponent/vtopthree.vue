<template>
  <div class="vtopThree">
    <ul>
        <li v-for="item in items">
            <p>{{item.title}}</p>
            <div><p>{{item.nub}}</p></div>
        </li>
    </ul>
    <Loading class='loading' v-show="isloading"></Loading>
  </div>
</template>

<script>
import Vue from 'vue'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
  name: 'a3',
  mixins: [optionProps],
  data () {
    return {
        items:[]
    }
  },
  created(){
  },
  methods: {
  	//请求数据
  	getData(){
  		api.topThree(api.params).then( (re) =>{
  			//console.log(re)
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
}
</script>

<style lang="less" scoped>
.vtopThree{
    width:100%;
    height:100%;
}
ul{
    width:397/464*100%;
    height:174/216*100%;
    margin-top:8/216*100%;
    margin-left:33/464*100%;
    li{
        float:left;
        height:50%;
        width:198/464*100%;
        margin-left:4%;
        margin-top: 10%;

        p:nth-of-type(1){
            font-size: 1.3rem;
            color: #fff;
        }
        div{
            display:table;
            height:100%;
            width:100%;
            
            p{
                color: white;
                height:100%;
                width:100%;
                font-size: 1.6rem !important;
                display: table-cell;
                vertical-align:middle;
                text-align:center;
                color: #00E5FF !important;
                font-family:numberFont;
            }
        }
        p:nth-of-type(2){
            font-size: 1rem;
            margin-bottom:6px;
        }
        p:nth-of-type(3){
            height:5px;
            width:100%;
        }
    }
}
</style>