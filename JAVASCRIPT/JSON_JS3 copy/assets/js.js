let nombre = document.querySelector('.name');
let imagen = document.querySelector('.img');
const button = document.querySelector('.btn');
button.addEventListener('click', getPersonaje);

async function getPersonaje() {
    var numeroCapitulo;
    element = document.querySelector('#numeroCapitulo');


    if (element != null) {
        numeroCapitulo = element.value;
    } else {
        numeroCapitulo = null;
    }

    const url = "https://rickandmortyapi.com/api/episode/" + numeroCapitulo;





    try {
        const response = await fetch(url);
        const data = await response.json();
        nombre.innerHTML = data.name;
        imagen.src = '';

        const personajes = data.characters;
        const personajesContenedor = document.querySelector('.personajes');
        personajesContenedor.innerHTML = '';



        for (const personajeUrl of personajes) {
            const personajeResponse = await fetch(personajeUrl);
            const personajeData = await personajeResponse.json();
            const elemento = document.createElement('div');
            elemento.innerHTML = '<p> ${personajeData.name} </p> <img src="${personajeData.image}" alt="${personajeData.name}">';
            personajesContenedor.appendChild(personaje.element);

        }
    } catch (error) {
        console.log(error);
        nombre.innerHTML = 'Episodio no encontrado';
        imagen.src = '';
    }


}