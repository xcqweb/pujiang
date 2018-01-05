<template>
  <div class="headertext">
    <p>浦江县全域旅游大数据</p>
    <div class="weather">
        <span></span>
        <font>阴天 26℃  紫外线强度：二级</font>
    </div>
    <div class="time">
        <span>2017年6月20日 10:23:06</span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: '',
  data () {
    return {
    }
  },
  computed: { 
  },
  methods: {
  },
  components:{
  }
}
</script>

<style lang="less" scoped>
.headertext{
    width:100%;
    height:100%;
    position:relative;
    display:table;
    p{
        width:100%;
        height:100%;
        text-align:center;
        font-size: 1.8rem;
        line-height: 100%;
        display: table-cell;
        vertical-align:middle;
        color:#658df4;
    }
    .weather{
        position:absolute;
        left:50px;
        top: 25%;
        span{
            display: inline-block;
            margin-bottom: -1%;
            height: 30px;
            width: 43px;
            background-image: url('../../assets/天气.png');
            background-size: 100% 100%;
        }
        font{
            margin-left: 30px;
            color: white;
            font-size: 1.1rem;
        }

    }
    .time{
        position:absolute;
        right:50px;
        top: 40%;
        font-size: 1.2rem;
        color: white;
    }
}
</style>