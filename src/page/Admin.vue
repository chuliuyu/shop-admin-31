<template>
    <el-container>
  <el-aside width="auto">
    <Menu :isShow="isShow"></Menu>
  </el-aside>
  <el-container>
    <el-header>
      <Header @click="handlechangeshow"></Header>
    </el-header>
    <el-main>
      <Breadcrumb></Breadcrumb>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import Header from "../components/Header.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Menu from "../components/Menu.vue";
export default {
    components:{
        Header,
        Breadcrumb,
        Menu
    },
    data(){
        return {
            isShow:false
        }
    },
    methods:{
        handlechangeshow(){
            this.isShow=!this.isShow;
        }
    }
}
</script>

<style>
    .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: rgb(84, 92, 100);
    color: #333;
    text-align: center;
    line-height: 200px;
    padding-top: 60px;
  }
  
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  body >div> .el-container {
    position: absolute;
    top:0;
    bottom:0;
    width: 100%;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
