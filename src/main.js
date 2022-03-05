import { createApp } from "vue";
import App from "./App.vue";
import { router } from "../router/router";
import { store } from "../store/index";
import "../api/mock/mock";
import http from "axios";
import {
  ElContainer,
  ElRow,
  ElCol,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElIcon,
  ElButton,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElImage,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElCard,
  ElTable,
  ElTableColumn,
  ElTag,
  ElInput,
} from "element-plus";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(ElContainer);
app.use(ElRow);
app.use(ElCol);
app.use(ElMenu);
app.use(ElSubMenu);
app.use(ElMenuItem);
app.use(ElMenuItemGroup);
app.use(ElIcon);
app.use(ElButton);
app.use(ElDropdown);
app.use(ElDropdownMenu);
app.use(ElDropdownItem);
app.use(ElImage);
app.use(ElBreadcrumb);
app.use(ElBreadcrumbItem);
app.use(ElCard);
app.use(ElTable);
app.use(ElTableColumn);
app.use(ElTag);
app.use(ElInput);
app.config.globalProperties.$http = http;
app.mount("#app");
