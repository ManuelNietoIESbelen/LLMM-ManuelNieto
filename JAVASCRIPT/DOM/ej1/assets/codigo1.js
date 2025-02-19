//Constantes de la capa de texto
const p1 = document.querySelector('.p1');
const div1 = document.querySelector('.div1');



div1.addEventListener("mouseleave", function () { p1.style.color = 'red'; });
div1.addEventListener("mouseenter", function () { p1.style.color = 'black'; });


//Constantes de la capa de imagen
const imagen = document.querySelector('.imagen');



imagen.addEventListener("mouseover", function () {
    const imagenActual = imagen.src.split("/").pop();


    if (imagenActual === "img1.png") {
       imagen.src = "img2.jpg";
    }else if (imagenActual === "img2.jpg") {
        imagen.src = "img3.jpg";
    }else{
        imagen.src = "img1.png";
    }

});





//Constantes de la capa de cambio de fondo
const botonCambio = document.querySelector('.botonFondo');



botonCambio.addEventListener("click", function () {
    document.querySelectorAll(".divPar").forEach(divPar => {
        divPar.classList.toggle('divParCambio');
    });

});




//Constantes de la capa de edad
const msg = document.querySelector('#msg');
const formEdad = document.querySelector('.botonEdad');
const inputEdad = document.querySelector('#edad');


function cambiarColorBorde(cambioDeBorde) {
    inputEdad.classList.remove('bordeRojo', 'bordeVerde');
    inputEdad.classList.add(cambioDeBorde);
}

formEdad.addEventListener("click", function () {
    const edad = document.querySelector('#edad').value;
    if (isNaN(edad)) {
        msg.textContent = "Introduce un numero valido";
        cambiarColorBorde('bordeRojo');

    } else if (edad >= 1 && edad <= 100) {

        msg.textContent = "Edad correcta";
        cambiarColorBorde('bordeVerde');

    } else {
        msg.textContent = "Introduce un numero entre 1  y 100";
        cambiarColorBorde('bordeRojo');
    }
});



//Constantes de la capa de cambio de color
const botonCapa1 = document.querySelector('.botonCapa1');
const botonCapa2 = document.querySelector('.botonCapa2');
const botonCapa3 = document.querySelector('.botonCapa3');
const capaCambio = document.querySelector('.capaCambioColor');



function cambiarColorCapa(cambioDeColor) {
    capaCambio.classList.remove('capaNegraLetrasBlancas', 'capaBlancaLetrasNegras', 'capaGrisLetrasRojas');
    capaCambio.classList.add(cambioDeColor);
}

botonCapa1.addEventListener("click", function () {
    cambiarColorCapa('capaNegraLetrasBlancas');
});

botonCapa2.addEventListener("click", function () {
    cambiarColorCapa('capaBlancaLetrasNegras');
});

botonCapa3.addEventListener("click", function () {
    cambiarColorCapa('capaGrisLetrasRojas');
});





