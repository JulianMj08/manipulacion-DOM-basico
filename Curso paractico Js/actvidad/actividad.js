const h1 = document.querySelector('h1');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado')

btn.addEventListener('click', escucharOnclick);

function escucharOnclick() {
const sumaInputs = input1.value + input2.value;
pResultado.innerHTML = 'resultado:' + sumaInputs;
}