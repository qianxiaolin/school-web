<template>
    <el-row>
        <el-col :span="3" :offset="1">
            <el-card style="margin-top: 50px;height: 50vh;display: fixed;" :body-style="{padding:'0'}">
                <ul class="sidebar">
                    <li><RouterLink tag="li" to="/market/fleamarket"><span>跳蚤市场</span><el-icon><ArrowRight /></el-icon></RouterLink></li>
                    <li><RouterLink tag="li" to="/market/lost"><span>失物招领</span><el-icon><ArrowRight /></el-icon></RouterLink></li>
                    <li><RouterLink tag="li" to="/market/find"><span>寻物启事</span><el-icon><ArrowRight /></el-icon></RouterLink></li>
                </ul>
            </el-card>
        </el-col>
        <el-col :span="16" :offset="2">
            <RouterView></RouterView>
        </el-col>
    </el-row>
</template>

<script setup>
import sellCard from '@/components/market/SellCard.vue';
import {ArrowRight} from '@element-plus/icons-vue'
import { ref } from 'vue'

const activeName = ref('first')
</script>

<style lang="less" scoped>

.sidebar{
    padding: 0;
    li{
        display: flex;
        padding: 8px 16px;
        &:hover{
                background-color: #f2f2f2;
            }
        a{
            width:100%;
            display: flex;
            color:#303133;
            justify-content: space-between;
            font-size: 14px;
            &:hover{
                color: #409eff!important; 
            }
        }
    }
}
</style>