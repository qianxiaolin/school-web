<template>
    <el-row style="margin-top: 20px;">
        <el-col :span="10" style="display: flex;" :offset="7">
            <el-input v-model="input" placeholder="#学校比赛" />
            <el-button type="primary">搜索</el-button>
        </el-col>
    </el-row>
    <el-row style="margin-bottom: 50px;margin-top: 20px;">
        <el-col :span="16" :offset="4">
            <ul style="display: flex;justify-content:space-between;">
                <li v-for="item in navData">
                    <RouterLink to="" :key="item.content">{{ item.content }}</RouterLink>
                </li>

            </ul>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="12" :offset="6">
            <el-card v-for="item in cardData" style="margin-bottom: 20px;overflow: visible;"
                :body-style="{ position: 'relative', 'overflow': 'visable', 'padding-left': '0' }" class="card-container"
                :key="item.id">

                <div class="personalcard">
                    <header style="display: flex;">
                        <div class="img-box">
                            <div class="card">
                                <div class="card-top-part">
                                    <div class="user-photo">
                                        <img src="https://randomuser.me/api/portraits/women/79.jpg" class="photo">
                                    </div>
                                </div>
                                <div class="main-part">
                                    <div class="user-name">
                                        <span class="name">爱碎觉</span>
                                        <el-icon :size="16">
                                            <Male />
                                        </el-icon>
                                    </div>
                                    <div class="user-sentense">
                                        <span class="sentense">世上无难事，只怕有心人</span>
                                    </div>
                                    <div class="user-lv">
                                        <span class="lv">等级:10</span>
                                    </div>
                                </div>
                                <div class="card-bottom-part">
                                    <div class="bottom-part">
                                        <RouterLink to="" class="item">
                                            <el-button size="small"><el-icon>
                                                    <Message />
                                                </el-icon> <span>私信</span></el-button>
                                        </RouterLink>
                                    </div>
                                    <div class="bottom-part">
                                        <RouterLink to="" class="item">

                                            <el-button type="primary" size="small">
                                                <el-icon>
                                                    <Plus />
                                                </el-icon>
                                                关注
                                            </el-button>
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                            <el-avatar :size="50" :src="circleUrl" />
                        </div>
                        <div class="info">
                            <span class="name">爱碎觉 来自物联网工程学院 {{ item.cardVisable }}</span>
                            <p class="time">2021-1-2 12:28</p>
                        </div>
                    </header>
                    <main>
                        <p>
                            学生被老师羞辱，长大后心理扭曲，对老师疯狂报复《蒙眼缉凶》
                        </p>
                    </main>
                    <footer style="display: flex;justify-content: space-between;padding-left: 10px;">
                        <div class="left" style="display: flex;">
                            <div style="margin-right: 10px;">
                                <el-icon>
                                    <Share />
                                </el-icon>
                                <span>19</span>
                            </div>
                            <div>
                                <el-icon>
                                    <ChatLineRound />
                                </el-icon>
                                <span>20</span>
                            </div>
                        </div>
                        <div class="right">
                            <el-dropdown>
                                <span class="el-dropdown-link">
                                    ...
                                </span>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item>不看它的动态</el-dropdown-item>
                                        <el-dropdown-item>隐藏此条动态</el-dropdown-item>
                                        <el-dropdown-item>举报</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                    </footer>
                </div>
            </el-card>
        </el-col>
        <el-col :span="4" style="margin-left: 30px;">
            <el-card style="margin-bottom: 10px;"
                :body-style="{ display: 'flex', 'justify-content': 'center', padding: '10px' }">
                <el-button type="primary" style="width:80%">我要发表</el-button>
            </el-card>
            <el-card>
                ▎热门话题
                <ul class="hot-topic">
                    <li>
                        <RouterLink to=""><span>#学校比赛</span></RouterLink>
                    </li>
                    <li>
                        <RouterLink to=""><span>#羊了个羊</span></RouterLink>
                    </li>
                    <li>
                        <RouterLink to=""><span>#吐槽宿管阿姨</span></RouterLink>
                    </li>
                    <li>
                        <RouterLink to=""><span>#学校比赛</span></RouterLink>
                    </li>
                    <li>
                        <RouterLink to=""><span>#学校比赛</span></RouterLink>
                    </li>
                </ul>
            </el-card>
            <el-card>
                ▎热门动态
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
import { Share, ChatLineRound, Message, Plus, Male } from '@element-plus/icons-vue'
import { ref } from 'vue'
const cardData = ref([
    { id: 1, cardVisable: false },
    { id: 2, cardVisable: false },
    { id: 3, cardVisable: false },
])
const navData = [
    { content: '热门', path: '' },
    { content: '话题', path: '' },
    { content: '问答', path: '' },
    { content: '情感', path: '' },
    { content: '娱乐', path: '' },
    { content: '美妆', path: '' },
    { content: '美食', path: '' },
    { content: '拼团', path: '' },
    { content: '数码', path: '' },
    { content: '其他', path: '' },

]
</script>

<style lang="less" scoped>
.card {
    display: none;
    position: absolute;
    top: 0;
    left: -245px;
    width: 240px;
    height: 100%;
    flex-direction: column;
    background: whitesmoke;
    box-shadow: 1px 1px 10px lightslategray;

    &:hover {
        display: block;
    }
}

.card-top-part {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .user-photo {
        width: 4.5rem;
        overflow: hidden;
        border-radius: 50%;
        border: 1px solid rgb(231, 227, 227);
        box-shadow: 2px 2px 10px lightslategray;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
        }
    }


}



.main-part {
    display: flex;
    flex-direction: column;
    align-items: center;

    .user-name {
        display: flex;
        justify-content: flex-start;
        margin: 0;

        .name {
            font-size: 14px;
            font-weight: 700;
        }
    }

    .user-sentense {
        .sentense {
            font-size: 12px;
            color: #939393;
        }
    }

    .user-lv {
        .lv {
            font-size: 12px;
        }
    }
}


.card-bottom-part {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;

    .bottom-part {
        .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }


    }
}

.personalcard {
    .img-box {
        padding-left: 10px;

        &:hover .card {
            display: block;
        }
    }

    header {
        .info {
            margin-left: 5px;
            .name {
                font-size: 12px;
                font-weight: 600;
                color: #333;
            }
            .time {
                margin-top: 5px;
                color: #939393;
                font-weight: 400;
                font-size: 10px;
            }
        }
    }

    main {
        padding-left: 10px;
    }
}</style>