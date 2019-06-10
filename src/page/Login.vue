<template>
  <div class="container">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm form">
      <h2>登录界面</h2>
      <el-form-item label="账户" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      // console.log("submit!");
      const data={
        uname:this.form.username,
        upwd:this.form.password
      }
      this.$refs.form.validate((valid) => {
          if (valid) {
            this.$axios({
              url:"http://localhost:8899/admin/account/login",
              method:"POST",
              data,
              withCredentials: true
            }).then(res=>{
              // console.log(res);
              const {message,status}=res.data;
              if(status==0){
                this.$router.push("/");
              }
              if(status==1){
                this.$message.error(message);
              }
            })
          } 
        });
      },
      resetForm(formName) {
        this.$refs.form.resetFields();
      }
    }
  }
</script>

<style scoped >
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-image: url("../assets/9fc53b198618367a82a9fdfd23738bd4b31ce507.jpg");
}
.form {
  width: 400px;
  position: absolute;
  left: 50%;
  margin-left: 250px;
  top: 50%;
  margin-top: -150px;
}
.form h2 {
  text-align: center;
  margin-bottom: 50px;
  color: orange;
}
</style>
