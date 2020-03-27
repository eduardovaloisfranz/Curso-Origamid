const vm = new Vue({
    el: '#app',
    data: {
        produtos: [],
        produto: false,
        carrinho: [],
        mensagemAlerta: 'Item Adicionado',
        alertaAtivo: false
    },
    methods: {
        fetchProdutos() {
            fetch('./api/produtos.json')
                .then(res => res.json().then(result => this.produtos = result)).catch(res => console.log(res))
        },
        fetchProduto(id) {
            console.log(id)
            fetch(`./api/produtos/${id}/dados.json`)
                .then(res => res.json().then(res => {
                    this.produto = res
                })).catch(res => console.log(res))
        },
        fecharModal({ target, currentTarget }) {
            if (target === currentTarget) {
                this.produto = false;
            }
        },
        abrirModal(id) {
            this.fetchProduto(id);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },
        adicionarCarrinho() {
            this.produto.estoque--;
            const { id, nome, preco } = this.produto
            this.carrinho.push({ id, nome, preco })
            this.alerta(`${nome} foi adicionado ao carrinho.`)
        },
        removerItem(index) {
            this.carrinho.splice(index, 1)
        },
        checarLocalStorage() {
            if (window.localStorage.carrinho) {
                this.carrinho = JSON.parse(window.localStorage.carrinho)
            }
        },
        alerta(mensagem) {
            this.mensagemAlerta = mensagem;
            this.alertaAtivo = true;
            setTimeout(_ => {
                this.alerta = false;
            }, 1500)
        }


    },
    created() {
        this.fetchProdutos();
        this.checarLocalStorage()
    },
    filters: {
        numeroPreco(valor) {
            return valor.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })
        }
    },
    computed: {
        carrinhoTotal() {
            let total = 0;
            if (this.carrinho.length) {
                this.carrinho.forEach(item => {
                    total += parseInt(item.preco)
                })
            }
            return total
        }
    },
    watch: {
        carrinho() {
            window.localStorage.carrinho = JSON.stringify(this.carrinho);
        }
    }

})