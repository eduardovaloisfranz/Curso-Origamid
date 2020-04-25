export default {
    namespaced: true,
    state: {
        empresa: 'apple',
        acao: null,
    },
    mutations: {
        UPDATE_ACAO(state, payload) {
            state.acao = payload
        }
    },
    actions: {
        //pra chegar aqui
        //this.$store.dispatch('acao/fetchAcao')
        fetchAcao(context) {
            const URL_TO_FETCH = "https://cloud.iexapis.com/stable/stock/aapl/quote?token=sk_4130f0a706a240139c2b6092d28cfad6";
            fetch(URL_TO_FETCH)
                .then(r => r.json().then(r => {
                    context.commit("UPDATE_ACAO", r)
                })).catch(err => console.log(err))
        }
    }
}