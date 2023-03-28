<template>
    <el-button @click="dialogVisible = true" type="primary">
      发布
    </el-button>
  
    <el-dialog v-model="dialogVisible" title="*拾到物品" width="30%">
      <el-form :model="form" label-width="120px">
        <el-form-item label="物品名称:">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="物品描述:">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item label="联系方式:">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  
  <script setup>
  import { ref ,reactive} from 'vue'
  const dialogVisible = ref(false)
  
  
  // do not use same name with ref
  const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  })
  
  const onSubmit = () => {
    console.log('submit!')
  }
  </script>