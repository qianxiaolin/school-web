export default{
    namespaced:true,
      state:{
          classVisable:true
      },
      mutations: {
        changeClassVisable (state) {
          // 变更状态
          state.classVisable=!state.classVisable
        }
      }
  }