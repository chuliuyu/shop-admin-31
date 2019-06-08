<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">后台管理
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/shop' }">商品列表
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {};
</script>

<style>
    .breadcrumb{
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
    }
</style>
