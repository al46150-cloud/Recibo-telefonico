var num1 = 0;
var num2 =  0;

num1 = prompt("Escribe el valor para el numero 1")*1;
num2 = prompt("Escribe el valor para el numero 2")*1;


var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;

alert("la suma de los dos numeros es: " + suma + "\n" +
"la resta de los dos numeros es:"+ resta + "\n" + "la multiplicacion de los dos numeros es:" + multiplicacion + "\n" +
"la división de los dos numeros es:" + división + "\n" );


if(suma >= 100)
{
    alert("¡Te pasas!")
}
else{
    alert("Eres un buen alumno");

}
alert("Fin del archivo de calculadora");


var resultadoresta = resta <0 ;
if(resultadoresta) {
    alert("El numero de la resta es:");
}
else{
    alert("El numero de la resta:" + resta + "es positivo")
}


var resultadosuma = suma ;
if(resultadosuma) {
    alert("Tu deuda es de:")
}
