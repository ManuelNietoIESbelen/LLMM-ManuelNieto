const encabezado = document.querySelector('.encabezado');
const p1 = document.querySelector('.p1');
const img = document.querySelector('#img');
const boton1 = document.querySelector('.boton1');
const boton2 = document.querySelector('.boton2');
const boton3 = document.querySelector('.boton3');




boton1.addEventListener('click', function() {
    p1.style.color = getRandomColor();
});



boton2.addEventListener('click', function() {
    img.src = './assets/perro.jpg';
});


boton3.addEventListener('click', function() {
    encabezado.classList.toggle('encabezado');
});


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
