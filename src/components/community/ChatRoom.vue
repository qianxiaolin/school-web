<template>
    <div class="room-container">
        <header class="room-header">
            <div class="back-box">
                <el-icon>
                    <ArrowLeft />
                </el-icon>
                <span class="back-text">返回</span>
            </div>
            <div><span>王者荣耀群</span></div>
            <div>
                ...
            </div>
        </header>

        <main class="room-main">
            <div v-for="item in 6">
                <p class="time"></p>
                <div class="info-box">
                    <div class="photo-box">
                        <el-avatar :size="50" :src="circleUrl" />
                    </div>
                    <div class="chat-box">你最近在干吗？</div>
                </div>
            </div>
            <div class="right">

            </div>
        </main>

        <footer class="room-footer">
            <div class="icon-container">
                <el-icon class="icon">
                    <Folder />
                </el-icon>
                <el-icon class="icon">
                    <Picture />
                </el-icon>
                <el-icon class="icon">
                    <PictureRounded />
                </el-icon>
            </div>
            <div class="text-input">
                <el-input v-model="textarea2"  type="textarea" />
            </div>
            <div class="tail">
                <el-button>
                    发送
                </el-button>
            </div>
        </footer>
    </div>
</template>

<script setup >
import { Folder, Picture, PictureRounded, ArrowLeft } from '@element-plus/icons-vue'

</script>

<style lang="less" scoped>
.room-container {
    margin: 0 50px;
    border: 1px solid #939393;

    .room-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #939393;
    }

    .room-main {
        display: flex;
        flex-direction: column;
        height: 70%;
        padding: 15px;

        .info-box {
            display: flex;
        }
    }

    .room-footer {
        border-top: 1px solid #939393;
        padding: 10px;
        display: flex;
        flex-direction: column;

        .icon-container {
            .icon {
                margin: 0 5px;
            }

        }

        .tail {
            display: flex;
            justify-content: flex-end;
            .text-input{
                .el-input{
                    border:0;
                }
            }
        }
    }
}
</style>