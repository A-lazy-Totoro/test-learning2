<template>
  <div class="topBtn">
    <el-button type="primary" size="small">新增</el-button>
    <div class="topBtnSearch">
      <el-input
        v-model="search"
        size="small"
        placeholder="Type to search"
        @input="getTableData"
      />
      <el-button type="primary" size="small" @click="filtersData"
        >搜索</el-button
      >
    </div>
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      v-for="item in tableLabel"
      :prop="Object.keys(item)[0]"
      :label="Object.values(item)[0]"
      :key="Object.keys(item)[0]"
    >
    </el-table-column>
    <el-table-column align="right">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { getUserFormData } from "../../api/axios/data.js";
import { useStore } from "vuex";

const store = useStore();
const search = ref("");
/**点击Edit按钮事件
 * @param {按钮所在表单行的索引值，按钮所在行的内容}
 */
const handleEdit = (index, row) => {
  console.log(index, row);
};
/**点击Delete按钮事件
 * @param {按钮所在表单行的索引值，按钮所在行的内容}
 */
const handleDelete = (index, row) => {
  console.log(index, row);
  store.commit("deleteData", index);
};

let tableLabel = ref([]);
onMounted(() => {
  getUserFormData().then((res) => {
    console.log(res);
    store.commit("setTableData", res.data.data);
    tableLabel.value = res.data.dataLabel;
  });
});
const tableData = computed(() => {
  return store.state.userForm.tableData;
});
const getTableData = () => {
  if (search.value == "") {
    store.commit("filtersData", search.value);
  }
};
const filtersData = () => {
  store.commit("filtersData", search.value);
};
</script>
<style lang="less" scope>
.topBtn {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  .topBtnSearch {
    display: flex;
    align-items: center;
  }
}
</style>
