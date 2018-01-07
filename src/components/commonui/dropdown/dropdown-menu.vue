
<template>
    <div class="v-dropdown-menu" @click = 'showselect' id="dropdown-menu" >
        <p @click='triggle' class="dropdown-menu-p">{{selectList.title}}</p>
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
            }
        },
        methods:{
            outcrement:function(message){
                if (message) {
                    this.upDown='down'
                    this.selectList.title=message;
                    this.selectList.selectStatus=false;
                    this.menueshow=false;
                }else{
                    this.upDown='down'
                    this.menueshow=false;
                }
            },
            triggle:function(){
                this.menueshow = true;
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
            }
        },
        template:`<div class='listdiv'><div class="overlay" v-if='status' @click.stop='hidelist'></div><ul v-if='status'><li class="v-dropdown-menu_list" v-for = 'item in list' v-on:click = 'increment(item)'>{{item.name}}
    </li></ul></div>`,
        methods:{
            chosen:function(){
            },
            showselect(){
            this.selectList.selectStatus=true;
            },
            increment:function(item){
                this.showstatus= !this.showstatus;
                this.$emit('itemtodo',item.value);
            },
            test:function(){

            },
            hidelist(){
                this.$emit('itemtodo');
            },

        },
    }

)
</script>
<style lang="less" >
.overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0);
    z-index:9;
}
.v-dropdown-menu {
    min-height: 25px;
    height:1.8rem;
    position: absolute;
    border: 1px solid #1b44ba;
    top: 1rem;
    left: 13%;
    width:13%;
    margin-left:25px !important;
    color: white;
    box-shadow: 1px 0 30px  rgba(1,1,13,0.4);
    padding-left: 20px;
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
    height: 100%;
    width: 100%;
    ul{
        position: absolute;
        left:0;
        top:0;
        height: auto;
        width: 100%;
        margin-left: -1px;
        box-shadow: 1px 0 30px  rgba(1,1,13,0.4);
        border: 1px solid #1b44ba;
        background-color: #193583;
        z-index:444;
        li {
            list-style: none;
            color: white;
            background-color: #193583;
            height: 1.8rem;
            font-size: 0.9rem;
            line-height: 1.8rem;
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
    left:-10px;
    top:0;
    height: 100%;
    width: 100%;
    color: white;
    cursor: pointer;
    z-index: 9;
    font-size: .9rem;
    line-height: 1.8rem;
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
