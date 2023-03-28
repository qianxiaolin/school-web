<template>
    <div class="pick">
        <div class="line">
            <span class="first-item">类型：</span>
            <span class="item">全部</span>
            <span class="item">最新</span>
        </div>
        <div class="line">
            <span class="first-item">排序:</span>
            <span class="item">按时间倒序</span>
            <span class="item">按时间顺序</span>
        </div>
        <div class="line">
            <span class="first-item">分类：</span>
            <span class="item">日用</span>
            <span class="item">卡片</span>
            <span class="item">电子设备</span>
            <span class="item">书籍</span>
            <span class="item">其他</span>
        </div>
        <div class="line">
            <span class="first-item">筛选条件：</span>
            <div class="select-item">
                <el-dropdown style="display: flex;flex-wrap: nowrap;">
                    <span class="el-dropdown-link">
                        时间<el-icon class="el-icon--right" :size="8"><arrow-down /></el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>一周前</el-dropdown-item>
                            <el-dropdown-item>半月前</el-dropdown-item>
                            <el-dropdown-item>一月前</el-dropdown-item>
                            <el-dropdown-item>三月前</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <div class="select-item">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        地点
                        <el-icon class="el-icon--right" :size="8">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>北区</el-dropdown-item>
                            <el-dropdown-item>中区</el-dropdown-item>
                            <el-dropdown-item>南区</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
        <div style="display: flex;margin: 10px 0 20px 0;justify-content: space-between;">
            <div style="display: flex;justify-content: flex-start;align-items: center;">
                <el-tag v-for="tag in tags" :key="tag.name" class="mx-1" closable :type="tag.type" size="large">
                    {{ tag.name }}
                </el-tag>
            </div>
            <div style="display:flex;align-items: center;">
                <publish-info>

                </publish-info>
                <div style="display:flex;margin-left: 20px;">
                    <el-input v-model="input" placeholder="显示器" style="height:32px" />
                    <el-button type="primary">搜索</el-button>
                </div>
            </div>
        </div>
    </div>
    <div class="card-container">
        <el-card style="width:45%;margin-bottom: 10px;" v-for="item in 8">
            <div class="lost-box">
                <div class="img-box">
                    <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
                </div>
                <div class="lost-info">
                    <span>拾到物品：蓝牙耳机</span>
                    <span>发现时间:2021-1-21</span>
                    <span>发现地点：13号楼</span>
                    <span>联系方式:15270757819</span>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import publishInfo from '../PublishInfo.vue';
const url =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
const value = ref('')
const tags = ref([
    { name: '时间:2021年', type: 'success' },
    { name: '地点：', type: 'success' },
])
</script>

<style lang="less" scoped>
.pick {
    margin-top: 50px;
    margin-left: 20px;

    .line {
        display: flex;
        margin-bottom: 5px;
        align-items: center;
        height: 16px;

        .select-item {

            display: flex;
            align-items: center !important;
            margin-right: 15px;

            .el-dropdown {
                display: flex;
                align-items: center;

                span {
                    font-size: 10px;
                    color: black;
                }
            }
        }

        .item {
            display: flex;
            font-size: 10px;
            padding-right: 15px;
        }

        .first-item {
            margin-right: 10px;
            font-size: 10px;

        }
    }
}

.card-container {
    display: flex;
    flex-wrap: wrap;

    .el-card {
        margin-right: 20px;

        .lost-box {
            display: flex;
        }

        .lost-info {
            margin-left: 10px;
            display: flex;
            flex-direction: column;

            span {
                margin-bottom: 5px;
            }
        }
    }
}
</style>