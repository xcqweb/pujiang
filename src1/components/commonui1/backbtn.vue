<template>
     <span class="backbtn" @click='getBack'></span>
</template>
<script>

  export default {
    data(){
        return{

        }
    },
    methods:{
        getBack(){
            // console.log(this.$route.path);
            this.$router.push({path: '/'});
        }
    }
  }
</script>
<style scoped>
  .backbtn {
  position: absolute;
  top: 2rem;
  right: 5.5rem;
  width: 3rem;
  height: 3rem;
  background-image: url("../../assets/images/Group5@2x.png");
  -webkit-background-size: 100%;
  background-size: 100%;
  background-position: center;
  z-index: 999;
  cursor: pointer;
}
</style>