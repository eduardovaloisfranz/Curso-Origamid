export default {
    name: 'CustomButton',
    data() {
        return {
            totalClientes: 200
        }
    },

    template: `
    <div>
        <button @click="enviarEvento">Enviar Evento</button>
    </div>
    `,
    methods: {
        enviarEvento() {
            this.$emit('meu-evento', this.totalClientes)
        }
    },
    created() {
        setTimeout(_ => {
            this.$emit("origamid", this.totalClientes)
        }, 2000)
    }

}