const RelacaoDolar = {
    name: 'RelacaoDolar',
    template: `
    <div>
       U$1,00 em real: R$ {{relacao.rates.BRL}}
    </div>
    
    `,
    data() {
        return {
            relacao: {
                rates: {
                    BRL: 0
                }
            }
        }
    },
    methods: {
        puxarRelacao() {
            const URL_TO_FETCH = 'http://api.exchangeratesapi.io/latest?base=USD'
            fetch(URL_TO_FETCH)
                .then(res => res.json().then(r => {
                    this.relacao = r
                    console.log(this.relacao)
                })).catch(res => console.log(res))
        }
    },
    created() {
        this.puxarRelacao();
    }
}

export default RelacaoDolar