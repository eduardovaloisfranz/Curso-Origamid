function areaQuadrado(lado){
    return lado * lado;
}

console.log(areaQuadrado(2))

function corFavorita(cor){
    switch (cor) {
        case 'Vermelho':
            return 'Voce gosta de vermelho'
            break   
        case 'Azul':
            return 'Você gosta de azul'
            break;
        case 'verde':
            return 'Você gosta de mato'
            break;
        default:
            return 'voce gosta é de nada'
            break;
            
    }
}

console.log(corFavorita('verde'))

/*
addEventListener('click', function(){
    console.log('oi')
})
*/

const totalPaises = 293;

function faltaVisitar(qtdPaisesVisitados){
    console.log(`Total de paises: ${totalPaises} falta ainda Visitar: ${totalPaises - qtdPaisesVisitados}`)
    //sem retorno, existe retorno implicito -> undefined
    // indiretamente existe um return undefined
    //return undefined;
}

console.log(faltaVisitar(50))// executa funcao e retorna undefined