import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        aulasCompletas: [],
        name: 'lobo',
        id: 400,
        acao: {}
    },
    mutations: {
        COMPLETAR_AULA(state, payload) {
            state.aulasCompletas.push(payload)
        },
        CHANGE_USER(state, payload) {
            state.name = payload
        },
        CHANGE_ID(state, payload) {
            state.id = payload
        },
        UPDATE_ACAO(state, payload) {
            state.acao = payload
        }
    },
    actions: {
        completarAula(context, payload) {
            context.commit("COMPLETAR_AULA", payload)
        },
        fetchAcao(context) {
            const URL_TO_FETCH = 'https://cloud.iexapis.com/stable/stock/aapl/quote?token=sk_4130f0a706a240139c2b6092d28cfad6'
            fetch(URL_TO_FETCH)
                .then(res => res.json().then(r => {
                    context.commit('UPDATE_ACAO', r)
                    context.dispatch('completarAula', {
                        nome: 'Apple',
                        duracao: 'é de mais de 8 mil!'
                    })
                }))
        }
    }
})