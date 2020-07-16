<template>
  <div class="question">
    <div class="top">
      <el-form :model="formInline" class="demo-form-inline" ref="form" label-width="90px">
        <el-row>
          <el-col :span="5">
            <el-form-item label="学科" prop="status">
              <el-select placeholder="请选择学科" style="width:150px" v-model="formInline.status">
                <el-option label="启用" value="1"></el-option>
                <el-option label="禁用" value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="阶段" prop="status">
              <el-select placeholder="请选择阶段" style="width:150px" v-model="formInline.status">
                <el-option label="启用" value="1"></el-option>
                <el-option label="禁用" value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="企业" prop="status">
              <el-select placeholder="请选择企业" style="width:150px" v-model="formInline.status">
                <el-option label="启用" value="1"></el-option>
                <el-option label="禁用" value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="题型" prop="status">
              <el-select placeholder="请选择题型" style="width:150px" v-model="formInline.status">
                <el-option label="启用" value="1"></el-option>
                <el-option label="禁用" value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="5">
            <el-form-item label="难度" prop="status">
              <el-select placeholder="请选择难度" style="width:150px" v-model="formInline.status">
                <el-option label="启用" value="1"></el-option>
                <el-option label="禁用" value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="作者" prop="status">
              <el-input v-model="formInline.rid" style="width:150px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="状态" prop="status">
              <el-select placeholder="请选择状态" style="width:150px" v-model="formInline.status">
                <el-option label="启用" value="1"></el-option>
                <el-option label="禁用" value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="日期" prop="status">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="formInline.rid"
                style="width:150px;"
                prefix-icon="false"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="标题">
          <el-input v-model="formInline.rid" style="width:388px; margin-right:10px"></el-input>
          <el-button type="primary">搜索</el-button>

          <el-button>清除</el-button>

          <el-button type="primary" style="width:117px">
            <i class="el-icon-plus"></i> 新增试题
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="fot">
      <el-table :data="subjectlist" :border="true" v-if="subjectlist!=''">
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
      subjectlist: "1",
      total: 10,
      currentPage: 1
    };
  }
};
</script>

<style lang='less'>
.question {
  width: 100%;
  height: 100%;
  .top {
    border-radius: 4px;
    border: 1px solid white;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 5px 2px rgba(63, 63, 63, 0.35);
    form {
      margin: 22px 0 42px 10px;
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
    .el-table .cell {
      line-height: 70px;
    }
    .el-table th {
      padding: 0;
    }
  }
}
</style>