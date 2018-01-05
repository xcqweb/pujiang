<template>
<h1>lodash测试</h1>
</template>
<script>
var _ = require('lodash');
//创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”
_.compact([0, 1, false, 2, '', 3]);// [1, 2, 3]
//将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
_.chunk(['a', 'b', 'c', 'd'], 2)//[Array(2), Array(2)]
//创建一个新数组，将array与任何数组 或 值连接在一起
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);// [1, 2, 3, [4]]
console.log();
  export default {
    data(){
        return{
            name:'',
        }
    },
    methods:{
        getBack(){
            // console.log(this.$route.path);
            this.$router.go(-1 );
        },
    }
  }
</script>
<style lang="less" scoped>
    
</style>
