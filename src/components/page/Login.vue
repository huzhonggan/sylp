<template>
    <div class="login-wrap">
        <div class="ms-title">Vue后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名密码不能为空。</p>
            </el-form>
        </div>
    </div>
</template>
<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    console.log(valid);
                    if (valid) {
                        // var postData = new URLSearchParams()
                        // postData.append('account', self.ruleForm.username)
                        // postData.append('password',self.ruleForm.password)
                        // console.log(postData);
                        // this.$axios.post('/api/sylp/doLogin', postData,{
                        //     headers:{
                        //         'Access-Control-Allow-Orgin':'*'
                        //     }
                        // })
                        // .then(function (response) {
                        //     if(response.data.result==0){
                        //         localStorage.setItem('token',response.data.id);
                        //         self.$router.push('/main');
                        //     }else{
                        //         self.$message({
                        //             showClose: true,
                        //             message: response.data.msg,
                        //             type: 'error'
                        //         });
                        //     }
                        // })
                        // .catch(function (response) {
                        //     self.$message({
                        //             showClose: true,
                        //             message: '网络超时',
                        //             type: 'error'
                        //         });
                        // });

                        localStorage.setItem('ms_username',self.ruleForm.username);
                        self.$router.push('/main');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>