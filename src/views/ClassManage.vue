<template>

  <div class="common-layout" style="width:100%;height: 100%;">
    <el-container>
      <el-aside width="200px" style="height: 100vh;">
        <class-side-bar></class-side-bar>
      </el-aside>
      <el-main>
        <el-row>
          <el-col :span="23">
            <class-page-head style="margin-bottom: 10px;"></class-page-head>
          </el-col>
         
        </el-row>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>

</template>

<script setup>
import classSideBar from '../components/classmanage/main/ClassSideBar.vue';
import classPageHead from '../components/classmanage/main/ClassPageHead.vue'
</script>

<style scoped>

</style>