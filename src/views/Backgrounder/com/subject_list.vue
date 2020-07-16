<template>
  <div class="userlist">
    <div class="top">
      <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
        ref="form"
        :rules="rules"
      >
        <el-form-item label="学科编号" prop="rid">
          <el-input v-model="formInline.rid" style="width:100px"></el-input>
        </el-form-item>
        <el-form-item label="学科名称" prop="name">
          <el-input v-model="formInline.name" style="width:150px"></el-input>
        </el-form-item>
        <el-form-item label="创建者" prop="username">
          <el-input v-model="formInline.username" style="width:100px"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select
            placeholder="请选择状态"
            style="width:150px"
            @change="handleChange"
            v-model="formInline.status"
          >
            <el-option label="启用" value="1"></el-option>
            <el-option label="禁用" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="restdata">清除</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="adduser" style="width:117px">
            <i class="el-icon-plus"></i> 新增学科
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="fot">
      <el-table :data="subjectlist" :border="false" v-if="subjectlist!=''">
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="rid" label="学科编号"></el-table-column>
        <el-table-column prop="name" label="学科名称"></el-table-column>
        <el-table-column prop="short_name" label="简称"></el-table-column>
        <el-table-column prop="intro" label="创建者"></el-table-column>
        <el-table-column label="创建日期">
          <template slot-scope="scope">{{scope.row.create_time.split(' ')[0]}}</template>
        </el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <span :class="{color:!scope.row.status}">{{statext(scope.row.status)}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template v-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">禁用</el-button>
            <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        layout="total, sizes, prev, pager, next,jumper"
        :total="total"
        style="text-align: center;margin-top:30px;"
      ></el-pagination>
    </div>
    <addsubject ref="add"></addsubject>
  </div>
</template>

<script>
import addsubject from "@/components/addsubject";
import { getsubjectlist } from "@/api/index";
export default {
  data() {
    return {
      formInline: {
        name: "", //否	string	学科名称
        page: 1, //否	string	页码 默认为1
        limit: 10, //否	string	页尺寸 默认为10
        rid: "", //否	string	学科编号
        username: "", //否	string	创建者用户名
        status: "" //否	string	状态 0(禁用) 1(启用)
      },
      total: 10,
      subjectlist: [],
      rules: {
        rid: [
          {
            validator: (rule, value, callback) => {
              if (/^\d+$/.test(value) || value == "") {
                callback();
              } else {
                callback(new Error("只能输入数字"));
              }
            },
            trigger: "change"
          }
        ]
      },
      currentPage: 1
    };
  },
  components: {
    addsubject
  },
  methods: {
    statext(index) {
      if (index == 0) {
        return "禁用";
      } else {
        return "启用";
      }
    },
    adduser() {
      this.$refs.add.dialogVisible = !this.$refs.add.dialogVisible;
    },
    restdata() {
      this.$refs.form.resetFields();
    },
    onSubmit() {
      console.log("submit!");
    },
    handleChange(data) {
      console.log(data);
    },
    handleSizeChange(val) {
      this.formInline.limit = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.formInline.page = val;
      console.log(`当前页: ${val}`);
    }
  },
  created() {
    getsubjectlist(this.formInline).then(res => {
      this.subjectlist = res.data.items;
      this.total = res.data.pagination.total;
      console.log(res);
    });
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
      input {
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
  }
}
.color {
  color: red;
}
</style>