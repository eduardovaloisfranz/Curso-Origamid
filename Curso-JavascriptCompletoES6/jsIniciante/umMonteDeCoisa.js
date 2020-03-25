let videoGames = ['Switch', 'ps4', 'xbox', '3ds'];

for(let i = 0; i < videoGames.length;i++){
    console.log(videoGames[i])
    if(videoGames[i] === 'ps4'){
        break;
    }
}
//
console.log('\n\n')

let frutas = ['banana', 'pera', 'maça', 'abacaxi', 'uva'];
//passa como parametro o elemento da funcao dinamicamente

frutas.forEach((item, index, array) => {
    frutas.pop();
    console.log(item, index, array)
})


let anoVencedor = [1959, 1962, 1970, 1994, 2002]

anoVencedor.forEach((item) => console.log(`O Brasil ganhou a copa em ${item}`))

let frutas2 = ['banana', 'maça', 'pera', 'uva', 'abacaxi'];

for(let i = 0; i < frutas2.length; i++){
    if(frutas[i] === 'pera'){
        break;
    }
}


let ultimaFruta = frutas2[frutas2.length - 1]
console.log(ultimaFruta)


let idade = 20
let possuiDiabete = false;

let podeBeber = (idade >= 18 && !possuiDiabete) ? true : false
console.log(podeBeber)


let possuiFaculdade = true;

if(possuiFaculdade)
    console.log('tem faculdade')
else
    console.log('nao tem faculdade')


let scroll = 1000;
scroll+= 500;


console.log(scroll)

let possuiCarro = true;
let possuiCasa = true;


let darCredito = (possuiCarro && possuiCasa) ? true : false;

console.log(darCredito)
