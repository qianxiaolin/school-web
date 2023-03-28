<template>
    <div class="profile">
        <div class="baseinfo" style="display: flex;flex-direction: column;align-items: center;">
            <el-avatar :size="50" :src="circleUrl" />
            <p class="username">小小</p>
            <p class="usergrade">lv10</p>
           
        </div>
        <div style="display: flex;justify-content: space-between;">
            <el-statistic title="Daily" :value="260" />
            <el-statistic title="管理币" :value="600" />
            <el-statistic :value="138">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            Ratio 
            <el-icon style="margin-left: 4px" :size="12">
              <Male />
            </el-icon>
          </div>
        </template>
      </el-statistic>
        </div>
    </div>
</template>

<style lang="less" scope>
*{
  margin: 0;
}
.profile{
    display: flex;
    flex-direction: column;
   
}
</style>