<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        text-color="#fff"
        router
        default-active="Home"
        :collapse="isShow"
        collapse-transition
      >
        <h3>{{ isShow ? "后台" : "通用后台管理系统" }}</h3>
        <el-menu-item
          v-for="item in noChildren"
          :key="item.name"
          :index="item.path"
          @click="clickMenu(item)"
        >
          <el-icon v-html="item.icon"></el-icon>
          <span>{{ item.label }}</span>
        </el-menu-item>
        <el-sub-menu v-for="item in hasChildren" :key="item.label">
          <template #title>
            <el-icon v-html="item.icon"></el-icon>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="itemC in item.children"
              :key="itemC.name"
              :index="itemC.path"
              @click="clickMenu(itemC)"
            >
              <el-icon v-html="itemC.icon"></el-icon>
              {{ itemC.label }}</el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "AsideView",
  setup() {
    //定义变量，方便使用vuex的store
    const store = useStore();

    //侧边栏 项目及路由数据
    const menuData = [
      {
        path: "Home",
        name: "Home",
        label: "首页",
        icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="
                    currentColor" d="M192 413.952V896h640V413.952L512 147.328 192
                    413.952zM139.52 374.4l352-293.312a32 32 0 0140.96 0l352 293.312A32 32
                    0 01896 398.976V928a32 32 0 01-32 32H160a32 32 0 01-32-32V398.976a32
                    32 0 0111.52-24.576z"></path></svg>`,
      },
      {
        path: "Shop",
        name: "Shop",
        label: "商品管理",
        icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="
                    currentColor" d="M432 928a48 48 0 110-96 48 48 0 010 96zm320 0a48
                    48 0 110-96 48 48 0 010 96zM96 128a32 32 0 010-64h160a32 32 0
                    0131.36 25.728L320.64 256H928a32 32 0 0131.296 38.72l-96 448A32 32
                    0 01832 768H384a32 32 0 01-31.36-25.728L229.76 128H96zm314.24
                    576h395.904l82.304-384H333.44l76.8 384z"></path></svg>`,
      },
      {
        path: "User",
        name: "User",
        label: "用户管理",
        icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="
                    currentColor" d="M512 512a192 192 0 100-384 192 192 0 000 384zm0
                    64a256 256 0 110-512 256 256 0 010 512zm320 320v-96a96 96 0
                    00-96-96H288a96 96 0 00-96 96v96a32 32 0 11-64 0v-96a160 160 0
                    01160-160h448a160 160 0 01160 160v96a32 32 0 11-64 0z"></path></svg>`,
      },
      {
        label: "其他",
        icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="
                    currentColor" d="M800 416a288 288 0 10-576 0c0 118.144 94.528 272.128
                    288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312
                    746.688 160 565.312 160 416a352 352 0 01704 0c0 149.312-117.312
                    330.688-352 544z"></path><path fill="currentColor" d="M512 512a96
                    96 0 100-192 96 96 0 000 192zm0 64a160 160 0 110-320 160 160 0 010
                    320z"></path></svg>`,
        children: [
          {
            path: "page1",
            name: "page1",
            label: "页面一",
            icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M600.704 64a32 32 0 0130.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0134.432 15.36L944.32 364.8a32 32 0 01-4.032 37.504l-77.12 85.12a357.12 357.12 0 010 49.024l77.12 85.248a32 32 0 014.032 37.504l-88.704 153.6a32 32 0 01-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 01600.704 960H423.296a32 32 0 01-30.464-22.208L357.696 828.48a351.616 351.616 0 01-42.56-24.64l-112.32 24.256a32 32 0 01-34.432-15.36L79.68 659.2a32 32 0 014.032-37.504l77.12-85.248a357.12 357.12 0 010-48.896l-77.12-85.248A32 32 0 0179.68 364.8l88.704-153.6a32 32 0 0134.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 01423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 00-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 000 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0034.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0034.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 000-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 00-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 110 384 192 192 0 010-384zm0 64a128 128 0 100 256 128 128 0 000-256z"></path></svg>`,
          },
          {
            path: "page2",
            name: "page2",
            label: "页面二",
            icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M600.704 64a32 32 0 0130.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0134.432 15.36L944.32 364.8a32 32 0 01-4.032 37.504l-77.12 85.12a357.12 357.12 0 010 49.024l77.12 85.248a32 32 0 014.032 37.504l-88.704 153.6a32 32 0 01-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 01600.704 960H423.296a32 32 0 01-30.464-22.208L357.696 828.48a351.616 351.616 0 01-42.56-24.64l-112.32 24.256a32 32 0 01-34.432-15.36L79.68 659.2a32 32 0 014.032-37.504l77.12-85.248a357.12 357.12 0 010-48.896l-77.12-85.248A32 32 0 0179.68 364.8l88.704-153.6a32 32 0 0134.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 01423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 00-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 000 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0034.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0034.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 000-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 00-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 110 384 192 192 0 010-384zm0 64a128 128 0 100 256 128 128 0 000-256z"></path></svg>`,
          },
        ],
      },
    ];

    //通过计算属性，找到含有子级的menuData
    const hasChildren = computed({
      get() {
        return menuData.filter((item) => item.children);
      },
    });

    //通过计算属性，找到不含子级的menuData
    const noChildren = computed({
      get() {
        return menuData.filter((item) => !item.children);
      },
    });

    //通过计算属性，获取到menu菜单的叠起/展开状态
    const isShow = computed(() => {
      return store.state.menu.isShow;
    });

    //事件
    //通过点击事件，将对应项目的数据传进来
    const clickMenu = (item) => {
      //配置Header区域面包屑渲染数据
      store.commit("pushBreadMenu", item);
      //配置Main区域tag标签渲染数据
      store.commit("setTag", item);
    };

    return {
      hasChildren,
      noChildren,
      isShow,
      clickMenu,
    };
  },
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.el-row {
  height: 100%;
  justify-content: center;
  .el-menu {
    height: 100%;
    min-width: 200px;
    h3 {
      height: 60px;
      text-align: center;
      line-height: 60px;
      background-color: #545c64;
      color: #fff;
      padding: 0 10px;
    }
  }
}
</style>
>
