<template>
    <div>
        <h1>{{msg}}</h1>
        <child :message='give'></child>
        <router-link :to="'/Home/'+'left1'">二级路由</router-link>
    </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
    export default{
        data(){
            return{
                msg:'欢迎光临',
                give:'父级给子集的信息'
            }
        }
    }
    Vue.component('child',{
        props:['message'],
        template:'<span>{{message}}</span>'
    })
</script>

<style lang="less" type="text/less"></style>