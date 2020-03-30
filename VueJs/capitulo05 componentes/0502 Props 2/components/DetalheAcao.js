export default {
    name: 'DetalheAcao',
    props: {
        acao: {
            type: Object,
            required: true
        }
    },
    template: `
        <div>
            <ul>
                <li v-for="(valor, chave) in acao">                    
                {{chave}} : {{valor}}
                </li>
            </ul>
        </div>
    `
}