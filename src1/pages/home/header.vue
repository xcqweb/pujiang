<template>
  <div class="headertext">
    <p>{{title}}</p>
    <ul>
        <li v-for='(item, index) in items' :class='item.status' @click='toggle(item,index)'>
            <router-link v-bind:to={path:item.link}>
                <span :class='item.status'></span>
                <font>{{item.name}}</font>
            </router-link>          
        </li>
        <li @click='logout'>
            <span></span>
            <font>退出登录</font>
        </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default {
  name: '',
  data () {
    return {
      items:[
        {name:'总览',link:'/',status:'unchose'},
        {name:'产业监测平台',link:'/prodcut',status:'chose'},
        {name:'精准营销平台',link:'/precision',status:'chose'},
        {name:'应急指挥平台',link:'/souceShow',status:'chose'},
      ],
      hash:'',
    }
  },
  watch:{
      hash:function (val) {
              this.changelink()
          },
  },
  computed: { 
    ...mapGetters({
        title: 'version/title',
      }),
  },
  methods: {
    toggle(item,index){
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].status='chose'
        }
        item.status='unchose'
    },
    logout(){
        this.$router.push({ path: '/login' })
    },
    changelink(){
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].status='chose'
        }
        switch(location.hash){
            case '#/' :
            this.items[0].status = 'unchose'
            break;
            case '#/prodcut' :
            this.items[1].status = 'unchose'
            break;
            case '#/precision' :
            this.items[2].status = 'unchose'
            break;
            case '#/souceShow' :
            this.items[3].status = 'unchose'
            break;
        }

    },
    keepStatus(){
        for (var i = 0; i < this.items.length; i++) {
            if (this.hash = this.items[i].link) {
                this.items[i].status='unchose'
            }else{
                this.items[index].status = 'chose'
            }
        }
    },
  },
  components:{
  },
  mounted(){
    let _self= this
    window.addEventListener('hashchange', function(e) {
        _self.hash=location.hash;
    }, false);
    this.keepStatus()
  }
}
</script>

<style lang="less" scoped>
a:link { text-decoration: none;}
a:active { text-decoration:none}
a:hover { text-decoration:none;} 
a:visited { text-decoration: none;}
.headertext{
    width:100%;
    height:100%;
    position:relative;
    box-shadow: 0 2px 25px black;
    p{  
        position: absolute;
        top: 30%;
        left: 2%;
        font-size: 1.8rem;
        color:#85e6ff;

    }
    ul{
        position: absolute;
        top: 20%;
        right: 40px;
        li{
            float: left;
            margin-left: 20px;
            cursor: pointer;
            a{
                display:inline-block;
                width:100%;
                height:100%
            }
            span{
                display:inline-block;
                width: 36px;
                height: 34px;
            }
            font{
                display: block;
                font-size: 11px;
                margin-top:7px;
            }
            &.chose{
                a{
                    color: #368df7 !important;  
                }
                
            }   
            &.unchose{
                a{
                    color: #6dffeb !important;  
                }
                
            }
        }
        li:nth-of-type(1){
            .unchose{
                background-image:url('../../assets/images/home/总览.png');
                background-size: 100% 100%;
            }
            .chose{
                background-image:url('../../assets/images/home/总览2.png');
                background-size: 100% 100%;
            }
        }
        li:nth-of-type(2){
            .unchose{
                background-image:url('../../assets/images/home/产品监测平台.png');
                background-size: 100% 100%;
            }
            .chose{
                background-image:url('../../assets/images/home/产品监测平台2.png');
                background-size: 100% 100%;
            }
        }
        li:nth-of-type(3){
            .unchose{
                background-image:url('../../assets/images/home/精准营销平台.png');
                background-size: 100% 100%;
            }
            .chose{
                background-image:url('../../assets/images/home/精准营销平台2.png');
                background-size: 100% 100%;
            }
        }
        li:nth-of-type(4){
            .unchose{
                background-image:url('../../assets/images/home/资源展示平台.png');
                background-size: 100% 100%;
            }
            .chose{
                background-image:url('../../assets/images/home/资源展示平台2.png');
                background-size: 100% 100%;
            }
        }
        li:nth-of-type(5){
            span{
                background-image:url('../../assets/images/home/退出登录.png');
                background-size: 100% 100%;
            }
            font{
                color:#ff719c !important;
            }
        }

    }
}
</style>