export default {
    name: 'ItemProduto',
    template: `<li>
    <h2>{{nomeFruta}}</h2>
    Esse é o nome da Fruta: {{nomeFruta}}
    {{total + 2}}    
    {{cor}}
    {{tamanho}}
    </li>`,
    props: ['nomeFruta', 'total'],
    props: {
        nomeFruta: String,
        total: [Number, String],
        cor: {
            type: String,
            required: true
        },
        tamanho: {
            type: String,
            default: 'Grande'
        }

    }
}