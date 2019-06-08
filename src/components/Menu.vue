<template>
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isShow">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>购物商城</span>
        </template>
          <el-menu-item index="1-1">商品管理</el-menu-item>
          <el-menu-item index="1-2">栏目管理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-service"></i>
          <span>会员管理</span>
        </template>
          <el-menu-item index="2-1">会员列表</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>商城订单</span>
        </template>
          <el-menu-item index="3-1">订单管理</el-menu-item>
      </el-submenu>
    </el-menu>
</template>

<script>
export default {
    props:["isShow"]
}
</script>

<style>
    .el-menu-vertical-demo{
        height: 100%;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>
