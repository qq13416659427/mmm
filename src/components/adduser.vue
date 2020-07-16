<template>
  <el-dialog
    :visible.sync="dialogVisible"
    width="477px"
    class="dialog"
    :before-close="handleClose"
    :show-close="false"
    center
  >
    <span slot="title">新增用户</span>
    <div class="main">
      <el-form :model="form" status-icon ref="form" label-width="65px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-select placeholder="请选择角色" v-model="addform.user">
            <el-option label="管理员" value="2"></el-option>
            <el-option label="老师" value="3"></el-option>
            <el-option label="学生" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select placeholder="请选择状态" v-model="addform.regin">
            <el-option label="启用" value="1"></el-option>
            <el-option label="禁用" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="用户备注">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div slot="footer" class="footer">
      <el-button @click="rest">取消</el-button>
      <el-button type="primary">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      addform: {
        user: "",
        region: ""
      },
      form: {
        username: "",
        phone: "",
        email: ""
      },
      dialogVisible: false
    };
  },
  methods: {
    handleClose() {
      return;
    },
    rest() {
      this.dialogVisible = false;
    }
  }
};
</script>

<style lang='less'>
.dialog {
  .el-dialog__header {
    padding: 0;
    height: 53px;
    line-height: 53px;
    color: white;
    background: linear-gradient(to right, #01c4fa, #1395fa);
  }
  .el-dialog--center .el-dialog__body {
    padding: 26px;
  }
  .el-form-item__label {
    font-size: 13px;
    text-align: right;
  }
  .el-form-item__content {
    text-align: left;
  }
}
</style>