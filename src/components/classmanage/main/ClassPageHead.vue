<template>
  <el-card shadow="always" :body-style="{display:'flex',padding:'0 20px',height:'40px','justify-content':'space-between','align-items':'center'}" class="box-card">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path:item.path }" v-for="item in getBreadCrumb" :key="item.path">
        {{  item.meta.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
    
    <el-popover
    placement="top-start"
    trigger="hover"
    content="回到首页"
  >
    <template #reference>
      <RouterLink to="/home">
        <el-icon :size='24'><House /></el-icon>
      </RouterLink>
      
    </template>
  </el-popover>
   
  </el-card>
</template>

<script setup>
import { onMounted,computed} from 'vue'
import {House}from '@element-plus/icons-vue'
import {useRoute} from 'vue-router'
const route = useRoute()
const getBreadCrumb=computed(()=>{
  return route.matched
})
</script>

<style>

</style>