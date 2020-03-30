export default {
    name: 'BotaoContador',
    props: {
        valor: {
            type: Number,
            required: true
        }
    },
    template: `
    <div>
        <button>Esse é o total: {{valor}}</button>
    </div>
    `
}