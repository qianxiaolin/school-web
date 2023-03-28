<template>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="vertical" background-color="#545c64"
        text-color="#fff" active-text-color="#ffd04b" @select="handleSelect" style="width:100%">
        <el-sub-menu index="1">
            <template #title>社区</template>
            <el-menu-item index="2-1"><RouterLink to="/community/saysomething">校园说</RouterLink></el-menu-item>
            <el-menu-item index="2-2"><RouterLink to="">表白墙</RouterLink></el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>聊天室</template>
            <el-menu-item index="2-1"><RouterLink to="/community/chathall">多人聊天室</RouterLink></el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>一起玩</template>
            <el-menu-item index="2-1"><RouterLink to="">你画我猜</RouterLink></el-menu-item>
            <el-menu-item index="2-2"><RouterLink to="/community/letter">匿名信</RouterLink></el-menu-item>
            <el-menu-item index="2-3"><RouterLink to="">恋爱盲盒</RouterLink></el-menu-item>
        </el-sub-menu>
        <el-menu-item index="4"><RouterLink to="/community/sentense">句集</RouterLink></el-menu-item>
    </el-menu>
</template>

<script setup >
// const sideBarData=[
//     {content:'校园说',path:''},
//     {content:'',path:''},
//     {content:'',path:''},
//     {content:'',path:''},
// ]

</script>

<style lang="less" scoped>
a{
    text-decoration: none;
    color:white;
}
</style>