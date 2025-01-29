const nombre="Exarion";
const armaPrincipal="Espada del Destino";
let armaSecundaria="Arco simple";
let nivel = 5;
let puntosDeVida=100;
let armaduraEquipada=true;
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
