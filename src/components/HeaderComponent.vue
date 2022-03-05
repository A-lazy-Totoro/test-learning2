<template>
  <div class="HeaderNode">
    <div class="breadMenu">
      <el-button type="primary" size="small" plain @click="closeMenu">
        <el-icon><icon-menu /></el-icon>
      </el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in initBreadMenu"
          :to="{ path: item.path }"
          :key="item.name"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <el-dropdown>
      <div class="el-dropdown-link">
        <img
          src="../../src/assets/user1.png"
          style="width: 40px; height: 40px"
        />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { Menu as IconMenu } from "@element-plus/icons-vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "HeaderView",
  components: {
    IconMenu,
  },
  setup() {
    const store = useStore();
    //点击按钮，折叠左侧菜单 事件
    const closeMenu = () => store.commit("changeIsShow");
    //获取面包屑导航的渲染数据
    const initBreadMenu = computed(() => store.state.menu.breadMenu);
    return {
      closeMenu,
      initBreadMenu,
    };
  },
};
</script>
<style lang="less">
.HeaderNode {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-dropdown-link {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    overflow: hidden;
  }
  .breadMenu {
    display: flex;
    align-items: center;
    .el-breadcrumb {
      margin-left: 20px;

      span {
        color: #fff;
        cursor: pointer;
        :hover {
          color: #409eff;
        }
      }
    }
  }
}
</style>
