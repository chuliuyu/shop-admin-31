<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item 
       v-for="(item,index) in info" 
      :key="index">
      {{item}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data(){
    return {
      info:[]
    }
  },
  methods:{
    getRoute(){
      const info=[];
      const arr=this.$route.matched;
      arr.forEach(v=>{
        info.push(v.meta)
      })
      this.info=info;
    }
  },
  watch:{
    $route(){
      this.getRoute();
    }
  },
  mounted(){
    this.getRoute();
  }
};
</script>

<style>
    .breadcrumb{
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
    }
</style>
