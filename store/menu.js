export const menu = {
  state() {
    return {
      //用于控制Aside区域菜单叠起/展开
      isShow: false,
      //用于渲染Header区域的面包屑导航，数据来源于Aside区域的点击路由
      breadMenu: [{ path: "Home", name: "Home", label: "首页" }],
      activeRouter: "",
    };
  },
  mutations: {
    //用于控制Aside区域菜单叠起/展开
    changeIsShow(state) {
      state.isShow = !state.isShow;
    },
    //根据点击Aside中菜单路由添加Header区域面包屑渲染数据
    pushBreadMenu(state, val) {
      //判断是否是默认活动的Home路由
      if (val.name === "Home") {
        return;
      } else {
        //筛选数据，避免重复存储
        const result = state.breadMenu.findIndex(
          (item) => item.name === val.name
        );
        if (result === -1) {
          state.breadMenu.push(val);
        }
      }
    },
    setTag(state, val) {
      const result = state.breadMenu.findIndex(
        (item) => item.name === val.name
      );
      if (val.name === "Home") {
        return;
      }
      if (result !== -1) {
        return;
      }
      state.breadMenu.push(val);
    },
    removeTag(state, val) {
      if (val === "首页") {
        return;
      }
      const result = state.breadMenu.findIndex((item) => item.label === val);
      // state.activeRouter=state.breadMenu[]
      state.breadMenu.splice(result, 1);
    },
  },
};
