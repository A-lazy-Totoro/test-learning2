import { createStore } from "vuex";
import { menu } from "./menu";
import {userForm} from "./userForm.js"
export const store = createStore({
  modules: {
    menu,userForm
  },
});
