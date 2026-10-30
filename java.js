
/*
alert('Esto se llama desde un archivo');

console.log('Nuevamente andamos aqui');

document.write('<h2>Esto se va a descontrolar!!</h2');
*/

/* la VARIABLE nombre esta guardando valores: string o cadena */
var nombre="Britany";

/*la Variable edad debe de guardar un number*/
var edad="18";

/* la VARIABLE mayoriadeedad guarda el valor boolean */
 var mayoriadeedad;

 var estatura=1.62; //Decimal/ Float


console.log(nombre);
console.log(edad);
console.log(estatura);
console.log(mayoriadeedad);


alert(nombre);
nombre= prompt("Escribe el nombre nuevo:")
alert("Mi nombre es:" + nombre + ". Y mi edad es de: " + edad + "años");

if(nombre =="Pedro"){
      alert("Saludos" + nombre);
}

edad = prompt("Escribe una edad");

if (edad >=18){
    mayoriadeedad = true;
    alert("Tu eres mayor de edad");

}
estatura = prompt("Escribe tu estatura");
if(estatura  <= 1.50){

    alert("Tu eres un niño mides:" + estatura)

}