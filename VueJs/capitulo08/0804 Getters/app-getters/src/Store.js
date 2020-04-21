import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        livros: [
            {
                nome: 'O senhor dos anéis',
                lido: true
            },
            {
                nome: 'Harry Potter',
                lido: true
            },
            {
                nome: 'As crônicas de narnia',
                lido: false
            },
            {
                nome: 'Documentacao VueJS',
                lido: false
            }
        ]
    },
    getters: {
        livrosLidos(state) {
            return state.livros.filter(livro => livro.lido)
        }
    }

})