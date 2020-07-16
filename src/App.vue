<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
html,
body,
.app {
  width: 100%;
  height: 100%;
}
#nprogress .bar {
  background: rgb(123, 255, 0) !important; //自定义颜色
}
</style>