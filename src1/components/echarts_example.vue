<template>
  <div class="main_content">
    <div id="bedroom"  @click ='hideselect'></div>
    
  </div>
</template>
<script>
  import echarts_resize from '../common/js/echarts_resize.js'
  import echarts from 'echarts';
  import { mapGetters } from 'vuex'
  import store from '../vuex/store' // import 我们刚刚创建的 store
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        chart: null,
        opinion: ['学习氛围差', '学习氛围一般', '学习氛围很好'],
        opinionData1: [
          // {value:0, name:'学习氛围差'},
          // {value:0, name:'学习氛围一般'},
          // {value:0, name:'学习氛围很好'}
        ],
        opinionData2: this.$store.state.data,
        opinionData: [
            {value:26, name:'学习氛围差'},
            {value:31, name:'学习氛围一般'},
            {value:8, name:'学习氛围很好'}
          ],
        // isCase:null 
      }
    },
    store:store,
    computed:{
      //下拉框点击展示与点击外边界收起联动
      ...mapGetters({
        datasa: 'getData',
      }),
      isCase:{
        get: function(){
          return window.location.hash.length > 3 ? true :false;
        } 
      },
    },
    //外部点击收起下拉框与点击下拉框展开联动
    methods: {
      ...mapActions({
        hideselect:'selecthidestatus'
      }),
      resize: function () {
      this.chart.resize()
    },
      drawPie (id) {
        if (this.isCase) {
          console.log('小图');
        }
        var _self= this;
        this.chart = echarts.init(document.getElementById(id))
        this.chart.setOption(
            
          );
        // this.chart.setOption({
        //   animation:true,
        //   animationDuration: 5000,
        //   series: [
        //     {
        //       data: this.opinionData,
        //       itemStyle: {
        //         normal: {
        //           shadowBlur: 20,
        //           shadowOffset: 0,
        //           shadowColor: 'rgba(0, 0, 0, 0.5)'
        //         }
        //       }
        //     }
        //   ]
        // });
        //ajax请求
        // this.$http.post(api,{params:...}).then((res)=>{
        //     //setting your chart datas
        // });
      }
    },
    components:{},
    mounted() {
      const _self = this
      
      this.$nextTick(echarts_resize('bedroom',_self))

    }
  }
</script>
<style type="less/text" scoped>
.main_content {
  width: 100%;
  height: 100%;
}  
#bedroom{
  width: 100%;
  height: 90%;
  div{
    width: 100%;
    height: 100%;
  }
}
.dropdownMenu{
  left: 200px;
}
</style>