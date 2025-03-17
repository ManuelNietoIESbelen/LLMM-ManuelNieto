let grises = document.querySelectorAll('#gris');
let azules = document.querySelectorAll('#azul');
const igual = document.querySelector('#igual');
const c = document.querySelector('#c');
let historial = document.querySelector('.historial');

let display = document.querySelector('#display');


let primerOp = "";
let segundoOp = "";
let operacion = "";




c.addEventListener('click', limpiar);

grises.forEach(boton => {
    boton.addEventListener('click', () => {
        if (operacion === "") {
            primerOp += boton.value;
        }
        if (primerOp !== 0 && operacion !== "") {
            segundoOp += boton.value;
        }
        pintar();
    });
});


azules.forEach(boton => {
    boton.addEventListener('click', () => {
        operacion = boton.value;
        pintar();
    });
});

igual.addEventListener('click', ()=> { 
    display.value = calcular(primerOp, segundoOp, operacion);
    primerOp = display.value;
    segundoOp = "";
    operacion = "";
    
    historial.textContent += display.value + ", ";
    

});



function pintar() {
    display.value = primerOp + operacion + segundoOp;
}


function calcular() {
    primerOpe = parseFloat(primerOp);
    segundoOpe = parseFloat(segundoOp);


    if (isNaN(primerOpe) || isNaN(segundoOpe)) {
        return "Error";
    }

    switch (operacion) {
        case '+':
            return primerOpe + segundoOpe;
        case '-':
            return primerOpe - segundoOpe;
        case '*':
            return primerOpe * segundoOpe;
        case '/':
            return primerOpe / segundoOpe;

    }

    
}

function limpiar() {
    display.value = "";
    primerOp = "";
    segundoOp = "";
    operacion = "";

}