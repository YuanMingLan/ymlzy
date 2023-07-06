<template>
    <div class="container">
        <div class="login-box">
            <div class="left-box">
                <img src="@/assets/nico.png" alt="">
            </div>
            <div class="right-box">
                <div class="logo">
                    <img src="@/assets/bluearchivelogo.webp" alt="">
                </div>               
                <p>碧蓝档案资讯站</p>
                <div class="input-box">
                    <img src="@/assets/account.jpg" class="prefix-icon" alt="">
                    <el-input placeholder="请输入账号" type="text" v-model="account" class="input-inner"></el-input>
                </div>
                
                <div class="input-box">
                    <img src="@/assets/password.jpg" class="prefix-icon" alt="">
                    <el-input placeholder="请输入密码" :type="hiddenpwd?'password':'text'" v-model="password" class="input-inner" ></el-input>
                    <img :src="hiddenpwd?passwordshow:passwordhidden" class="prefix-icon" @click="showpassword" alt="">
                </div>
                <div>
                <el-button type="primary" round class="login-btn">登录</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Login",
        data(){
            return {
                account:"",
                password:"",
                hiddenpwd:true,
                passwordshow:require("@/assets/hidden.jpg"),
                passwordhidden:require("@/assets/show.jpg")
            }
        },
        methods:{
            showpassword(){
                this.hiddenpwd=!this.hiddenpwd;
            },
        }
    }
</script>

<style scoped>
.container{
    width: 100vw;
    height: 100vh;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-box{
    width: 1000px;
    height: 700px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
}
.left-box{
    width: 374px;
    background-color: #fff;
}
.left-box img{
    width: 100%;
    height: 100%;
}
.right-box{
    background-color: #fff;
    flex: 1;
    display: flex;
    flex-direction:  column;
    align-items: center;
}
.logo{
    width: 250px;
    height: 100px;
    border-radius: 0%;
    overflow: hidden;
    margin-top: 90px;
}
.logo img{
    width: 100%;
    height: 100%;
}
.right-box p{
    font-size: 24px;
    font-family: Microsoft YaHei-Bold,Microsoft YaHei;
    font-weight: bold;
    color: #272727;
    margin-bottom: 40px;
}
.input-box{
    width: 328px;
    height: 50px;
    background-color: #f1f2f7;
    border-radius: 25px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
}
.prefix-icon{
    height: 23px;
    width: 23px;
    margin: 0 3px 0 22px;
    
}
.input-inner{
    width: 200px;
}
>>> .el-input__inner{
    border: none;
    outline: none;
    background-color: #f1f2f7;
    font-size: 14px;
    
}
.login-btn{
    width: 328px;
    height: 45px;
    margin-top: 25px;
    box-sizing:  border-box;
}
    
</style>