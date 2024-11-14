function saludar(){
    console.log("HOLA MUNDO");
    alert("Hellow world");
}
//algoritmo que realiza una suma entre dos valores ingresados por el usuario
function suma(){
    // 1. Declarar las variables necesarias para la funcion o algortitmo
    let A = 0;
    let B = 0;
    let SUMA = 0;
    // 2. solicitar al usuario que ingrese los valores
    // y estos se asignan a las variables 
    // prompt es para ingresar texto
    A = parseInt(prompt("ingrese el primer valor"));
    B = parseInt(prompt("ingrese el segundo valor a sumar"));
    // 3. realizar el procedimiento
    SUMA = A+B;
    // 4. mostrar el resultado
    alert("el resultado de la suma es " + SUMA); 
}

//algoritmo que realiza una suma resta multiplicacion y division entre dos valores ingresados por el usuario 
function opBasicas(){
    let n1 = 0;
    let n2 = 0;
    let op1 = 0;
    let op2 = 0;
    let op3 = 0;
    let op4 = 0;

    n1 = parseInt(prompt("ingrese el primer digito"));
    n2 = parseInt(prompt("ingrese el segundo digito"));

    op1 = n1+n2;
    op2 = n1-n2;
    op3 = n1*n2;
    op4 = n1/n2;

    alert("resultado en suma = " + op1)
    alert("resultado en resta = " + op2)
    alert("resultado en multiplicacion = " + op3)
    alert("resultado en division = " + op4)
}
//REALIZAR UN ALGORITMO QUE DETERMINE UN CUARDADO DE UN NUMERO DETERMINADO POR EL USUARIO
function cuadradoNum(){
    let c1 = 0;
    let result = 0;

    c1 = parseInt(prompt("ingrese el numero"));

    result = c1*c1;

    alert("el cuadrado del numero que digito es:" + result )
}
// TERCERO. REALIZAR UN ALGORITMO QUE DETERMINE EL AREA DE UN TRIANGULO APARTIR DE LA BASE Y LA ALTURA INGRESADOS POR EL USUARIO B*H/2
function areat() {
    let base = 0;
    let alt = 0;
    base = parseInt(prompt("ingrese la base del triangulo en cm"));
    alt = parseInt(prompt("ingrese la altura del triangulo en cm"));

    result = base*alt/2
    alert("el area del triangulo apartir de la base es igual a" + result + "cm2")
}

//REALIZAR UN SISTEMA QUE CONVIERTA EN KM M Y CM UN VALOR DADO EN PULGADAS CONVERSION DE UNIDADES 
function conversionu(){
    let pulgada = 0;
    parseFloat(prompt("ingrese las pulgadas que quiere convertir a km, m y cm"))
    cm = pulgada * 2.54
    alert("las pulgadas en cm son:" + cm )
}
//ALGORITMO QUE DETERMINE SI UN NUMERO INGRESADO POR EL USUARIO ES PAR O IMPAR
function parImpar(numero){
    num = parseInt(prompt("Ingrese el digito para saber si es para o impar"));
    if (numero % 2 == 0){
        return "El numero es par";
    }else{
        return"El numero es impar";
    }
} 
//ALGORITMO QUE DETRMINE EL MAYOR DE DOS NUMEROS INGRESADOS POR EL USUARIO
function mayor(){
    let M = 0
    let A = 0
    M = parseInt(prompt("Ingrese el primer numero"))
    A = parseInt(prompt("Ingrese el segundo numero"))

    if (M > A){
        alert("El numero mayor es: " + M)
    }
    else{
        alert("El numero mayor es: " + A)
    }
}

//ALGORITMO QUE DETRMINE EL MENOR DE TRES NUMEROS INGRESADOS POR EL USUARIO
function menor(){
    let num1 = 0
    let num2 = 0
    let num3 = 0

    num1 = parseInt(prompt("Ingrese el primer numero"))
    num2 = parseInt(prompt("Ingrese el segundo numero"))
    num3 = parseInt(prompt("Ingrese el tercer numero"))

    if (  (num1 < num2) && (num1 < num3) ){
        alert(num1 + " El numero menor es: " + num2 + " y " + num3 )
    }
    else if( (num2 < num1) && (num2 < num3)) { 
        alert(num2 + " El numero menor es: " + num1 + " y " + num3 )
    }
    else if( (num3 < num1) && (num3 < num2)) {
        alert(num3 + " El numero menor es: " + num1 + " y " + num2)
    }
}


//EL COLEGIO ABC REQUIERE UN SISTEMA QUE CAPTURE EL NOMBRE DEL ESTUDIANTE, MATERIA Y 7 CALIFICACIONES ENTRE 1/10 CON ESTA INFORMACION DETERMINAR SI EL ESTUDIANTE APROBO O REPROBO TENIENDO EN CUENTA QUE SE APRUEBA CON 6.1
function notas(){
    let nombre = 0
    let materia = 0
    let nota1 = 0
    let nota2 = 0
    let nota3 = 0
    let nota4 = 0
    let nota5 = 0
    let nota6 = 0
    let nota7 = 0

    nombre = prompt("Ingrese su nombre")
    materia = prompt("Ingrese la matria")
    nota1 = parseInt(prompt("Ingrese la nota 1"))
    nota2 = parseInt(prompt("Ingrese la nota 2"))
    nota3 = parseInt(prompt("Ingrese la nota 3"))
    nota4 = parseInt(prompt("Ingrese la nota 4"))
    nota5 = parseInt(prompt("Ingrese la nota 5"))
    nota6 = parseInt(prompt("Ingrese la nota 6"))
    nota7 = parseInt(prompt("Ingrese la nota 7"))

    total = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) /7

    if (total > 6.1){
        alert("Estudiante " + nombre + ", usted aprobo la materia " + materia + " con " + total)
    }
    else{
        alert("Estudiante " + nombre + ", usted aprobo la materia " + materia + " con " + total) 
    }
}


//UN INDIVIDUO DESEA INVERTIR SU CAPITAL EN UN BANCO Y REQUIERE SABER CUANTO DINERO GANARA DESPUESDE N NUMERO DE AÑOS TENIENDO EN CUENTA QUE EL BANCO PAGA UN INTERES MENSUAL DEL 0.7%
function inversión(){
    let capital = 0
    let tiempo = 0
    let interesGanancias = 0
    let totalGanancias = 0

    capital = parseInt(prompt("Ingrese su capital a invertir "))
    tiempo = parseInt(prompt("Ingrese el tiempo en año "))

    interesGanancias = (capital * 0.084) * tiempo
    totalGanancias = capital + interesGanancias
    alert("Su ganancias es de " + interesGanancias)

    alert("Su ganancia total es de " + totalGanancias)
}