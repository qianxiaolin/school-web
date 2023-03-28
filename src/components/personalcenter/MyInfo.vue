<template>
    <div class="container" style="display: flex;justify-content: center;">
        <div class="info" style="display: flex;flex-direction: column;">
            <el-avatar :size="90" :src="circleUrl" />
            <!-- <div>
                <p>关注：10▎粉丝：200</p>
            </div> -->
           
            <p>昵称：爱碎觉</p>
            <p>性别：男</p>
            <p>年龄:18岁</p>
            <p>学院：物联网工程学院</p>
            <p>专业：人工智能</p>
            <div>
                
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.container {
    margin-top: 40px;

    p {
        margin: 15px;
    }
}
</style>