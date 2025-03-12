let nombre = document.querySelector('.name');
let especie = document.querySelector('.especie');
let genero = document.querySelector('.genero');
let imagen = document.querySelector('.img');
let numEpisodios = document.querySelector('.numEpisodios');
const button = document.querySelector('.btn');
button.addEventListener('click', getPersonaje);

async function getPersonaje() {
    var nombrePersonaje;
    element = document.querySelector('#nombrePersonaje');


    if (element != null) {
        nombrePersonaje = element.value;
    } else {
        nombrePersonaje = null;
    }

    const url = "https://rickandmortyapi.com/api/character/" + nombrePersonaje;





    const response = await fetch(url);
    const data = await response.json();
    nombre.innerHTML = data.name;
    especie.innerHTML = data.species;
    genero.innerHTML = data.gender;
    imagen.src = data.image;
    numEpisodios.innerHTML = data.episode.length;
    





}