import { createStore } from "vuex";
import { tag } from "./tag";
export const store = createStore({
  modules: {
    tag,
  },
});
