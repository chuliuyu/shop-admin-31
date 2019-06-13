<template>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ data.title }}</span>
        <span>
            <input :value="data.sort_id"
                    @blur="handleblur(data,$event)">
        </span>
        <span>
          <el-button
            type="text"
            size="mini">
            编辑
          </el-button>
        </span>
      </span>
    </el-tree>
</template>

<script>
    let id=1000;
    export default {
        data() {
            const data=[];
        return {
            data: data
            }
        },
        mounted(){
            this.getList();
        },
        methods:{
            getList(){
                this.$axios({
                url:"http://localhost:8899/admin/category/getlist/goods",
                method:"GET"
            }).then(res=>{
                const {status,message}=res.data;
                this.data=message;
            })
            },
            handleblur(data){
                if(data.sort_id==event.target.value){
                    return;
                }
                const res=window.confirm("是否确定编辑");
                if(res){
                    this.$axios({
                        url:"http://localhost:8899/admin/category/edit/" + data.category_id,
                        method:"POST",
                        withCredentials: true,
                        data:{
                            ...data,
                            sort_id:event.target.value                        }
                    }).then(res=>{
                        this.getList();
                        this.$message.success("数据修改成功")
                    })
                }
            }
        }
    }
</script>

<style>
    .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
  .custom-tree-node input {
      width: 50px!important;
  }
</style>
