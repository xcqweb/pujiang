<template>
  <section class="content">
    <div class="login_bar">
        <h1>修改密码</h1>
        <div class="user">
            <label>账号：</label>
            <input v-model.trim="modifyPass.username" placeholder="" type="text"/>  
        </div>
        <div class="password">
            <label>旧密码：</label>
            <input v-model.trim="modifyPass.oldPassword" placeholder="" type="password"/>  
        </div>
        <div class="newpassword">
            <label>新密码：</label>
            <input v-model.trim="modifyPass.newPassword" placeholder="" type="password"/>  
        </div>
        <div class="newpassworda">
            <label>确认密码：</label>
            <input v-model.trim="modifyPass.anewPassword" placeholder="" type="password"/>  
        </div>
    </div>
    <div class="sure">
        <div class="img_modify" :style="{backgroundImage: 'url(' + success + ')'}"></div>
        <div class="to_yes" @click='test'>确定</div>
    </div>
  </section>
</template>
<script>
import Vue from 'vue'
  export default {
    data(){
        return{
            success: require('../../assets/images/modifyPass.png'),
            modifyPass:{
                username:'',
                oldPassword:'',
                newPassword:'',
                anewPassword:'',
            }
            
        }
    },
    methods:{
        getBack(){
            // console.log(this.$route.path);
            this.$router.go(-1 );
        },
        test(){
            $toast.alert('手机号码不能为空')
        },
        login(){
            window.localStorage.setItem("ba","isaac"); 
        },
        clear(){
            this.$router.push({ path: '/login' });
        },
        make_sure(){
            if(this.modifyPass.newPassword){
                   if (this.modifyPass.anewPassword===this.modifyPass.newPassword){
                    this.set_http()
                }else{
                    alert('请输入相同密码')
                } 
            }else{
                alert('请输入新密码')
            } 
        },
    }
  }
</script>
<style lang="less" scoped>
@basesize:1490/1960px;
.content{
    background: #FFFFFF;
    height:569px;
}
.login_bar{
    width:45%;
    float:left;
    padding-left:5%;
    h1{
        margin-top:34/546*100% ;
        color:#2A3235;
        font-size:1.5rem;
        text-align:left;
        font-weight:500;
    }
    label{
        float:left;
        border:none;
        background:none;
        height:3rem;
        font-size: 1.4rem;
        line-height:3rem;
        width:132px; 
        color:#293134;  
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
        background:none;
        margin-left: 0;
        height:3rem;
        line-height:3rem;
        width:65%; 
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
.user{
        position: relative;
        margin-top: 30/546*100%;
        width:80%;
        height:3rem;
        margin-left: 5%;
        background: #F7F7F7;
}  
.password{
        margin-top: 37/546*100%;
        width:80%;
        height:3rem;
        margin-left: 5%;
        background: #F7F7F7;
}
.newpassword{
        margin-top: 37/546*100%;
        width:80%;
        height:3rem;
        margin-left: 5%;
        background: #F7F7F7;
}
.newpassworda{
        margin-top: 37/546*100%;
        width:80%;
        height:3rem;
        margin-left:5%;
        background: #F7F7F7;
}
.login{
    margin-left: 36%;
    width:154/654*100%;
    height:40px;
    margin-top: 37/546*100%;
    background-size: 100%;
    color:#00ffff;
    line-height: 40px;
}

}
.sure{
    float:right;
    width:50%;
    height:100%;
    .img_modify{
        width:71.4%;
        height:53%;
        background-size: 100% 100%;
        margin-left:14.1%;
        margin-top:9.1%;
    }
    .to_yes{    
        width:21.4%;
        height:54px;
        color:#098DFF;
        font-size:2rem;
        line-height: 54px;
        cursor: pointer;
        border:2px solid #52AFFF;
        border-radius: 12px;
        margin-left:38%;
    }


}   
</style>
