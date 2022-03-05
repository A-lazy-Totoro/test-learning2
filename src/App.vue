<template>
  <div class="container-node">
    <el-container>
      <el-aside width="auto">
        <aside-view />
      </el-aside>
      <el-container>
        <el-header><header-view /></el-header>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideView from "./components/AsideComponent.vue";
//import MainView from "../views/Main/indexView.vue";
import HeaderView from "./components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    AsideView,
    //MainView,
    HeaderView,
  },
};
</script>

<style scoped>
.el-container {
  margin: 0;
  padding: 0;
}
.el-header {
  margin: 0;
  padding: 0 20px;
  background-color: #545c64;
}
.el-main {
  margin: 0;
  padding: 0;
}
.el-aside {
  margin: 0;
  padding: 0;
  height: 100vh;
}
</style>
