<template>
  <div class="contianer">
    <div class="login-title">登录页面</div>
    <div class="login-form">
      用户名：<input type="text">
    　<br>
    密　码：<input type="password">
      <br>
      <button>登　录</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.contianer {
  width: 1200px;
  margin: 0 auto;
}
.login-form {
  width: 400px;
  position: absolute;
  left: 77%;
  top: 60%;
  margin: -200px 0 0 -213px;
  font-size: 25px;
  color: #fff;
  input {
    width: 200px;
    height: 25px;
    margin-top: 20px;
  }
  button {
    width: 150px;
    height: 30px;
    border-radius: 15px;
    background-color: orange;
    font-size: 20px;
    color: #fff;
    font-weight: 700;
    border: none;
    margin-top: 30px;
  }
}
.login-title {
  position: absolute;
  left: 70%;
  top: 10%;
  margin: -200px 0 0 -225px;
  margin: 100px auto;
  text-align: center;
  color: #409eff;
  font-size: 50px;
  font-weight: 700;
}
</style>
