import { createStore } from 'vuex'

const store = createStore({
    state:{
        isDefaultTheme: false
    },
    mutations:{
        changeTheme(state){
            state.isDefaultTheme = !state.isDefaultTheme
        }
    },
    actions:{},
    getters: {
        doneChangeTheme(state){
            return state.isDefaultTheme
        }
    },
    modules:{}
})

export default store