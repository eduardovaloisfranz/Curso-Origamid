let eu = {
    nome: 'Eduardo',
    sobrenome: 'valois Franz',
    mostrarNomeCompleto: function() {
        console.log(`Meu nome é:  ${this.nome} ${this.sobrenome}`)
    }
}

console.log(eu.mostrarNomeCompleto())


let carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}

carro.preco = 3000;


const cachorro = {
    nome: 'Labrador',
    cor: 'Preto',
    idade: 10,
    verHumano(viu) {
        if(viu){
            console.log('auauau')
        }else{
            console.log('shhhh adm esta dormindo')
        }
    }
}

console.log(cachorro.verHumano(true))