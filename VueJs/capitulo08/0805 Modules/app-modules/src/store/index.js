import Vue from 'vue'
import Vuex from 'vuex'
import acao from './acao.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        acao
    },
    state: {
        livrosLidos: []
    },
    mutations: {
        ADICIONAR_LIVRO_LIDO(state, payload) {
            state.livrosLidos.push(payload);
        }
    },
    actions: {

    }
})