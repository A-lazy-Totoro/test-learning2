/* tableData: [
    {
      name: "", //姓名 Random.cname() 随机生成一个常见的中文姓名。
      sex: "", //性别   Random.string( '壹贰叁肆伍陆柒捌玖拾', 3, 5 ) 返回一个随机的字符  最小长度3，最大长度5
      age: 50, //年龄   Random.natural( min, max ) 返回一个随机的自然数（大于等于 0 的整数）。
      addr: "", //地址 Random.county(true)// => "甘肃省 白银市 会宁县"

    },
  ], */

import Mock from "mockjs";
export default {
  getFormData() {
    const tableData = [];
    for (let i = 0; i < 30; i++) {
      tableData.push(
        Mock.mock({
          name: Mock.Random.cname(),
          sex: Mock.Random.string("男女", 1, 1),
          age: Mock.Random.natural(18, 65),
          addr: Mock.Random.county(true),
        })
      );
    }
    console.log(tableData);
    return {
      code: 20000,
      data: tableData,
      dataLabel: [
        { name: "姓名" },
        { sex: "性别" },
        { age: "年龄" },
        { addr: "地址" },
      ],
    };
  },
};
