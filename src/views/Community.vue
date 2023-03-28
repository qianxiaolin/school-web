<template>
    <el-row>
        <el-col :span="3" style="display: flex;height: 100vh;" :offset="1">
            <sideBar></sideBar>
        </el-col>
        <el-col :span="20">
            <!-- <RouterView></RouterView> -->
            <RouterView></RouterView>
        </el-col>
    </el-row>
</template>

<script setup>
import { Share, ChatLineRound, Message, Plus, Male } from '@element-plus/icons-vue'
import sideBar from '../components/community/SideBar.vue';


</script>

<style lang="less" scoped>

</style>