<template>
  <el-tag
    v-for="tag in tagData"
    :key="tag.name"
    class="mx-1"
    closable
    :disable-transitions="false"
    @close="handleClose(tag.label)"
    @click="clickTag(tag.name)"
  >
    {{ tag.label }}
  </el-tag>
  <router-view></router-view>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "MainView",
  setup() {
    const store = useStore();
    const router = useRouter();
    const tagData = computed(() => {
      return store.state.menu.breadMenu;
    });
    //const tagData = ref(["首页", "商品管理", "用户管理", "其他"]);
    const handleClose = (tag) => {
      store.commit("removeTag", tag);
    };
    const clickTag = (name) => {
      router.push({ name: name });
    };
    return { tagData, handleClose, clickTag };
  },
};
</script>
<style lang="less">
.el-tag {
  cursor: pointer;
}
</style>
