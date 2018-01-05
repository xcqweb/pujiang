<template>
  <div>
    <topTable :list='topTable.items' :header='topTable.header' :title='topTable.title'></topTable>
    <midTable :list='midTable.items' :header='midTable.header' :title='midTable.title'></midTable>
    <botTable :list='botTable.items' :header='botTable.header' :title='botTable.title'></botTable>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'trafficWarning',
  data () {
    return {
        topTable:{
            message:'请选择景点',
            title:'交通预警',
            header:{
                name:'景区',place:'拥堵指数',status:'预警指数',
            },
            items:[
                {
                name:'仙华山',place:'664.5',status:'700',change:'',setup:true,input:false,
                },
                {
                name:'神丽峡',place:'323.1',status:'800',change:'',setup:true,input:false,
                },
                {
                name:'白石湾',place:'123.6',status:'500',change:'',setup:true,input:false,
                },
                {
                name:'江南第一家',place:'312.4',status:'800',change:'',setup:true,input:false,
                },
                {
                name:'金狮湖',place:'523.0',status:'700',change:'',setup:true,input:false,
                },
                {
                name:'水竹湾',place:'111.7',status:'400',change:'',setup:true,input:false,
                }
            ],
            menueshow:false,
        },
        midTable:{
            message:'请选择景点',
            title:'历史预警',
            header:{
                name:'景区',place:'警报指数',status:'时间',
            },
            items:[
                {
                name:'仙华山',place:'664.5',status:'发生于2015年5月1日上午10：30'
                },
                {
                name:'神丽峡',place:'323.1',status:'发生于2016年4月23日上午15：21'
                },
                {
                name:'',place:'',status:''
                },
                {
                name:'',place:'',status:''
                },
                {
                name:'',place:'',status:''
                },
                // {
                // name:'白石湾',place:'123.6',status:'500'
                // },
                // {
                // name:'江南第一家',place:'312.4',status:'800'
                // },
                // {
                // name:'金狮湖',place:'523.0',status:'700'
                // },
                // {
                // name:'水竹湾',place:'111.7',status:'400'
                // }
            ],
            menueshow:false,
        },
        botTable:{
            message:'请选择景点',
            title:'预警接收设置',
            header:{
                name:'接收人',place:'电话',status:'备注',
            },
            items:[
                {
                name:'周小名',place:'135639821',status:'无'
                },
                {
                name:'',place:'',status:''
                },
                {
                name:'',place:'',status:''
                },
                {
                name:'',place:'',status:''
                },
                {
                name:'',place:'',status:''
                },
                // {
                // name:'白石湾',place:'123.6',status:'500'
                // },
                // {
                // name:'江南第一家',place:'312.4',status:'800'
                // },
                // {
                // name:'金狮湖',place:'523.0',status:'700'
                // },
                // {
                // name:'水竹湾',place:'111.7',status:'400'
                // }
            ],
            menueshow:false,
        }
    }
  },
  computed: { 
  },
  methods: {
  },
  components:{
  }
}
Vue.component('topTable',{
        props:['list','header','title'],
        data(){
            return{
                 msg:'jfdksjfk',
                 showstatus:true,
            }
        },
        template:`
        <div class='v-table'><h1 class='title'>{{title}}</h1><table border="1">
            <tr class='headtitle'>
                <th >{{header.name}}</th>
                <th>{{header.place}}</th> 
                <th>{{header.status}}</th>   
            </tr>
            <tr v-for='item in list' :key='item.id'>
                <td>{{item.name}}</td>
                <td>{{item.place}}</td>
                <td>
                    <font v-if='item.setup'>{{item.status}}</font>
                    <input v-model='item.change' v-if='item.input'  v-focus="item.input" v-on:blur="lostBlur(item)"></input>
                    <span class='setup' v-if='item.setup' @click='setUp(item)'>设置</span>
                    <span class='makeSure' v-if='!item.setup' @click='makeSure(item)'>确认</span>
                    <span class='cancle' v-if='!item.setup' @click='cancle(item)'>取消</span>
                </td>
            </tr>
            </table>
        </div>`,
        data(){
            return {
                setup:true,
            }
        },
        directives: {
            focus: {
                inserted: function (el, {value}) {
                    if (value) {
                        el.focus();
                    }else{
                        value=true;
                    }
                }
            }
        },
        methods:{
            lostBlur(item){
                item.setup=true;
                item.input=false;
            },
            setUp:function(item){
                for (var i = 0; i < this.list.length; i++) {
                    this.list[i].input=false
                    this.list[i].setup=true
                }
                item.setup=false;
                item.input=true;
            },
            makeSure(item){
                if (item.change) {
                    item.status=item.change;
                    item.setup=true;
                    item.input=false; 
                }else{
                    item.setup=true;
                    item.input=false;
                }

            },
            cancle(item){
                item.setup=true;
                item.input=false;
            },
            increment:function(item){
                 this.showstatus= !this.showstatus;
                 console.log(item)
                this.$emit('itemtodo',item.value);
            },
            test:function(){

            }
                
        },
        computed:{
            showlist:function(){
                return 
            }
        },

    })
Vue.component('midTable',{
        props:['list','header','title'],
        data(){
            return{
                 msg:'jfdksjfk',
                 showstatus:true,
            }
        },
        template:`
        <div class='v-table'><h1>{{title}}</h1><table border="1">
            <tr>
                <th>{{header.name}}</th>
                <th>{{header.place}}</th> 
                <th>{{header.status}}</th>   
            </tr>
            <tr v-for='item in list'>
                <td>{{item.name}}</td>
                <td>{{item.place}}</td>
                <td>{{item.status}}</td>
            </tr>
            </table>
        </div>`,
        methods:{
            chosen:function(){
            },
            computed:{
                showlist:function(){
                    return 
                }
            },
            increment:function(item){
                 this.showstatus= !this.showstatus;
                 console.log(item)
                this.$emit('itemtodo',item.value);
            },
            test:function(){

            }
                
        },

    })
Vue.component('botTable',{
        props:['list','header','title'],
        data(){
            return{
                 msg:'jfdksjfk',
                 showstatus:true,
            }
        },
        template:`
        <div class='v-table'><h1>{{title}}</h1><a>添加接收人</a>
            <table border="1">
            <tr>
                <th>{{header.name}}</th>
                <th>{{header.place}}</th> 
                <th>{{header.status}}</th>   
            </tr>
            <tr v-for='item in list'>
                <td>{{item.name}}</td>
                <td>{{item.place}}</td>
                <td>{{item.status}}</td>
            </tr>
            </table>
        </div>`,
        methods:{
            chosen:function(){
            },
            computed:{
                showlist:function(){
                    return 
                }
            },
            increment:function(item){
                 this.showstatus= !this.showstatus;
                 console.log(item)
                this.$emit('itemtodo',item.value);
            },
            test:function(){

            }
                
        },

    })
</script>

<style lang="less" >
.v-table{
    position:relative;
    overflow:hidden;
    margin-bottom:70px;
    margin-top:29px;
    table
      {
      width:100%;
      }
    th{
        height:50px;
        width:33%;
    }
    tr:nth-of-type(2n){
        background-color:#F7F7F7;
        height:33px;
        line-height:33px;
    }
    tr:nth-of-type(2n+1){
        background-color:#FFFFFF;
        height:45px;
        line-height:45px;
    }
    tr{
        font-size:20px;
        td:nth-of-type(3){
            input{
                width:40px;
            }
            .setup{
                color:#098DFF;
                margin-left:10px;
                cursor: pointer;
            }
            .makeSure{
                color:#098DFF;
                cursor: pointer;
            }
            .cancle{
                cursor: pointer;
                color:#098DFF;
                margin-left:5px;
            }
        }
    }
    h1{
        text-align:left;
        font-size:22px;
        width:100%;
        height:40px;
        background-color:white;
        padding-top:20px;
        padding-left:8%;
    }
    a{
        display:inline-block;
        position:absolute;
        top:25px;
        left:22%;
        color:#098DFF;
        text-decoration:underline;
    }
}
.title{
    font-size:2rem !important;
}
.headtitle{
  font-size:26px !important;
}
</style>