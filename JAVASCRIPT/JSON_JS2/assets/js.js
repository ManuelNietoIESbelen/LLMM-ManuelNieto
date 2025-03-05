let titulo = document.querySelector('.titulo');
let anyo = document.querySelector('.anyo');
let duracion = document.querySelector('.duracion');
const button = document.querySelector('.btn');
const url = 'https://www.omdbapi.com/?t=titulo&apikey=6bd47da3';



button.addEventListener('click', getMovie);

async function getMovie() {
    var movieTitle; 
    element= document.querySelector('#movieTitle').value;
    
    if(element != null) {
        movieTitle = element.value;
    }else{
        movieTitle = null;
    }

    try {
        
    const response = await fetch(url);
    const data = await response.json();
    titulo.innerHTML = data.Title;
    anyo.innerHTML = data.Year;
    duracion.innerHTML = data.Runtime;
    } catch (error) {
        console.log(error);
        titulo.innerHTML = 'Movie not found';
        anyo.innerHTML = '';
        duracion.innerHTML = '';
    }
}