<template>
    <div class="menu">
        <el-badge is-dot class="item"><el-icon :size="20"><Message /></el-icon></el-badge>
       <el-icon :size="20"><Promotion /></el-icon>
       <el-icon :size="20"><UserFilled /></el-icon>
       <el-icon :size="20"><ChatLineRound /></el-icon>
    </div>
</template>
<script setup>
import {Message,Promotion,UserFilled,ChatLineRound}from '@element-plus/icons-vue'
</script>

<style lang="less" scope>
.menu{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 35px;
    background: #7F7FD5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

</style>