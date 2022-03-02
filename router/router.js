import { createRouter, createWebHistory } from "vue-router";
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("../views/Main/indexView.vue"),
      children: [
        {
          path: "Home",
          name: "Home",
          component: () => import("../views/Home/indexView.vue"),
        },
        {
          path: "Shop",
          name: "Shop",
          component: () => import("../views/Shop/indexView.vue"),
        },
        {
          path: "User",
          name: "User",
          component: () => import("../views/User/indexView.vue"),
        },
        {
          path: "page1",
          name: "page1",
          component: () => import("../views/other/pageView1.vue"),
        },
        {
          path: "page2",
          name: "page2",
          component: () => import("../views/other/pageView2.vue"),
        },
      ],
    },
  ],
});
