import Mock from "mockjs";
export default {
  getData() {
    //模拟折线图数据：周销售量
    let List = [];
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          小米: Mock.Random.float(1000, 8000, 0, 0),
          苹果: Mock.Random.float(1000, 8000, 0, 0),
          oppo: Mock.Random.float(1000, 8000, 0, 0),
          三星: Mock.Random.float(1000, 8000, 0, 0),
          华为: Mock.Random.float(1000, 8000, 0, 0),
        })
      );
    }
    const daySaleList = [];
    const monthSaleList = [];
    for (let i = 0; i < 5; i++) {
      daySaleList.push(Mock.Random.float(500, 2000, 0, 0));
      monthSaleList.push(Mock.Random.float(10000, 80000, 0, 0));
    }
    return {
      code: 20000,
      data: {
        //折线图
        lineChart: {
          /*  name: "小米",
          type: "line",
          stack: "Total",
          data: */
          date: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          name: ["小米", "苹果", "华为", "三星", "oppo"],
          data: List,
        },
        //表单
        tableData: [
          {
            name: "小米",
            price: "1999",
            dateSale: daySaleList[0],
            monthSale: monthSaleList[0],
          },
          {
            name: "苹果",
            price: "1999",
            dateSale: daySaleList[1],
            monthSale: monthSaleList[1],
          },
          {
            name: "华为",
            price: "1999",
            dateSale: daySaleList[2],
            monthSale: monthSaleList[2],
          },
          {
            name: "三星",
            price: "1999",
            dateSale: daySaleList[3],
            monthSale: monthSaleList[3],
          },
          {
            name: "oppo",
            price: "1999",
            dateSale: daySaleList[4],
            monthSale: monthSaleList[4],
          },
        ],
        //柱状图
        barData: {
          name: ["小米", "苹果", "华为", "三星", "oppo"],
          data: {
            daySale: daySaleList,
            monthSale: monthSaleList,
          },
        },
        //饼图
        pieData: {
          data: [
            {
              value: monthSaleList[0],
              name: "小米",
            },
            {
              value: monthSaleList[1],
              name: "苹果",
            },
            {
              value: monthSaleList[2],
              name: "华为",
            },
            {
              value: monthSaleList[3],
              name: "三星",
            },
            {
              value: monthSaleList[4],
              name: "oppo",
            },
          ],
        },
      },
    };
  },
};
