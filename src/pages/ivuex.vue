<template>
    <div>
        <Display :data="datas"></Display>
        <Increement></Increement>
    </div>
</template>
<script type="text/javascript">
    import Display from "@/components/display"
    import Increement from "@/components/increement"
    import store from '../vuex/store' // import 我们刚刚创建的 store
    import { mapGetters } from 'vuex'
    export default {
        components:{
            Display:Display,
            Increement:Increement
        },
        store:store,
        computed:{
      ...mapGetters({
        datas: 'getData'
      })    
    },
    }
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>