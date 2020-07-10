<template>
  <div class="login">
    <div class="left">
      <div class="title">
        <img src="@/assets/img/login_logo.png" alt />
        <span class="title_name">黑马面面</span>
        <span class="wire"></span>
        <span class="fun_name">用户登录</span>
      </div>
      <!-- <el-input
        placeholder="请输入手机号"
        v-model="number"
        style="width: 394px;height:45px;margin:28px 41px 0px 43px"
      >
        <i slot="prefix" class="el-input__icon el-icon-user"></i>
      </el-input>
      <el-input
        placeholder="请输入密码"
        v-model="password"
        style="width: 394px;height:45px;margin:25px 41px 0px 43px;"
        :show-password="true"
      >
        <i slot="prefix" class="el-input__icon el-icon-lock"></i>
      </el-input>
      <el-input
        placeholder="请输入验证码"
        v-model="auth_code"
        style="width: 284px;height:44px;margin:25px 0px 0px 42px;"
      >
        <i slot="prefix" class="el-input__icon el-icon-key"></i>
      </el-input>-->
      <div class="formbox">
        <el-form :model="form">
          <el-form-item>
            <el-input
              placeholder="请输入手机号"
              prefix-icon="el-icon-user"
              v-model="form.phone"
              style="height:45px;"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              v-model="form.password"
              style="height:45px;"
            ></el-input>
          </el-form-item>
          <el-form-item>
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
                <img src="@/assets/img/code.jpg" alt style="width:100%; margin-top:2px" />
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
            <el-button type="primary" style="width:100%">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width:100%">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <img src="@/assets/img/login_backimg.png" alt />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        phone: "",
        password: "",
        code: "",
        isposs: "",
        img: ""
      }
    };
  },
  created() {
    axios({
      url: "http://127.0.0.1/heimamm/public/captcha?type=login"
    }).then(res => {
      console.log(res);
    });
  }
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