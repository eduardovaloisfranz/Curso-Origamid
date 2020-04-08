import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: 'Eduardo',
        aulasCompletas: 10
    },
    mutations: {
        changeUser(state) {
            state.user = 'Ave'
        },
        completarAula(state) {
            state.aulasCompletas++
        },
        changeUserName(state, payload) {
            state.user = payload.name
            state.aulasCompletas = payload.totalAulas
        }


    }
})