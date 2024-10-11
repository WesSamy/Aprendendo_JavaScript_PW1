//não é possivel alterar o elemento da const.
const titulo = document.querySelector("#primeiroTitulo");
//Queryselect é um elemento mais generico para fazer a busca

console.log(titulo)

alert ("teste");

//consigo fazer alterações ao elemento do let.
let element = document.querySelector('h1');
element.textContent = 'Alterando o titulo da Página';
element.style.color = 'darkblue';

let body = document.body;

body.style.backgroundColor = 'aquamarine'

item1.classList.add('addAzul');
item2.classList.add('addVermelho');