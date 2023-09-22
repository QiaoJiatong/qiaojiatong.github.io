<template>
  <div ref="main" style="width: 100%; height: 400px"></div>
  <div style="display: flex">
    <div ref="radar" class="item-chart"></div>
    <div ref="roseDiagram" class="item-chart"></div>
    <div ref="barChart" class="item-chart"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'echart',
  mounted() {
    const myEchart = echarts.init(this.$refs.main)
    myEchart.setOption({
      xAxis: {
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
          smooth: true,
          color: 'red'
        },
        {
          data: [220, 332, 201, 234, 310, 150, 120],
          type: 'line',
          smooth: true,
          color: 'blue'
        }
      ]
    })
    const myradar = echarts.init(this.$refs.radar)
    myradar.setOption({
      legend: {
        data: ['Allocated Budget', 'Actual Spending', 'Actual surplus']
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: 'Sales', max: 6500 },
          { name: 'Administration', max: 16000 },
          { name: 'Information Technology', max: 30000 },
          { name: 'Customer Support', max: 38000 },
          { name: 'Development', max: 52000 },
          { name: 'Marketing', max: 25000 }
        ]
      },
      series: [
        {
          name: 'Budget vs spending vs surplus',
          type: 'radar',
          data: [
            {
              value: [6200, 14000, 30000, 35000, 40000, 28000],
              name: 'Allocated Budget'
            },
            {
              value: [5000, 10000, 28000, 26000, 32000, 21000],
              name: 'Actual Spending'
            },
            {
              value: [1200, 4000, 2000, 7000, 8000, 7000],
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
        left: 'center',
        top: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
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
          radius: [20, 100],
          center: ['25%', '50%'],
          roseType: 'radius',
          itemStyle: {
            borderRadius: 5
          },
          label: {
            show: false
          },
          emphasis: {
            label: {
              show: true
            }
          },
          data: [
            { value: 40, name: 'Industries' },
            { value: 34, name: 'Technology' },
            { value: 28, name: 'Forex' },
            { value: 24, name: 'Gold' },
            { value: 18, name: 'Forecasts' },
          ]
        }
      ]
    })
  }
}
</script>
<style scoped>
.item-chart {
  width: 30%;
  height: 400px;
  padding: 30px;
}
</style>
