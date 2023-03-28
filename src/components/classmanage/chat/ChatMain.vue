<template>
    <el-row>
        <el-col :span="5">
            <p>最近</p>
            <el-divider />
           <personal-card v-for="item in 3"></personal-card>
            <p>群聊</p>
        </el-col>
        <el-col :span="18">
            <chat-window></chat-window>
        </el-col>
        <el-col :span="3" v-if="fasle">

        </el-col>
    </el-row>
    
</template>

<script setup>
import personalCard from './PersonalCard.vue';
import chatWindow from './ChatWindow.vue'
</script>