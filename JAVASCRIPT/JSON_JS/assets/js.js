let nombrePokemon = document.querySelector('.name');
let imagenPokemon = document.querySelector('.img');
let alturaPokemon = document.querySelector('.height');
let tipoPokemon = document.querySelector('.type');

const button = document.querySelector('.btn');
button.addEventListener('click', getPokemon);

async function getPokemon() {
    tipoPokemon.innerHTML = '';
    var namePokemon;
    element = document.querySelector('#pokemonName');
    

    if(element != null) {
        namePokemon = element.value;
    }else{
        namePokemon= null;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`;

 

    try {

        const response = await fetch(url);
        const data = await response.json();
        nombrePokemon.innerHTML = data.name;
        imagenPokemon.src = data.sprites.front_default;
        alturaPokemon.innerHTML = data.height;
        data.types.forEach(elemento => {
            tipoPokemon.innerHTML = tipoPokemon.innerHTML + elemento.type.name + " ";
        });
        
    } catch (error) {
        console.log(error);
        nombrePokemon.innerHTML = 'Pokemon not found';
        imagenPokemon.src = '';
        alturaPokemon.innerHTML = '';
        tipoPokemon.innerHTML = '';
    }


    
}