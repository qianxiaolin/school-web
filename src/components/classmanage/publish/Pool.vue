<template>
    <el-form :model="form" label-width="100px">
        <el-form-item label="任务名称">
            <el-col :span="12">
                <el-input v-model="form.name" />
            </el-col>
        </el-form-item>
        <el-form-item label="任务类型">
            <el-select v-model="form.region" placeholder="please select your zone" >
                <el-option label="作业" value="0"/>
                <el-option label="投票" value="1"/>
            </el-select>
        </el-form-item>
        <div>
        <el-form-item label="开始时间" >
            <el-col :span="5">
                <el-date-picker v-model="form.date1" type="date" placeholder="日期" style="width: 100%" />
            </el-col>
            <el-col :span="1" class="text-center">
                <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="5">
                <el-time-picker v-model="form.date2" placeholder="时间" style="width: 100%" />
            </el-col>
        </el-form-item>
        <el-form-item label="结束时间">
            <el-col :span="5">
                <el-date-picker v-model="form.date1" type="date" placeholder="日期" style="width: 100%" />
            </el-col>
            <el-col :span="1" class="text-center">
                <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="5">
                <el-time-picker v-model="form.date2" placeholder="时间" style="width: 100%" />
            </el-col>
        </el-form-item>
        <el-form-item label="发布班级">
            <el-checkbox-group v-model="form.type">
                <el-checkbox label="全选" name="type" />
                <el-checkbox label="AI2101" name="type" />
                <el-checkbox label="AI2102" name="type" />
                <el-checkbox label="电信2101" name="type" />
                <el-checkbox label="电信2102" name="type" />
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="投票类型">
            <el-radio-group v-model="form.resource">
                <el-radio label="匿名" />
                <el-radio label="公开" />
            </el-radio-group>
        </el-form-item>
       </div>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</template>

<script  setup>
import { reactive ,watch} from 'vue'
import {useStore} from 'vuex'

// do not use same name with ref
const form = reactive({
    name: '',
    region: '1',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})
const store=useStore()
watch(()=>form.region, (newValue, oldValue) => {
    if(newValue===oldValue){
        return
    }
    store.commit('taskModule/changeTaskTpye',newValue)
},{immediate: true,
    deep: true})
// const changeTaskType=()=>{
//     console.log('success')
//         store.commit('taskModule/changeTaskTpye',form.value.region)
//     }
const onSubmit = () => {
    console.log('submit!')
}

</script>
