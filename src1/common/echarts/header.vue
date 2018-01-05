<template>
  <header class="top-container">
    <div class="top-bar clearfix">
      <div class="topbar-nav">
      </div>

      <div v-if="hasLogin" class="topbar-info">
        <span>欢迎你</span><span class="username">用户名</span>
      </div>
      <div v-else class="topbar-info">
        <button >登录</button>
      </div>

    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        hasLogin:true,
      };
    },
    computed: { 
    },
    methods: {
      },
    }
  
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .top-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 79px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    background-color: #fff;
    z-index: 100;
    font-family: "Microsoft Yahei", sans-serif;
  }
  .topbar-info {
    position: absolute;
    top: 0;
    left: 19.4%;
    height: 50px;
    line-height: 80px;
    font-size: 20px;
  }
  .username{
    color: black;
    margin-left: 20px;
  }
  .topbar-nav {
    display: inline-block;
    float: right;
    height: 50px;
    margin-right: 40px;
    line-height: 80px;
    overflow: hidden;
  }
  @media screen and (max-width: 500px) {
    .topbar-nav {
      margin-left: 25px;
    }
    .nav {
      font-size: 15px;
    }
    .topbar-info {
      right: 25px;
    }
    button {
      font-size: 15px;
    }
  }
</style>
