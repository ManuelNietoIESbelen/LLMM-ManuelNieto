const p1 = document.querySelector('.p1');
const div1 = document.querySelector('.div1');

const div3 = document.querySelector('.div3');
const nombreImagen=div3.src.split("/").pop();


const div5 = document.querySelector('.div5');


const botonCambio = document.querySelector('.botonFondo');




div1.addEventListener("mouseleave", function () { p1.style.color = 'red'; });
div1.addEventListener("mouseenter", function () { p1.style.color = 'black'; });


div3.addEventListener("mouseover", function () {
    if (div3.src.split("/").pop() === "img3.jpg") {
        div3.src = "img2.jpg";
    }

} );

botonCambio.addEventListener("click", function () {
    document.querySelectorAll(".divPar").forEach(divPar => {
        divPar.classList.toggle('divParCambio');
    });
    
});