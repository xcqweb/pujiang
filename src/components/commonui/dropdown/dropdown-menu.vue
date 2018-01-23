<!--
selectlist:{
    width:'23%',
    left:'20%',
    title:'宝晶宫 ',
    selectStatus:false,
    place:[
        {
            name:'宝晶宫 ',value:'宝晶宫 '
        },
        {
            name:'洞天仙境 ',value:'洞天仙境 '
        },
        {
            name:'千年瑶寨',value:'千年瑶寨'
        }
    ]
}
!-->
<template>
    <div class="v-dropdown-menu" 

        @click = 'showselect' 
        v-bind:style="{ width:selectList.width ,left:selectList.left}" 
        >
        <p @click='triggle' v-on:itemtodo2="sendMsgParent" class="dropdown-menu-p">{{selectList.title}}</p>
        <span :class="upDown"></span>
        <transition name="dropdown-fade">
            <dropdownList 
            :list='selectList.place'  
            :status='menueshow' 
            v-on:itemtodo='outcrement'
            v-if='selectList.selectStatus'>        
            </dropdownList>
        </transition>
    </div>

</template>
<script >
import Vue from 'vue'
    export default{
        data(){
            return{
                menueshow:false,
                upDown:'down',
            }
        },
        props: [
            'selectList',
        ],
        computed:{    
        },
        watch:{
            menueshow:function (val){
                if (val) {
                    this.upDown='up'
                }else{
                    this.upDown='down'
                }
            },
        },
        methods:{
            sendMsgParent:function(){

                this.$emit('listenAtparent',selectList.title)
            },
            outcrement:function(message){
                
                if (message) {
                    this.upDown='down'
                    this.selectList.title=message;
                    this.selectList.selectStatus=false;
                    this.menueshow=false;
                    this.selectList.selectStatus = true;
                    this.$emit('listenAtparent',message)
                }else{
                    this.upDown='down'
                    this.menueshow=false;
                    this.selectList.selectStatus = true;
                    this.$emit('listenAtparent',this.selectList.title)
                }
                 
            },
            triggle:function(){
                this.menueshow = true;
                this.selectList.selectStatus = true;
                if (this.upDown!='up') {
                    this.upDown='up';
                }
            },
            hidelist(){
                this.selectList.selectStatus=false;
                if (this.upDown!='down') {
                    this.upDown='down';
                }
            },
            showselect(){
                this.selectList.selectStatus=true;
                
            },
        }
    }
    Vue.component('dropdownList',{
        props:['list','status'],
        data(){
            return{
                 msg:'jfdksjfk',
                 showstatus:true,
                 isMore:true,
            }
        },
        template:`<div class='listdiv'  v-bind:style="{height: listDivHeight+'rem',maxHeight:maxHeight+'rem' }" v-bind:class="{ more: isMore }" v-if='status'><div class="overlay" v-if='status' @click.stop='hidelist'></div><ul @mousewheel='moreStatus'  v-if='status'><li class="v-dropdown-menu_list" v-for = 'item in list' v-on:click = 'increment(item)'>{{item}}
    </li></ul></div>`,
        computed:{
            maxHeight:function(){
                if(this.list.length>5){
                    return 10.8
                }else{
                    return (this.list.length+1)*1.8
                }
            },
            listDivHeight:function(){
                return (this.list.length)*1.8
            }
        },
        methods:{
            chosen:function(){
            },
            showselect(){
            this.selectList.selectStatus=true;
            },

            increment:function(item){
                this.showstatus= !this.showstatus;
                this.isMore = true;
                this.$emit('itemtodo',item === undefined ? this.list[0] : item);
            },
            test:function(){

            },
            moreStatus(event){
                this.isMore = false;
            },
            //点击浮框背景未选中元素时 隐藏下拉框并传默认值；
            hidelist(){
                this.isMore = true;
                this.$emit('itemtodo');
            },
                
        },
        mounted(){
            
            if(this.list.length>6){
                this.isMore =  true
            }else{
                this.isMore = false
            }
            
        }
    }
)
</script>
<style lang="less" >
.overlay {
    position: fixed;
    width: 400vw;
    height: 400vh;
    transform: translate(-50%,-50%);
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0);
    z-index:119;
}
.v-dropdown-menu {
    height:1.8rem;
    line-height: 1.8rem;
    position: absolute;
    border: 1px solid #1b44ba;
    top: 50%;
    transform: translate(0,-50%);
    color: white;
    box-shadow: 1px 0 30px  rgba(1,1,13,0.4);
    z-index: 30;
    white-space: nowrap;
    .up{
        display:inline-block;
        position: absolute;
        height:9px;
        width:14px;
        right:5%;
        top:30%;
        background-image: url('../../../assets/images/home/up.png');
        background-size: 100% 100%;
    }
    .down{
        display:inline-block;
        position: absolute;
        height:9px;
        width:14px;
        right:5%;
        top:35%;
        background-image: url('../../../assets/images/home/down.png');
        background-size: 100% 100%;
    }
}
.listdiv{
    position: absolute;
    left:0;
    top:100%;
    // max-height: 10.8rem;
    width: 100%;
    overflow: hidden;
    box-shadow: 1px 0 30px  rgba(1,1,13,0.4);
    border: 1px solid #1b44ba;
    background-color: #193583;
    &.more{
            &:after{
                content: "";
                width:0;
                height: 0;
                position: absolute;
                bottom: 10px;
                left: 50%;
                transform: translate(-50%,0);
                border-left: solid 10px transparent;
                border-top:solid 5px white;
                border-right: solid 10px transparent;
            }
            li:nth-of-type(6){
                margin-top: 1.8rem;
            }
        }
    ul{
        position: absolute;
        left:0;
        top:0;
        transform: translate(-15%,0);
        height: auto;
        width: 150%;
        margin-left: -1px;
        z-index:444;
        max-height: 10.8rem;
        overflow-y: auto;
        li {
            // transform: translate(-20%,0);
            list-style: none;
            color: white;
            background-color: #193583;
            height: 1.8rem;
            font-size: 0.9rem;
            line-height: 1.8rem;
            white-space: nowrap;
            overflow: hidden;
            &:hover{
                background-color:#3c69bd;
            }
        }
    }
}

.v-dropdown-menu_list {
    cursor: pointer;
    height: 20px;
    width:100%;
    text-align: center;
    color: white;


}

.dropdown-menu-p{
    position: absolute;
    left:0;
    top:0;
    height: 100%;
    width: 80%;
    color: white;
    cursor: pointer;
    text-align: center;
    z-index: 9;
    font-size: .9rem;
    line-height: 1.8rem;
    white-space: nowrap;
    overflow: hidden;
}
.dropdown-fade-enter-active {
  transition: all .1s linear;
}
.dropdown-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.dropdown-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateY(0);

}
</style>