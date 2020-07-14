<template>
  <el-container style="height:100%">
    <el-header class="header" style="padding:0">
      <img src="@/assets/img/data_logo1.png" alt />
      <img src="@/assets/img/data_logo2.png" alt />
      <span class="headspan">黑马面面</span>
      <img src="@/assets/img/data_logo1.png" alt />
      <span class="userspan"></span>
      <button>退出</button>
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">
        <el-menu class="el-menu-vertical-demo" default-active="/data_view" :router="true">
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
export default {
  data() {
    return {
      user_img: ""
    };
  }
};
</script>

<style lang='less' scoped>
.el-header {
  margin: 0;
  background-color: white;
  align-items: center;
  display: flex;
  img:nth-child(1) {
    margin-left: 24px;
  }
  img:nth-child(2) {
    margin-left: 22px;
  }
  .headspan {
    margin-left: 11px;
    font-size: 22px;
    font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
    font-weight: bold;
    color: #49a1ff;
    letter-spacing: 1px;
  }
  img:nth-child(4) {
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
  button {
    width: 57px;
    height: 28px;
    background: #409eff;
    border: 1px solid #369cff;
    border-radius: 4px;
    color: #ffffff;
    font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
    font-weight: bold;
  }
}
.aside span {
  font-size: 13px;
  font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
  font-weight: bold;
  text-align: left;
  color: #686a6e;
}
.main {
  background-color: aquamarine;
}
</style>