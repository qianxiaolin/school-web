<template>
    <el-row>
        <el-col :span="13">
            <el-row style="margin-bottom: 10px;">
                <el-col :span="15">
                    <el-card style="height: 100%;">
                        <p style="margin-bottom: 20px;">▎最近任务</p>
                        <el-timeline   >
                            <el-timeline-item v-for="(activity, index) in activities" :key="index"
                                :timestamp="activity.timestamp" :color="activity.color" :type="activity.type">
                                {{ activity.content }}
                            </el-timeline-item>
                        </el-timeline>
                    </el-card>
                </el-col>
                <el-col :span="8" :offset="1">
                    <!-- 如果是管理员 -->
                    <el-card :body-style="{'padding-bottom':'10px'}" style="margin-bottom: 5px;">
                      <finish-card></finish-card>      
                    </el-card>
                    <el-card :body-style="{'padding-bottom':'10px'}">
                        <unfinish-card></unfinish-card>
                    </el-card>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-card style="margin-bottom: 20px;height: 35px;" :body-style="{padding:'0'}">
                       <menu-card></menu-card>
                    </el-card>
                </el-col>
            </el-row>
            <el-row style="margin-bottom: 10px;">
                <el-col :span="24">
                    <el-card >
                       <pie-card></pie-card>
                    </el-card>

                </el-col>
            </el-row>
        </el-col>
        <el-col :span="5" :offset="4">
            <el-card >
                <personal-info-card></personal-info-card>
            </el-card>
            <el-card class="box-card" :body-style="{ padding: 0 }">
                <p>▎最近消息</p>
                <new-card v-for="item in 7"></new-card>
            </el-card>
        </el-col>
    </el-row>

</template>
<script  setup>
import { ref } from 'vue'
import newCard from './card/NewsCard.vue';
import personalInfoCard from './card/PersonalInfoCard.vue'
import PieCard from './card/PieCard.vue'
import unfinishCard from './card/UnfinishCard.vue'
import finishCard from './card/FinishCard.vue';
import menuCard from './card/MenuCard.vue';
const value = ref(new Date())
const activities = [
    {
        content: '任务开始',
        timestamp: '2018-04-15',
        color: '#0bbd87',
    },
    {
        content: '提交任务',
        timestamp: '2018-04-13',
        type: 'primary',
    },
    {
        content: '活动结束',
        timestamp: '2018-04-11',
    },
]

</script>