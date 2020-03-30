export default {
    name: 'ComponenteUm',
    template: '<p @click="emitirEvento">Componente 1<p>',
    methods: {
        emitirEvento() {
            EventBus.$emit;
        }
    }
}