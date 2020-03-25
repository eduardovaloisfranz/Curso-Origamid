let checkValue = (valor) => {
    if(valor === 'Truthy'){
        return true;
    }
    else{
        return false;
    }

}


console.log(checkValue('Truthy'))


const perimetroQuadrado = (lado) => lado * 4;


console.log(perimetroQuadrado(4))

const isEven = (value) => {
    if(value %2=== 0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(2))

const typeOf = (arg) => typeof arg

console.log(typeOf(3))

/*
addEventListener('scroll', _ => {
    alert('Oi teste')
  })

*/