<template>
    <div class="item-container" v-for="item1 in 4">
        <header class="item-header">
            <el-icon class="item-icon" size="30">
                <Basketball />
            </el-icon>
            <p class="title">游戏</p>
        </header>
        <main class="item-main" >
            <!-- <RouterLink >
                
            </RouterLink> -->
            <el-card class="room-box" v-for="item in 4" :body-style="{ padding: '0' }">
                <RouterLink to="/community/chatroom">

                    <main>
                        <el-image :src="url" class="img" />
                    </main>
                    <footer>
                        <div class="left">
                            <span class="room-name">王者上分</span>
                            <div class="active-box">
                                <span class="active"><el-icon><User /></el-icon></span>
                                <el-avatar :size="25" :src="circleUrl" v-for="item in 3" class="photo"/>
                            </div>
                            
                        </div>
                        <div class="right">
                            <span class="num">100人加入</span>
                        </div>
                       
                    </footer>
                </RouterLink>
            </el-card>
        </main>
    </div>
</template>

<script setup>
import { Basketball, ChatDotSquare, Reading,User } from '@element-plus/icons-vue'
const url =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

<style lang="less" scoped>
.item-container {
    display: flex;
    flex-direction: column;
    margin-left: 100px;

    .item-header {
        display: flex;
        align-items: center;

        .item-icon {
            margin-right: 20px;
        }
    }

    .item-main {
        display: flex;
        justify-content: space-around;

        .room-box {
            display: flex;
            flex-direction: column;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            width: 23%;
            height: 220px;
            background-color: #fff;
            main {
                display: flex;
                height: 70%;
                width: 100%;
                .img{
                    width: 100%;
                }
            }
            footer {
                display: flex;
               padding: 5px;
                .left{
                    display: flex;
                    flex-direction: column;
                    width:70%;
                    .active-box{
                        display: flex;
                        align-items: center;
                        .active{
                          margin-right: 5px;
                        }
                        .photo{
                            margin-right: 5px;
                        }
                    }
                    .room-name {
                        text-overflow: ellipsis;
                        font-size: 12px;
                        margin: 5px 0;
                    }
                }
                .right{
                    .num{
                    font-size: 10px;
                }
                }
                
            }
        }
    }
}</style>