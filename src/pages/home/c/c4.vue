<template>
    <div class="c4">
        <ul>
            <li v-for='item in men'>
                <img :src="item.img">
            </li>
            <font>{{menPercent}}%</font>
        </ul>
        <ul>
            <li v-for='item in women'>
                <img :src="item.img">
            </li>
            <font>{{womenPercent}}%</font>
        </ul>
        <Loading v-show="isloading"></Loading>
    </div>
</template>

<script>
import Vue from 'vue'
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
import optionProps from '@/common/js/mixin/optionProps.js'
let men = require('../../../assets/images/home/men.png')
let menE= require('../../../assets/images/home/menE.png')
let women= require('../../../assets/images/home/women.png')
let womenE= require('../../../assets/images/home/womenE.png')
export default {
  name: 'c4',
  mixins: [optionProps],
  data () {

    return {
    	isloading:false,
        womenPercent:'40',
        menPercent:'60',
        men:[],
        women:[]
    }
  },
  created(){
  	this.isloading = true;
  	this.getData();
  },
  computed: {
  },
  methods: {
  	//请求数据
  	getData(){
  		api.touristSexRatio(api.params).then( (re) =>{
  				let reData = re.data.data;
    			this.menPercent = reData.menPercent;
    			this.womenPercent = 100-reData.menPercent;

				let menlen = Math.round(this.menPercent/10);
				let womenlen = Math.round(this.womenPercent/10);

					for(let i=0; i<menlen+1; ++i){
						this.men.push({img:menE})
					}

					for(let i=0; i<10-menlen; ++i){
						this.men.push({img:men})
					}

					for(let i=0; i<womenlen+1; ++i){
						this.women.push({img:womenE})
					}

					for(let i=0; i<10-womenlen; ++i){
						this.women.push({img:women})
					}


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
.c4{
    position:absolute;
    height:100%;
    width:100%;
    padding-top: 10%;
    img{
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
    ul{
        width:100%;
        height:50%;
        position:relative;
        li{
            float:left;
            height: auto;
            width: 16/300*100%;
            text-align: center;
            transform: translateY(10%);
            margin-right:3px;

        }
        li:nth-of-type(1){
            margin-left:10%;
            width: 21/300*100%;
            transform: translateY(-10%);
            margin-right:10px;
        }
        font{
            display:inline-block;
            position:absolute;
            font-family: numberFont;

        }
    }
    ul:nth-of-type(1){
        height:40%;
        font{
            color:#49d9fe;
            right: 7%;
            top: 35%;
        }
    }
    ul:nth-of-type(2){
        font{
            color:#ff71bb;
            right: 7%;
            top: 25%;
        }
    }
}
</style>
