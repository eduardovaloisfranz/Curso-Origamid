import DetalheAcao from "./DetalheAcao.js"

export default {
    name: 'InputAcao',
    data() {
        return {
            symbol: 'aapl',
            acao: {}
        }
    },
    template: `
        <div>
            <label for="symbol">Informe o simbolo</label>
            <input type="text" id="symbol" v-model="symbol">
            <button @click="puxaAcao">Buscar Acao</button>                         
            <detalhe-acao :acao="acao"></detalhe-acao>
        </div>
    `
    ,
    methods: {
        puxaAcao() {
            const URL_TO_FETCH = `https://cloud.iexapis.com/stable/stock/${this.symbol}/quote?token=sk_4130f0a706a240139c2b6092d28cfad6`
            fetch(URL_TO_FETCH)
                .then(res => res.json().then(r => this.acao = r)).catch(res => console.log(res))
        }
    },
    components: {
        DetalheAcao: DetalheAcao
    }
}