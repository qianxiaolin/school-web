<template>
    <RouterView :name="table"></RouterView>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" type="border-card" v-if="classVisable==true">
    <el-tab-pane label="我加入的班级" name="first">
        <el-icon :size="25" color="blue"><CirclePlusFilled /></el-icon>
        <classCard></classCard>
    </el-tab-pane>
    <el-tab-pane label="我管理的班级" name="second">
        <classCard></classCard>
    </el-tab-pane>
   
  </el-tabs>
</template>
<script  setup>
import classCard from './ClassCard.vue';
import { ref ,computed} from 'vue'
import {useStore} from 'vuex'
import {CirclePlusFilled}from '@element-plus/icons-vue'
const store=useStore()
const classVisable=computed(()=>{return store.state.classModule.classVisable})

const activeName = ref('first')

const handleClick = (tab, event) => {
 
}
</script>


<style lang="less" scoped>

</style>