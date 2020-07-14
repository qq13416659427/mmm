<template>
  <el-dialog
    :visible.sync="dialogVisible"
    width="600px"
    center
    class="dialog"
    :before-close="handleClose"
    :show-close="false"
  >
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
        <el-form-item label="昵称" prop="username" :error="errname">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" :error="erremail">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="phone" :error="errphone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="图形码" prop="code" :error="errorMsg">
          <el-row>
            <el-col :span="17">
              <el-input v-model="form.code"></el-input>
            </el-col>
            <el-col :span="6">
              <img :src="code_img" alt class="code" @click="changed" ref="file" v-if="bol" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="验证码" prop="rcode" :error="errcode">
          <el-row>
            <el-col :span="17">
              <el-input v-model="form.rcode"></el-input>
            </el-col>
            <el-col :span="6">
              <el-button class="code" @click="getmessage" :disabled="magtime<60">
                获取用户验证码
                <span v-if="magtime<60">({{magtime}}秒)</span>
              </el-button>
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
import { SMS_verification, register } from "@/api/index";
export default {
  watch: {
    dialogVisible(newvalue) {
      if (newvalue == false) {
        this.imageUrl = "";
        this.$refs.form.resetFields();
      }
    }
  },
  data() {
    let valiphone = (rule, value, callback) => {
      if (
        /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(
          value
        )
      ) {
        callback();
      } else {
        return callback(new Error("输入有误"));
      }
    };
    let valiemail = (rule, value, callback) => {
      console.log(value.length);
      if (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value)) {
        callback();
      } else {
        return callback(new Error("输入格式有误"));
      }
    };
    let valiBcode = (rule, value, callback) => {
      if (value.length == 4) {
        callback();
      } else {
        return callback(new Error("输入格式有误"));
      }
    };
    return {
      imageUrl: "",
      bol: true,
      magtime: 60,
      errorMsg: "",
      errphone: "",
      errname: "",
      erremail: "",
      errcode: "",
      form: {
        avatar: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        code: "",
        rcode: ""
      },
      rules: {
        avatar: [{ required: true, message: "头像未上传", trigger: "blur" }],
        username: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
          { min: 2, max: 10, message: "输入有误", trigger: "blur" }
        ],
        email: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { validator: valiemail, trigger: "blur" }
        ],
        phone: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          { validator: valiphone, trigger: "change" }
        ],
        password: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 6, max: 11, message: "长度最多为11", trigger: "blur" }
        ],
        code: [{ validator: valiBcode, message: "验证码有误", trigger: "blur" }]
      },
      dialogVisible: false,
      code_img: process.env.VUE_APP_USER + "/captcha?type=sendsms"
    };
  },
  methods: {
    handleClose() {
      return;
    },
    changed() {
      this.bol = false;
      this.$nextTick(() => {
        this.bol = true;
      });
    },
    handleAvatarSuccess(res) {
      this.form.avatar = res.data.file_path;
      this.$refs.form.validateField(["avatar"]);
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
      this.magtime--;
      let num = 0;
      this.$refs.form.validateField(["phone", "code"], errorMessage => {
        if (errorMessage == "") {
          num++;
        }
      });
      if (num == 2) {
        let _time = setInterval(() => {
          this.magtime--;
          if (this.magtime == 0) {
            this.magtime = 60;
            clearInterval(_time);
          }
        }, 1000);
        SMS_verification(this.form).then(res => {
          if (res.code == 0) {
            if (res.message.includes("验证码")) {
              this.errorMsg = res.message;
              window.location.reload();
            } else {
              this.errphone = res.message;
            }
          } else {
            this.$message.success(res.data.captcha + "");
          }
        });
      } else {
        this.$message.error("获取失败");
      }
    },
    verify() {
      this.$refs.form.validate(res => {
        if (res) {
          register(this.form).then(res => {
            console.log(res);
            if (res.code == 200) {
              this.$message.success("成功");
              this.dialogVisible = false;
            } else if (res.code == 201) {
              if (res.message.includes("邮箱")) {
                this.erremail = res.message;
              } else if (res.message.includes("用户名")) {
                this.errname = res.message;
              } else {
                this.errcode = res.message;
              }
            }
          });
        }
      });
    },
    resetForm() {
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
      font-size: 10px;
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