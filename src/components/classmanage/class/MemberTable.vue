<template>
  <!-- 添加新用户-->
  <el-row>
    <RouterLink to="/classmanage/class">
      <el-button type="primary" @click="cardVisable">返回</el-button>
    </RouterLink>
    
    <el-button type="primary" style="margin-left: 10px;" @click="addDlgVsb = true">添加新用户</el-button>
  </el-row>


  <el-table :data="meblist" stripe style="width: 100%" border >
    <el-table-column prop="id" label="序号" />
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="age" label="年龄" />
    <el-table-column prop="stdnum" label="学号" />
    <el-table-column label="操作">
      <!-- 插槽，用来占位 -->
      <template #default="scope">
        <el-button type="primary" @click="onMdfMeb(scope.row.id)" v-if="scope.row.operate === 'modify'" :icon="Edit"></el-button>
        <el-button type="danger" v-else-if="scope.row.operate === 'submit'"
          @click="onUpdateMeb(scope.row.id)">保存</el-button>
        <el-button type="primary" @click="onRemove(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>


  <!--  -->
  <el-dialog v-model="addDlgVsb" @close="onResetForm(formRef)" title="添加新用户" width="30%" :before-close="handleClose">
    <!--  -->
    <el-form ref='formRef' :model="form" :rules="addMebRule" label-width="120px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="form.age" />
      </el-form-item>
      <el-form-item label="学号" prop="stdnum">
        <el-input v-model="form.stdnum" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addDlgVsb = false">取消</el-button>
        <el-button type="primary" @click="onAddMeb">确定</el-button>
      </span>
    </template>
  </el-dialog>
  <el-pagination v-model:current-page="currentPage3" v-model:page-size="pageSize3" :small="small" :disabled="disabled"
    :background="background" layout="prev, pager, next, jumper" :total="1000" @size-change="handleSizeChange"
    @current-change="handleCurrentChange" />
</template>


<script setup>
import { ref, reactive,onMounted, } from 'vue'
import {Edit} from '@element-plus/icons-vue'
import {useStore} from 'vuex'
const store=useStore()
const cardVisable=()=>{
  store.commit('classModule/changeClassVisable')
}
onMounted(cardVisable)

let meblist = ref([
  { id: 1, name: '张三', age: 19, stdnum: 212017050, operate: 'modify' },
  { id: 2, name: '李四', age: 80, stdnum: 212017051, operate: 'modify' },
  { id: 3, name: '王五', age: 22, stdnum: 212017052, operate: 'modify' },
  { id: 4, name: '赵六', age: 20, stdnum: 212017053, operate: 'modify' },
])
// 表单数据绑定
const form = reactive({
  name: '',
  age: '',
  stdnum: ''
})
//表单ref
const formRef = ref()
// 下一个ID值
let nextId = ref(5)
// 添加成员的提示框
let addDlgVsb = ref(false)
// 删除成员
const onRemove = id => {
  meblist.value = meblist.value.filter(x => x.id != id)
}
//修改成员
const onMdfMeb = (id) => {
  meblist.value.forEach(item => {
    if (item.id === id) {
      item.operate = 'submit'
    }
  })
}
//保存修改
const onUpdateMeb = (id) => {
  meblist.value.forEach(item => {
    if (item.id === id) {
      item.operate = 'modify'
    }
  })
}
//添加成员
const onAddMeb = () => {
  addDlgVsb.value = false
  meblist.value.push({ id: nextId, name: form.name, age: form.age, stdnum: form.stdnum, operate: 'modify' })
  nextId++
}
let validateName = (rule, value, callback) => {
  if (!Number.isInteger(value)) {
    return callback(new Error('请填写整数'))
  }
  if (value > 100 || value < 1) {
    return callback(new Error('年龄有误'))
  }
}

const validateStdNum = (rule, value, callback) => {
  if (value.length != 9)
    return callback(new Error('长度有误'))
}
//表单校验规则
const addMebRule = reactive({
  name: [{ required: true, message: '名字为必填项', trigger: 'blur' },
  { min: 2, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },],
  age: [{ required: true, message: '年龄为必填项', trigger: 'blur' },
  { validator: validateName, trigger: "blur" },
  ],
  stdnum: [{ required: true, message: '学号为必填项', trigger: 'blur' },
  { validator: validateStdNum, trigger: 'blur' }]
})
//对话框关闭，重置表单
const onResetForm = (formRef) => {
  if (!formRef) {
    return
  }
  formRef.resetFields()
}



</script>

<style lang="css" scoped>
el-table-column {
  width: 20%;
}
</style>













<style lang="css" scoped>

</style>