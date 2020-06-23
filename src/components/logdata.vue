<style scoped>
.chart{
    width: 100%;
    height: 220px;
}
</style>
<template>
<div>
      <div id="echarts-dom" class="chart"></div>
  <div class="table"><Table border :columns="columns5" :data="data5"></Table></div>
</div>
</template>
<script>
export default {
  data() {
    return {
      columns5: [
        {
          title: "Date",
          key: "date",
          sortable: true
        },
        {
          title: "Event",
          key: "name"
        },
        {
          title: "Lasttime",
          key: "age",
          sortable: true
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data5: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine(){
        var echarts = require('echarts');
        // 基于准备好的dom，初始化echarts实例
     let myChart = echarts.init(document.getElementById("echarts-dom"));    // 绘制图表
     var option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['植物一号', '植物二号', '植物三号', '植物四号', '植物五号']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '植物一号',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '植物二号',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '植物三号',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '植物四号',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '植物五号',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
     myChart.setOption(option);
    }
  }
}
</script>