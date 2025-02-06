

let contador=0;
function contarClicks() {
    contador++;
    alert(`Has pulsado el botón ${contador} veces`);
}

window.addEventListener("load", () => alert("Bienvenidos a la practica de eventos"));

document.querySelector('.click').addEventListener("click", () => alert("Haz realizado un click"));

document.querySelector('.img1').addEventListener("click", () => alert("Haz realizado un click"));

document.querySelector('.img2').addEventListener("mouseleave", (num3));

document.querySelector('.dobleclick').addEventListener("dblclick", () => alert("Has realizado doble click"));

document.querySelector("#button").addEventListener("click", contarClicks)



