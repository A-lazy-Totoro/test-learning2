<template>
  <div class="HeaderNode">
    <div>
      <el-button type="primary" size="small" plain @click="closeMenu">
        <el-icon><icon-menu /></el-icon>
      </el-button>
      首页
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
import { useStore } from "vuex";
export default {
  name: "HeaderView",
  components: {
    IconMenu,
  },
  setup() {
    const store = useStore();
    const closeMenu = () => store.commit("changeIsShow");
    return {
      closeMenu,
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
}
</style>
