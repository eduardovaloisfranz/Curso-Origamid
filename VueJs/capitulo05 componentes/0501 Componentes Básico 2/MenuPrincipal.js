import BotaoContador from './BotaoContador.js'
//Nao precisa importar se é um componente GLOBAL, esta no app.vue
export default {
    name: "MenuPrincipal",
    data() {
        return {

        }
    },
    template: `
    <ul>
        <li>Home</li>
        <li>Contato</li>
        <botao-contador></botao-contador>
    </ul>
    `,
    components: {
        BotaoContador
        //como é global nao precisa-ra declarar ele aqui como local
    }
}