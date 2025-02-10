

let contador = 0;//Declaracion de variable tipo entero

//Fucion que cuenta los clicks y los muestra por pantalla
function contarClicks() {
    contador++;
    alert(`Has pulsado el botón ${contador} veces`);
}

//Funcion para verificar tanto si es valido como es si es par o impar
function esParImpar() {
    let num = prompt("Introduce un número:");
    num = parseInt(num, 10);
    if (!isNaN(num)) {
        if (num % 2 === 0) {
            alert("El numero es par");
        } else {
            alert("El numero es impar");
        }
    }
}

//Funcion para calcular el producto de dos numeros
function producto(){
    let num1 = prompt("Introduce un numero")
    let num2 = prompt("Introduce otro numero")
    alert("El resultado del producto es :"+num1*num2)
}




//Al cargar la pagina sale una alerta 
window.addEventListener("load", () => alert("Bienvenidos a la practica de eventos"));

//Cuando realizas un click salta un alerta
document.querySelector('.click').addEventListener("click", () => alert("Haz realizado un click"));

//Cuando realizas un click salta un alerta
document.querySelector('.img1').addEventListener("click", () => alert("Haz realizado un click"));

//Cuando el raton abandona la capa pide un numero y dice si es par o impar
document.querySelector('.img2').addEventListener("mouseleave", esParImpar);

//Cuando realizas  dobleclick salta un alerta
document.querySelector('.dobleclick').addEventListener("dblclick", () => alert("Has realizado doble click"));

//Cuenta el numero de veces que haces click en el raton
document.querySelector("#button").addEventListener("click", contarClicks)

//Cuando el raton entra en la capar pide dos numeros y calcula el producto
document.querySelector(".cursor").addEventListener("mouseenter", producto)



