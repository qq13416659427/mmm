<template>
  <div class="question">
    <div class="top">
      <el-form :model="formInline" class="demo-form-inline" ref="form">
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
          <el-select placeholder="请选择状态" style="width:150px" v-model="formInline.status">
            <el-option label="启用" value="1"></el-option>
            <el-option label="禁用" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button>清除</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:117px">
            <i class="el-icon-plus"></i> 新增学科
          </el-button>
        </el-form-item>
      </el-form>
    </div>
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
      }
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
}
</style>