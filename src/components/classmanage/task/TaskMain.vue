<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="全部" name="first">
      <el-card>
        <task-card></task-card>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="已完成" name="second">Config</el-tab-pane>
    <el-tab-pane label="待完成" name="third">Role</el-tab-pane>
    <el-tab-pane label="我发布的" name="fourth">
      <RouterLink to="/classmanage/task/publishtask">
        <el-button type="primary">创建任务</el-button>
      </RouterLink>
      <router-view :name="publish"></router-view>
    </el-tab-pane>
  </el-tabs>
</template>
<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import taskCard from './TaskCard.vue';
const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>
<style></style>