const nombre = "Exarion";
const armaPrincipal = "Espada del Destino";
let armaSecundaria = "Arco simple";
let nivel = 5;
let puntosDeVida = 100;
let armaduraEquipada = true;

let nivelCadena = nivel.toString();
let puntosFloat = parseFloat(puntosDeVida);


let dificultad = parseInt(Math.random() * 3 + 1);
let experienciaActual = 90;
let experienciaGanada = 30;
let experienciaNecesaria = 100;



let dañoBase = 50;
let multCritico = 2;
let probCrtico = 0.5;
let esCrtico = Math.random() < probCrtico;
let daño = esCrtico ? dañoBase * multCritico : dañoBase;


console.log("Estado del heroe:");
console.log(`Nombre: ${nombre}`);
console.log(`Arma principal: ${armaPrincipal}`);
console.log(`Arma secundaria: ${armaSecundaria}`);
console.log(`Nivel: ${nivel}`);
console.log(`Puntos de vida: ${puntosDeVida}`);
console.log(`Armadura equipada: ${armaduraEquipada}`);



console.log("");
console.log("------COMBATE------");
if (dificultad === 1) {
    console.log("La dificultad: Novato");
} else if (dificultad == 2) {
    console.log("La dificultad: Media");
} else {
    console.log("La dificultad: Profesional");
}
console.log(`El heroe Inflige ${daño} puntos de daño porque esCritico tiene valor de ${esCrtico}`);

puntosDeVida = puntosDeVida - 30;
experienciaActual += experienciaGanada;
if (experienciaActual > experienciaNecesaria) {
    experienciaActual = experienciaActual - experienciaNecesaria;
    nivel++;
}


console.log("");
console.log("Estado del heroe despues del combate:");
console.log(`Nombre: ${nombre}`);
console.log(`Arma principal: ${armaPrincipal}`);
console.log(`Arma secundaria: ${armaSecundaria}`);
console.log(`Nivel: ${nivel}`);
console.log(`Puntos de vida: ${puntosFloat}`);
console.log(`Armadura equipada: ${armaduraEquipada}`);

console.log(`Experiencia actual : ${experienciaActual}`);




console.log("");
console.log("------COMBATE------");
if (dificultad == 1) {
    console.log("Dificultad: Novato");
} else if (dificultad == 2) {
    console.log("Dificultad: Media");
} else {
    console.log("Dificultad: Profesional");
}
console.log(`El heroe Inflige ${daño} puntos de daño porque esCritico tiene valor de ${esCrtico}`);

puntosDeVida = puntosDeVida - 30;
experienciaActual += experienciaGanada;
if (experienciaActual > experienciaNecesaria) {
    experienciaActual = experienciaActual - experienciaNecesaria;
    nivel++;
}




console.log("");
console.log("Estado del heroe despues del combate:");
console.log(`Nombre: ${nombre}`);
console.log(`Arma principal: ${armaPrincipal}`);
console.log(`Arma secundaria: ${armaSecundaria}`);
console.log(`Nivel: ${nivel}`);
console.log(`Puntos de vida: ${puntosFloat}`);
console.log(`Armadura equipada: ${armaduraEquipada}`);

console.log(`Experiencia actual : ${experienciaActual}`);

console.log("------DUNGEON------")
let monedas = [3, 5, 7, 1];
let atuendos = ["0:Duende", "1:Arquero", "2:Caballero"];
let monedasTotales;

for (let moneda of monedas) {
    console.log(`Moneda encontrada: ${moneda}`);
    monedasTotales += moneda;
}
let monedasTotalesInt = parseInt(monedasTotales);
console.log(`Monedas totales: ${monedasTotalesInt}`);