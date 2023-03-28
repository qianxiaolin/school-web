<template>
  <div class="common-layout">
    <el-container class="homecontainer">
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" text-color="#fff">
          <div class="flex-grow" />
          <el-menu-item :index="item.content" v-for="(item, index) in nonefirstdMenu" :key="item.content"
            @click="onNavclick(item.path)">
            {{ item.content }}</el-menu-item>
          <el-menu-item v-if="!getToken" index="1" style="margin-left: 30px;">
            <RouterLink to="/home" @click="changeDialogVisable(); changeRegisterVisible(true)">注册</RouterLink>
          </el-menu-item>
          <el-menu-item v-if="!getToken" index="2">
            <RouterLink to="/home" @click="changeDialogVisable(); changeRegisterVisible(flase)">登录</RouterLink>
          </el-menu-item>
          <el-dropdown style="margin: 0 20px;" v-else>
            <el-avatar :size="size" :src="circleUrl" />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <RouterLink to="/personalcenter">个人中心</RouterLink>
                </el-dropdown-item>
                <el-dropdown-item>
                  <RouterLink to="">收件箱</RouterLink>
                </el-dropdown-item>
                <el-dropdown-item divided>
                  <RouterLink to="" @click="exitLogin">退出登录</RouterLink>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-menu>

      </el-header>
      <el-main style="height: 100vh;display: flex;justify-content: center;padding: 0;flex-direction: column;">
        <first-page style="margin-top:200px;height: 100vh;"></first-page>
        <second-page></second-page>
        <el-dialog v-model="dialogVisible" style="width:300px;height: 400px;">

          <el-form :model="registerForm" :rules="myrules" ref="registerFormRef" v-if="registerVisible">
            <el-form-item prop="account">
              <el-input type="txt" placeholder="手机号" v-model.trim="registerForm.account" class="username" />
            </el-form-item>
            <el-form-item prop="password" style="margin-bottom: 15px;">
              <el-input type="password" placeholder="密码" v-model.trim="registerForm.password" class="password" show-password/>
            </el-form-item>
            <el-form-item prop="password" style="margin-bottom: 15px;">
              <el-input type="password" placeholder="重复密码" v-model.trim="registerForm.repeatpassword" class="password" show-password/>
            </el-form-item>
            <div class="box">
                <span class="no-account" @click="changeRegisterVisible(false)">已有账号？去登录</span>
            </div>
            <el-button type="primary" style="width:200px" @click.prevent="userRegister(registerFormRef)">注册</el-button>
          </el-form>
          <el-form class="login-form-container" ref="loginFormRef" :model="loginForm" :rules="myrules" v-else>
            <el-form-item prop="account">
              <el-input type="txt" placeholder="用户名" v-model.trim="loginForm.account" class="username" />
            </el-form-item>
            <el-form-item prop="password" style="margin-bottom: 15px;">
              <el-input type="password" placeholder="密码" v-model.trim="loginForm.password" class="password" show-password/>
            </el-form-item>
            <div class="box">
                <span class="no-account" @click="changeRegisterVisible(true)">没有账号？去注册</span>
            </div>
            <el-button type="primary" style="width:200px" @click.prevent="verifyLogin(ruleFormRef)">登录</el-button>
          </el-form>
        </el-dialog>
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
import FirstPage from '@/components/home/FirstPage.vue';
import SecondPage from '@/components/home/SecondPage.vue';
import { ref, reactive, computed, onMounted } from 'vue'
import { Home } from '../api/index'
import { useRouter, useRoute } from 'vue-router'
import { Login } from '../api/index'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
const store = useStore()
let navData = ref([])
// let getHomedata = async () => {
//   const { data: res } = await Home.getNavData()
//   navData.value = res.myNavData
// }
// onMounted(getHomedata)
// nav没有子菜单
const nonefirstdMenu = computed(() => {
  return navData.value
}
)
const activeIndex = ref('1')
const router = useRouter()
//头部导航栏点击跳转事件
const onNavclick = (index) => {
  router.push(index)
}
//路由守卫
router.beforeEach((to, from, next) => {
  //如果路由需要跳转
  if (from.meta.isAuth) {
    //判断 如果有本地存储，可以进去
    if (localStorage.getItem('token')) {
      next()  //放行
    } else {
      alert('请先登录')
    }
  } else {
    // 否则，放行
    next()
  }
})
//退出登录
const exitLogin = () => {
  localStorage.removeItem('token')
  store.dispatch('loginModules/delUser')
  alert('退出成功')
}


const getToken = computed(() => {
  console.log(store.state.loginModules.localToken)
  return store.state.loginModules.localToken
})
const registerVisible = ref(true)

const changeRegisterVisible = (value) => {
  if (registerVisible.value === value) {
    return
  }
  registerVisible.value = value
}

const dialogVisible = ref(false)
const changeDialogVisable = () => {
  dialogVisible.value = !dialogVisible.value
}
const loginForm = reactive({
  account: '',
  password: ''
})
const registerForm = reactive(
  {
    account: '',
    password: '',
    repeatpassword: '',
  }
)
const loginFormRef = ref()
const registerFormRef = ref()
//验证账号
const validateAccount = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
}
const validatePassWord = (rule, value, callback) => {
  
}
const validateRepeatPassWord=()=>{
  if (!value) {
    return callback(new Error('两次密码不一致'))
  }
}
const myrules = reactive({
  account: [
    // { required: true, message: '请输入账号', trigger: 'blur' },
    // { min: 5, max: 5, message: '账号长度应为5', trigger: 'blur' },
    // { validator: validateAccount, trigger: 'blur' }
  ],
  password: [
    // { required: true, message: '请输入密码', trigger: 'blur' },
    // { min: 6, max: 6, message: '密码为6位', trigger: 'blur' },
    // { validator: validatePassWord, trigger: 'blur' }
  ],
  repeatpassword:[
    { validator: validateRepeatPassWord, trigger: 'blur' }
  ]
})
//post请求验证用户登录
const verifyLogin = () => {
  Login.verifyUser(loginForm).then(
    (response) => {
      if (response.data === 'no') {
        alert('密码错误')
        loginForm.account = ''
        loginForm.password = ''
        return
      }
      else {
        // localStorage.setItem('token', response.data)
        // store.dispatch('loginModules/saveUser', response.data)
        ElMessage({
          message: '登录成功.',
          type: 'success',
        })
        // dialogVisible.value = false
        console.log(response)
      }

    }
  ).catch((error) => {
    console.log(error)
  })
}
const userRegister = () => {
  Login.registerUser(registerForm).then((response) => {
    // console.log(document.cookie)
    if(response.data)
    {
      alert('注册成功')
      console.log(response)
      // registerVisible.value = false
    }
   
  }).catch((error) => {
    console.log(error)
  })

}
</script>

<style scope>
* {
  padding: 0;
  margin: 0;
}

.homecontainer {
  background: linear-gradient(115deg, #000000 0%, #00C508 55%, #000000 100%), linear-gradient(115deg, #0057FF 0%, #020077 100%), conic-gradient(from 110deg at -5% 35%, #000000 0deg, #FAFF00 360deg), conic-gradient(from 220deg at 30% 30%, #FF0000 0deg, #0000FF 220deg, #240060 360deg), conic-gradient(from 235deg at 60% 35%, #0089D7 0deg, #0000FF 180deg, #240060 360deg);
  background-blend-mode: soft-light, soft-light, overlay, screen, normal !important;
}

.el-header {
  padding: 0;
  margin: 0;
}
</style>
<style>
.el-menu {
  border: 0;
  background-color: rgb(0, 0, 0, 0);
  --el-menu-hover-bg-color: none: !important;
  --el-menu-hover-text-color: var(--el-color-primary) !important;
}

.flex-grow {
  flex-grow: 1;
}

.el-menu-demo {
  display: flex;
  align-items: center;
}
</style>
<style>
a {
  text-decoration: none;
  color: #303133;
}
</style>
<style lang="less" scoped>
.login-form-container {
  display: flex;
  flex-direction: column;

  .box {
    display: flex;

    .no-account {
      margin-top: 0;
      font-size: 12px;
    }
  }

  .input-box {

    .username,
    .password {
      font-size: 12px;
      padding: 5px 0;
      text-indent: 15px;
      outline: none;
    }
  }
}
</style>