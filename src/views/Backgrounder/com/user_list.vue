<template>
  <div class="userlist">
    <div class="top">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="用户名称" prop="user">
          <el-input v-model="formInline.user" style="width:100px"></el-input>
        </el-form-item>
        <el-form-item label="用户邮箱" prop="region">
          <el-input v-model="formInline.region" style="width:150px"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-select
            placeholder="请选择状态"
            style="width:150px"
            @change="handleChange"
            v-model="formInline.region"
          >
            <el-option label="启用" value="1"></el-option>
            <el-option label="禁用" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="onSubmit">清除</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="adduser" style="width:117px">
            <i class="el-icon-plus"></i> 新增用户
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="fot">
      <el-table :data="tableData" :border="true">
        <el-table-column prop="date" label="序号"></el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column prop="name" label="电话"></el-table-column>
        <el-table-column prop="name" label="邮箱"></el-table-column>
        <el-table-column prop="name" label="角色"></el-table-column>
        <el-table-column prop="name" label="备注"></el-table-column>
        <el-table-column prop="name" label="状态"></el-table-column>
        <el-table-column prop="name" label="操作"></el-table-column>
      </el-table>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="10"
        layout="total, sizes, prev, pager, next,jumper"
        :total="100"
        style="text-align: center;margin-top:30px;"
      ></el-pagination>
    </div>
    <adduser ref="add"></adduser>
  </div>
</template>

<script>
import adduser from "@/components/adduser";
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [],
      currentPage: 4
    };
  },
  components: {
    adduser
  },
  methods: {
    adduser() {
      this.$refs.add.dialogVisible = !this.$refs.add.dialogVisible;
    },
    onSubmit() {
      console.log("submit!");
    },
    handleChange(data) {
      console.log(data);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang='less'>
.userlist {
  width: 100%;
  height: 100%;
  .top {
    border-radius: 4px;
    width: 100%;
    overflow: hidden;
    height: 103px;
    background: white;
    box-shadow: 0px 2px 5px 2px rgba(63, 63, 63, 0.35);
    form {
      margin: 20px 0 0 20px;
      label {
        font-size: 14px;
        font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
        font-weight: 700;
        text-align: center;
        color: #535559;
      }
    }
  }
  .fot {
    border: 1px solid white;
    padding: 20px;
    width: 100%;
    margin-top: 20px;
    box-sizing: border-box;
    border-radius: 4px;
    background: #ffffff;
    box-shadow: 0px 2px 5px 2px rgba(63, 63, 63, 0.35);
    .el-table__header-wrapper th:nth-last-of-type(2) {
      border-right: none;
    }
  }
}
</style>