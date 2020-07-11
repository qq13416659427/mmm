<template>
  <div class="login">
    <div class="left">
      <div class="title">
        <img src="@/assets/img/login_logo.png" alt />
        <span class="title_name">黑马面面</span>
        <span class="wire"></span>
        <span class="fun_name">用户登录</span>
      </div>
      <div class="formbox">
        <el-form :model="form" :rules="rules" ref="form">
          <el-form-item prop="phone">
            <el-input
              placeholder="请输入手机号"
              prefix-icon="el-icon-user"
              v-model="form.phone"
              style="height:45px;"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              v-model="form.password"
              :show-password="true"
              style="height:45px;"
            ></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-row>
              <el-col :span="18">
                <el-input
                  placeholder="请输入验证码"
                  prefix-icon="el-icon-key"
                  v-model="form.code"
                  style="height:45px;"
                ></el-input>
              </el-col>
              <el-col :span="6">
                <img
                  :src="imgurl"
                  alt
                  style="width:100%;height:45px;cursor: pointer;"
                  @click="change"
                  ref="QRcode"
                />
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="form.isposs">
              我已阅读并同意
              <el-link type="primary" style="margin-bottom:2px">用户协议</el-link>和
              <el-link type="primary" style="margin-bottom:2px">隐私条款</el-link>
            </el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width:100%" @click="login">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width:100%" @click="logon">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <img src="@/assets/img/login_backimg.png" alt />
    <popout ref="logon"></popout>
  </div>
</template>

<script>
import popout from "@/components/Popout";
export default {
  data() {
    return {
      form: {
        phone: "",
        password: "",
        code: "",
        isposs: ""
      },
      rules: {
        phone: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 11, max: 11, message: "输入有误", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 12, message: "输入有误", trigger: "blur" }
        ],
        code: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
          { min: 4, max: 4, message: "输入有误", trigger: "blur" }
        ],
        isposs: [{ required: true, message: "请勾选", trigger: "blur" }]
      },
      imgurl: process.env.VUE_APP_USER + "/captcha?type=login"
    };
  },
  components: {
    popout
  },
  methods: {
    change() {
      this.imgurl =
        process.env.VUE_APP_USER +
        "/captcha?type=login&t_" +
        Math.random() * 999;
    },
    login() {
      this.$refs.form.validate(res => {
        if (res) {
          this.$message({
            message: "登录成功",
            type: "success"
          });
        } else {
          alert("FxXX");
        }
      });
    },
    logon() {
      this.$refs.logon.dialogVisible = true;
    }
  },
  created() {}
};
</script>

<style lang='less'>
.login {
  display: flex;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #1493fa, #01c6fa);
  align-items: center;
  justify-content: space-around;
  .left {
    width: 478px;
    height: 550px;
    background: #f5f5f5;
    .title {
      display: flex;
      width: 246px;
      height: 28px;
      margin: 44px 184px 0 48px;
      align-items: center;
      img {
        width: 22px;
        height: 17px;
      }
      .title_name {
        margin: 0 15px 0 10px;
        font-size: 24px;
        font-family: SourceHanSansCN Regular, SourceHanSansCN Regular-Regular;
        font-weight: 400;
        text-align: left;
        color: #0c0c0c;
      }
      .wire {
        width: 1px;
        height: 28px;
        background: #c7c7c7;
      }
      .fun_name {
        font-size: 22px;
        font-family: PingFangSC Regular, PingFangSC Regular-Regular;
        font-weight: 400;
        text-align: left;
        color: #0c0c0c;
        margin-left: 14px;
      }
    }
    .formbox {
      width: 394px;
      margin: 28px 41px 0 43px;
    }
    .el-input__inner {
      background: #ffffff;
      height: 100%;
      font-size: 13px;
    }
    .el-form-item {
      margin-bottom: 25px;
    }
    .el-form-item__content {
      line-height: 0px;
    }
  }
}
</style>