<template>
  <div class="box">
    <div class="top">
      <ul>
        <li>
          <div>
            <span>1</span>
          </div>
          <span class="text">今日新增用户</span>
        </li>
        <li>
          <div>
            <span>1</span>
          </div>
          <span class="text">总用户量</span>
        </li>
        <li>
          <div>
            <span>0</span>
          </div>
          <span class="text">新增试题</span>
        </li>
        <li>
          <div>
            <span>1</span>
          </div>
          <span class="text">总试题量</span>
        </li>
        <li>
          <div>
            <span>2</span>
          </div>
          <span class="text">总刷题量</span>
        </li>
        <li>
          <div>
            <span>3</span>
          </div>
          <span class="text">人均刷题量</span>
        </li>
      </ul>
    </div>
    <div class="data">
      <alldata></alldata>
    </div>
  </div>
</template>

<script>
import alldata from "@/views/echarts/all_data";
export default {
  components: {
    alldata
  }
};
</script>

<style scoped lang='less'>
* {
  box-sizing: border-box;
}
.box {
  width: 100%;
  height: 100%;

  .top {
    width: 100%;
    background: white;
    box-shadow: 0px 2px 5px 2px rgba(63, 63, 63, 0.35);
    border-radius: 4px;
    ul {
      display: flex;
      justify-content: space-between;
      height: 150px;
      li {
        float: left;
        height: 150px;
        width: 100px;
        text-align: center;
        div {
          width: 99px;
          height: 99px;
          border-radius: 99px;
          border: 2px solid #0086fa;
          margin: 10px 0;
          span {
            display: inline-block;
            margin: 30px 42px;
            font-size: 35px;
            font-family: SimHei Regular, SimHei Regular-Regular;
            font-weight: 400;
          }
        }
        .text {
          width: 100px;
          font-size: 14px;
          font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
          font-weight: 400;
          line-height: 13px;
          color: #737373;
        }
        &:nth-child(1) {
          margin-left: 58px;
          div {
            span {
              color: #0086fa;
            }
          }
        }
        &:nth-child(2) {
          div {
            span {
              color: #0086fa;
            }
          }
        }
        &:nth-child(3) {
          div {
            border: 2px solid #f76137;
            span {
              color: #f76238;
            }
          }
        }
        &:nth-child(4) {
          div {
            border: 2px solid #f76137;
            span {
              color: #f76238;
            }
          }
        }
        &:nth-child(5) {
          div {
            border: 2px solid #55cd78;
            span {
              color: #55cd78;
            }
          }
        }
        &:nth-child(6) {
          div {
            border: 2px solid #55cd78;
            span {
              color: #55cd78;
            }
          }
          margin-right: 76px;
        }
      }
    }
  }
  .data {
    border-radius: 4px;
    height: 571px;
    background: #ffffff;
    margin-top: 13px;
    box-shadow: 0px 2px 5px 2px rgba(63, 63, 63, 0.35);
  }
}
</style>