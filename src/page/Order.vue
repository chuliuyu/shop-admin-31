<template>
  <div>
    <el-row style="width:100%" type="flex" justify="end">
      <el-col :span="6"></el-col>
      <el-col :span="6">
        <el-input placeholder="请输入内容" 
                  class="input-with-select"
                 >
          <el-button slot="append" 
          icon="el-icon-search" ></el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column prop="id" label="订单id" width="120">
      </el-table-column>
      <el-table-column prop="user_name" label="会员名称" width="120"></el-table-column>
      <el-table-column prop="area" label="地址" width="120"></el-table-column>
      <el-table-column prop="expressTitle" label="快递" width="120"></el-table-column>
      <el-table-column prop="statusName" label="状态" width="120"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleInfo(scope.$index, scope.row)">查看</el-button>
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
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        
      ],
      pageIndex: 1,
      pageSize: 5,
      total: 5
    };
  },
  mounted(){
      this.getData();
  },
  methods: {
    // 封装获取数据
    getData(){
        this.$axios({
            url:`http://localhost:8899/admin/order/getorderlist?orderstatus=&vipname=&pageIndex=1&pageSize=5`,
            method:"GET"
        }).then(res=>{
            const data=res.data;
            this.tableData=data.message;
            this.pageIndex=data.pageIndex;
            this.pageSize=data.pageSize;
            this.total=data.totalcount;
        })
    },
    handleInfo(index,row){
        console.log(index,row);
    },
    handleSelectionChange(val) {
      console.log(val);
    },
    handleSizeChange(val) {
      this.pageSize=val;;
    },
    handleCurrentChange(val) {
      this.pageIndex=val;;
    }
  }
};
</script>

<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
