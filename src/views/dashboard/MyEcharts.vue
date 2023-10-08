<template>
  <el-card shadow="hover" style="margin-top: 20px;">
    <div ref="main" style="width: 100%; height: 400px"></div>
  </el-card>
  <div style="display: flex;margin-top: 20px;">
    <el-card shadow="hover" class="echarts-card" style="margin-left: 0;">
      <div ref="radar" class="item-chart"></div>
    </el-card>
    <el-card shadow="hover" class="echarts-card">
      <div ref="roseDiagram" class="item-chart"></div>
    </el-card>
    <el-card shadow="hover" class="echarts-card">
      <!-- 抽象成一个图表组件 -->
      <div ref="barChart" class="item-chart"></div>
    </el-card>
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'MyEcharts',
  mounted() {
    const myEchart = echarts.init(this.$refs.main)
    myEchart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross' }
      },
      legend: {},
      xAxis: {
        axisTick: {
          show: false
        },
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [320, 232, 401, 334, 290, 230, 320],
          type: 'line',
          name: 'expected',
          smooth: true,
          color: 'red'
        },
        {
          data: [220, 332, 201, 234, 310, 150, 120],
          type: 'line',
          name: 'actual',
          smooth: true,
          color: 'blue'
        }
      ]
    })
    const myRadar = echarts.init(this.$refs.radar)
    myRadar.setOption({
      legend: {
        data: ['Allocated Budget', 'Actual Spending', 'Actual surplus']
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: 'Sales', max: 10000 },
          { name: 'Administration', max: 10000 },
          { name: 'Information Technology', max: 10000 },
          { name: 'Customer Support', max: 10000 },
          { name: 'Development', max: 10000 },
          { name: 'Marketing', max: 10000 }
        ]
      },
      series: [
        {
          name: 'Budget vs spending vs surplus',
          type: 'radar',
          data: [
            {
              value: [6200, 8000, 6000, 8500, 7000, 9800],
              name: 'Allocated Budget'
            },
            {
              value: [5000, 5000, 4800, 4000, 3200, 7100],
              name: 'Actual Spending'
            },
            {
              value: [1200, 3000, 1200, 4500, 3800, 2700],
              name: 'Actual surplus'
            }
          ]
        }
      ]
    })
    const myBarChart = echarts.init(this.$refs.barChart)
    myBarChart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    })
    const myRoseDiagram = echarts.init(this.$refs.roseDiagram)
    myRoseDiagram.setOption({
      legend: {
        top: 'bottom'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: 'Radius Mode',
          type: 'pie',
          radius: [10, 110],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 5
          },
          data: [
            { value: 40, name: 'Industries' },
            { value: 28, name: 'Technology' },
            { value: 18, name: 'Forex' },
            { value: 12, name: 'Gold' },
            { value: 8, name: 'Forecasts' }
          ]
        }
      ]
    })
  }
}
</script>
<style scoped>
.item-chart {
  width: 100%;
  height: 300px;
}
.echarts-card {
  margin-left: 10px;
  width: 100%;
}
</style>
