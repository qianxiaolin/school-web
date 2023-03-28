export default{
    namespaced:true,
      state:{
          localToken:localStorage['token']?localStorage['token']:''
      },
      mutations: {
        saveUser (state,value) {
          // 变更状态
          state.localToken=value
        },
        delUser(state){
        state.localToken=null
        }
      },
      actions:{
        saveUser(context,value){
          return context.commit('saveUser',value)
        },
        delUser(context){
          return context.commit('delUser')
        }
      },
      getters:{
        localToken(state) {
          localStorage.setItem('token',state.localToken)
        }
      }
  }