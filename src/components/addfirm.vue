<template>
  <el-dialog
    :visible.sync="dialogVisible"
    width="602px"
    class="dialog"
    :before-close="handleClose"
    :show-close="false"
    center
  >
    <span slot="title">新增企业</span>
    <div class="main">
      <el-form :model="form" status-icon ref="form" label-width="65px">
        <el-form-item label="企业编号">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="企业名称">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="企业简称">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="企业简介">
          <el-input type="textarea" v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="企业备注">
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