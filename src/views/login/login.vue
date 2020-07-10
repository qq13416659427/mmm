<template>
  <div class="login">
    <div class="left">
      <div class="title">
        <img src="@/assets/img/login_logo.png" alt />
        <span class="title_name">黑马面面</span>
        <span class="wire"></span>
        <span class="fun_name">用户登录</span>
      </div>
    </div>
    <img src="@/assets/img/login_backimg.png" alt />
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.login {
  display: flex;
  width: 100%;
  height: 100%;
  background: linear-gradient(225deg, #1493fa, #01c6fa);
  align-items: center;
  justify-content: space-around;
  .left {
    width: 478px;
    height: 550px;
    background: #f5f5f5;
    .title {
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
        margin-left: 15px;
      }
    }
  }
}
</style>