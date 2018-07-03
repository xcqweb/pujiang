<template>
    <section class="content" @mousewheel='scroll'>
    <transition name="fadeimg">
        <div class="atbs" v-show="atbs">
            <img :src="imgatbs"/>
        </div>
    </transition>
    <transition name="fadeimg">
        <div class="oneStation" v-show="oneStation">
            <img :src="imgStation"/>
        </div>
    </transition>
    <div class="login_bar">
        <transition name="fade">
            <div class="city" v-show="ciytfade"></div>
        </transition>
        <div class="login_group clearfix">
            <h1></h1>
            <div class="user">
                <input id="username" autofocus="autofocus" checked="checked" v-model.trim="loginForm.username" placeholder="请输入账号" type="text" autocomplete="off"/>  
            </div>
            <div class="password">
                <input id='password' class="warning" v-model.trim="loginForm.password"  @keyup.enter="logisn" placeholder="请输入密码" type="password" autocomplete="off"/>  
            </div>
            <!-- <div class="test">
                <input id="trim" v-model.trim="loginForm.code" v-on:keyup.enter="login" placeholder="验证码" type="text"/>
            </div>
            <div class="testimg" ><img v-if='redome' @click='redom' v-bind:src="src" alt="验证码" /></div>
            <div class="changeImge" @click='redom'>换一张</div> -->
            <div class="login" @click='logisn($event)'>{{logintext}}</div>
        </div>

    </div>
  </section>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
import store from '../../vuex/index' 
import Vue from 'vue'
import {timestamp} from '../../common/js/sign.md5.js'
import {API_HZ} from '../../api/env.js'
import To_md5 from '../../common/js/md5.js'
import {askUrl,paramToSign,getConfig} from '../../common/js/sign/param_to_sign.js'
import Bus from '@/common/js/bus.js'
import Start_end_class from '@/common/js/star_end_class.js'
import api from '@/api/moudles/tanzhenData'
import {setCookie,getCookie} from '@/common/js/cookie/cookie.js'
import $axios from '@/api/instance/index'
  export default {
    data(){
        return{
            name:'',
            imgatbs:require('../../assets/images/login/ATBS.png'),
            imgStation:require('../../assets/images/login/oneStation.png'),
            atbs:false,
            oneStation:false,
            ciytfade:false,
            data_arr:{},
            logintext:'登录',
            loginForm: {
                password: '',        //表单v-model的值
                username: '', 
                code:'',
            },
            busData:{
                home:false,
                down:{link:'/login/pagetwo',show:true}
            },
            initialized:false,
            src:'http://120.55.190.57/bigdata/servlet/validateCodeServlet',
            redome:true,
            rules: { //验证规则
                username: [
                    { required: true, message: '用户名不能少', trigger: 'blur'},
                    { min: 6, max: 16, message: '用户名在6到16位之间', trigger: 'blur'}
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur'}
                ]
            }
        }
    },
    beforeDestroy(){
		this.$off()
	},
    methods:{
        getBack(){
            this.$router.go(-1);
        },
        redom(){
            this.src='http://120.55.190.57/bigdata/servlet/validateCodeServlet?'+Math.random()
        },
        scroll(event){
            let _self=this
                window.setTimeout(() => {
                    _self.initialized = true;
                }, 100);
                this.mousewheelDetal(event)
                
        },
        mousewheelDetal(event){
            if (this.initialized) {
                    if (event.wheelDeltaY < 0) {
                        this.$router.push({ path: '/login/pagetwo' });
                        this.initialized = false
                     }else{
                        this.$router.go(-1 );
                     }
                }
        },
        loginmock(){
            let _self = this;
            let start_end_instance =  new Start_end_class('timeline',20,10);
            start_end_instance.get_response().then(re =>{
                _self.data_arr = re ;                
            })
        },


        resetForm(formName){
            this.$refs[formName].resetFields();
        },
        logisn(){
        		if(this.loginForm.username==='' || this.loginForm.password===''){
        			alert('用户名和密码不能为空!')
        			return;
        		}
        		
            	this.logintext='登录中';
              
              const formData = new FormData()//post 传值需将传递的对象转换成字符串
              formData.append('username', this.loginForm.username);
              formData.append('password', this.loginForm.password);
              
                 $axios.post(API_HZ+'/pj/api/user/login',formData)
                .then((data ) => {
                	//console.log(data);
                    this.logintext='登录中...'; 
                    if(data.data.code=200){
                        if(data.data.message==="用户名密码错误"){
                            this.logintext='登录';
                            this.loginForm.password='';
                            alert(data.data.message)
	                        }else{
	                              let token = data.data.data.token;
	                              setCookie('token', token);
	                              this.logintext='登录';
	                              this.loginForm.password='';
	                              this.$router.replace({ path: '/'});
	                        }
	                    }else{
	                        alert(data.data.message);
	                        this.logintext='登录';
	                    }
	                })
	                .catch(error => {
	                	if(error.code===666){
	                		alert('网络出错啦!')
	                		this.logintext='登录';
	                	}
	                  this.reloading=true;
	                });
        },
    },
    created(){
    	
    },
    mounted(){
        window.setTimeout(() => {
            this.ciytfade=true;
        }, 700);
        window.setTimeout(() => {
            this.atbs=true;
        }, 1200);
        window.setTimeout(() => {
            this.oneStation=true;
        }, 1700);
    }
  }
</script>
<style lang="less" scoped>
@basesize:1490/1960px;
.content{
    height:100%;
    width:100%;
    background-size:100% 100%;
        img{                  
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
        }
        .atbs{
            z-index:22;
            position:absolute;
            left:265/1920*100%;
            top:245/1080*100%;
            height: auto;
            width: 600/1920*100%;
            text-align: center;
        }
        .oneStation{
            z-index:22;
            position:absolute;
            left:290/1920*100%;
            top:635/1080*100%;
            height: auto;
            width: 451/1920*100%;
            text-align: center;
        }
        
}
.login_bar{
    z-index:22;
    position: fixed;
    @media screen and (min-width: 700px){
        left:63%;
        top:20%;
        height:520/1080*100%;
        width:350/1920*100%;
        min-height: 19.25rem;
        min-width: 15.75rem;
    }
    @media screen and (max-width: 700px){
        left:0;
        top:0;
        width:100vw;
        min-height: 95%;
    }
    /*opacity: 0.2;*/
    .city{
        width:100%;
        height:100px;
        background:url('../../assets/images/login/city.png') no-repeat  center;
        background-size: 100% 100%;
    }
    .login_group{
        position:absolute;
        height:80%;
        width:100%;
        bottom:0;
        border-radius: 6px;
        background-color:#42a4ff;
        box-shadow: 0 1px 34px rgba(35,35,127,0.2);
    }
    label{
        float:left;
        border:none;
        margin-left: 0.75rem;
        background:none;
        height:2rem;
        font-size: 0.8rem;
        line-height:2rem;
        width:4rem; 
        text-indent:1.6rem;
        color:#fff;  
        &:after {
                    content: ".";
                    display: block;
                    height: 0;
                    clear: both;
                    visibility: hidden;
                }
        }
    input{
        float:left;
        border:none;
        margin-left: 0;
        height:2rem;
        line-height:2rem;
        width:60%; 
        color:black;
        outline:medium;
        &:after {
	                content: ".";
	                display: block;
	                height: 0;
	                clear: both;
	                visibility: hidden;
                }
    }
    h1{
        height:1.5rem;
    }
    .user{
        position: relative;
        border-radius: 0.3rem;
        margin-top: 17/546*100%;
        width:100%;
        height:2rem;
        margin-left: 11%;
        background-color:wihte;
        input{
            padding-left:3rem;
            background-color:none;
            background:url('../../assets/images/login/username.png') no-repeat  center;
            background-size: 100% 100%;
        }
}  
.password{
        border-radius: 0.3rem;
        margin-top: 47/546*100%;
        width:100%;
        height:40px;
        margin-left: 11%;
        background-color:wihte;
        input{
            padding-left:3rem;
            background-color:none;
            background:url('../../assets/images/login/password_home.png') no-repeat  center;
            background-size: 100% 100%;
        }

}
.test{
        border-radius: 0.3rem;
        margin-top: 47/546*100%;
        width:200/654*100%;
        height:2rem;
        float: left;
        margin-left: 11%;
        input{
            padding-left:1rem;
            width:87% !important;
        }
        &:after {
                    content: ".";
                    display: block;
                    height: 0;
                    clear: both;
                    visibility: hidden;
                }
        
} 
.testimg{
    height: 2rem;
    width: 140/546*100%;
    float: left;
    margin-top: 47/546*100%;
    margin-left:0.8rem;
    img{
    cursor: pointer;
    height: 100%;
    width: 100%;
    &:after {
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
        }
    }
    &:after {
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
        }
}
.changeImge{
    height: 2rem;
    line-height:2.5rem;
    float:left;
    margin-top: 37/546*100%;
    font-size:0.8rem;
    margin-left:0.6rem;
    cursor: pointer;
    color:#ffffff;
}
.login{
    margin-left: 9%;
    width:83%;
    height:2.5rem;
    margin-top: 160/546*100%;
    background:url('../../assets/images/login/button.png') no-repeat  center;
    background-size: 100% 100%;
    color:#988100;
    line-height: 2.5rem;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.1rem;
}
.change{
    float: right;
    color: white;
    margin-right: 2.5rem;
    text-decoration: none;
}
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2.5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}

.fadeimg-enter-active, .fadeimg-leave-active {
  transition: all .8s linear
}
.fadeimg-enter, .fadeimg-leave-to /* .fadeimg-leave-active in below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
