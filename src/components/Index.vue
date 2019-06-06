<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>首页</h1>
    <h3>
      <router-link to="/login">登录</router-link>
    </h3>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  background-color: #fff;
  width: 100%;
  height: 100%;
  h3 {
    margin: 40px 0 0;
  }
  a {
    color: #42b983;
    text-decoration: none;
  }
}
</style>
