import ItemProduto from './ItemProduto.js'

export default {
    name: 'ListaProdutos',
    props: ['frutas', 'titulo'],
    template: `
    <div>
        <h1>{{titulo}}</h1>
        <ul>
            <item-produto 
             v-for="(fruta, index) in frutas" 
             :key="fruta + index" 
             :nomeFruta="fruta"
             :total = "20"
             cor = "azul"
             tamanho = "pequeno"
             ></item-produto>           
        </ul>        

    </div>    
    `,
    components: {
        ItemProduto
    }
}