<template>
    <div class='allIncome'>
        <div class="allNow">
            <allNow :currentYear="currentYear"></allNow>
            <h2>2018年当前消费总额度</h2>
        </div>
        <div class="percent">
            <percent :history="history"></percent>  
            <h2>历史消费占比</h2>
        </div>
        <Loading v-show="isloading"></Loading>
    </div>
</template>

<script>
import Vue from 'vue'
import allNow from '@/components/profile/allNow.vue'
import percent from '@/components/profile/percent.vue'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
  name: 'd4',
  mixins: [optionProps],
  data () {
    return {
    	isloading:false,
    	allData:{},
    	currentYear:{},
    	history:{},
        chartOption:{
            top:{
                id:'outInfoUnil',
                lenData:[{name:'江南第一家',icon:'circle',},
                {name:'白石湾风景区',icon:'circle',},
                {name:'官岩山',icon:'circle',},
                {name:'神丽峡',icon:'circle',},
                {name:'水竹湾森林公园',icon:'circle',},
                {name:'仙华山',icon:'circle',}],
                xData:['汽车','自驾','公交车','徒步'],
                series:[
                    [320, 332, 301, 334, 390, 330, 320],
                    [120, 132, 101, 134, 90, 230, 210],
                    [120, 232, 301, 134, 190, 110, 120],
                    [62, 82, 91, 84, 109, 110, 120],
                    [62, 118, 64, 106, 179, 160, 150],
                    [120, 232, 301, 234, 190, 130, 120],
                ]
            },
        }
    }
  },
  props:[
  	'place'
  ],
  computed: { 
  	current(){
  		return this.allData[this.place].currentYear;
  	}
  },
  created(){
  	this.isloading = true;
  	this.getData();
  },
  mounted(){
  },
  watch:{
  	place:function(){
  		this.history = this.allData[this.place].history;
  		this.currentYear = this.allData[this.place].currentYear;
  	}
  },
  methods: {
  	//请求数据
  	getData(){
  		api.customAnalyse(api.params).then( (re) =>{
  				let reData = re.data.data;
  				this.allData = reData;
  				this.history = reData[this.place].history;
  				this.currentYear = reData[this.place].currentYear;
				if(re.status===200){
					this.isloading = false;
				}
	    }).catch( (e) => {
	    	console.log(e);
	    })
  	}
  },
  components:{
    allNow,
    percent,
    Loading
  }
}
</script>

<style lang="less" scoped>
.allIncome{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0);
    .allNow{
      position:relative;
      float:left;
      width:42%;
      height:65%;
      margin-top: 8%;
    }
    .percent{
      position:relative;
      float:left;
      width:57%;
      height:65%;
      margin-top: 8%;
    }
    h2{
        color:white;
        margin-bottom:10px;
    }
  }
</style>