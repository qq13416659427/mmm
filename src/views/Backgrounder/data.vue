<template>
  <el-container style="height:100%;width:100%">
    <el-header class="header" style="padding:0">
      <img src="@/assets/img/data_logo1.png" alt @click="guide" />
      <img src="@/assets/img/data_logo2.png" alt />
      <span class="headspan">黑马面面</span>
      <div>
        <img :src="$store.state.user_info.avatar" alt />
        <span class="userspan">{{$store.state.user_info.username}}</span>
        <button @click="loginout">退出</button>
      </div>
    </el-header>
    <el-container>
      <el-aside class="aside" width="auto">
        <el-menu
          class="el-menu-vertical-demo"
          :default-active="$route.path"
          :router="true"
          :collapse="isCollapse"
        >
          <el-menu-item index="/data/data_view">
            <i class="el-icon-pie-chart"></i>
            <span slot="title">数据概览</span>
          </el-menu-item>
          <el-menu-item index="/data/user_list">
            <i class="el-icon-user"></i>
            <span slot="title">用户列表</span>
          </el-menu-item>
          <el-menu-item index="/data/question_list">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">题库列表</span>
          </el-menu-item>
          <el-menu-item index="/data/firm_list">
            <i class="el-icon-office-building"></i>
            <span slot="title">企业列表</span>
          </el-menu-item>
          <el-menu-item index="/data/subject_list">
            <i class="el-icon-notebook-2"></i>
            <span slot="title">学科列表</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { user_data } from "@/api/index";
import { removetoken } from "@/api/login";
export default {
  data() {
    return {
      user_info: {},
      isCollapse: false
    };
  },
  methods: {
    guide() {
      this.isCollapse = !this.isCollapse;
    },
    loginout() {
      this.$confirm("确定要退出吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          removetoken();
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          this.$router.push("/login");
        })
        .catch(() => {});
    }
  },
  created() {
    user_data().then(res => {
      this.user_info = res.data;
      this.user_info.avatar = process.env.VUE_APP_USER + "/" + res.data.avatar;
      this.$store.state.user_info = this.user_info;
    });
  }
};
</script>

<style lang='less' scoped>
* {
  padding: 0;
  margin: 0;
}
body,
html {
  width: 100%;
  height: 100%;
}
.el-header {
  margin: 0;
  background-color: white;
  align-items: center;
  display: flex;
  img:nth-child(1) {
    margin-left: 24px;
    cursor: pointer;
  }
  img:nth-child(2) {
    margin-left: 22px;
  }
  .headspan {
    width: 92px;
    flex-shrink: 0;
    margin-left: 11px;
    font-size: 22px;
    font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
    font-weight: bold;
    color: #49a1ff;
    letter-spacing: 1px;
  }
  div {
    position: absolute;
    right: 20px;
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      border-radius: 30px;
      cursor: pointer;
    }
    .userspan {
      margin-left: 5px;
      font-size: 13px;
      flex-shrink: 0;
      font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
      font-weight: bold;
      color: #636363;
    }
    button {
      width: 57px;
      height: 28px;
      flex-shrink: 0;
      margin-left: 40px;
      background: #409eff;
      border: 1px solid #369cff;
      border-radius: 4px;
      color: #ffffff;
      font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
.aside {
  span {
    font-size: 13px;
    font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
    font-weight: bold;
    text-align: left;
    color: #686a6e;
  }
}
.main {
  padding: 20px;
  background: #e8e9ec;
  box-shadow: inset 0px 2px 5px 2px rgba(63, 63, 63, 0.35);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>