<template>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          style="height:100%;border-radius: 8px; box-shadow: 1px 1px 10px lightslategray;"
        >
        <el-menu-item :index="first.content" v-for="first in noneChildBar" :key="first.content" @click="sideBarRouter(first.path)">
            <el-icon><icon-menu /></el-icon>
            <span>{{ first.content }}</span>
          </el-menu-item>
          <el-sub-menu :index="first.content" v-for="first in haveChildBar" :key="first.content">
            <template #title>
              <el-icon><location /></el-icon>
              <span>{{first.content}}</span>
            </template>
              <el-menu-item :index="second.content" v-for="second in first.sbuitem" 
              :key="second.content" @click="sideBarRouter(second.path)">
                {{ second.content }}</el-menu-item>
          </el-sub-menu>
        
        </el-menu>
  </template>
  
  <script  setup>
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import {computed,ref} from 'vue'
const sideBarData=[
    {content:'我的',path:'/classmanage/home'},
    {content:'班级',path:'/classmanage/class',},
    {content:'任务',path:'/classmanage/task',},
    {content:'群聊',path:'/classmanage/chat'},
    {content:'通知',path:'/classmanage/chat'},
  ]
  const router = useRouter()
  const sideBarRouter=(path)=>{
        router.push(path)
  }
  const haveChildBar=computed(()=>{return sideBarData.filter(x=>x.sbuitem)})
  const noneChildBar=computed(()=>{return sideBarData.filter(x=>!x.sbuitem)})
  </script>
  