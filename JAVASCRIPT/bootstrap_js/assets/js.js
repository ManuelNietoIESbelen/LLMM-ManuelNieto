let grises = document.querySelectorAll('#gris');
let azules = document.querySelectorAll('#azul');
const igual = document.querySelector('#igual');
const c = document.querySelector('#c');

let display = document.querySelector('#display');


let primerOp = 0;
let segundoOp = 0;
let operacion = "";


igual.addEventListener('click', calcular);
c.addEventListener('click', limpiar);

grises.forEach(boton => {
    boton.addEventListener('click', () => {
        if (operacion !== "") {
            display.value= "";

        } else  {
            
        }
        pintar();
    });
});




function pintar() {
    display.innerHTML = primerOp + operacion + segundoOp;
}   


function calcular(primerOp, segundoOp, operacion) {
    switch (operacion) {
        case '+':
            return primerOp + segundoOp;
        case '-':
            return primerOp - segundoOp;
        case '*':
            return primerOp * segundoOp;
        case '/':
            return primerOp / segundoOp;

    }
}

function limpiar() {

}