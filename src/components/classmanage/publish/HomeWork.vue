<template>
    <el-form :model="form" label-width="100px">
        <el-form-item label="任务名称">
            <el-col :span="12">
                <el-input v-model="form.name" />
            </el-col>
        </el-form-item>
        <el-form-item label="任务类型">
            <el-select v-model="form.region" placeholder="please select your zone">
                <el-option label="作业" value="0" />
                <el-option label="投票" value="1" />
            </el-select>
        </el-form-item>
        <el-form-item label="开始时间">
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
        <el-form-item label="提交限制">
            <el-radio-group v-model="form.resource">
                <el-radio label="提交后不允许修改" />
                <el-radio label="提交后允许修改" />
            </el-radio-group>
            <span v-if="form.resource=='提交后允许修改'" style="margin-left: 10px;">提交后允许修改
                <el-input-number  size="small"  v-model="num"  controls-position="right" :min="1" :max="10"  />次
            </span>
        </el-form-item>
        <el-form-item label="作业要求">
            <el-col :span="12">
            <el-input v-model="form.desc" type="textarea" />
            </el-col>
        </el-form-item>
        <!-- <el-form-item label="上传附件">

            <el-upload v-model:file-list="fileList" class="upload-demo"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple
                :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :limit="3"
                :on-exceed="handleExceed">
                <el-button type="primary">Click to upload</el-button>
                <template #tip>
                    <div class="el-upload__tip">
                        jpg/png files with a size less than 500KB.
                    </div>
                </template>
            </el-upload>
        </el-form-item> -->
        <el-form-item>
            <el-button type="primary" @click="onSubmit">发布</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script  setup>
import { reactive,watchEffect ,ref,watch} from 'vue'

import {useStore} from 'vuex'
const num=ref('')
// do not use same name with ref
const form = reactive({
    name: '',
    region: '0',
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





const onSubmit = () => {
    console.log('submit!')
}
//   上传文件
// import { ref } from 'vue'
// import { ElMessage, ElMessageBox } from 'element-plus'

// import type { UploadProps, UploadUserFile } from 'element-plus'

// const fileList = ref<UploadUserFile[]>([
//   {
//     name: 'element-plus-logo.svg',
//     url: 'https://element-plus.org/images/element-plus-logo.svg',
//   },
//   {
//     name: 'element-plus-logo2.svg',
//     url: 'https://element-plus.org/images/element-plus-logo.svg',
//   },
// ])

// const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
//   console.log(file, uploadFiles)
// }

// const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
//   console.log(uploadFile)
// }

// const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
//   ElMessage.warning(
//     `The limit is 3, you selected ${files.length} files this time, add up to ${
//       files.length + uploadFiles.length
//     } totally`
//   )
// }

// const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
//   return ElMessageBox.confirm(
//     `Cancel the transfert of ${uploadFile.name} ?`
//   ).then(
//     () => true,
//     () => false
//   )
// }
</script>
