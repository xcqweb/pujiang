
<template>
    <div class="v-dropdown-menu" 
		style="border: none;"
        @click = 'showselect' 
        v-clickOutside='hide'
        v-bind:style="{ width:selectList.width ,left:selectList.left,top:selectList.top}" 
        >
        <p @click='triggle' v-on:itemtodo2="sendMsgParent" class="dropdown-menu-p" :title="selectList.title">{{selectList.title}}</p>
        <span :class="upDown" @click='triggle'></span>
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
        mounted(){
        },
        methods:{
            sendMsgParent:function(){

                this.$emit('listenAtparent',selectList.title)
            },
            hide(){
            	this.menueshow=false
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
                this.menueshow = !this.menueshow;
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
                //this.menueshow=!this.menueshow;
                
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
        template:`<div class='listdiv' v-bind:style="{height: listDivHeight+'rem',maxHeight:maxHeight+'rem' }" v-bind:class="{ more: isMore }" v-if='status'><div class="overlay" v-if='status' @click.stop='hidelist'></div><ul @mousewheel='moreStatus'><li class="v-dropdown-menu_list" v-for = 'item in list' v-on:click = 'increment(item)'>{{item}}
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
	display: none;
    position: fixed;
    width: 400vw;
    height: 400vh;
    transform: translate(-50%,-50%);
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0);
    z-index:100;
}
.v-dropdown-menu {
    height:1.8rem;
    line-height: 1.8rem;
    position: absolute;
    border: 0.05rem solid #1b44ba;
    top: 50%;
    transform: translate(0,-50%);
    color: white;
    box-shadow: 1px 0 30px  rgba(1,1,13,0.4);
    z-index: 320;
    white-space: nowrap;
    &:hover{
    	box-shadow: 1px 0 30px  rgba(1,1,13,1);
    }
    .up{
        display:inline-block;
        position: absolute;
        height:1.5rem;
        width:1.5rem;
        right:5%;
        top: 0.2rem;
        background-image: url('../../../assets/images/home/up.png');
        background-size: cover;
    }
    .down{
        display:inline-block;
        position: absolute;
        height:1.5rem;
        width:1.5rem;
        right:5%;
        top:0.2rem;
        background-image: url('../../../assets/images/home/down.png');
        background-size: cover;
    }
}
.listdiv{
    position: absolute;
    left:0;
    top:100%;
    width: 100%;
    overflow: hidden;
    box-shadow: 1px 0 30px  rgba(1,1,13,0.4);
    border: 1px solid #1b44ba;
    background-color: #193583;
    z-index: 100002;
    /*&.more{
            &:after{
                content: "";
                width:0;
                height: 0;
                position: absolute;
                bottom: 0.5rem;
                left: 50%;
                transform: translate(-80%,0);
                border-left: solid 0.5rem transparent;
                border-top:solid 0.25rem white;
                border-right: solid 0.5rem transparent;
            }
            li:nth-of-type(6){
                margin-top: 1.8rem;
            }
        }*/
    ul{
        position: absolute;
        left:0;
        top:0;
        height: auto;
        width: 100%;
        margin-left: -1px;
        z-index:444;
        max-height: 10.8rem;
        overflow-y: auto;
        li {
            list-style: none;
            color: white;
            background-color: #193583;
            height: 1.8rem;
            font-size: 0.8rem;
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
	position: relative;
	z-index: 1000000;
}

.dropdown-menu-p{
    position: absolute;
    left:0;
    top:0;
    height: 100%;
    width: 100%;
    color: white;
    cursor: pointer;
    text-align: center;
    z-index: -1;
    font-size: 0.8rem;
    line-height: 1.8rem;
    white-space: nowrap;
    letter-spacing: 1px;
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

			ul::-webkit-scrollbar{
			    width: 0.2rem;
			    height: 5rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			ul::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.4);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			ul::-webkit-scrollbar-thumb{
			    width: 0.8rem;
			    height: 5rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 0.5rem #02275A;
			    background-color: #eee
			}
			/*ie*/
			ul{
				scrollbar-face-color: #999;
				scrollbar-highlight-color: #193684;
				scrollbar-shadow-color: #193684;
				scrollbar-track-color: #224299;
				scrollbar-arrow-color:#0F2059;
			}
</style>