<template>
  <el-dialog :visible.sync="dialogVisible" width="600px" center class="dialog">
    <span slot="title">用户注册</span>
    <div class="main">
      <el-form :model="form" status-icon ref="form" label-width="61px" :rules="rules">
        <el-form-item label="头像" prop="avatar">
          <el-upload
            class="avatar-uploader"
            action="http://127.0.0.1/heimamm/public/uploads"
            name="image"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="昵称" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="图形码" prop="bar_code">
          <el-row>
            <el-col :span="17">
              <el-input v-model="form.bar_code"></el-input>
            </el-col>
            <el-col :span="6">
              <img :src="code_img" alt class="code" @click="changed" ref="file" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="验证码" prop="rcode">
          <el-row>
            <el-col :span="17">
              <el-input v-model="form.rcode"></el-input>
            </el-col>
            <el-col :span="6">
              <el-button class="code" @click="getmessage">获取用户验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
    <div slot="footer" class="footer">
      <el-button @click="resetForm('form')">取消</el-button>
      <el-button type="primary" @click="verify">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { SMS_verification } from "@/api/index";
export default {
  data() {
    return {
      imageUrl: "",
      form: {
        avatar: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        bar_code: "",
        rcode: ""
      },
      rules: {
        avatar: [{ required: true, message: "头像未上传", trigger: "blur" }],
        username: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
          { min: 2, max: 10, message: "输入有误", trigger: "blur" }
        ],
        email: [{ required: true, message: "邮箱不能为空", trigger: "blur" }],
        phone: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          { min: 11, max: 11, message: "输入有误", trigger: "blur" }
        ],
        password: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 6, max: 11, message: "输入有误", trigger: "blur" }
        ]
      },
      dialogVisible: false,
      code_img: process.env.VUE_APP_USER + "/captcha?type=login"
    };
  },

  created() {},
  methods: {
    changed() {
      this.code_img =
        process.env.VUE_APP_USER +
        "/captcha?type=login&t_" +
        Math.random() * 999;
    },
    handleAvatarSuccess(res) {
      this.form.avatar = res.data.file_path;
      this.imageUrl = "http://127.0.0.1/heimamm/public/" + res.data.file_path;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 4;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 png/jpg 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 4MB!");
      }
      return isJPG && isLt2M;
    },
    getmessage() {
      SMS_verification().then(res => {
        console.log(res);
      });
    },
    verify() {
      this.$refs.form.validate(res => {
        if (res) {
          this.$message({
            message: "登录成功",
            type: "success"
          });
        } else {
          alert("有误");
        }
      });
    },
    resetForm(formName) {
      this.dialogVisible = false;
      this.imageUrl = "";
      this.$refs[formName].resetFields();
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
    font-size: 14px;
    text-align: left;
  }
  .el-form-item__content {
    text-align: center;
  }
  .code {
    position: relative;
    width: 100%;
    height: 40px;
    margin-left: 20px;
    cursor: pointer;
    span {
      font-size: 11px;
    }
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>