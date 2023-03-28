import {createStore} from 'vuex'
import taskModule from './modules/taskModule'
import classModule from './modules/classModules'
import loginModules from './modules/loginModules'
const store=createStore({
    modules:{
        taskModule,
        classModule,
        loginModules
    }
}
)
export default store