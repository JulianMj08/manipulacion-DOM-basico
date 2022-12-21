const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input')
console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

// para cambiar el titulo desde javaScript utlizamos inner.HTML
// h1.innerHTML = 'azul';

// para modificar atributos desde javaScript utilizamos el nombre de la etiqueta.getAtribute y el nombre del atributo,sea clase,id etc
// otro es setAtribute que sirve para ejemplo h1.setAtribute('class' , 'rojo');

//para agregar a las clases podemos utilizar classlist.add(); o tambien classlist.remove();
 

//para mofificar el input colocamos:
 input.value = '12344466'

//para crear desde cero algo y colocarlo en el html utilizamos la siguiente funcion document.create('img'));
// console.log(document.createElement('span'));


//para agregar una imagen creaemos primero la variable con const
const img = document.createElement('img');
//luego agregamos los atributos
img.setAttribute('src' , 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
//luego genero un consol.log
console.log(img);
//y a continucion la mando a llamar con el append
// pid.append(img);
// utlizamos append o appendChild para agregar la imagen,colocarla en medio de dos cosas no encima,

//para borrarlo podemos colocar lo siguiente
 pid.innerHTML = "";