<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="220px">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <header style="display:flex;flex-direction: column;align-items: center;margin-bottom:5px ;">
                        <div><el-avatar :size="70" :src="circleUrl" /></div>
                        <span>橘子</span>
                    </header>
                    <el-menu-item :index="item.content" v-for="item in sideBarData" @click="sideBarRouter(item.path)">
                        <el-icon><icon-menu /></el-icon>
                        <span>{{item.content}}</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main style="display: flex;flex-direction: column;">
                <div style="display: flex;">
                <RouterLink to="/home">
                   
                        <el-button type="primary">回到首页</el-button>
                    
                    
                </RouterLink>
            </div>
                <RouterView></RouterView>
            </el-main>
        </el-container>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const sideBarData=[
    {content:'我的信息',path:'/personalcenter/info'},
    {content:'我的资产',path:'/personalcenter/asset',},
    {content:'账户与安全',path:'/personalcenter/safety'},
  ]
const router = useRouter()
  const sideBarRouter=(path)=>{
        router.push(path)
  }
</script>
<style lang="less" scoped>

</style>