<template>
    <div class="privacy-container" style="margin-top: 20px;">
        <p style="margin-bottom: 10px;">隐私</p>
        <div>
            <span>我的关注列表是否可见</span>
            <el-switch v-model="value1" class="ml-2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
        </div>
        <span>我的粉丝列表是否可见</span>
        <el-switch v-model="value2" class="ml-2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
        <div>
            <span>允许陌生人私聊</span>
            <el-switch v-model="value3" class="ml-2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
        </div>
    </div>
    
    <div style="display: flex;flex-direction: column;" class="password-container">
        <p>修改密码</p>
        <el-input v-model="beforePassword" placeholder="原密码" style="width:180px;margin-bottom: 10px;"  type="password"/>
        <el-input v-model="modifyPassword" placeholder="修改密码" style="width:180px;margin-bottom: 10px;"  type="password"/>
        <el-input v-model="checkPassword" placeholder="修改密码" style="width:180px;margin-bottom: 10px;"  type="password"/>
    </div>
    <div class="email-container">
        <p>绑定邮箱</p>
        <el-input v-model="email" placeholder="邮箱" style="width:180px;margin-bottom: 10px;" />
    </div>
    <div>
        <p>密保问题</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const beforePassword = ref('')
const modifyPassword=ref('')
const checkPassword=ref('')
const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
</script>

<style lang="less" scoped>
.privacy-container,.password-container,.email-container{
margin-bottom: 20px;
}
.privacy-container{
    span{
        margin-right: 20px;
        margin-bottom: 5px;
    }
}
</style>