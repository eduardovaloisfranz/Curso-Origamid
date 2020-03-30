import RelacaoDolar from './RelacaoDolar.js'

const ValorMercado = {
    name: 'ValorMercado',
    data() {
        return {
            acao: {}
        }
    },
    template: `
        <div>            
            <h1>{{acao.marketCap}}</h1>
            <relacao-dolar></relacao-dolar>
        </div>

    `,
    components: {
        RelacaoDolar
    }
    ,
    methods: {
        puxarAcao() {
            const URL_TO_FETCH = "https://cloud.iexapis.com/stable/stock/aapl/quote?token=sk_4130f0a706a240139c2b6092d28cfad6"
            fetch(URL_TO_FETCH)
                .then(res => res.json().then(r => this.acao = r)).catch(r => console.log(r))

        }
    },
    created() {
        this.puxarAcao()
    }

}


export default ValorMercado;



