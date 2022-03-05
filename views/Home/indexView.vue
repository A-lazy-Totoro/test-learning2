<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <!-- 用户信息 --><!-- style="min-width: 350px" -->
      <el-card class="box-card" shadow="hover">
        <template #header>
          <div class="card-header">
            <div class="user-img">
              <img
                src="../../src/assets/user1.png"
                style="width: 100px; height: 100px"
              />
            </div>
            <div class="user-text">
              <p class="name">用户：<span>Admin</span></p>
              <p class="level">权限：<span>一&nbsp;&nbsp;&nbsp;级</span></p>
            </div>
          </div>
        </template>
        <div>
          <p>登录日期:<span>2022-03-03</span></p>
          <p>登录地点:<span>江苏</span></p>
        </div>
      </el-card>
      <!-- 用户信息 end-->
      <el-card style="margin-top: 10px">
        <el-table :data="tableData">
          <el-table-column prop="name" label="品牌" />
          <el-table-column prop="price" label="单价" />
          <el-table-column prop="dateSale" label="日销售量" />
          <el-table-column prop="monthSale" label="月销售量" />
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <el-card>
        <div
          class="lineChart"
          ref="lineChart"
          style="height: 300px; min-width: 400px"
        ></div>
      </el-card>
      <el-row :gutter="10" style="margin-top: 10px">
        <el-col :span="12">
          <el-card> <div ref="barNode" style="height: 300px"></div></el-card>
        </el-col>
        <el-col :span="12">
          <el-card>
            <div ref="pieNode" style="height: 300px">777</div>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import * as echarts from "echarts";
import { ref, onMounted, reactive, toRefs } from "vue";
import { getData } from "../../api/axios/data.js";
export default {
  name: "HomeView",
  setup() {
    //折线图容器元素
    const lineChart = ref("");
    //柱状图容器元素
    const barNode = ref("");
    //饼图容器元素
    const pieNode = ref("");

    //配置响应式 图表数据
    let totalData = reactive({
      // table表单
      tableData: [],
    });
    /*let tableData = [
       {
        name: "小米",
        price: "1999",
        dateSale: 300,
        monthSale: 8000,
      },
      {
        name: "苹果",
        price: "1999",
        dateSale: 300,
        monthSale: 8000,
      },
      {
        name: "华为",
        price: "1999",
        dateSale: 300,
        monthSale: 8000,
      },
      {
        name: "三星",
        price: "1999",
        dateSale: 300,
        monthSale: 8000,
      },
      {
        name: "oppo",
        price: "1999",
        dateSale: 300,
        monthSale: 8000,
      },
    ];*/
    //折线图数据
    const option = {
      title: {
        text: "周销售量",
      },
      tooltip: {},
      legend: {
        data: ["小米", "苹果", "华为", "三星", "oppo"],
      },
      xAxis: {
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {},
      series: [],
    };
    //柱状图数据
    const barData = {
      title: {
        text: "销售量",
      },
      tooltip: {},
      legend: {
        data: ["日销售", "月销售"],
      },
      xAxis: {
        data: ["小米", "苹果", "华为", "三星", "oppo"],
      },
      yAxis: { type: "value" },
      series: [
        {
          name: "日销售",
          data: [120, 200, 150, 80, 70],
          type: "bar",
        },
        {
          name: "月销售",
          data: [1200, 2000, 1500, 800, 700],
          type: "bar",
        },
      ],
    };
    //饼图数据
    const pieData = {
      title: {
        text: "月销售占比",
      },
      series: [
        {
          type: "pie",
          data: [
            {
              value: 335,
              name: "小米",
            },
            {
              value: 234,
              name: "苹果",
            },
            {
              value: 1548,
              name: "华为",
            },
            {
              value: 1548,
              name: "三星",
            },
            {
              value: 1548,
              name: "oppo",
            },
          ],
          radius: "50%",
        },
      ],
    };
    let totalDataRef = toRefs(totalData);
    //在mounted生命周期里，对图表进行渲染
    onMounted(() => {
      //发送请求，获取数据
      getData().then(({ data: res }) => {
        //接收table表单数据
        totalData.tableData = res.data.tableData;
        //配置接收的折线图数据
        const seriesData = [];
        const keyArr = Object.keys(res.data.lineChart.data[0]);
        keyArr.forEach((key) => {
          seriesData.push({
            name: key,
            type: "line",
            data: res.data.lineChart.data.map((item) => item[key]),
          });
        });
        option.series = seriesData;
        option.legend.data = res.data.lineChart.name;
        option.xAxis.data = res.data.lineChart.date;
        // 折线图
        const myEcharts = echarts.init(lineChart.value);
        myEcharts.setOption(option);

        //配置饼图接收数据
        pieData.series[0].data = res.data.pieData.data;
        //饼图渲染
        const pieEcharts = echarts.init(pieNode.value);
        pieEcharts.setOption(pieData);

        barData.series[0].data = res.data.barData.data.daySale;
        barData.series[1].data = res.data.barData.data.monthSale;
        //柱状图
        const myEchartshistogram = echarts.init(barNode.value);
        myEchartshistogram.setOption(barData);
      });
    });

    return { lineChart, barNode, pieNode, ...totalDataRef };
  },
};
</script>

<style lang="less">
.card-header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .user-img {
    margin-right: 20px;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    overflow: hidden;
  }
  .name {
    margin: 0;
    font-size: 16px;
    font-weight: lighter;
    span {
      font-size: 20px;
      font-weight: bolder;
    }
  }
  .level {
    .name();
  }
}
.el-table {
  overflow: auto;
}
</style>
