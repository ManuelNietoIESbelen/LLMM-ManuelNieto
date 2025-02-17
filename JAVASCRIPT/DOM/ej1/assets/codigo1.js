const p1 = document.querySelector('.p1');
const div1 = document.querySelector('.div1');

const div3 = document.querySelector('.div3');
const nombreImagen = div3.src.split("/").pop();





const botonCambio = document.querySelector('.botonFondo');


const msg = document.querySelector('#msg');
const formEdad = document.querySelector('.botonEdad');

const inputEdad = document.querySelector('#edad');



div1.addEventListener("mouseleave", function () { p1.style.color = 'red'; });
div1.addEventListener("mouseenter", function () { p1.style.color = 'black'; });


div3.addEventListener("mouseover", function () {
    if (div3.src.split("/").pop() === "img3.jpg") {
        div3.src = "img2.jpg";
    }

});

formEdad.addEventListener("click", function () {
    const edad = document.querySelector('#edad').value;
    if (isNaN(edad)) {
        msg.textContent = "Introduce un numero valido";
        inputEdad.classList.toggle('bordeRojo');

    } else {
        if (edad >= 1 && edad <= 100) {
            msg.textContent = "Edad correcta";
            inputEdad.classList.toggle('bordeVerde');

        }else{
            msg.textContent = "Introduce un numero entre 1  y 100";
            inputEdad.classList.toggle('bordeRojo');
        }
    }
});


botonCambio.addEventListener("click", function () {
    document.querySelectorAll(".divPar").forEach(divPar => {
        divPar.classList.toggle('divParCambio');
    });

});