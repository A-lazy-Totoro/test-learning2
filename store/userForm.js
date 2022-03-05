export const userForm = {
  state() {
    return {
      //服务器获取的用户数据
      tableData: [],
      //table表单展示的数据
      formData: [],
    };
  },
  mutations: {
    //初始化数据
    setTableData(state, val) {
      state.tableData = val;
      state.formData = val;
    },
    //搜索框 筛选数据
    filtersData(state, val) {
      if (val == "") {
        state.tableData = state.formData;
      } else {
        let selectArr = [];
        state.tableData.map((item) => {
          if (item.name.includes(val)) {
            selectArr.push(item);
          }
        });
        state.tableData = selectArr;
      }
    },
    //删除按钮  删除数据
    deleteData(state, index) {
      state.formData.splice(index, 1);
    },
  },
};
