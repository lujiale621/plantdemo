<template>
  <div class="layout">
    <el-row>
      <el-col :span="8">
        <van-circle v-model="currentRate" :rate="30" :color="gradientColor" text="光照强度" />
      </el-col>
      <el-col :span="8">
        <van-circle v-model="currentRate" :rate="40" :color="gradientColor" text="温度:" />
      </el-col>
      <el-col :span="8">
        <van-circle v-model="currentRate" :rate="50" :color="gradientColor" text="湿度:" />
      </el-col>
    </el-row>

    <div id="echarts-dom" class="chart"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRate: 0,
      gradientColor: {
        "0%": "#3fecff",
        "100%": "#6149f6"
      },
      option: {
        title: {
          text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["环境温度", "环境湿度", "光照强度"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "30 min ago",
            "25 min ago",
            "20 min ago",
            "15 min ago",
            "10 min ago",
            "5 min ago",
            "now"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "环境温度",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "环境湿度",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "光照强度",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      }
    };
  },
  mounted() {
    this.loadchart();
    this.loaddata();
  },
  methods: {
    drawLine() {
      var echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("echarts-dom")); // 绘制图表
      console.log(this.option.series);
      myChart.setOption(this.option);
    },
    loaddata(){
            var self = this;
      var value = "getdata/event/all";
      this.axios
        .get(value, {
          params: {}
        })
        .then(function(rest) {
          console.log(rest.data);
        });
    },
    loadchart() {
      var self = this;
      var value = "getdata/penzai/thl";
      this.axios
        .get(value, {
          params: {}
        })
        .then(function(rest) {
          self.drawLine();
          self.option.series = rest.data;
          console.log(rest.data);
          console.log(self.option.series);
        });
    }
  }
};
</script>

<style scoped>
.layout {
  line-height: 100px;
}
.chart {
  width: 100%;
  height: 230px;
}
.pro {
  height: 300px;
  width: 100%;
}
</style>