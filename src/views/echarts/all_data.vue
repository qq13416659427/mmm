<template>
  <div id="myChart"></div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      option: {
        title: {
          text: "整体数据",
          textStyle: {
            color: "#666666",
            fontWeight: 400,
            fontSize: 21
          },
          left: 55,
          top: 34
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ["#F76137", "#F9B358", "#409EFF"],
        legend: {
          orient: "vertical",
          padding: [10, 10],
          top: 62,
          right: 245,
          itemGap: 33,
          itemWidth: 10,
          itemHeight: 10,
          data: ["黑马", "阿里", "京东"],
          textStyle: {
            padding: [0, 0, 0, 23]
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "80%"],
            left: 187,
            top: 71,
            width: 520,
            height: 520,
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            itemStyle: {},
            data: [
              { value: 335, name: "黑马" },
              { value: 310, name: "阿里" },
              { value: 234, name: "京东" }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption(this.option);
    }
  }
};
</script>

<style>
#myChart {
  width: 100%;
  height: 100%;
}
</style>