<template>
  <div class="containerTourist">
    <div class="chart">
        <vfromEchart ></vfromEchart>  
    </div>
    <vTable :list='items' :header='header' :title='title'></vTable>
  </div>
</template>

<script>
import Vue from 'vue'
import vfromEchart from './vfromEchart.vue'
export default {
  name: '',
  data () {
    return {
        message:'请选择景点',
        title:'WiFi探针设备',
        header:{
            name:'wifi探针编号',place:'部署位置',status:'状态',
        },
        items:[
            {
            name:'R01-2001',place:'江南第一家售票点',status:'正常'
            },
            {
            name:'R01-2002',place:'江南第一家售票点',status:'正常'
            },
            {
            name:'R01-2003',place:'江南第一家售票点',status:'正常'
            },
            {
            name:'R01-2004',place:'江南第一家售票点',status:'正常'
            },
            {
            name:'R01-2005',place:'江南第一家售票点',status:'正常'
            },
            {
            name:'R01-2006',place:'江南第一家售票点',status:'正常'
            }
        ],
        menueshow:false,
    }
  },
  computed: { 
  },
  methods: {
  },
  components:{vfromEchart
  }
}
    Vue.component('vTable',{
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
</script>

<style lang="less" >
.containerTourist{
    .chart{
        height:735px;
    }
}
.v-table{
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
        td:nth-of-type(3){
            color:#12B053;
        }
    }
    h1{
        text-align:left;
        font-size:22px;
        font-weight:550;
        width:100%;
        height:40px;
        background-color:white;
        padding-top:20px;
        padding-left:8%;
    }
}
</style>