export const tag = {
  state() {
    return {
      isShow: false,
    };
  },
  mutations: {
    changeIsShow(state) {
      state.isShow = !state.isShow;
    },
  },
};
