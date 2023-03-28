<template>
    <div class="container">
        <p class="text">
            <var></var>
            已完成
        </p>
        <div class="numcontainer">
            <span class="num">
                4
            </span>
        </div>
        <div class="morecontainer">
            <p class="more">
                详情
            </p>
            <el-icon :size="12"><ArrowRight /></el-icon>
        </div>
    </div>
</template>

<script setup>
import {ArrowRight}from '@element-plus/icons-vue'
</script>

<style lang="less" scoped>
.container{
    display: flex;
    flex-direction: column;
    // align-items: center;
    .text{
        color: rgba(0, 0, 0, 0.65);
        var{
            display: inline-block;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            vertical-align: middle;
            background-color: #5AC88A;
        }
    }
    .numcontainer{
        display: flex;
        justify-content: center;
        .num{
            color:#5AC88A;
            font-size: 30px;
            margin-left: 8px;
        }
        margin: 10px 0;
    }
    .morecontainer{
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(0, 0, 0, 0.35);
        &:hover {
            color:var(--el-color-primary);
        }
        .more{
            
            font-size: 14px;
            margin-right: 2px;
        }

    }
}

</style>

