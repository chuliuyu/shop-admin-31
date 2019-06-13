<template>
  <div>
    <el-row type="flex" justify="space-between" class="header">
      <div>
        <el-button type="primary" @click="handelAdd">新增</el-button>
        <el-button type="danger" @click="handleDels">删除</el-button>
      </div>
      <div>
        <el-input placeholder="请输入内容" 
                  class="input-with-select"
                  v-model="searchValue">
          <el-button slot="append" 
                     icon="el-icon-search"
                     @click="handleSearch">
          </el-button>
        </el-input>
      </div>
    </el-row>
    <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="标题"
      width="400">
      <template slot-scope="scope">
          <!-- {{ scope.row.imgurl }} -->
          <el-row type="flex" align="middle">
              <img :src="scope.row.imgurl" class="img">
              <div>
                  {{scope.row.title}}
              </div>
          </el-row>
      </template>
    </el-table-column>
    <el-table-column
      prop="categoryname"
      label="类型"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sell_price"
      label="价格"
      width="120"
    >
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [
            
        ],
        pageIndex:1,
        pageSize:5,
        total:0,
        selectGoods:[],
        searchValue:""
      }
    },
    mounted(){
        this.getData();
    },
    methods: {
    //   封装请求数据
    getData(){
        this.$axios({
            url:`http://localhost:8899/admin/goods/getlist?pageIndex=1&pageSize=5&searchvalue=${this.searchValue}`,
            method:"GET",
            withCredentials: true
        }).then(res=>{
            const data=res.data;
            console.log(data);
            this.tableData=data.message;
            this.total=data.totalcount;
        })
    },
    // 封装删除请求
    delGoods(id){
        this.$axios({
            url:`http://localhost:8899/admin/goods/del/${id}`,
            method:"GET"
        }).then(res=>{
            const data=res.data;
            const {status,message}=data;
            if(status==0){
                this.$message.success(message)
            }
            this.getData();
        })
    },

    // 删除多个商品
    handleDels(){
        console.log(this.selectGoods);
        var arr=this.selectGoods.map(v=>{
            return v.id;
        })
        const ids=arr.join(",");
        this.delGoods(ids);
    },

      handleSelectionChange(val){
          this.selectGoods=val;
      },
      handleEdit(index, row) {
        this.$router.push("/admin/goods-edit/"+row.id)
      },
    //   删除单个商品
      handleDelete(index, row) {
       const id=row.id;
       this.delGoods(id);
      },
    // 搜索商品
      handleSearch(){
        this.getData();
      },
    // 添加商品
      handelAdd(){
        this.$router.push("/admin/goods-add")
      },

      handleSizeChange(val) {
        this.pageSize=val;
      },
      handleCurrentChange(val) {
        this.pageIndex=val;
      }
    }
};
</script>

<style>
    .img {
        width: 60px;
        height: 60px;
        flex-shrink: 0;
        margin-right: 5px;
    }
    .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .header{
    margin: 10px 0;
  }
</style>
