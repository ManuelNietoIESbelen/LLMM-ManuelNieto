const nombre="Exarion";
const armaPrincipal="Espada del Destino";
let armaSecundaria="Arco simple";
let nivel = 5;
let puntosDeVida=100;
let armaduraEquipada=true;

let nivelCadena=nivel.toString();
let puntosFloat=parseFloat(puntosDeVida);



console.log("Estado del heroe:");
console.log(`Nombre: ${nombre}`);
console.log(`Arma principal: ${armaPrincipal}`);
console.log(`Arma secundaria: ${armaSecundaria}`);
console.log(`Nivel: ${nivel}`);
console.log(`Puntos de vida: ${puntosDeVida}`);
console.log(`Armadura equipada: ${armaduraEquipada}`);


nivel=nivel+1;
puntosDeVida=puntosDeVida-30;


console.log("");
console.log("Estado del heroe:");
console.log(`Nombre: ${nombre}`);
console.log(`Arma principal: ${armaPrincipal}`);
console.log(`Arma secundaria: ${armaSecundaria}`);
console.log(`Nivel: ${nivel}`);
console.log(`Puntos de vida: ${puntosDeVida}`);
console.log(`Armadura equipada: ${armaduraEquipada}`);


let dañoBase = 50;
let multCritico =  2;
let probCrtico = 0.5;
let esCrtico = Math.random() < probCrtico;
let daño = esCrtico ? dañoBase * multCritico : dañoBase;

console.log(`Nombre Cadena: ${nombreCadena}`);
console.log("Puntos Float: ", puntosFloat);
console.log("El heroe Inflige ")