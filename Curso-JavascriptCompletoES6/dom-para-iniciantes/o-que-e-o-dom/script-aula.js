/* 
    window - principal
    window -> document
    window -> location
    window -> .... variado
    
*/

const h1Selecionado = document.querySelector('h1');

const h1Classes = h1Selecionado.classList;


h1Selecionado.addEventListener('click', _=> {
    console.log(h1Selecionado.innerText)
})