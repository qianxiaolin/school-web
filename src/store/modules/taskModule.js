export default{
  namespaced:true,
    state:{
        type:'0'
    },
    mutations: {
      changeTaskTpye (state,type) {
        // 变更状态
        state.type=type
      }
    }
}