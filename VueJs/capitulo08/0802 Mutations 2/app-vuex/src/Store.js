import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        aulasConcluidas: []
    },
    mutations: {
        CONCLUIR_AULA(state, payload) {
            state.aulasConcluidas.push(payload)
        }
    }
})