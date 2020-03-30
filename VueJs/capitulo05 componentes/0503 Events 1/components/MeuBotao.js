export default {
    name: 'MeuBotao',
    props: {
        contador: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            contadorComponente: this.contador
        }
    },
    template: `
        <div>
            <button @click="incrementar">Clique {{contadorComponente}}</button>            
        </div>
    `,
    methods: {
        incrementar() {
            this.contadorComponente++;
            this.$emit('update:contador', this.contadorComponente)

            //sync
            //caso o evento acima update:contador estiver diferente do valor passado pelo bind
            //:contador.sync="contador"
            //nao funciona
            //ex: update:contadorES
        }
    }
}