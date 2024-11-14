//tipos de datos
let nombre ='Juan Garzon';
let edad = 11;
let mayorEdad = true;
let estatura;
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof mayorEdad);
console.log(typeof estatura);

//TIPOS DE DATOS COMPLEJOS
let frutas = ['pera','manzana','melon'];

let auto ={
    modelo: 2024,
    marca: 'chevrolet',
    color: 'blanco',
    cilindraje: 2100,
    tipo: 'camioneta'
}
   
//CONCATENDANDO VARIABLES
 console.log ('bienvenido usuario '+ nombre + ' su edad es ' + edad + ' y su fruta favorita  es ' + frutas [1])

 //ESTRUCTURAS DE CONTROL CONDICIONAL
 if (edad > 25) {
    console.log ('Es un adulto')
 }

 else if(edad >18){
    console.log('Es un joven')
 }
 else if(edad > 13){
    console.log ('Es un pelado')
 }
 else{
    console.log ('es un niño')
 }

 let tipoSuscripcion ='platinium'

switch (tipoSuscripcion) {
    case 'basic':
        console.log('Muy suave o pobre')
        break;
    case'Gold':
        console.log('buen plan, pero sigue siendo pobre')
        break;
    case 'platinium':
          console.log('El mejor plan')
          break
    default:
         console.log('este plan no existe')
        break;
}

//ESTRUCTURAS DE CONTROL DE BUCLES
let contador = 0;

while (contador < 11) {
    console.log('Este es el numero ' + contador);
    contador = contador + 1;
}

for (let i=0; i<101 ; i=i+5){
    console.log ('contador con for numero '+ i)
}


